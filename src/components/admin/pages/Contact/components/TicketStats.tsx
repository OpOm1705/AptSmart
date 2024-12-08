import React from 'react';
import { MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { TicketStatistics } from '../types';

interface TicketStatsProps {
  stats: TicketStatistics;
}

export const TicketStats: React.FC<TicketStatsProps> = ({ stats }) => {
  const statItems = [
    {
      title: 'Total Tickets',
      value: stats.totalTickets,
      change: stats.totalChange,
      icon: MessageSquare,
      color: 'blue'
    },
    {
      title: 'Open Tickets',
      value: stats.openTickets,
      change: stats.openChange,
      icon: AlertCircle,
      color: 'green'
    },
    {
      title: 'In Progress',
      value: stats.inProgressTickets,
      change: stats.progressChange,
      icon: Clock,
      color: 'orange'
    },
    {
      title: 'Resolved',
      value: stats.resolvedTickets,
      change: stats.resolvedChange,
      icon: CheckCircle,
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