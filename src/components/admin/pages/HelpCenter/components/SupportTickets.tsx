import React, { useState } from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Ticket, Plus, MessageCircle } from 'lucide-react';
import { SupportTicket } from '../types';
import { CreateTicketModal } from './CreateTicketModal';

interface SupportTicketsProps {
  tickets: SupportTicket[];
  onCreateTicket: (ticket: Omit<SupportTicket, 'id' | 'status' | 'createdAt'>) => void;
}

export const SupportTickets: React.FC<SupportTicketsProps> = ({ tickets, onCreateTicket }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <Ticket className="h-6 w-6 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Support Tickets</h2>
            </div>
            <Button icon={Plus} onClick={() => setIsModalOpen(true)}>
              Create Ticket
            </Button>
          </div>

          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{ticket.subject}</h3>
                    <p className="text-sm text-gray-500 mt-1">{ticket.description}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    ticket.status === 'Open'
                      ? 'bg-green-100 text-green-800'
                      : ticket.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    Created: {new Date(ticket.createdAt).toLocaleDateString()}
                  </span>
                  <Button variant="outline" size="sm" icon={MessageCircle}>
                    View Conversation
                  </Button>
                </div>
              </div>
            ))}
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