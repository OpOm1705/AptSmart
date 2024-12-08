import React, { useState } from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Brain, Download, Plus } from 'lucide-react';
import { RubricForm } from './RubricForm';
import { RubricPreview } from './RubricPreview';
import { RubricRequest } from '../types';

interface AIEvaluatorProps {
  onGenerate: (request: RubricRequest) => void;
  isLoading: boolean;
}

export const AIEvaluator: React.FC<AIEvaluatorProps> = ({ onGenerate, isLoading }) => {
  const [showForm, setShowForm] = useState(false);
  const [generatedRubric, setGeneratedRubric] = useState<any>(null);

  const handleGenerate = (request: RubricRequest) => {
    onGenerate(request);
    setShowForm(false);
    // In a real app, we would set the generated rubric from the API response
    setGeneratedRubric({});
  };

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">AI Evaluator & Rubrics Generator</h2>
              <p className="text-sm text-gray-600">Create detailed assessment rubrics with AI assistance</p>
            </div>
          </div>
          <div className="flex space-x-2">
            {generatedRubric && (
              <Button variant="outline" icon={Download}>Export</Button>
            )}
            <Button icon={Plus} onClick={() => setShowForm(true)}>
              Create New Rubric
            </Button>
          </div>
        </div>

        {showForm ? (
          <RubricForm onSubmit={handleGenerate} onCancel={() => setShowForm(false)} />
        ) : generatedRubric ? (
          <RubricPreview rubric={generatedRubric} />
        ) : (
          <div className="text-center py-12">
            <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Create Your First Rubric
            </h3>
            <p className="text-gray-600 mb-4">
              Use AI to generate comprehensive evaluation rubrics for any type of assessment
            </p>
            <Button onClick={() => setShowForm(true)}>Get Started</Button>
          </div>
        )}
      </div>
    </Card>
  );
};