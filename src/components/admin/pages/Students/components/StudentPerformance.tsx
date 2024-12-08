import React from 'react';
import { Card } from '../../../../ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Jan', attendance: 95, performance: 88 },
  { month: 'Feb', attendance: 93, performance: 85 },
  { month: 'Mar', attendance: 96, performance: 90 },
  { month: 'Apr', attendance: 94, performance: 87 },
  { month: 'May', attendance: 95, performance: 89 },
  { month: 'Jun', attendance: 97, performance: 92 }
];

export const StudentPerformance: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h2>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="attendance" 
                stroke="#3B82F6" 
                name="Attendance"
              />
              <Line 
                type="monotone" 
                dataKey="performance" 
                stroke="#10B981" 
                name="Performance"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};