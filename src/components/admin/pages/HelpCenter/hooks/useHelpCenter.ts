import { useState } from 'react';
import { FAQ, SupportTicket, Documentation } from '../types';

const mockFaqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I reset my password?',
    answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your registered email address.',
    category: 'Account',
    links: [
      { text: 'Password Reset Guide', url: '#' },
      { text: 'Security Best Practices', url: '#' }
    ]
  },
  {
    id: '2',
    question: 'How do I generate student reports?',
    answer: 'Navigate to the Reports section, select the desired parameters, and click on "Generate Report". You can export the report in various formats.',
    category: 'Reports',
    links: [
      { text: 'Reporting Guide', url: '#' }
    ]
  }
];

const mockTickets: SupportTicket[] = [
  {
    id: '1',
    subject: 'Unable to access attendance module',
    description: 'Getting an error when trying to mark attendance',
    category: 'Technical Issue',
    priority: 'High',
    status: 'In Progress',
    createdAt: '2024-03-15T10:30:00Z'
  },
  {
    id: '2',
    subject: 'Feature request: Bulk student import',
    description: 'Need ability to import student data from Excel',
    category: 'Feature Request',
    priority: 'Medium',
    status: 'Open',
    createdAt: '2024-03-14T15:45:00Z'
  }
];

const mockDocs: Documentation[] = [
  {
    id: '1',
    title: 'User Manual',
    description: 'Complete guide to using the school management system',
    category: 'General',
    url: '#',
    updatedAt: '2024-03-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Administrator Guide',
    description: 'Advanced settings and configuration documentation',
    category: 'Technical',
    url: '#',
    updatedAt: '2024-03-10T00:00:00Z'
  }
];

export const useHelpCenter = () => {
  const [faqs] = useState<FAQ[]>(mockFaqs);
  const [tickets, setTickets] = useState<SupportTicket[]>(mockTickets);
  const [docs] = useState<Documentation[]>(mockDocs);

  const createTicket = (newTicket: Omit<SupportTicket, 'id' | 'status' | 'createdAt'>) => {
    const ticket: SupportTicket = {
      id: String(tickets.length + 1),
      status: 'Open',
      createdAt: new Date().toISOString(),
      ...newTicket
    };
    setTickets([ticket, ...tickets]);
  };

  return {
    faqs,
    tickets,
    docs,
    createTicket
  };
};