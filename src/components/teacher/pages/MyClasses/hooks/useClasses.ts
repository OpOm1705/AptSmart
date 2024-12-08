import { useState } from 'react';
import { Class, ClassStatistics, Lesson, Assignment } from '../types';

const mockClasses: Class[] = [
  {
    id: '1',
    subject: 'Mathematics',
    grade: '10',
    section: 'A',
    totalStudents: 35,
    completedLessons: 24,
    totalLessons: 40,
    schedule: 'Mon, Wed, Fri'
  },
  {
    id: '2',
    subject: 'Mathematics',
    grade: '9',
    section: 'B',
    totalStudents: 32,
    completedLessons: 22,
    totalLessons: 40,
    schedule: 'Tue, Thu'
  }
];

const mockStats: ClassStatistics = {
  totalStudents: '156',
  studentChange: '+12 this week',
  activeClasses: '6',
  classChange: '+1 this month',
  teachingHours: '24',
  hoursChange: '+2 vs last week',
  avgPerformance: '85%',
  performanceChange: '+3.2%'
};

const mockLessons: Lesson[] = [
  {
    id: '1',
    subject: 'Mathematics',
    grade: '10',
    section: 'A',
    time: '10:30 AM',
    topic: 'Quadratic Equations'
  },
  {
    id: '2',
    subject: 'Mathematics',
    grade: '9',
    section: 'B',
    time: '11:30 AM',
    topic: 'Linear Algebra'
  }
];

const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Quadratic Equations Practice',
    class: 'Grade 10-A',
    dueDate: 'Tomorrow',
    status: 'Due Soon',
    submissions: 28
  },
  {
    id: '2',
    title: 'Linear Algebra Quiz',
    class: 'Grade 9-B',
    dueDate: 'Next Week',
    status: 'Active',
    submissions: 15
  }
];

export const useClasses = () => {
  const [classes] = useState<Class[]>(mockClasses);
  const [stats] = useState<ClassStatistics>(mockStats);
  const [upcomingLessons] = useState<Lesson[]>(mockLessons);
  const [assignments] = useState<Assignment[]>(mockAssignments);

  return {
    classes,
    stats,
    upcomingLessons,
    assignments
  };
};