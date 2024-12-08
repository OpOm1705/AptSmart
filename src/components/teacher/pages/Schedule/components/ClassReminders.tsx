import React from 'react';
import { Card } from '../../../../ui/Card';
import { Bell } from 'lucide-react';
import { Reminder } from '../types';

interface ClassRemindersProps {
  reminders: Reminder[];
}

export const ClassReminders: React.FC<ClassRemindersProps> = ({ reminders }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Bell className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Reminders</h2>
        </div>

        <div className="space-y-4">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="p-4 bg-blue-50 rounded-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-blue-900">
                    {reminder.title}
                  </h3>
                  <p className="text-xs text-blue-700 mt-1">
                    {reminder.time}
                  </p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  reminder.priority === 'high'
                    ? 'bg-red-100 text-red-800'
                    : reminder.priority === 'medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {reminder.priority}
                </span>
              </div>
              <p className="text-sm text-blue-800 mt-2">
                {reminder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};