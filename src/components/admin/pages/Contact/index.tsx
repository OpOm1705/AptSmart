import React from 'react';
import { AdminLayout } from '../../AdminLayout';
import { TicketList } from './components/TicketList';
import { TicketStats } from './components/TicketStats';
import { SupportChannels } from './components/SupportChannels';
import { useTickets } from './hooks/useTickets';

export const Contact: React.FC = () => {
  const { tickets, stats, createTicket, updateTicket, deleteTicket } = useTickets();

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Support & Contact</h1>
          <p className="text-sm text-gray-600">Manage support tickets and inquiries</p>
        </div>

        <TicketStats stats={stats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TicketList 
              tickets={tickets}
              onUpdate={updateTicket}
              onDelete={deleteTicket}
            />
          </div>
          <div>
            <SupportChannels onCreateTicket={createTicket} />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};