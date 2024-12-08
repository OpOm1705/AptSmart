import React from 'react';
import { Book, Users, Clock, Award } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { getColorClass } from '../../../../../utils/styles';
import { AcademicOverviewData } from '../types';

interface AcademicOverviewProps {
  data: AcademicOverviewData;
}

export const AcademicOverview: React.FC<AcademicOverviewProps> = ({ data }) => {
  const stats = [
    {
      label: 'Active Classes',
      value: data.activeClasses,
      icon: Book,
      color: 'blue',
      details: data.classDistribution
    },
    {
      label: 'Teacher-Student Ratio',
      value: data.teacherStudentRatio,
      icon: Users,
      color: 'green',
      details: data.staffingDetails
    },
    {
      label: 'Average Class Duration',
      value: data.avgClassDuration,
      icon: Clock,
      color: 'purple',
      details: data.scheduleDetails
    },
    {
      label: 'Performance Index',
      value: data.performanceIndex,
      icon: Award,
      color: 'orange',
      details: data.performanceDetails
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index}>
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-lg ${getColorClass(stat.color)}`}>
                  <Icon className={`h-5 w-5 ${getColorClass(stat.color, 'text')}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
              <div className="space-y-2">
                {stat.details.map((detail, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-gray-500">{detail.label}</span>
                    <span className="font-medium text-gray-900">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};