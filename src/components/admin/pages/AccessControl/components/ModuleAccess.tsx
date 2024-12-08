import React, { useState } from 'react';
import { Card } from '../../../../ui/Card';
import { Select } from '../../../../ui/Select';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Module, Permission } from '../types';

interface ModuleAccessProps {
  modules: Module[];
  onUpdate: (type: 'module', id: string, permissions: Permission[]) => void;
}

export const ModuleAccess: React.FC<ModuleAccessProps> = ({ modules, onUpdate }) => {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const handlePermissionToggle = (moduleId: string, permissionId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (module) {
      const updatedPermissions = module.permissions.map(p => 
        p.id === permissionId ? { ...p, enabled: !p.enabled } : p
      );
      onUpdate('module', moduleId, updatedPermissions);
    }
  };

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Module Access</h2>

        <div className="space-y-4">
          {modules.map((module) => (
            <div key={module.id} className="border rounded-lg">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
              >
                <div>
                  <h3 className="font-medium text-gray-900">{module.name}</h3>
                  <p className="text-sm text-gray-500">{module.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Select
                    value={module.accessLevel}
                    onChange={() => {}}
                    options={['full', 'restricted', 'none']}
                    onClick={(e) => e.stopPropagation()}
                  />
                  {expandedModule === module.id ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>

              {expandedModule === module.id && (
                <div className="p-4 border-t bg-gray-50">
                  <div className="space-y-4">
                    {module.permissions.map((permission) => (
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
                            onChange={() => handlePermissionToggle(module.id, permission.id)}
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