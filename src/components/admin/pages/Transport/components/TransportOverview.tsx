import React from 'react';
import { Card } from '../../../../ui/Card';
import { Bus, MapPin, Users, AlertTriangle } from 'lucide-react';

const stats = [
  {
    title: 'Active Buses',
    value: '12',
    change: '+2',
    icon: Bus,
    color: 'blue'
  },
  {
    title: 'Active Routes',
    value: '8',
    change: '+1',
    icon: MapPin,
    color: 'green'
  },
  {
    title: 'Total Students',
    value: '450',
    change: '+15',
    icon: Users,
    color: 'purple'
  },
  {
    title: 'Alerts',
    value: '2',
    change: '-1',
    icon: AlertTriangle,
    color: 'orange'
  }
];

export const TransportOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg bg-${item.color}-100`}>
                  <Icon className={`h-5 w-5 text-${item.color}-600`} />
                </div>
                <span className={`text-xs ${
                  item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.change}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.value}</h3>
              <p className="text-sm text-gray-600">{item.title}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};