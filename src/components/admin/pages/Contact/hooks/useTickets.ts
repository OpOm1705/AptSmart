import { useState } from 'react';
import { Ticket, TicketStatistics, NewTicket } from '../types';

const mockTickets: Ticket[] = [
  {
    id: '1',
    title: 'Login Issues',
    message: 'Unable to access the system with correct credentials',
    user: 'John Smith',
    status: 'open',
    priority: 'high',
    category: 'technical',
    createdAt: '2024-03-15T10:30:00Z'
  },
  {
    id: '2',
    title: 'Feature Request',
    message: 'Would like to request a new reporting feature',
    user: 'Sarah Johnson',
    status: 'in-progress',
    priority: 'medium',
    category: 'feature',
    createdAt: '2024-03-14T15:45:00Z'
  }
];

const mockStats: TicketStatistics = {
  totalTickets: '45',
  totalChange: '+5 this week',
  openTickets: '12',
  openChange: '-2 from yesterday',
  inProgressTickets: '8',
  progressChange: '+3 this week',
  resolvedTickets: '25',
  resolvedChange: '+4 this week'
};

export const useTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);
  const [stats] = useState<TicketStatistics>(mockStats);

  const createTicket = (newTicket: NewTicket) => {
    const ticket: Ticket = {
      id: String(tickets.length + 1),
      ...newTicket,
      user: 'Admin',
      status: 'open',
      createdAt: new Date().toISOString()
    };
    setTickets([ticket, ...tickets]);
  };

  const updateTicket = (ticketId: string, updates: Partial<Ticket>) => {
    setTickets(prevTickets =>
      prevTickets.map(ticket =>
        ticket.id === ticketId ? { ...ticket, ...updates } : ticket
      )
    );
  };

  const deleteTicket = (ticketId: string) => {
    setTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== ticketId));
  };

  return {
    tickets,
    stats,
    createTicket,
    updateTicket,
    deleteTicket
  };
};