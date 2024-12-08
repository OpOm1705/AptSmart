import { useState } from 'react';
import { Role, Module, AuditLogEntry, Permission } from '../types';

const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Administrator',
    description: 'Full system access with all permissions',
    permissions: [
      { id: '1', name: 'View Dashboard', description: 'Access to main dashboard', enabled: true },
      { id: '2', name: 'Manage Users', description: 'Create and modify user accounts', enabled: true },
      { id: '3', name: 'System Settings', description: 'Modify system configuration', enabled: true }
    ],
    users: 5
  },
  {
    id: '2',
    name: 'Teacher',
    description: 'Access to teaching and student management features',
    permissions: [
      { id: '1', name: 'View Dashboard', description: 'Access to main dashboard', enabled: true },
      { id: '2', name: 'Manage Students', description: 'View and update student information', enabled: true },
      { id: '3', name: 'Grade Management', description: 'Enter and modify grades', enabled: true }
    ],
    users: 45
  }
];

const mockModules: Module[] = [
  {
    id: '1',
    name: 'Academic Management',
    description: 'Manage classes, curriculum, and academic performance',
    permissions: [
      { id: '1', name: 'View Classes', description: 'View class information', enabled: true },
      { id: '2', name: 'Modify Curriculum', description: 'Update curriculum content', enabled: true }
    ],
    accessLevel: 'full'
  },
  {
    id: '2',
    name: 'Student Records',
    description: 'Access and manage student information',
    permissions: [
      { id: '1', name: 'View Records', description: 'View student records', enabled: true },
      { id: '2', name: 'Modify Records', description: 'Update student information', enabled: true }
    ],
    accessLevel: 'restricted'
  }
];

const mockAuditLogs: AuditLogEntry[] = [
  {
    id: '1',
    timestamp: '2024-03-15 14:30:00',
    user: 'Admin User',
    action: 'Permission Modified',
    details: 'Updated Teacher role permissions',
    ipAddress: '192.168.1.100'
  },
  {
    id: '2',
    timestamp: '2024-03-15 13:45:00',
    user: 'System',
    action: 'Role Created',
    details: 'New role "Department Head" created',
    ipAddress: '192.168.1.100'
  }
];

export const useAccessControl = () => {
  const [roles, setRoles] = useState<Role[]>(mockRoles);
  const [modules, setModules] = useState<Module[]>(mockModules);
  const [auditLogs] = useState<AuditLogEntry[]>(mockAuditLogs);

  const updatePermissions = (type: 'role' | 'module', id: string, permissions: Permission[]) => {
    if (type === 'role') {
      setRoles(prevRoles =>
        prevRoles.map(role =>
          role.id === id ? { ...role, permissions } : role
        )
      );
    } else {
      setModules(prevModules =>
        prevModules.map(module =>
          module.id === id ? { ...module, permissions } : module
        )
      );
    }
  };

  return {
    roles,
    modules,
    auditLogs,
    updatePermissions
  };
};