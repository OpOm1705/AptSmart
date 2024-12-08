export interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  type: 'event' | 'exam' | 'holiday';
  isRecurring?: boolean;
  recurringPattern?: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export interface NewEvent {
  title: string;
  description?: string;
  date: string;
  type: 'event' | 'exam' | 'holiday';
  isRecurring: boolean;
  recurringPattern?: 'daily' | 'weekly' | 'monthly' | 'yearly';
}