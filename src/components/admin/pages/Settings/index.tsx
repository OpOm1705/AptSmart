import React from 'react';
import { Layout } from '../../Layout';
import { GeneralSettings } from './components/GeneralSettings';
import { NotificationSettings } from './components/NotificationSettings';
import { IntegrationSettings } from './components/IntegrationSettings';
import { BackupSettings } from './components/BackupSettings';
import { useSettings } from './hooks/useSettings';

export const Settings: React.FC = () => {
  const { settings, updateSettings } = useSettings();

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-600">Configure system preferences and settings</p>
        </div>

        <div className="space-y-6">
          <GeneralSettings 
            settings={settings.general} 
            onUpdate={(data) => updateSettings('general', data)} 
          />
          <NotificationSettings 
            settings={settings.notifications} 
            onUpdate={(data) => updateSettings('notifications', data)} 
          />
          <IntegrationSettings 
            settings={settings.integrations} 
            onUpdate={(data) => updateSettings('integrations', data)} 
          />
          <BackupSettings 
            settings={settings.backup} 
            onUpdate={(data) => updateSettings('backup', data)} 
          />
        </div>
      </div>
    </Layout>
  );
};