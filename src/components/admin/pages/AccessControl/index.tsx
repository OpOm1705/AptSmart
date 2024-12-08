import React from 'react';
import { Layout } from '../../Layout';
import { RolePermissions } from './components/RolePermissions';
import { ModuleAccess } from './components/ModuleAccess';
import { SecuritySettings } from './components/SecuritySettings';
import { AuditLog } from './components/AuditLog';
import { useAccessControl } from './hooks/useAccessControl';

export const AccessControl: React.FC = () => {
  const { roles, modules, auditLogs, updatePermissions } = useAccessControl();

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Access Control</h1>
          <p className="text-sm text-gray-600">Manage roles, permissions, and security settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RolePermissions roles={roles} onUpdate={updatePermissions} />
          <ModuleAccess modules={modules} onUpdate={updatePermissions} />
        </div>

        <SecuritySettings />
        <AuditLog logs={auditLogs} />
      </div>
    </Layout>
  );
};