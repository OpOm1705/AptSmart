import React from 'react';
import { Card } from '../../../../ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const performanceData = [
  { name: 'Above 90%', value: 15, color: '#3B82F6' },
  { name: '80-90%', value: 25, color: '#10B981' },
  { name: '70-80%', value: 35, color: '#8B5CF6' },
  { name: 'Below 70%', value: 25, color: '#F59E0B' }
];

export const PerformanceOverview: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance Distribution</h2>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={performanceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {performanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-900 mb-2">Performance Insights</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• 40% of students are performing above 80%</li>
              <li>• 35% need moderate improvement</li>
              <li>• 25% require additional support</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};