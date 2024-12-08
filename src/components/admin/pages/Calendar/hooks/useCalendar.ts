import { useState } from 'react';
import { Event, NewEvent } from '../types';

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Final Exams',
    description: 'End of term examinations',
    date: '2024-03-20',
    type: 'exam'
  },
  {
    id: '2',
    title: 'Spring Break',
    description: 'School closed for spring break',
    date: '2024-03-25',
    type: 'holiday'
  },
  {
    id: '3',
    title: 'Parent-Teacher Meeting',
    description: 'Annual parent-teacher conference',
    date: '2024-03-18',
    type: 'event'
  }
];

export const useCalendar = () => {
  const [events, setEvents] = useState<Event[]>(mockEvents);

  const createEvent = (newEvent: NewEvent) => {
    const event: Event = {
      id: String(events.length + 1),
      ...newEvent
    };
    setEvents([...events, event]);
  };

  const updateEvent = (eventId: string, updates: Partial<Event>) => {
    setEvents(prevEvents =>
      prevEvents.map(event =>
        event.id === eventId ? { ...event, ...updates } : event
      )
    );
  };

  const deleteEvent = (eventId: string) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
  };

  return {
    events,
    createEvent,
    updateEvent,
    deleteEvent
  };
};