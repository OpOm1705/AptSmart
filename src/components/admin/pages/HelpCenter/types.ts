export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  links?: Array<{
    text: string;
    url: string;
  }>;
}

export interface SupportTicket {
  id: string;
  subject: string;
  description: string;
  category: string;
  priority: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  createdAt: string;
}

export interface Documentation {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  updatedAt: string;
}