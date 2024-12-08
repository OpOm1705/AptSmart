import React, { useState } from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { Role, Permission } from '../types';

interface RolePermissionsProps {
  roles: Role[];
  onUpdate: (type: 'role', id: string, permissions: Permission[]) => void;
}

export const RolePermissions: React.FC<RolePermissionsProps> = ({ roles, onUpdate }) => {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const handlePermissionToggle = (roleId: string, permissionId: string) => {
    const role = roles.find(r => r.id === roleId);
    if (role) {
      const updatedPermissions = role.permissions.map(p => 
        p.id === permissionId ? { ...p, enabled: !p.enabled } : p
      );
      onUpdate('role', roleId, updatedPermissions);
    }
  };

  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Role Permissions</h2>
          <Button icon={Plus}>Add Role</Button>
        </div>

        <div className="space-y-4">
          {roles.map((role) => (
            <div key={role.id} className="border rounded-lg">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
              >
                <div>
                  <h3 className="font-medium text-gray-900">{role.name}</h3>
                  <p className="text-sm text-gray-500">{role.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">{role.users} users</span>
                  {expandedRole === role.id ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>

              {expandedRole === role.id && (
                <div className="p-4 border-t bg-gray-50">
                  <div className="space-y-4">
                    {role.permissions.map((permission) => (
                      <div key={permission.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{permission.name}</p>
                          <p className="text-sm text-gray-500">{permission.description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={permission.enabled}
                            onChange={() => handlePermissionToggle(role.id, permission.id)}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};