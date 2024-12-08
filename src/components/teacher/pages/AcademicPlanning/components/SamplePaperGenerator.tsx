import React, { useState } from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { FileText, Download, Plus } from 'lucide-react';
import { SamplePaperForm } from './SamplePaperForm';
import { SamplePaperPreview } from './SamplePaperPreview';
import { SamplePaperRequest } from '../types';

interface SamplePaperGeneratorProps {
  onGenerate: (request: SamplePaperRequest) => void;
  isLoading: boolean;
}

export const SamplePaperGenerator: React.FC<SamplePaperGeneratorProps> = ({ onGenerate, isLoading }) => {
  const [showForm, setShowForm] = useState(false);
  const [generatedPaper, setGeneratedPaper] = useState<any>(null);

  const handleGenerate = (request: SamplePaperRequest) => {
    onGenerate(request);
    setShowForm(false);
    // In a real app, we would set the generated paper from the API response
    setGeneratedPaper({});
  };

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">AI Sample Paper Generator</h2>
              <p className="text-sm text-gray-600">Create practice papers with detailed solutions</p>
            </div>
          </div>
          <div className="flex space-x-2">
            {generatedPaper && (
              <Button variant="outline" icon={Download}>Export</Button>
            )}
            <Button icon={Plus} onClick={() => setShowForm(true)}>
              Create Paper
            </Button>
          </div>
        </div>

        {showForm ? (
          <SamplePaperForm onSubmit={handleGenerate} onCancel={() => setShowForm(false)} />
        ) : generatedPaper ? (
          <SamplePaperPreview paper={generatedPaper} />
        ) : (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Generate Sample Papers
            </h3>
            <p className="text-gray-600 mb-4">
              Create comprehensive practice papers with varying difficulty levels
            </p>
            <Button onClick={() => setShowForm(true)}>Get Started</Button>
          </div>
        )}
      </div>
    </Card>
  );
};