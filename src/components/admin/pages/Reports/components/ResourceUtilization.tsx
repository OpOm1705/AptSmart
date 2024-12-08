import React from 'react';
import { Card } from '../../../../ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface ResourceUtilizationProps {
  filters: {
    dateRange: string;
    grade: string;
    section: string;
  };
}

const resourceData = [
  { name: 'Classrooms', value: 85, color: '#3B82F6' },
  { name: 'Labs', value: 72, color: '#10B981' },
  { name: 'Library', value: 68, color: '#8B5CF6' },
  { name: 'Sports Facilities', value: 78, color: '#F59E0B' }
];

export const ResourceUtilization: React.FC<ResourceUtilizationProps> = ({ filters }) => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Resource Utilization</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={resourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {resourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-blue-900 mb-2">Utilization Insights</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Classroom utilization is optimal at 85%</li>
                <li>• Lab usage can be improved by 18%</li>
                <li>• Library visits show increasing trend</li>
                <li>• Sports facilities need scheduling optimization</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {resourceData.map((resource, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-600">{resource.name}</p>
                  <p className="text-2xl font-bold" style={{ color: resource.color }}>
                    {resource.value}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};