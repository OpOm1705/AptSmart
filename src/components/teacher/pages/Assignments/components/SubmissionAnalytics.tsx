import React from 'react';
import { Card } from '../../../../ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { SubmissionAnalytics as AnalyticsType } from '../types';

interface SubmissionAnalyticsProps {
  analytics: AnalyticsType;
}

export const SubmissionAnalytics: React.FC<SubmissionAnalyticsProps> = ({ analytics }) => {
  const submissionData = [
    { name: 'On Time', value: analytics.onTime, color: '#10B981' },
    { name: 'Late', value: analytics.late, color: '#F59E0B' },
    { name: 'Missing', value: analytics.missing, color: '#EF4444' }
  ];

  const gradeData = Object.entries(analytics.byGrade).map(([grade, count]) => ({
    name: grade,
    value: count,
    color: grade === 'A' ? '#10B981' :
           grade === 'B' ? '#3B82F6' :
           grade === 'C' ? '#8B5CF6' :
           grade === 'D' ? '#F59E0B' :
           '#EF4444'
  }));

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Submission Analytics</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-4">Submission Status</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={submissionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {submissionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-4">Grade Distribution</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gradeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {gradeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};