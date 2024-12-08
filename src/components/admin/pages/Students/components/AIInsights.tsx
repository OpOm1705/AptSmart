import React from 'react';
import { Card } from '../../../../ui/Card';
import { Brain } from 'lucide-react';
import { AIInsight } from '../types';

interface AIInsightsProps {
  insights: AIInsight[];
}

export const AIInsights: React.FC<AIInsightsProps> = ({ insights }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Brain className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">AI Insights</h2>
        </div>

        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-blue-900 mb-1">{insight.title}</h3>
              <p className="text-sm text-blue-800">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};