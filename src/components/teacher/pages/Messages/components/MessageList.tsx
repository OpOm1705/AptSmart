import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Search, Plus } from 'lucide-react';
import { Chat } from '../types';
import { format } from 'date-fns';

interface MessageListProps {
  messages: Chat[];
  selectedChat: string | null;
  onSelectChat: (chatId: string) => void;
  onCompose: () => void;
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  selectedChat,
  onSelectChat,
  onCompose
}) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
          <Button icon={Plus} onClick={onCompose}>Compose</Button>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="space-y-2">
          {messages.map((chat) => (
            <div
              key={chat.id}
              className={`p-4 rounded-lg cursor-pointer transition-colors ${
                selectedChat === chat.id
                  ? 'bg-blue-50'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => onSelectChat(chat.id)}
            >
              <div className="flex items-start space-x-3">
                <img
                  src={chat.participant.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {chat.participant.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {chat.participant.role}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {format(new Date(chat.lastMessage.timestamp), 'HH:mm')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate mt-1">
                    {chat.lastMessage.content}
                  </p>
                  {chat.unreadCount > 0 && (
                    <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-blue-600 rounded-full mt-1">
                      {chat.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};