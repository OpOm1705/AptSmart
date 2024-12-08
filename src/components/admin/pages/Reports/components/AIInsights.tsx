import React from 'react';
import { Card } from '../../../../ui/Card';
import { Brain, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';

interface AIInsightsProps {
  filters: {
    dateRange: string;
    grade: string;
    section: string;
  };
}

const insights = [
  {
    type: 'trend',
    title: 'Performance Trends',
    description: 'Overall academic performance has improved by 15% compared to last semester',
    icon: TrendingUp,
    color: 'blue'
  },
  {
    type: 'alert',
    title: 'Areas of Concern',
    description: 'Mathematics performance in Grade 10B shows a declining trend',
    icon: AlertCircle,
    color: 'red'
  },
  {
    type: 'recommendation',
    title: 'Recommendations',
    description: 'Consider implementing peer tutoring programs for struggling students',
    icon: Lightbulb,
    color: 'yellow'
  }
];

export const AIInsights: React.FC<AIInsightsProps> = ({ filters }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Brain className="h-6 w-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">AI-Powered Insights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                insight.type === 'trend'
                  ? 'bg-blue-50'
                  : insight.type === 'alert'
                  ? 'bg-red-50'
                  : 'bg-yellow-50'
              }`}
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className={`p-2 rounded-lg ${
                  insight.type === 'trend'
                    ? 'bg-blue-100'
                    : insight.type === 'alert'
                    ? 'bg-red-100'
                    : 'bg-yellow-100'
                }`}>
                  <insight.icon className={`h-5 w-5 ${
                    insight.type === 'trend'
                      ? 'text-blue-600'
                      : insight.type === 'alert'
                      ? 'text-red-600'
                      : 'text-yellow-600'
                  }`} />
                </div>
                <h3 className={`font-medium ${
                  insight.type === 'trend'
                    ? 'text-blue-900'
                    : insight.type === 'alert'
                    ? 'text-red-900'
                    : 'text-yellow-900'
                }`}>
                  {insight.title}
                </h3>
              </div>
              <p className={`text-sm ${
                insight.type === 'trend'
                  ? 'text-blue-800'
                  : insight.type === 'alert'
                  ? 'text-red-800'
                  : 'text-yellow-800'
              }`}>
                {insight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};