import React from 'react';
import { Card } from '../../../../ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAnalytics } from '../hooks/useAnalytics';

export const AnalyticsOverview: React.FC = () => {
  const { data } = useAnalytics();

  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Analytics Overview</h2>
          <select className="text-sm border-gray-300 rounded-md">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
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

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-900 mb-2">Key Insights</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>• Overall attendance has improved by 5% this month</li>
            <li>• Student performance shows an upward trend</li>
            <li>• Peak attendance days are Mondays and Wednesdays</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};