import React from 'react';
import { format } from 'date-fns';
import { Star, Trash2 } from 'lucide-react';
import { Mail } from '../types';

interface MailListProps {
  mails: Mail[];
  selectedMailId: string | null;
  onSelectMail: (id: string) => void;
  onDeleteMail: (id: string) => void;
}

export const MailList: React.FC<MailListProps> = ({
  mails,
  selectedMailId,
  onSelectMail,
  onDeleteMail
}) => {
  return (
    <div className="h-full bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="divide-y divide-gray-200">
        {mails.map((mail) => (
          <div
            key={mail.id}
            className={`p-4 cursor-pointer hover:bg-gray-50 ${
              selectedMailId === mail.id ? 'bg-blue-50' : ''
            } ${!mail.read ? 'bg-gray-50' : ''}`}
            onClick={() => onSelectMail(mail.id)}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-gray-900">{mail.from}</span>
              <span className="text-xs text-gray-500">
                {format(new Date(mail.date), 'MMM d')}
              </span>
            </div>
            <h3 className={`text-sm ${!mail.read ? 'font-semibold' : ''}`}>
              {mail.subject}
            </h3>
            <p className="text-sm text-gray-600 truncate">{mail.preview}</p>
            <div className="mt-2 flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <Star className={`h-4 w-4 ${
                  mail.starred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
                }`} />
              </button>
              <button 
                className="p-1 hover:bg-gray-100 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteMail(mail.id);
                }}
              >
                <Trash2 className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};