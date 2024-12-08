import React from 'react';
import { Users, GraduationCap, TrendingUp, Award } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { getColorClass } from '../../../../../utils/styles';
import { StudentStatsData } from '../types';

interface StudentStatsProps {
  stats: StudentStatsData;
}

export const StudentStats: React.FC<StudentStatsProps> = ({ stats }) => {
  const statItems = [
    {
      title: 'Total Students',
      value: stats.totalStudents,
      change: stats.totalStudentsChange,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Average Attendance',
      value: stats.avgAttendance,
      change: stats.avgAttendanceChange,
      icon: GraduationCap,
      color: 'green'
    },
    {
      title: 'Performance Index',
      value: stats.performanceIndex,
      change: stats.performanceIndexChange,
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Achievement Rate',
      value: stats.achievementRate,
      change: stats.achievementRateChange,
      icon: Award,
      color: 'orange'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${getColorClass(stat.color)}`}>
                  <Icon className={`h-6 w-6 ${getColorClass(stat.color, 'text')}`} />
                </div>
                <div className={`text-sm ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.title}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};