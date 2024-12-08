import { Clock, Users, BookOpen } from 'lucide-react';
import { InsightItem, Recommendation } from './types';

export const PERIODS = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];

export const INSIGHTS: InsightItem[] = [
  {
    icon: Clock,
    title: 'Time Distribution',
    description: 'Core subjects are optimally distributed during peak attention hours (8 AM - 11 AM)',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    icon: Users,
    title: 'Teacher Workload',
    description: 'Teacher schedules are balanced with adequate breaks between classes',
    bgColor: 'bg-green-50',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    icon: BookOpen,
    title: 'Subject Balance',
    description: 'Practical and theory sessions are well-distributed throughout the week',
    bgColor: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    text: 'Consider swapping Monday\'s Mathematics and Physics slots for better student engagement',
    priority: 'high'
  },
  {
    text: 'Add a short break between consecutive practical sessions',
    priority: 'medium'
  },
  {
    text: 'Distribute physical education classes more evenly across the week',
    priority: 'low'
  }
];

export const EVENT_STYLES = {
  exam: {
    bg: 'bg-purple-100',
    text: 'text-purple-600'
  },
  holiday: {
    bg: 'bg-green-100',
    text: 'text-green-600'
  },
  event: {
    bg: 'bg-blue-100',
    text: 'text-blue-600'
  }
} as const;