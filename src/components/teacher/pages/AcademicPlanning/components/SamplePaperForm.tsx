import React, { useState } from 'react';
import { Button } from '../../../../ui/Button';
import { Input } from '../../../../ui/Input';
import { Select } from '../../../../ui/Select';
import { Plus, X } from 'lucide-react';
import { SamplePaperRequest } from '../types';

interface SamplePaperFormProps {
  onSubmit: (request: SamplePaperRequest) => void;
  onCancel: () => void;
}

export const SamplePaperForm: React.FC<SamplePaperFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<SamplePaperRequest>({
    subject: '',
    grade: '',
    examType: '',
    duration: 180,
    totalMarks: 100,
    difficulty: 'Medium',
    includeAnswerKey: true,
    sections: [{ type: '', marks: 0, questions: 0 }]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addSection = () => {
    setFormData(prev => ({
      ...prev,
      sections: [...prev.sections, { type: '', marks: 0, questions: 0 }]
    }));
  };

  const removeSection = (index: number) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index)
    }));
  };

  const updateSection = (index: number, field: keyof typeof formData.sections[0], value: string | number) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.map((section, i) =>
        i === index ? { ...section, [field]: value } : section
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
          label="Grade"
          required
          value={formData.grade}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Exam Type"
          required
          value={formData.examType}
          onChange={(value) => setFormData({ ...formData, examType: value })}
          options={['Unit Test', 'Mid Term', 'Final Exam', 'Practice Test']}
        />

        <Select
          label="Difficulty Level"
          required
          value={formData.difficulty}
          onChange={(value) => setFormData({ ...formData, difficulty: value as SamplePaperRequest['difficulty'] })}
          options={['Easy', 'Medium', 'Hard']}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Duration (minutes)"
          type="number"
          required
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
        />

        <Input
          label="Total Marks"
          type="number"
          required
          value={formData.totalMarks}
          onChange={(e) => setFormData({ ...formData, totalMarks: parseInt(e.target.value) })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sections
        </label>
        <div className="space-y-4">
          {formData.sections.map((section, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-gray-900">Section {index + 1}</h4>
                {formData.sections.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => removeSection(index)}
                    icon={X}
                    className="!p-2"
                  />
                )}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Input
                  label="Type"
                  required
                  value={section.type}
                  onChange={(e) => updateSection(index, 'type', e.target.value)}
                  placeholder="e.g., MCQ, Theory"
                />
                <Input
                  label="Marks"
                  type="number"
                  required
                  value={section.marks}
                  onChange={(e) => updateSection(index, 'marks', parseInt(e.target.value))}
                />
                <Input
                  label="Questions"
                  type="number"
                  required
                  value={section.questions}
                  onChange={(e) => updateSection(index, 'questions', parseInt(e.target.value))}
                />
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={addSection}
            icon={Plus}
            className="w-full"
          >
            Add Section
          </Button>
        </div>
      </div>

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={formData.includeAnswerKey}
          onChange={(e) => setFormData({ ...formData, includeAnswerKey: e.target.checked })}
          className="rounded text-blue-600 focus:ring-blue-500"
        />
        <span className="text-sm text-gray-700">Include answer key</span>
      </label>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Generate Sample Paper
        </Button>
      </div>
    </form>
  );
};