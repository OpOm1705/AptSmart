import React from 'react';
import { Brain, Clock, Users, BookOpen, AlertCircle } from 'lucide-react';

const insights = [
  {
    icon: Clock,
    title: 'Time Distribution',
    description: 'Core subjects are optimally distributed during peak attention hours (8 AM - 11 AM)',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    icon: Users,
    title: 'Teacher Workload',
    description: 'Teacher schedules are balanced with adequate breaks between classes',
    bgColor: 'bg-green-50',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    icon: BookOpen,
    title: 'Subject Balance',
    description: 'Practical and theory sessions are well-distributed throughout the week',
    bgColor: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
];

export const AIInsights: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Brain className="h-6 w-6 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">AI Schedule Optimization</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div key={index} className={`p-4 ${insight.bgColor} rounded-lg`}>
              <div className="flex items-center space-x-3 mb-2">
                <div className={`p-2 ${insight.iconBg} rounded-lg`}>
                  <Icon className={`h-5 w-5 ${insight.iconColor}`} />
                </div>
                <h3 className="font-medium text-gray-900">{insight.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{insight.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <AlertCircle className="h-5 w-5 text-yellow-600" />
          <h3 className="font-medium text-gray-900">Recommendations</h3>
        </div>
        <ul className="space-y-2 text-sm text-yellow-800">
          <li>• Consider swapping Monday's Mathematics and Physics slots for better student engagement</li>
          <li>• Add a short break between consecutive practical sessions</li>
          <li>• Distribute physical education classes more evenly across the week</li>
        </ul>
      </div>
    </div>
  );
};