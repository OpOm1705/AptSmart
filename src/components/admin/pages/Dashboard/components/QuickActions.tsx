import React from 'react';
import { UserPlus, FileText, Calendar, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../ui/Card';

const actions = [
  {
    label: 'Add New Student',
    description: 'Register a new student',
    icon: UserPlus,
    path: '/admin/students/new',
    color: 'blue'
  },
  {
    label: 'Create Report',
    description: 'Generate performance reports',
    icon: FileText,
    path: '/admin/reports/new',
    color: 'green'
  },
  {
    label: 'Schedule Event',
    description: 'Add new calendar event',
    icon: Calendar,
    path: '/admin/calendar/new',
    color: 'purple'
  },
  {
    label: 'Send Notice',
    description: 'Broadcast announcements',
    icon: MessageSquare,
    path: '/admin/notice/new',
    color: 'orange'
  }
];

export const QuickActions: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
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
                <div className={`p-3 rounded-lg bg-${action.color}-100 mr-4`}>
                  <Icon className={`h-5 w-5 text-${action.color}-600`} />
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
    </Card>
  );
};