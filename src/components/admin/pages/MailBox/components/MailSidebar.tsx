import React from 'react';
import { Button } from '../../../../ui/Button';
import { Pen, Inbox, Send, Star, Archive, Trash } from 'lucide-react';
import { MailFolder } from '../types';

interface MailSidebarProps {
  folders: MailFolder[];
  onCompose: () => void;
}

export const MailSidebar: React.FC<MailSidebarProps> = ({ folders, onCompose }) => {
  return (
    <div className="h-full bg-white rounded-lg shadow-sm p-4">
      <Button
        icon={Pen}
        className="w-full mb-6"
        onClick={onCompose}
      >
        Compose
      </Button>

      <nav className="space-y-1">
        {folders.map((folder) => {
          const Icon = folder.icon;
          return (
            <a
              key={folder.id}
              href="#"
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                folder.active
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className={`h-5 w-5 mr-3 ${
                folder.active ? 'text-blue-700' : 'text-gray-400'
              }`} />
              <span className="flex-1">{folder.name}</span>
              {folder.count > 0 && (
                <span className={`ml-3 text-xs font-medium rounded-full px-2 py-0.5 ${
                  folder.active
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {folder.count}
                </span>
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
};