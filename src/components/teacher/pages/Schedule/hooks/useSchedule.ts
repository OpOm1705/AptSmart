import { useState } from 'react';
import { ScheduleSlot, ScheduleStatistics, Event, Reminder } from '../types';

const mockSchedule: ScheduleSlot[] = [
  {
    id: '1',
    subject: 'Mathematics',
    grade: '10',
    section: 'A',
    room: '101',
    time: '8:00 AM',
    date: '2024-03-18'
  },
  {
    id: '2',
    subject: 'Mathematics',
    grade: '9',
    section: 'B',
    room: '102',
    time: '10:00 AM',
    date: '2024-03-18'
  }
];

const mockStats: ScheduleStatistics = {
  teachingHours: '24',
  hoursChange: '+2 this week',
  totalClasses: '6',
  classesChange: '+1 vs last week',
  subjects: '3',
  subjectsChange: 'No change',
  events: '4',
  eventsChange: '+2 upcoming'
};

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Math Quiz - Grade 10',
    description: 'Chapter 5: Quadratic Equations',
    date: 'Tomorrow, 10:00 AM',
    type: 'exam'
  },
  {
    id: '2',
    title: 'Department Meeting',
    description: 'Monthly progress review',
    date: 'Wednesday, 2:00 PM',
    type: 'meeting'
  }
];

const mockReminders: Reminder[] = [
  {
    id: '1',
    title: 'Prepare Quiz Papers',
    description: 'For Grade 10 Mathematics quiz tomorrow',
    time: 'Today, 4:00 PM',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Submit Progress Reports',
    description: 'Monthly progress reports due',
    time: 'Tomorrow, 2:00 PM',
    priority: 'medium'
  }
];

export const useSchedule = () => {
  const [schedule] = useState<ScheduleSlot[]>(mockSchedule);
  const [stats] = useState<ScheduleStatistics>(mockStats);
  const [events] = useState<Event[]>(mockEvents);
  const [reminders] = useState<Reminder[]>(mockReminders);

  return {
    schedule,
    stats,
    events,
    reminders
  };
};