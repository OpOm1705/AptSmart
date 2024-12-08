import React, { useState, useRef, useEffect } from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Send, Paperclip, Image } from 'lucide-react';
import { Chat } from '../types';
import { format } from 'date-fns';

interface ChatWindowProps {
  chat: Chat;
  onSendMessage: (chatId: string, content: string) => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ chat, onSendMessage }) => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat.messages]);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(chat.id, message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className="h-[calc(100vh-20rem)]">
      <div className="flex flex-col h-full">
        {/* Chat Header */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <img
              src={chat.participant.avatar}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-medium text-gray-900">{chat.participant.name}</h3>
              <p className="text-sm text-gray-500">{chat.participant.role}</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chat.messages.map((message, index) => {
            const isOwn = message.sender === 'teacher';
            return (
              <div
                key={message.id}
                className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] ${isOwn ? 'order-2' : 'order-1'}`}>
                  <div className={`rounded-lg p-3 ${
                    isOwn 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <p className={`text-xs mt-1 ${
                    isOwn ? 'text-right' : 'text-left'
                  } text-gray-500`}>
                    {format(new Date(message.timestamp), 'HH:mm')}
                  </p>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                rows={1}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" icon={Paperclip} />
              <Button variant="outline" icon={Image} />
              <Button icon={Send} onClick={handleSend}>Send</Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};