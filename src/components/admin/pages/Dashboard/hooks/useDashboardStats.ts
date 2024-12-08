import { useState } from 'react';

interface DashboardStats {
  totalStudents: string;
  studentChange: string;
  activeStaff: string;
  staffChange: string;
  attendanceRate: string;
  attendanceChange: string;
  performance: string;
  performanceChange: string;
}

export const useDashboardStats = () => {
  const [stats] = useState<DashboardStats>({
    totalStudents: '2,543',
    studentChange: '+12.5%',
    activeStaff: '156',
    staffChange: '+3.2%',
    attendanceRate: '94.8%',
    attendanceChange: '+2.3%',
    performance: '87.2%',
    performanceChange: '+5.7%'
  });

  return { stats };
};