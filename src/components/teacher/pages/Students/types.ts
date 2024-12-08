export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  grade: string;
  section: string;
  performance: number;
  attendance: number;
  status: 'Active' | 'Inactive';
}

export interface StudentStatistics {
  totalStudents: string;
  studentChange: string;
  avgPerformance: string;
  performanceChange: string;
  attendanceRate: string;
  attendanceChange: string;
  topPerformers: string;
  topPerformersChange: string;
}

export interface StudentFilters {
  search: string;
  grade: string;
  section: string;
  performance: string;
}