import React, { useState } from 'react';
import { TeacherLayout } from '../../TeacherLayout';
import { MessageList } from './components/MessageList';
import { MessageStats } from './components/MessageStats';
import { ChatWindow } from './components/ChatWindow';
import { ContactList } from './components/ContactList';
import { ComposeMessageModal } from './components/ComposeMessageModal';
import { useMessages } from './hooks/useMessages';

export const Messages: React.FC = () => {
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const { messages, contacts, stats, sendMessage } = useMessages();

  const activeChat = messages.find(chat => chat.id === selectedChat);

  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <p className="text-sm text-gray-600">Communicate with students, parents, and staff</p>
        </div>

        <MessageStats stats={stats} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-6">
            <MessageList 
              messages={messages}
              selectedChat={selectedChat}
              onSelectChat={setSelectedChat}
              onCompose={() => setIsComposeOpen(true)}
            />
            <ContactList contacts={contacts} />
          </div>
          <div className="lg:col-span-8">
            {activeChat ? (
              <ChatWindow 
                chat={activeChat}
                onSendMessage={sendMessage}
              />
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <p className="text-gray-500">Select a conversation or start a new one</p>
              </div>
            )}
          </div>
        </div>

        <ComposeMessageModal
          isOpen={isComposeOpen}
          onClose={() => setIsComposeOpen(false)}
          contacts={contacts}
          onSend={sendMessage}
        />
      </div>
    </TeacherLayout>
  );
};