import React from 'react';
import { Card } from '../../../../ui/Card';
import { Select } from '../../../../ui/Select';
import { Settings, Globe, Calendar, GraduationCap } from 'lucide-react';
import { PreferenceSettings as PreferenceSettingsType } from '../types';

interface PreferenceSettingsProps {
  preferences: PreferenceSettingsType;
  onUpdate: (data: Partial<PreferenceSettingsType>) => void;
}

export const PreferenceSettings: React.FC<PreferenceSettingsProps> = ({
  preferences,
  onUpdate
}) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Settings className="h-6 w-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="h-5 w-5 text-gray-400" />
              <h3 className="font-medium text-gray-900">Theme</h3>
            </div>
            <Select
              value={preferences.theme}
              onChange={(value) => onUpdate({ theme: value as PreferenceSettingsType['theme'] })}
              options={['light', 'dark', 'system']}
            />
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-5 w-5 text-gray-400" />
              <h3 className="font-medium text-gray-900">Language</h3>
            </div>
            <Select
              value={preferences.language}
              onChange={(value) => onUpdate({ language: value })}
              options={['English', 'Spanish', 'French', 'German']}
            />
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-5 w-5 text-gray-400" />
              <h3 className="font-medium text-gray-900">Calendar View</h3>
            </div>
            <Select
              value={preferences.calendarView}
              onChange={(value) => onUpdate({ calendarView: value as PreferenceSettingsType['calendarView'] })}
              options={['week', 'month']}
            />
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-5 w-5 text-gray-400" />
              <h3 className="font-medium text-gray-900">Grade Display Format</h3>
            </div>
            <Select
              value={preferences.gradeDisplayFormat}
              onChange={(value) => onUpdate({ gradeDisplayFormat: value as PreferenceSettingsType['gradeDisplayFormat'] })}
              options={['percentage', 'letter', 'both']}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};