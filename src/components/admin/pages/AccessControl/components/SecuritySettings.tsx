import React from 'react';
import { Card } from '../../../../ui/Card';
import { Shield, Key, Lock, UserCheck } from 'lucide-react';

const securitySettings = [
  {
    id: '1',
    name: 'Two-Factor Authentication',
    description: 'Require 2FA for all admin accounts',
    enabled: true,
    icon: Key
  },
  {
    id: '2',
    name: 'Password Policy',
    description: 'Enforce strong password requirements',
    enabled: true,
    icon: Lock
  },
  {
    id: '3',
    name: 'Session Management',
    description: 'Automatically log out inactive users',
    enabled: true,
    icon: UserCheck
  }
];

export const SecuritySettings: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Shield className="h-6 w-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>
        </div>

        <div className="space-y-6">
          {securitySettings.map((setting) => {
            const Icon = setting.icon;
            return (
              <div key={setting.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{setting.name}</h3>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={setting.enabled}
                    onChange={() => {}}
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