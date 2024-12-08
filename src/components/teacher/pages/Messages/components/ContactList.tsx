import React from 'react';
import { Card } from '../../../../ui/Card';
import { Contact } from '../types';

interface ContactListProps {
  contacts: Contact[];
}

export const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Contacts</h2>
        
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                  contact.status === 'online'
                    ? 'bg-green-500'
                    : contact.status === 'busy'
                    ? 'bg-red-500'
                    : 'bg-gray-500'
                }`} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">{contact.name}</h3>
                <p className="text-xs text-gray-500">{contact.role}</p>
              </div>
              {contact.status === 'offline' && contact.lastSeen && (
                <p className="text-xs text-gray-500 ml-auto">
                  Last seen: {contact.lastSeen}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};