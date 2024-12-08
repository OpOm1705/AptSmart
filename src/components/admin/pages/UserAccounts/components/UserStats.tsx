import React from 'react';
import { Users, UserCheck, UserX, Clock } from 'lucide-react';
import { Card } from '../../../../ui/Card';

interface UserStatsProps {
  stats: {
    totalUsers: string;
    totalChange: string;
    activeUsers: string;
    activeChange: string;
    suspendedUsers: string;
    suspendedChange: string;
    recentLogins: string;
    loginChange: string;
  };
}

export const UserStats: React.FC<UserStatsProps> = ({ stats }) => {
  const statItems = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      change: stats.totalChange,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Users',
      value: stats.activeUsers,
      change: stats.activeChange,
      icon: UserCheck,
      color: 'green'
    },
    {
      title: 'Suspended Users',
      value: stats.suspendedUsers,
      change: stats.suspendedChange,
      icon: UserX,
      color: 'red'
    },
    {
      title: 'Recent Logins',
      value: stats.recentLogins,
      change: stats.loginChange,
      icon: Clock,
      color: 'purple'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg bg-${item.color}-100`}>
                  <Icon className={`h-4 w-4 text-${item.color}-600`} />
                </div>
                <span className={`text-xs ${
                  item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.change}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.value}</h3>
              <p className="text-xs text-gray-600">{item.title}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};