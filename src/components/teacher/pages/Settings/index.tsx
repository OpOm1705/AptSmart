import React from 'react';
import { TeacherLayout } from '../../TeacherLayout';
import { ProfileSettings } from './components/ProfileSettings';
import { NotificationSettings } from './components/NotificationSettings';
import { SecuritySettings } from './components/SecuritySettings';
import { PreferenceSettings } from './components/PreferenceSettings';
import { useSettings } from './hooks/useSettings';

export const Settings: React.FC = () => {
  const { settings, updateSettings } = useSettings();

  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-600">Manage your account preferences</p>
        </div>

        <div className="space-y-6">
          <ProfileSettings 
            profile={settings.profile} 
            onUpdate={(data) => updateSettings('profile', data)} 
          />
          <NotificationSettings 
            notifications={settings.notifications} 
            onUpdate={(data) => updateSettings('notifications', data)} 
          />
          <SecuritySettings 
            security={settings.security} 
            onUpdate={(data) => updateSettings('security', data)} 
          />
          <PreferenceSettings 
            preferences={settings.preferences} 
            onUpdate={(data) => updateSettings('preferences', data)} 
          />
        </div>
      </div>
    </TeacherLayout>
  );
};