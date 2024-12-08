import React from 'react';
import { Card } from '../../../../ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Brain } from 'lucide-react';

const monthlyData = [
  { month: 'Jan', revenue: 250000, expenses: 180000 },
  { month: 'Feb', revenue: 280000, expenses: 190000 },
  { month: 'Mar', revenue: 245000, expenses: 175000 },
  { month: 'Apr', revenue: 290000, expenses: 195000 },
  { month: 'May', revenue: 285000, expenses: 185000 },
  { month: 'Jun', revenue: 275000, expenses: 180000 }
];

const insights = [
  'Revenue has increased by 15% compared to last quarter',
  'Fee collection rate improved to 92% after implementing reminders',
  'Major expense categories: Infrastructure (40%), Salaries (35%), Utilities (15%)'
];

export const FinancialReports: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Financial Reports</h2>

        <div className="h-80 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value: number) => `₹${(value/1000).toFixed(1)}K`}
              />
              <Legend />
              <Bar dataKey="revenue" name="Revenue" fill="#3B82F6" />
              <Bar dataKey="expenses" name="Expenses" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Brain className="h-5 w-5 text-blue-600" />
            <h3 className="font-medium text-blue-900">AI Financial Insights</h3>
          </div>
          <ul className="space-y-2">
            {insights.map((insight, index) => (
              <li key={index} className="text-sm text-blue-800">
                • {insight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};