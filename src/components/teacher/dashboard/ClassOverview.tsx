import React from 'react';
import { Users, Clock, BookOpen, CheckCircle } from 'lucide-react';
import { Card } from '../../ui/Card';

const stats = [
  {
    title: 'Total Students',
    value: '156',
    change: '+12 this week',
    icon: Users,
    color: 'blue'
  },
  {
    title: 'Classes Today',
    value: '6',
    change: '2 remaining',
    icon: Clock,
    color: 'green'
  },
  {
    title: 'Subjects',
    value: '4',
    change: 'All on track',
    icon: BookOpen,
    color: 'purple'
  },
  {
    title: 'Attendance Rate',
    value: '94%',
    change: '+2.3% vs last week',
    icon: CheckCircle,
    color: 'orange'
  }
];

export const ClassOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};