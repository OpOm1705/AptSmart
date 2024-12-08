import React, { useState } from 'react';
import { Button } from '../../../../ui/Button';
import { Input } from '../../../../ui/Input';
import { Select } from '../../../../ui/Select';
import { Plus, X } from 'lucide-react';
import { RubricRequest } from '../types';

interface RubricFormProps {
  onSubmit: (request: RubricRequest) => void;
  onCancel: () => void;
}

export const RubricForm: React.FC<RubricFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<RubricRequest>({
    subject: '',
    topic: '',
    assignmentType: '',
    gradingScale: '100',
    learningObjectives: [''],
    customCriteria: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addLearningObjective = () => {
    setFormData(prev => ({
      ...prev,
      learningObjectives: [...prev.learningObjectives, '']
    }));
  };

  const removeLearningObjective = (index: number) => {
    setFormData(prev => ({
      ...prev,
      learningObjectives: prev.learningObjectives.filter((_, i) => i !== index)
    }));
  };

  const updateLearningObjective = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      learningObjectives: prev.learningObjectives.map((obj, i) => 
        i === index ? value : obj
      )
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />

        <Input
          label="Topic"
          required
          value={formData.topic}
          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Assignment Type"
          required
          value={formData.assignmentType}
          onChange={(value) => setFormData({ ...formData, assignmentType: value })}
          options={['Essay', 'Project', 'Presentation', 'Lab Report', 'Other']}
        />

        <Input
          label="Grading Scale"
          type="number"
          required
          value={formData.gradingScale}
          onChange={(e) => setFormData({ ...formData, gradingScale: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Learning Objectives
        </label>
        <div className="space-y-2">
          {formData.learningObjectives.map((objective, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                value={objective}
                onChange={(e) => updateLearningObjective(index, e.target.value)}
                placeholder={`Objective ${index + 1}`}
              />
              {formData.learningObjectives.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => removeLearningObjective(index)}
                  icon={X}
                  className="!p-2"
                />
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={addLearningObjective}
            icon={Plus}
            className="w-full"
          >
            Add Learning Objective
          </Button>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Generate Rubric
        </Button>
      </div>
    </form>
  );
};