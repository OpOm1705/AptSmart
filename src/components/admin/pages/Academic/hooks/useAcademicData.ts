import { useState } from 'react';
import { AcademicData } from '../types';

const mockData: AcademicData = {
  overview: {
    activeClasses: 24,
    teacherStudentRatio: '1:25',
    avgClassDuration: '45 min',
    performanceIndex: '8.5/10',
    classDistribution: [
      { label: 'Primary', value: '12' },
      { label: 'Secondary', value: '8' },
      { label: 'Higher Secondary', value: '4' }
    ],
    staffingDetails: [
      { label: 'Teachers', value: '45' },
      { label: 'Students', value: '1125' }
    ],
    scheduleDetails: [
      { label: 'Classes per day', value: '8' },
      { label: 'Total hours', value: '6' }
    ],
    performanceDetails: [
      { label: 'Academic', value: '8.7' },
      { label: 'Co-curricular', value: '8.2' }
    ]
  },
  classes: [
    {
      id: '1',
      grade: '10',
      sections: ['A', 'B', 'C'],
      totalStudents: 120,
      teachers: [
        { id: '1', name: 'John Smith', section: 'A' },
        { id: '2', name: 'Sarah Johnson', section: 'B' },
        { id: '3', name: 'Michael Brown', section: 'C' }
      ],
      subjects: ['Mathematics', 'Science', 'English', 'Social Studies']
    },
    {
      id: '2',
      grade: '11',
      sections: ['A', 'B'],
      totalStudents: 80,
      teachers: [
        { id: '4', name: 'Emily Davis', section: 'A' },
        { id: '5', name: 'Robert Wilson', section: 'B' }
      ],
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science']
    }
  ],
  curriculum: {
    subjects: [
      {
        id: '1',
        name: 'Mathematics',
        grade: '10',
        completedUnits: 6,
        totalUnits: 10,
        status: 'On Track'
      },
      {
        id: '2',
        name: 'Physics',
        grade: '11',
        completedUnits: 4,
        totalUnits: 8,
        status: 'Behind'
      },
      {
        id: '3',
        name: 'English',
        grade: '10',
        completedUnits: 7,
        totalUnits: 8,
        status: 'Ahead'
      }
    ]
  },
  aiInsights: [
    {
      title: 'Class Size Optimization',
      description: 'Consider splitting Class 10 Section A into two sections to maintain optimal teacher-student ratio.',
      action: 'Review Class Distribution'
    },
    {
      title: 'Curriculum Enhancement',
      description: 'Based on performance data, introducing supplementary Mathematics sessions could improve results.',
      action: 'View Detailed Analysis'
    },
    {
      title: 'Resource Allocation',
      description: 'Science lab utilization can be optimized by adjusting practical session schedules.',
      action: 'Optimize Schedule'
    }
  ]
};

export const useAcademicData = () => {
  const [academicData, setAcademicData] = useState<AcademicData>(mockData);

  const updateAcademicData = (type: string, data: any) => {
    setAcademicData(prev => ({
      ...prev,
      [type]: data
    }));
  };

  return {
    academicData,
    updateAcademicData
  };
};