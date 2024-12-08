import React from 'react';
import { Bell, Pin, Clock, Users } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { NoticeStatistics } from '../types';

interface NoticeStatsProps {
  stats: NoticeStatistics;
}

export const NoticeStats: React.FC<NoticeStatsProps> = ({ stats }) => {
  const statItems = [
    {
      title: 'Active Notices',
      value: stats.activeNotices,
      change: stats.activeChange,
      icon: Bell,
      color: 'blue'
    },
    {
      title: 'Pinned Notices',
      value: stats.pinnedNotices,
      change: stats.pinnedChange,
      icon: Pin,
      color: 'green'
    },
    {
      title: 'Expiring Soon',
      value: stats.expiringSoon,
      change: stats.expiringChange,
      icon: Clock,
      color: 'orange'
    },
    {
      title: 'Total Recipients',
      value: stats.totalRecipients,
      change: stats.recipientChange,
      icon: Users,
      color: 'purple'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index}>
            <div className="p-3">
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