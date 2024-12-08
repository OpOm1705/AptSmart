export interface GeneralSettingsData {
  schoolName: string;
  websiteUrl: string;
  language: string;
  timezone: string;
}

export interface NotificationSettingsData {
  emailEnabled: boolean;
  smsEnabled: boolean;
  pushEnabled: boolean;
  inAppEnabled: boolean;
}

export interface Integration {
  id: string;
  name: string;
  description: string;
  connected: boolean;
}

export interface IntegrationSettingsData {
  integrations: Integration[];
}

export interface BackupSettingsData {
  autoBackup: boolean;
  backupFrequency: string;
  lastBackup: string;
  storageUsed: string;
  storageRemaining: string;
  totalStorage: string;
  storagePercentage: string;
}

export interface Settings {
  general: GeneralSettingsData;
  notifications: NotificationSettingsData;
  integrations: IntegrationSettingsData;
  backup: BackupSettingsData;
}