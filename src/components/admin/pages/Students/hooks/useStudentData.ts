import { useState } from 'react';
import { Student, StudentStatsData, StudentFilters, AIInsight } from '../types';

const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    rollNumber: '1001',
    grade: '10',
    section: 'A',
    attendance: 95,
    performance: 88,
    parentName: 'John Johnson',
    contact: '+91 98765 43210',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Sarah Williams',
    rollNumber: '1002',
    grade: '10',
    section: 'B',
    attendance: 92,
    performance: 95,
    parentName: 'William Smith',
    contact: '+91 98765 43211',
    status: 'Active'
  }
];

const mockStats: StudentStatsData = {
  totalStudents: '1,250',
  totalStudentsChange: '+12.5%',
  avgAttendance: '94%',
  avgAttendanceChange: '+2.1%',
  performanceIndex: '8.5/10',
  performanceIndexChange: '+4.5%',
  achievementRate: '88%',
  achievementRateChange: '+3.8%'
};

const mockInsights: AIInsight[] = [
  {
    title: 'Performance Trend',
    description: 'Overall academic performance has improved by 15% compared to last semester.'
  },
  {
    title: 'Attendance Pattern',
    description: 'Students show higher attendance rates during morning sessions.'
  },
  {
    title: 'Learning Engagement',
    description: 'Interactive learning sessions show 25% higher engagement rates.'
  }
];

export const useStudentData = () => {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [filters, setFilters] = useState<StudentFilters>({
    search: '',
    grade: 'All',
    section: 'All',
    status: 'All'
  });

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                         student.rollNumber.includes(filters.search);
    const matchesGrade = filters.grade === 'All' || student.grade === filters.grade;
    const matchesSection = filters.section === 'All' || student.section === filters.section;
    const matchesStatus = filters.status === 'All' || student.status === filters.status;

    return matchesSearch && matchesGrade && matchesSection && matchesStatus;
  });

  return {
    students: filteredStudents,
    filters,
    setFilters,
    stats: mockStats,
    insights: mockInsights
  };
};