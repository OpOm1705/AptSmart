export interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  read: boolean;
}

export interface Chat {
  id: string;
  participant: {
    id: string;
    name: string;
    role: string;
    avatar: string;
  };
  messages: Message[];
  lastMessage: Message;
  unreadCount: number;
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'offline' | 'busy';
  lastSeen?: string;
}

export interface MessageStatistics {
  totalMessages: string;
  messageChange: string;
  unreadMessages: string;
  unreadChange: string;
  activeChats: string;
  chatChange: string;
  responseRate: string;
  responseChange: string;
}

export interface NewMessage {
  recipientId: string;
  content: string;
  attachments?: File[];
}