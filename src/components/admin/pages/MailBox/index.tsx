import React, { useState } from 'react';
import { AdminLayout } from '../../AdminLayout';
import { MailList } from './components/MailList';
import { MailContent } from './components/MailContent';
import { MailSidebar } from './components/MailSidebar';
import { ComposeModal } from './components/ComposeModal';
import { useMail } from './hooks/useMail';

export const MailBox: React.FC = () => {
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [selectedMailId, setSelectedMailId] = useState<string | null>(null);
  const { mails, folders, sendMail, deleteMail, markAsRead } = useMail();

  const selectedMail = selectedMailId ? mails.find(mail => mail.id === selectedMailId) : null;

  return (
    <AdminLayout>
      <div className="h-[calc(100vh-10rem)] flex gap-6">
        <div className="w-64 flex-shrink-0">
          <MailSidebar 
            folders={folders}
            onCompose={() => setIsComposeOpen(true)}
          />
        </div>

        <div className="flex-1 flex gap-6 overflow-hidden">
          <div className="w-96 flex-shrink-0">
            <MailList 
              mails={mails}
              selectedMailId={selectedMailId}
              onSelectMail={setSelectedMailId}
              onDeleteMail={deleteMail}
            />
          </div>

          <div className="flex-1">
            {selectedMail ? (
              <MailContent 
                mail={selectedMail}
                onClose={() => setSelectedMailId(null)}
                onDelete={deleteMail}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Select an email to view
              </div>
            )}
          </div>
        </div>

        <ComposeModal
          isOpen={isComposeOpen}
          onClose={() => setIsComposeOpen(false)}
          onSend={sendMail}
        />
      </div>
    </AdminLayout>
  );
};