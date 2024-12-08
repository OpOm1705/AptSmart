import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Input } from '../../../../ui/Input';
import { UserCircle, Camera } from 'lucide-react';
import { Profile } from '../types';

interface ProfileSettingsProps {
  profile: Profile;
  onUpdate: (data: Partial<Profile>) => void;
}

export const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  profile,
  onUpdate
}) => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Settings</h2>

        <div className="flex items-start space-x-6">
          <div className="relative">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt="Profile"
                className="w-24 h-24 rounded-lg object-cover"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                <UserCircle className="w-12 h-12 text-gray-400" />
              </div>
            )}
            <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow-lg border border-gray-200">
              <Camera className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Full Name"
                value={profile.fullName}
                onChange={(e) => onUpdate({ fullName: e.target.value })}
              />
              <Input
                label="Email"
                type="email"
                value={profile.email}
                onChange={(e) => onUpdate({ email: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Phone"
                type="tel"
                value={profile.phone}
                onChange={(e) => onUpdate({ phone: e.target.value })}
              />
              <Input
                label="Department"
                value={profile.department}
                onChange={(e) => onUpdate({ department: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                value={profile.bio}
                onChange={(e) => onUpdate({ bio: e.target.value })}
                rows={3}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subjects
              </label>
              <div className="flex flex-wrap gap-2">
                {profile.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {subject}
                  </span>
                ))}
                <button className="px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50">
                  + Add Subject
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button>Save Changes</Button>
        </div>
      </div>
    </Card>
  );
};