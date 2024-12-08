import React from 'react';
import { UserPlus, FileText, Calendar, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const actions = [
  {
    label: 'Add New Student',
    description: 'Register a new student',
    icon: UserPlus,
    path: '/admin/students/new',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600'
  },
  {
    label: 'Create Report',
    description: 'Generate performance reports',
    icon: FileText,
    path: '/admin/reports/new',
    bgColor: 'bg-green-100',
    textColor: 'text-green-600'
  },
  {
    label: 'Schedule Event',
    description: 'Add new calendar event',
    icon: Calendar,
    path: '/admin/schedule/new',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600'
  },
  {
    label: 'Send Notice',
    description: 'Broadcast announcements',
    icon: MessageSquare,
    path: '/admin/notices/new',
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-600'
  }
];

export const QuickActions: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
      <div className="space-y-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={index}
              to={action.path}
              className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`p-3 rounded-lg ${action.bgColor} mr-4`}>
                <Icon className={`h-5 w-5 ${action.textColor}`} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  {action.label}
                </h3>
                <p className="text-xs text-gray-500">{action.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};