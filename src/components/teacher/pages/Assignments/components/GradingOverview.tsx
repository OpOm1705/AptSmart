import React from 'react';
import { Card } from '../../../../ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const gradingData = [
  { date: '2024-03-01', submissions: 45, graded: 42 },
  { date: '2024-03-02', submissions: 38, graded: 35 },
  { date: '2024-03-03', submissions: 52, graded: 48 },
  { date: '2024-03-04', submissions: 40, graded: 38 },
  { date: '2024-03-05', submissions: 35, graded: 32 }
];

export const GradingOverview: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Grading Overview</h2>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={gradingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <YAxis />
              <Tooltip 
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="submissions" 
                stroke="#3B82F6" 
                name="Submissions"
              />
              <Line 
                type="monotone" 
                dataKey="graded" 
                stroke="#10B981" 
                name="Graded"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-blue-900">Total Submissions</p>
            <p className="text-2xl font-bold text-blue-600">210</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-green-900">Graded</p>
            <p className="text-2xl font-bold text-green-600">195</p>
          </div>
        </div>
      </div>
    </Card>
  );
};