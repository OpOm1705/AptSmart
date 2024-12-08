export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  grade: string;
  section: string;
  attendance: number;
  performance: number;
  parentName: string;
  contact: string;
  status: 'Active' | 'Inactive';
}

export interface StudentStatsData {
  totalStudents: string;
  totalStudentsChange: string;
  avgAttendance: string;
  avgAttendanceChange: string;
  performanceIndex: string;
  performanceIndexChange: string;
  achievementRate: string;
  achievementRateChange: string;
}

export interface StudentFilters {
  search: string;
  grade: string;
  section: string;
  status: string;
}

export interface AIInsight {
  title: string;
  description: string;
}