import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Puzzle, Link as LinkIcon, Check, AlertCircle } from 'lucide-react';
import { IntegrationSettingsData } from '../types';

interface IntegrationSettingsProps {
  settings: IntegrationSettingsData;
  onUpdate: (settings: IntegrationSettingsData) => void;
}

export const IntegrationSettings: React.FC<IntegrationSettingsProps> = ({ settings, onUpdate }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Puzzle className="h-6 w-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Integrations</h2>
        </div>

        <div className="space-y-6">
          {settings.integrations.map((integration) => (
            <div key={integration.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${
                  integration.connected ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  <LinkIcon className={`h-5 w-5 ${
                    integration.connected ? 'text-green-600' : 'text-gray-600'
                  }`} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{integration.name}</h3>
                  <p className="text-sm text-gray-500">{integration.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {integration.connected ? (
                  <>
                    <span className="flex items-center text-sm text-green-600">
                      <Check className="h-4 w-4 mr-1" />
                      Connected
                    </span>
                    <Button variant="outline" onClick={() => {}}>Configure</Button>
                  </>
                ) : (
                  <Button onClick={() => {}}>Connect</Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <p className="text-sm text-blue-900 font-medium">Integration Guidelines</p>
          </div>
          <p className="mt-2 text-sm text-blue-800">
            Make sure to review the documentation and security requirements before connecting any third-party services.
          </p>
        </div>
      </div>
    </Card>
  );
};