import { useState } from 'react';
import { Settings } from '../types';

const defaultSettings: Settings = {
  general: {
    schoolName: 'AptSmart Academy',
    websiteUrl: 'https://aptsmart.edu',
    language: 'English',
    timezone: 'IST'
  },
  notifications: {
    emailEnabled: true,
    smsEnabled: true,
    pushEnabled: false,
    inAppEnabled: true
  },
  integrations: {
    integrations: [
      {
        id: '1',
        name: 'Google Workspace',
        description: 'Sync with Google Calendar and Drive',
        connected: true
      },
      {
        id: '2',
        name: 'Microsoft Teams',
        description: 'Integration for online classes',
        connected: false
      },
      {
        id: '3',
        name: 'Payment Gateway',
        description: 'Process fee payments securely',
        connected: true
      }
    ]
  },
  backup: {
    autoBackup: true,
    backupFrequency: 'daily',
    lastBackup: '2024-03-15 14:30:00',
    storageUsed: '45.8 GB',
    storageRemaining: '54.2 GB',
    totalStorage: '100 GB',
    storagePercentage: '45.8%'
  }
};

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  const updateSettings = (section: keyof Settings, data: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: data
    }));
  };

  return {
    settings,
    updateSettings
  };
};