import React from 'react';
import { Users, GraduationCap, UserCheck, TrendingUp } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { useDashboardStats } from '../hooks/useDashboardStats';

export const DashboardStats: React.FC = () => {
  const { stats } = useDashboardStats();

  const statItems = [
    {
      title: 'Total Students',
      value: stats.totalStudents,
      change: stats.studentChange,
      icon: GraduationCap,
      color: 'blue'
    },
    {
      title: 'Active Staff',
      value: stats.activeStaff,
      change: stats.staffChange,
      icon: Users,
      color: 'green'
    },
    {
      title: 'Attendance Rate',
      value: stats.attendanceRate,
      change: stats.attendanceChange,
      icon: UserCheck,
      color: 'purple'
    },
    {
      title: 'Performance',
      value: stats.performance,
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