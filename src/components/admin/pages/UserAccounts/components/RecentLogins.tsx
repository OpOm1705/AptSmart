import React from 'react';
import { Card } from '../../../../ui/Card';
import { Clock } from 'lucide-react';

interface RecentLogin {
  id: string;
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  timestamp: string;
  status: 'Active' | 'Suspended';
}

interface RecentLoginsProps {
  logins: RecentLogin[];
}

export const RecentLogins: React.FC<RecentLoginsProps> = ({ logins }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">Recent Logins</h2>
          </div>
        </div>

        <div className="space-y-4">
          {logins.map((login) => (
            <div
              key={login.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={login.user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(login.user.name)}&background=random`}
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{login.user.name}</p>
                  <p className="text-xs text-gray-500">{login.user.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  login.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {login.status}
                </span>
                <span className="text-sm text-gray-500">{login.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};