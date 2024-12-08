export interface Class {
  id: string;
  subject: string;
  grade: string;
  section: string;
  totalStudents: number;
  completedLessons: number;
  totalLessons: number;
  schedule: string;
}

export interface ClassStatistics {
  totalStudents: string;
  studentChange: string;
  activeClasses: string;
  classChange: string;
  teachingHours: string;
  hoursChange: string;
  avgPerformance: string;
  performanceChange: string;
}

export interface Lesson {
  id: string;
  subject: string;
  grade: string;
  section: string;
  time: string;
  topic: string;
}

export interface Assignment {
  id: string;
  title: string;
  class: string;
  dueDate: string;
  status: 'Due Soon' | 'Active';
  submissions: number;
}