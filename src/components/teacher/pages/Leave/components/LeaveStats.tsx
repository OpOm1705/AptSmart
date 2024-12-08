import React from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { LeaveStatistics } from '../types';

interface LeaveStatsProps {
  stats: LeaveStatistics;
}

export const LeaveStats: React.FC<LeaveStatsProps> = ({ stats }) => {
  const statItems = [
    {
      title: 'Total Leaves',
      value: stats.totalLeaves,
      change: stats.leavesChange,
      icon: Calendar,
      color: 'blue'
    },
    {
      title: 'Remaining Leaves',
      value: stats.remainingLeaves,
      change: stats.remainingChange,
      icon: Clock,
      color: 'green'
    },
    {
      title: 'Approved Leaves',
      value: stats.approvedLeaves,
      change: stats.approvedChange,
      icon: CheckCircle,
      color: 'purple'
    },
    {
      title: 'Pending Leaves',
      value: stats.pendingLeaves,
      change: stats.pendingChange,
      icon: AlertCircle,
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