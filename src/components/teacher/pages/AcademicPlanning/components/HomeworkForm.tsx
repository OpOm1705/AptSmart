import React, { useState } from 'react';
import { Button } from '../../../../ui/Button';
import { Input } from '../../../../ui/Input';
import { Select } from '../../../../ui/Select';
import { HomeworkRequest } from '../types';

interface HomeworkFormProps {
  onSubmit: (request: HomeworkRequest) => void;
  onCancel: () => void;
}

export const HomeworkForm: React.FC<HomeworkFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<HomeworkRequest>({
    subject: '',
    grade: '',
    topic: '',
    difficulty: 'Medium',
    questionTypes: [],
    numberOfQuestions: 10,
    includeStepByStep: true
  });

  const questionTypes = [
    'Multiple Choice',
    'Short Answer',
    'Long Answer',
    'Problem Solving',
    'True/False'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const toggleQuestionType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      questionTypes: prev.questionTypes.includes(type)
        ? prev.questionTypes.filter(t => t !== type)
        : [...prev.questionTypes, type]
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
          label="Grade"
          required
          value={formData.grade}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
        />
      </div>

      <Input
        label="Topic"
        required
        value={formData.topic}
        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
      />

      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Difficulty Level"
          required
          value={formData.difficulty}
          onChange={(value) => setFormData({ ...formData, difficulty: value as HomeworkRequest['difficulty'] })}
          options={['Easy', 'Medium', 'Hard']}
        />

        <Input
          label="Number of Questions"
          type="number"
          required
          min={1}
          max={50}
          value={formData.numberOfQuestions}
          onChange={(e) => setFormData({ ...formData, numberOfQuestions: parseInt(e.target.value) })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Question Types
        </label>
        <div className="grid grid-cols-2 gap-2">
          {questionTypes.map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.questionTypes.includes(type)}
                onChange={() => toggleQuestionType(type)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={formData.includeStepByStep}
          onChange={(e) => setFormData({ ...formData, includeStepByStep: e.target.checked })}
          className="rounded text-blue-600 focus:ring-blue-500"
        />
        <span className="text-sm text-gray-700">Include step-by-step solutions</span>
      </label>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Generate Homework
        </Button>
      </div>
    </form>
  );
};