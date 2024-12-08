import React from 'react';
import { Card } from '../../../../ui/Card';
import { Bell, Mail, MessageSquare, Phone } from 'lucide-react';
import { NotificationSettingsData } from '../types';

interface NotificationSettingsProps {
  settings: NotificationSettingsData;
  onUpdate: (settings: NotificationSettingsData) => void;
}

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({ settings, onUpdate }) => {
  const notificationTypes = [
    {
      id: 'email',
      title: 'Email Notifications',
      description: 'Receive important updates via email',
      icon: Mail,
      enabled: settings.emailEnabled
    },
    {
      id: 'sms',
      title: 'SMS Notifications',
      description: 'Get alerts via SMS',
      icon: Phone,
      enabled: settings.smsEnabled
    },
    {
      id: 'push',
      title: 'Push Notifications',
      description: 'Browser push notifications',
      icon: Bell,
      enabled: settings.pushEnabled
    },
    {
      id: 'inApp',
      title: 'In-App Notifications',
      description: 'System notifications within the platform',
      icon: MessageSquare,
      enabled: settings.inAppEnabled
    }
  ];

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Bell className="h-6 w-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Notification Settings</h2>
        </div>

        <div className="space-y-6">
          {notificationTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div key={type.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{type.title}</h3>
                    <p className="text-sm text-gray-500">{type.description}</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={type.enabled}
                    onChange={() => {
                      onUpdate({
                        ...settings,
                        [`${type.id}Enabled`]: !type.enabled
                      });
                    }}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};