import React, { useState } from 'react';
import { AdminLayout } from '../../AdminLayout';
import { MailSidebar } from './components/MailSidebar';
import { MessageList } from './components/MessageList';
import { MessageView } from './components/MessageView';
import { ComposeModal } from './components/ComposeModal';
import { useMail } from './hooks/useMail';
import { Message } from './types';

export const Mail: React.FC = () => {
  const { messages, folders, labels, filters, updateFilters } = useMail();
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <AdminLayout>
      <div className="flex h-[calc(100vh-4rem)]">
        <MailSidebar
          folders={folders}
          labels={labels}
          filters={filters}
          onUpdateFilters={updateFilters}
          onCompose={() => setIsComposeOpen(true)}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        <div className="flex flex-1 overflow-hidden">
          <div className={`${selectedMessage ? 'hidden md:block' : ''} w-full md:w-96 border-r`}>
            <MessageList
              messages={messages}
              selectedMessage={selectedMessage}
              onSelectMessage={setSelectedMessage}
            />
          </div>

          {selectedMessage && (
            <div className="flex-1">
              <MessageView
                message={selectedMessage}
                onClose={() => setSelectedMessage(null)}
                onReply={() => setIsComposeOpen(true)}
              />
            </div>
          )}
        </div>

        <ComposeModal
          isOpen={isComposeOpen}
          onClose={() => setIsComposeOpen(false)}
          replyTo={selectedMessage}
        />
      </div>
    </AdminLayout>
  );
};