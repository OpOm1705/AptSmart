import React from 'react';
import { Card } from '../../ui/Card';
import { CheckCircle, XCircle, AlertCircle, Clock } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'attendance',
    description: 'Marked attendance for Grade 10-A',
    time: '2 hours ago',
    icon: CheckCircle,
    iconColor: 'text-green-500'
  },
  {
    id: 2,
    type: 'assignment',
    description: 'Posted new assignment for Grade 9-B',
    time: '3 hours ago',
    icon: AlertCircle,
    iconColor: 'text-blue-500'
  },
  {
    id: 3,
    type: 'grade',
    description: 'Graded Math Quiz for Grade 11-A',
    time: '4 hours ago',
    icon: Clock,
    iconColor: 'text-purple-500'
  }
];

export const RecentActivities: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700">
            View all
          </button>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.id}
                className="flex items-start space-x-3"
              >
                <div className="p-2 bg-gray-50 rounded-lg">
                  <Icon className={`h-5 w-5 ${activity.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};