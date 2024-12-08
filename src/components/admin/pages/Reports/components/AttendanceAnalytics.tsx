import React from 'react';
import { Card } from '../../../../ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface AttendanceAnalyticsProps {
  filters: {
    dateRange: string;
    grade: string;
    section: string;
  };
}

const attendanceData = [
  { date: '2024-03-01', attendance: 95, average: 92 },
  { date: '2024-03-02', attendance: 93, average: 92 },
  { date: '2024-03-03', attendance: 94, average: 92 },
  { date: '2024-03-04', attendance: 96, average: 92 },
  { date: '2024-03-05', attendance: 92, average: 92 },
  { date: '2024-03-06', attendance: 91, average: 92 },
  { date: '2024-03-07', attendance: 95, average: 92 }
];

export const AttendanceAnalytics: React.FC<AttendanceAnalyticsProps> = ({ filters }) => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Attendance Analytics</h2>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <YAxis domain={[80, 100]} />
              <Tooltip
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
                formatter={(value: number) => [`${value}%`]}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="attendance" 
                name="Daily Attendance"
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="average" 
                name="Average"
                stroke="#9CA3AF" 
                strokeDasharray="5 5"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-blue-900">Average</p>
            <p className="text-2xl font-bold text-blue-600">92%</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-green-900">Highest</p>
            <p className="text-2xl font-bold text-green-600">96%</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-yellow-900">Lowest</p>
            <p className="text-2xl font-bold text-yellow-600">91%</p>
          </div>
        </div>
      </div>
    </Card>
  );
};