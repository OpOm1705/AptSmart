import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Brain } from 'lucide-react';

const resourceData = [
  { department: 'Science Lab', allocated: 100, utilized: 85 },
  { department: 'Computer Lab', allocated: 100, utilized: 92 },
  { department: 'Library', allocated: 100, utilized: 78 },
  { department: 'Sports', allocated: 100, utilized: 88 }
];

const aiSuggestions = [
  'Optimize library resource usage during peak hours',
  'Consider expanding computer lab capacity',
  'Implement shared resource scheduling for science labs'
];

export const ResourceAllocation: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Resource Allocation</h2>
        <select className="text-sm border-gray-300 rounded-md">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Quarter</option>
        </select>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={resourceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="allocated" fill="#3B82F6" name="Allocated %" />
            <Bar dataKey="utilized" fill="#10B981" name="Utilized %" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 bg-blue-50 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Brain className="h-5 w-5 text-blue-600" />
          <h3 className="text-sm font-medium text-blue-900">AI Recommendations</h3>
        </div>
        <ul className="space-y-1">
          {aiSuggestions.map((suggestion, index) => (
            <li key={index} className="text-sm text-blue-800">
              • {suggestion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};