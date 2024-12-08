import React from 'react';
import { Users, BookOpen, Clock, TrendingUp } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { ClassStatistics } from '../types';

interface ClassStatsProps {
  stats: ClassStatistics;
}

export const ClassStats: React.FC<ClassStatsProps> = ({ stats }) => {
  const statItems = [
    {
      title: 'Total Students',
      value: stats.totalStudents,
      change: stats.studentChange,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Classes',
      value: stats.activeClasses,
      change: stats.classChange,
      icon: BookOpen,
      color: 'green'
    },
    {
      title: 'Teaching Hours',
      value: stats.teachingHours,
      change: stats.hoursChange,
      icon: Clock,
      color: 'purple'
    },
    {
      title: 'Average Performance',
      value: stats.avgPerformance,
      change: stats.performanceChange,
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${item.color}-100`}>
                  <Icon className={`h-6 w-6 text-${item.color}-600`} />
                </div>
                <span className={`text-sm ${
                  item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{item.value}</h3>
              <p className="text-sm text-gray-600">{item.title}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};