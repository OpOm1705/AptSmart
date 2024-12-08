import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const attendanceData = [
  { month: 'Jan', attendance: 95, performance: 88, resources: 82 },
  { month: 'Feb', attendance: 93, performance: 85, resources: 78 },
  { month: 'Mar', attendance: 96, performance: 90, resources: 85 },
  { month: 'Apr', attendance: 94, performance: 87, resources: 80 },
  { month: 'May', attendance: 95, performance: 89, resources: 83 },
  { month: 'Jun', attendance: 97, performance: 92, resources: 87 }
];

const resourceAllocationData = [
  { department: 'Science', allocated: 2500, utilized: 2100 },
  { department: 'Math', allocated: 2000, utilized: 1800 },
  { department: 'English', allocated: 1800, utilized: 1600 },
  { department: 'Sports', allocated: 1500, utilized: 1200 }
];

export const AnalyticsCharts: React.FC = () => {
  const [activeChart, setActiveChart] = React.useState('attendance');

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">AI-Powered Analytics</h2>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 text-sm rounded-md ${
              activeChart === 'attendance' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
            }`}
            onClick={() => setActiveChart('attendance')}
          >
            Performance Trends
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md ${
              activeChart === 'resources' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
            }`}
            onClick={() => setActiveChart('resources')}
          >
            Resource Allocation
          </button>
        </div>
      </div>

      <div className="h-80">
        {activeChart === 'attendance' ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="attendance" stroke="#3B82F6" name="Attendance %" />
              <Line type="monotone" dataKey="performance" stroke="#10B981" name="Performance" />
              <Line type="monotone" dataKey="resources" stroke="#8B5CF6" name="Resource Efficiency" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={resourceAllocationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="allocated" fill="#3B82F6" name="Allocated Resources" />
              <Bar dataKey="utilized" fill="#10B981" name="Utilized Resources" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-sm font-medium text-blue-900 mb-2">AI Insights</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Attendance shows an upward trend with 3% improvement</li>
          <li>• Resource utilization efficiency increased by 7%</li>
          <li>• Recommended: Optimize resource allocation in Sports department</li>
        </ul>
      </div>
    </div>
  );
};