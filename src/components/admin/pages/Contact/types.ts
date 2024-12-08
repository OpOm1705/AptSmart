export interface Ticket {
  id: string;
  title: string;
  message: string;
  user: string;
  status: 'open' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: 'technical' | 'billing' | 'feature' | 'other';
  createdAt: string;
}

export interface NewTicket {
  title: string;
  message: string;
  priority: Ticket['priority'];
  category: Ticket['category'];
}

export interface TicketStatistics {
  totalTickets: string;
  totalChange: string;
  openTickets: string;
  openChange: string;
  inProgressTickets: string;
  progressChange: string;
  resolvedTickets: string;
  resolvedChange: string;
}