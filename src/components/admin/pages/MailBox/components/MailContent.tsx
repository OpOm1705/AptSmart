import React from 'react';
import { format } from 'date-fns';
import { Button } from '../../../../ui/Button';
import { Reply, Forward, Trash2, X } from 'lucide-react';
import { Mail } from '../types';

interface MailContentProps {
  mail: Mail;
  onClose: () => void;
  onDelete: (id: string) => void;
}

export const MailContent: React.FC<MailContentProps> = ({
  mail,
  onClose,
  onDelete
}) => {
  return (
    <div className="h-full bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{mail.subject}</h2>
          <div className="mt-1 text-sm text-gray-600">
            From: <span className="font-medium text-gray-900">{mail.from}</span>
          </div>
          <div className="text-sm text-gray-500">
            {format(new Date(mail.date), 'MMM d, yyyy h:mm a')}
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" icon={Reply}>Reply</Button>
          <Button variant="outline" size="sm" icon={Forward}>Forward</Button>
          <Button 
            variant="outline" 
            size="sm" 
            icon={Trash2}
            onClick={() => {
              onDelete(mail.id);
              onClose();
            }}
          >
            Delete
          </Button>
          <Button
            variant="outline"
            size="sm"
            icon={X}
            onClick={onClose}
          />
        </div>
      </div>

      <div className="prose max-w-none">
        {mail.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {mail.attachments && mail.attachments.length > 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Attachments</h3>
          <div className="grid grid-cols-2 gap-4">
            {mail.attachments.map((attachment, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {attachment.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {attachment.size}
                  </p>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};