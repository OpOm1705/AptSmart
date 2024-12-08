import { useState } from 'react';
import { Settings } from '../types';

const defaultSettings: Settings = {
  profile: {
    fullName: 'John Smith',
    email: 'john.smith@school.edu',
    phone: '+1 234 567 8900',
    bio: 'Mathematics teacher with 10 years of experience',
    department: 'Mathematics',
    subjects: ['Algebra', 'Calculus', 'Statistics']
  },
  notifications: {
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: false,
    inAppNotifications: true
  },
  security: {
    twoFactorEnabled: true,
    lastPasswordChange: '2024-02-15',
    loginAlerts: true,
    trustedDevices: [
      {
        id: '1',
        name: 'MacBook Pro',
        lastUsed: '2024-03-15'
      },
      {
        id: '2',
        name: 'iPhone 13',
        lastUsed: '2024-03-14'
      }
    ]
  },
  preferences: {
    theme: 'light',
    language: 'English',
    timezone: 'UTC+5:30',
    calendarView: 'week',
    gradeDisplayFormat: 'percentage'
  }
};

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  const updateSettings = (section: keyof Settings, data: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data
      }
    }));
  };

  return {
    settings,
    updateSettings
  };
};