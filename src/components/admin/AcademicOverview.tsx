import React from 'react';
import { Book, Users, Clock, Award } from 'lucide-react';

const academicData = [
  {
    label: 'Active Classes',
    value: '24',
    icon: Book,
    color: 'blue',
    details: [
      { label: 'Primary', value: '12' },
      { label: 'Secondary', value: '8' },
      { label: 'Higher Secondary', value: '4' }
    ]
  },
  {
    label: 'Teacher-Student Ratio',
    value: '1:25',
    icon: Users,
    color: 'green',
    details: [
      { label: 'Teachers', value: '45' },
      { label: 'Students', value: '1125' }
    ]
  },
  {
    label: 'Average Class Duration',
    value: '45 min',
    icon: Clock,
    color: 'purple',
    details: [
      { label: 'Classes per day', value: '8' },
      { label: 'Total hours', value: '6' }
    ]
  },
  {
    label: 'Performance Index',
    value: '8.5/10',
    icon: Award,
    color: 'orange',
    details: [
      { label: 'Academic', value: '8.7' },
      { label: 'Co-curricular', value: '8.2' }
    ]
  }
];

export const AcademicOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Academic Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        {academicData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="p-4 rounded-lg bg-gray-50">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`p-2 rounded-lg bg-${item.color}-100`}>
                  <Icon className={`h-5 w-5 text-${item.color}-600`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{item.label}</p>
                  <p className="text-lg font-bold text-gray-900">{item.value}</p>
                </div>
              </div>
              <div className="space-y-1">
                {item.details.map((detail, idx) => (
                  <div key={idx} className="flex justify-between text-xs">
                    <span className="text-gray-500">{detail.label}</span>
                    <span className="font-medium text-gray-700">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};