import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Database, Download, Upload, Clock } from 'lucide-react';
import { BackupSettingsData } from '../types';

interface BackupSettingsProps {
  settings: BackupSettingsData;
  onUpdate: (settings: BackupSettingsData) => void;
}

export const BackupSettings: React.FC<BackupSettingsProps> = ({ settings, onUpdate }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Database className="h-6 w-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Backup & Restore</h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="h-5 w-5 text-gray-600" />
                <h3 className="font-medium text-gray-900">Automatic Backups</h3>
              </div>
              <div className="space-y-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={settings.autoBackup}
                    onChange={() => onUpdate({ ...settings, autoBackup: !settings.autoBackup })}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Enable automatic backups</span>
                </label>
                <select
                  value={settings.backupFrequency}
                  onChange={(e) => onUpdate({ ...settings, backupFrequency: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Database className="h-5 w-5 text-gray-600" />
                <h3 className="font-medium text-gray-900">Storage Settings</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Storage Used: {settings.storageUsed}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: settings.storagePercentage }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500">
                  {settings.storageRemaining} remaining of {settings.totalStorage}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="space-y-4">
              <Button icon={Download} variant="outline" className="w-full sm:w-auto">
                Download Backup
              </Button>
              <p className="text-xs text-gray-500">
                Last backup: {settings.lastBackup}
              </p>
            </div>
            <div className="space-y-4">
              <Button icon={Upload} variant="outline" className="w-full sm:w-auto">
                Restore from Backup
              </Button>
              <p className="text-xs text-gray-500">
                Supported formats: .zip, .sql
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};