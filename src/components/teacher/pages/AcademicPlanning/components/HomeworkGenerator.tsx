import React, { useState } from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { BookOpen, Download, Plus } from 'lucide-react';
import { HomeworkForm } from './HomeworkForm';
import { HomeworkPreview } from './HomeworkPreview';
import { HomeworkRequest } from '../types';

interface HomeworkGeneratorProps {
  onGenerate: (request: HomeworkRequest) => void;
  isLoading: boolean;
}

export const HomeworkGenerator: React.FC<HomeworkGeneratorProps> = ({ onGenerate, isLoading }) => {
  const [showForm, setShowForm] = useState(false);
  const [generatedHomework, setGeneratedHomework] = useState<any>(null);

  const handleGenerate = (request: HomeworkRequest) => {
    onGenerate(request);
    setShowForm(false);
    // In a real app, we would set the generated homework from the API response
    setGeneratedHomework({});
  };

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">AI Homework Generator</h2>
              <p className="text-sm text-gray-600">Create customized assignments with step-by-step solutions</p>
            </div>
          </div>
          <div className="flex space-x-2">
            {generatedHomework && (
              <Button variant="outline" icon={Download}>Export</Button>
            )}
            <Button icon={Plus} onClick={() => setShowForm(true)}>
              Create Assignment
            </Button>
          </div>
        </div>

        {showForm ? (
          <HomeworkForm onSubmit={handleGenerate} onCancel={() => setShowForm(false)} />
        ) : generatedHomework ? (
          <HomeworkPreview homework={generatedHomework} />
        ) : (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Generate Custom Homework
            </h3>
            <p className="text-gray-600 mb-4">
              Create engaging assignments tailored to your curriculum and learning objectives
            </p>
            <Button onClick={() => setShowForm(true)}>Get Started</Button>
          </div>
        )}
      </div>
    </Card>
  );
};