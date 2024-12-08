import React, { useState } from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { MoreVertical, MessageSquare, Trash2, Download } from 'lucide-react';
import { Menu } from '@headlessui/react';
import { format } from 'date-fns';
import { Ticket } from '../types';

interface TicketListProps {
  tickets: Ticket[];
  onUpdate: (ticketId: string, updates: Partial<Ticket>) => void;
  onDelete: (ticketId: string) => void;
}

export const TicketList: React.FC<TicketListProps> = ({
  tickets,
  onUpdate,
  onDelete
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredTickets = selectedStatus === 'all'
    ? tickets
    : tickets.filter(ticket => ticket.status === selectedStatus);

  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Support Tickets</h2>
          <div className="flex space-x-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="text-sm border-gray-300 rounded-md"
            >
              <option value="all">All Tickets</option>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
            <Button variant="outline" icon={Download}>Export</Button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-medium text-gray-900">
                      {ticket.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      ticket.status === 'open'
                        ? 'bg-green-100 text-green-800'
                        : ticket.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {ticket.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{ticket.message}</p>
                  <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                    <span>From: {ticket.user}</span>
                    <span>Created: {format(new Date(ticket.createdAt), 'MMM d, yyyy')}</span>
                    <span>ID: #{ticket.id}</span>
                  </div>
                </div>

                <Menu as="div" className="relative">
                  <Menu.Button className="p-2 hover:bg-gray-200 rounded-full">
                    <MoreVertical className="h-4 w-4 text-gray-500" />
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } group flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                          onClick={() => {/* Handle reply */}}
                        >
                          <MessageSquare className="h-4 w-4 mr-3 text-gray-400" />
                          Reply
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } group flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                          onClick={() => onUpdate(ticket.id, {
                            status: ticket.status === 'open' ? 'in-progress' : 'resolved'
                          })}
                        >
                          Mark as {ticket.status === 'open' ? 'In Progress' : 'Resolved'}
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-red-50' : ''
                          } group flex items-center w-full px-4 py-2 text-sm text-red-600`}
                          onClick={() => onDelete(ticket.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-3 text-red-400" />
                          Delete Ticket
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          ))}

          {filteredTickets.length === 0 && (
            <div className="text-center py-6">
              <p className="text-sm text-gray-500">No tickets found</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};