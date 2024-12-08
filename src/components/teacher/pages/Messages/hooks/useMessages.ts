import { useState } from 'react';
import { Chat, Contact, MessageStatistics, NewMessage } from '../types';

const mockChats: Chat[] = [
  {
    id: '1',
    participant: {
      id: 'p1',
      name: 'John Smith',
      role: 'Parent',
      avatar: 'https://ui-avatars.com/api/?name=John+Smith'
    },
    messages: [
      {
        id: 'm1',
        content: 'Hello, I wanted to discuss my child\'s progress',
        sender: 'parent',
        timestamp: '2024-03-15T10:30:00Z',
        read: true
      },
      {
        id: 'm2',
        content: 'Of course! I\'d be happy to discuss that with you.',
        sender: 'teacher',
        timestamp: '2024-03-15T10:35:00Z',
        read: true
      }
    ],
    lastMessage: {
      id: 'm2',
      content: 'Of course! I\'d be happy to discuss that with you.',
      sender: 'teacher',
      timestamp: '2024-03-15T10:35:00Z',
      read: true
    },
    unreadCount: 0
  }
];

const mockContacts: Contact[] = [
  {
    id: 'p1',
    name: 'John Smith',
    role: 'Parent',
    avatar: 'https://ui-avatars.com/api/?name=John+Smith',
    status: 'online'
  },
  {
    id: 'p2',
    name: 'Sarah Johnson',
    role: 'Parent',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson',
    status: 'offline',
    lastSeen: '2 hours ago'
  }
];

const mockStats: MessageStatistics = {
  totalMessages: '156',
  messageChange: '+12 this week',
  unreadMessages: '5',
  unreadChange: '-2 since yesterday',
  activeChats: '8',
  chatChange: '+3 this month',
  responseRate: '95%',
  responseChange: '+2.3%'
};

export const useMessages = () => {
  const [messages, setMessages] = useState<Chat[]>(mockChats);
  const [contacts] = useState<Contact[]>(mockContacts);
  const [stats] = useState<MessageStatistics>(mockStats);

  const sendMessage = (chatId: string, content: string) => {
    const newMessage = {
      id: `m${Date.now()}`,
      content,
      sender: 'teacher',
      timestamp: new Date().toISOString(),
      read: true
    };

    setMessages(prevMessages =>
      prevMessages.map(chat =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [...chat.messages, newMessage],
              lastMessage: newMessage
            }
          : chat
      )
    );
  };

  const sendNewMessage = (message: NewMessage) => {
    // Implementation for sending new messages
    console.log('Sending new message:', message);
  };

  return {
    messages,
    contacts,
    stats,
    sendMessage,
    sendNewMessage
  };
};