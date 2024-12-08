import React from 'react';
import { Card } from '../../../../ui/Card';
import { Brain } from 'lucide-react';
import { AIInsight } from '../types';

interface AIRecommendationsProps {
  insights: AIInsight[];
}

export const AIRecommendations: React.FC<AIRecommendationsProps> = ({ insights }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Brain className="h-6 w-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">AI Recommendations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">{insight.title}</h3>
              <p className="text-sm text-blue-800">{insight.description}</p>
              {insight.action && (
                <button className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-700">
                  {insight.action}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};