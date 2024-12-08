import React from 'react';
import { Card } from '../../ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Jan', attendance: 95, avgScore: 88, participation: 82 },
  { month: 'Feb', attendance: 93, avgScore: 85, participation: 78 },
  { month: 'Mar', attendance: 96, avgScore: 90, participation: 85 },
  { month: 'Apr', attendance: 94, avgScore: 87, participation: 80 },
  { month: 'May', attendance: 95, avgScore: 89, participation: 83 },
  { month: 'Jun', attendance: 97, avgScore: 92, participation: 87 }
];

export const StudentPerformance: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Class Performance Overview</h2>
        
        <div className="h-80">
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
                name="Attendance %"
              />
              <Line 
                type="monotone" 
                dataKey="avgScore" 
                stroke="#10B981" 
                name="Average Score"
              />
              <Line 
                type="monotone" 
                dataKey="participation" 
                stroke="#8B5CF6" 
                name="Participation"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-blue-900">Average Attendance</p>
            <p className="text-2xl font-bold text-blue-600">95%</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-green-900">Class Average</p>
            <p className="text-2xl font-bold text-green-600">88%</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-purple-900">Participation Rate</p>
            <p className="text-2xl font-bold text-purple-600">83%</p>
          </div>
        </div>
      </div>
    </Card>
  );
};