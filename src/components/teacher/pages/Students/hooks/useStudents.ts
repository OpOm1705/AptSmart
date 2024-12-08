import { useState } from 'react';
import { Student, StudentStatistics, StudentFilters } from '../types';

const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    rollNumber: '1001',
    grade: '10',
    section: 'A',
    performance: 92,
    attendance: 95,
    status: 'Active'
  },
  {
    id: '2',
    name: 'Sarah Williams',
    rollNumber: '1002',
    grade: '10',
    section: 'A',
    performance: 88,
    attendance: 92,
    status: 'Active'
  },
  {
    id: '3',
    name: 'Michael Brown',
    rollNumber: '1003',
    grade: '10',
    section: 'A',
    performance: 78,
    attendance: 85,
    status: 'Active'
  }
];

const mockStats: StudentStatistics = {
  totalStudents: '156',
  studentChange: '+12 this week',
  avgPerformance: '85%',
  performanceChange: '+2.3%',
  attendanceRate: '92%',
  attendanceChange: '+1.5%',
  topPerformers: '45',
  topPerformersChange: '+5'
};

export const useStudents = () => {
  const [students] = useState<Student[]>(mockStudents);
  const [stats] = useState<StudentStatistics>(mockStats);
  const [filters, setFilters] = useState<StudentFilters>({
    search: '',
    grade: 'All',
    section: 'All',
    performance: 'All'
  });

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                         student.rollNumber.includes(filters.search);
    const matchesGrade = filters.grade === 'All' || student.grade === filters.grade;
    const matchesSection = filters.section === 'All' || student.section === filters.section;
    
    let matchesPerformance = true;
    if (filters.performance === 'Above 90%') {
      matchesPerformance = student.performance >= 90;
    } else if (filters.performance === 'Above 80%') {
      matchesPerformance = student.performance >= 80;
    } else if (filters.performance === 'Below 60%') {
      matchesPerformance = student.performance < 60;
    }

    return matchesSearch && matchesGrade && matchesSection && matchesPerformance;
  });

  return {
    students: filteredStudents,
    stats,
    filters,
    setFilters
  };
};