import React from 'react';
import { Card } from '../../../../ui/Card';
import { Select } from '../../../../ui/Select';
import { Input } from '../../../../ui/Input';
import { Button } from '../../../../ui/Button';
import { Settings, Globe, Clock } from 'lucide-react';
import { GeneralSettingsData } from '../types';

interface GeneralSettingsProps {
  settings: GeneralSettingsData;
  onUpdate: (settings: GeneralSettingsData) => void;
}

export const GeneralSettings: React.FC<GeneralSettingsProps> = ({ settings, onUpdate }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Settings className="h-6 w-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">General Settings</h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                label="School Name"
                value={settings.schoolName}
                onChange={(e) => onUpdate({ ...settings, schoolName: e.target.value })}
              />
            </div>
            <div>
              <Input
                label="Website URL"
                value={settings.websiteUrl}
                onChange={(e) => onUpdate({ ...settings, websiteUrl: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Select
                label="Language"
                value={settings.language}
                onChange={(value) => onUpdate({ ...settings, language: value })}
                options={['English', 'Hindi', 'Tamil', 'Telugu']}
                icon={Globe}
              />
            </div>
            <div>
              <Select
                label="Timezone"
                value={settings.timezone}
                onChange={(value) => onUpdate({ ...settings, timezone: value })}
                options={['IST', 'UTC', 'GMT']}
                icon={Clock}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};