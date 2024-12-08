import { useState } from 'react';
import { Assignment, AssignmentStatistics, SubmissionAnalytics, NewAssignment } from '../types';

const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Quadratic Equations Practice',
    subject: 'Mathematics',
    class: 'Grade 10-A',
    dueDate: '2024-03-20',
    totalPoints: 100,
    submissionCount: 28,
    totalStudents: 35,
    status: 'Active',
    type: 'Homework'
  },
  {
    id: '2',
    title: 'Linear Algebra Quiz',
    subject: 'Mathematics',
    class: 'Grade 9-B',
    dueDate: '2024-03-18',
    totalPoints: 50,
    submissionCount: 30,
    totalStudents: 32,
    status: 'Past Due',
    type: 'Quiz'
  }
];

const mockStats: AssignmentStatistics = {
  activeAssignments: '8',
  assignmentChange: '+2 this week',
  avgCompletion: '85%',
  completionChange: '+5.2%',
  avgScore: '78/100',
  scoreChange: '+3.1',
  pendingGrading: '45',
  gradingChange: '-12 from last week'
};

const mockAnalytics: SubmissionAnalytics = {
  onTime: 450,
  late: 50,
  missing: 25,
  total: 525,
  byGrade: {
    'A': 35,
    'B': 40,
    'C': 15,
    'D': 7,
    'F': 3
  }
};

export const useAssignments = () => {
  const [assignments, setAssignments] = useState<Assignment[]>(mockAssignments);
  const [stats] = useState<AssignmentStatistics>(mockStats);
  const [analytics] = useState<SubmissionAnalytics>(mockAnalytics);

  const createAssignment = (newAssignment: NewAssignment) => {
    const assignment: Assignment = {
      id: String(assignments.length + 1),
      ...newAssignment,
      submissionCount: 0,
      totalStudents: 35,
      status: 'Active'
    };
    setAssignments([assignment, ...assignments]);
  };

  return {
    assignments,
    stats,
    analytics,
    createAssignment
  };
};