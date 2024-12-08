export interface Profile {
  fullName: string;
  email: string;
  phone: string;
  avatar?: string;
  bio: string;
  department: string;
  subjects: string[];
}

export interface NotificationSettings {
  emailNotifications: boolean;
  smsNotifications: boolean;
  pushNotifications: boolean;
  inAppNotifications: boolean;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  lastPasswordChange: string;
  loginAlerts: boolean;
  trustedDevices: {
    id: string;
    name: string;
    lastUsed: string;
  }[];
}

export interface PreferenceSettings {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  calendarView: 'week' | 'month';
  gradeDisplayFormat: 'percentage' | 'letter' | 'both';
}

export interface Settings {
  profile: Profile;
  notifications: NotificationSettings;
  security: SecuritySettings;
  preferences: PreferenceSettings;
}