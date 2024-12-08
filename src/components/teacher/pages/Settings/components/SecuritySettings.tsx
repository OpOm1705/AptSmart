import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Shield, Key, Lock, Smartphone, Trash2 } from 'lucide-react';
import { SecuritySettings as SecuritySettingsType } from '../types';

interface SecuritySettingsProps {
  security: SecuritySettingsType;
  onUpdate: (data: Partial<SecuritySettingsType>) => void;
}

export const SecuritySettings: React.FC<SecuritySettingsProps> = ({
  security,
  onUpdate
}) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Shield className="h-6 w-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Key className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={security.twoFactorEnabled}
                onChange={() => onUpdate({ twoFactorEnabled: !security.twoFactorEnabled })}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Lock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Password</h3>
                <p className="text-sm text-gray-500">
                  Last changed: {new Date(security.lastPasswordChange).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Button variant="outline">Change Password</Button>
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Smartphone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Trusted Devices</h3>
                <p className="text-sm text-gray-500">Devices that can access your account</p>
              </div>
            </div>

            <div className="space-y-3">
              {security.trustedDevices.map((device) => (
                <div
                  key={device.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900">{device.name}</p>
                    <p className="text-sm text-gray-500">
                      Last used: {new Date(device.lastUsed).toLocaleDateString()}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    icon={Trash2}
                    onClick={() => {
                      onUpdate({
                        trustedDevices: security.trustedDevices.filter(d => d.id !== device.id)
                      });
                    }}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};