import React, { useState } from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { CreateTicketModal } from './CreateTicketModal';
import { NewTicket } from '../types';

interface SupportChannelsProps {
  onCreateTicket: (ticket: NewTicket) => void;
}

export const SupportChannels: React.FC<SupportChannelsProps> = ({ onCreateTicket }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Support Channels</h2>

          <div className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-900">Email Support</h3>
                  <p className="text-sm text-blue-700">support@aptsmart.com</p>
                </div>
              </div>
              <p className="text-xs text-blue-600">Response within 24 hours</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-green-900">Phone Support</h3>
                  <p className="text-sm text-green-700">+1 (800) 123-4567</p>
                </div>
              </div>
              <p className="text-xs text-green-600">Available 9 AM - 6 PM IST</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-purple-900">Raise a Ticket</h3>
                  <p className="text-sm text-purple-700">Get help from our team</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-2"
                onClick={() => setIsModalOpen(true)}
              >
                Create Ticket
              </Button>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Support Hours</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              <p>Saturday: 9:00 AM - 1:00 PM IST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </Card>

      <CreateTicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onCreateTicket}
      />
    </>
  );
};