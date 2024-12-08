import React from 'react';
import { TrendingUp, Users, GraduationCap, Award } from 'lucide-react';
import { Card } from '../../../../ui/Card';

interface PerformanceMetricsProps {
  filters: {
    dateRange: string;
    grade: string;
    section: string;
  };
}

const metrics = [
  {
    title: 'Overall Performance',
    value: '85%',
    change: '+5.2%',
    trend: 'up',
    icon: TrendingUp,
    color: 'blue'
  },
  {
    title: 'Average Attendance',
    value: '92%',
    change: '+2.1%',
    trend: 'up',
    icon: Users,
    color: 'green'
  },
  {
    title: 'Academic Progress',
    value: '78%',
    change: '+4.5%',
    trend: 'up',
    icon: GraduationCap,
    color: 'purple'
  },
  {
    title: 'Achievement Rate',
    value: '88%',
    change: '+3.8%',
    trend: 'up',
    icon: Award,
    color: 'orange'
  }
];

export const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ filters }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index} className="relative overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${metric.color}-100`}>
                  <Icon className={`h-6 w-6 text-${metric.color}-600`} />
                </div>
                <div className={`text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
              <p className="text-sm text-gray-600">{metric.title}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};