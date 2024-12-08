export interface ScheduleSlot {
  id: string;
  subject: string;
  grade: string;
  section: string;
  room: string;
  time: string;
  date: string;
}

export interface ScheduleStatistics {
  teachingHours: string;
  hoursChange: string;
  totalClasses: string;
  classesChange: string;
  subjects: string;
  subjectsChange: string;
  events: string;
  eventsChange: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'exam' | 'meeting' | 'activity';
}

export interface Reminder {
  id: string;
  title: string;
  description: string;
  time: string;
  priority: 'high' | 'medium' | 'low';
}