import { LucideIcon } from 'lucide-react';

export interface TimeSlot {
  id: string;
  subject: string;
  teacher: string;
  class: string;
  section: string;
  room: string;
  time: string;
  day: string;
}

export interface Event {
  id: string;
  title: string;
  type: 'exam' | 'holiday' | 'event';
  date: string;
  description: string;
}

export interface InsightItem {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconBg: string;
  iconColor: string;
}

export interface Recommendation {
  text: string;
  priority: 'high' | 'medium' | 'low';
}