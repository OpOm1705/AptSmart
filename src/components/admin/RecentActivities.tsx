import React from 'react';
import { UserPlus, FileText, Bell, CheckCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'registration',
    description: 'New student registration completed',
    user: 'John Smith',
    time: '2 hours ago',
    icon: UserPlus,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 2,
    type: 'report',
    description: 'Monthly performance report generated',
    user: 'Sarah Johnson',
    time: '4 hours ago',
    icon: FileText,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 3,
    type: 'notice',
    description: 'Parent-teacher meeting announcement sent',
    user: 'Admin',
    time: '5 hours ago',
    icon: Bell,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    id: 4,
    type: 'attendance',
    description: 'Daily attendance report processed',
    user: 'System',
    time: '6 hours ago',
    icon: CheckCircle,
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600'
  }
];

export const RecentActivities: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          View all
        </button>
      </div>

      <div className="space-y-6">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div
              key={activity.id}
              className="flex items-start space-x-4"
            >
              <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                <Icon className={`h-5 w-5 ${activity.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {activity.description}
                </p>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{activity.user}</span>
                  <span>•</span>
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};