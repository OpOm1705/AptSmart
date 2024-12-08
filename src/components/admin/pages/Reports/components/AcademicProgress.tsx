import React from 'react';
import { Card } from '../../../../ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface AcademicProgressProps {
  filters: {
    dateRange: string;
    grade: string;
    section: string;
  };
}

const progressData = [
  { subject: 'Mathematics', current: 85, target: 90 },
  { subject: 'Science', current: 88, target: 90 },
  { subject: 'English', current: 82, target: 85 },
  { subject: 'Social Studies', current: 79, target: 85 },
  { subject: 'Languages', current: 86, target: 85 }
];

export const AcademicProgress: React.FC<AcademicProgressProps> = ({ filters }) => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Academic Progress</h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={progressData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="subject" type="category" width={100} />
              <Tooltip formatter={(value: number) => `${value}%`} />
              <Legend />
              <Bar 
                dataKey="current" 
                name="Current Performance" 
                fill="#3B82F6"
                radius={[0, 4, 4, 0]} 
              />
              <Bar 
                dataKey="target" 
                name="Target" 
                fill="#9CA3AF"
                radius={[0, 4, 4, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-900 mb-2">Performance Summary</h3>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>• Overall academic performance is at 84%</li>
            <li>• 3 out of 5 subjects exceed target performance</li>
            <li>• Mathematics shows highest improvement rate</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};