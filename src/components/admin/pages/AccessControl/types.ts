export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  users: number;
}

export interface Permission {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

export interface Module {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  accessLevel: 'full' | 'restricted' | 'none';
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  details: string;
  ipAddress: string;
}

export interface SecuritySetting {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  configurable: boolean;
}