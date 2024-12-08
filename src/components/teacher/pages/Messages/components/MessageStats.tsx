import React from 'react';
import { MessageSquare, TrendingUp, Bell, Clock } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { MessageStatistics } from '../types';

interface MessageStatsProps {
  stats: MessageStatistics;
}

export const MessageStats: React.FC<MessageStatsProps> = ({ stats }) => {
  const statItems = [
    {
      title: 'Total Messages',
      value: stats.totalMessages,
      change: stats.messageChange,
      icon: MessageSquare,
      color: 'blue'
    },
    {
      title: 'Unread Messages',
      value: stats.unreadMessages,
      change: stats.unreadChange,
      icon: Bell,
      color: 'red'
    },
    {
      title: 'Active Chats',
      value: stats.activeChats,
      change: stats.chatChange,
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Response Rate',
      value: stats.responseRate,
      change: stats.responseChange,
      icon: Clock,
      color: 'purple'
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