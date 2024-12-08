import { TimeSlot, Event } from './types';

export const mockTimeSlots: TimeSlot[] = [
  {
    id: '1',
    subject: 'Mathematics',
    teacher: 'John Smith',
    class: '10',
    section: 'A',
    room: '101',
    time: '8:00 AM',
    day: 'Monday'
  },
  {
    id: '2',
    subject: 'Physics',
    teacher: 'Sarah Johnson',
    class: '10',
    section: 'A',
    room: '102',
    time: '9:00 AM',
    day: 'Monday'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Mid-Term Examination',
    type: 'exam',
    date: '2024-03-15',
    description: 'Mathematics and Science examinations'
  },
  {
    id: '2',
    title: 'Annual Sports Day',
    type: 'event',
    date: '2024-03-20',
    description: 'School-wide sports competition'
  }
];