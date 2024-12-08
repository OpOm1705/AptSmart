import { useState } from 'react';
import { LeaveStatistics, LeaveRequest, NewLeaveRequest } from '../types';

const mockStats: LeaveStatistics = {
  totalLeaves: '24',
  leavesChange: '+2 this month',
  remainingLeaves: '12',
  remainingChange: '-2 from last month',
  approvedLeaves: '10',
  approvedChange: '+1 this month',
  pendingLeaves: '2',
  pendingChange: 'No change'
};

const mockHistory: LeaveRequest[] = [
  {
    id: '1',
    type: 'Sick',
    startDate: '2024-03-10',
    endDate: '2024-03-12',
    reason: 'Medical appointment and recovery',
    status: 'Approved',
    appliedOn: '2024-03-08',
    approvedBy: 'Principal',
    comments: 'Get well soon!'
  },
  {
    id: '2',
    type: 'Casual',
    startDate: '2024-03-20',
    endDate: '2024-03-21',
    reason: 'Family function',
    status: 'Pending',
    appliedOn: '2024-03-15'
  }
];

const mockUpcoming: LeaveRequest[] = [
  {
    id: '2',
    type: 'Casual',
    startDate: '2024-03-20',
    endDate: '2024-03-21',
    reason: 'Family function',
    status: 'Pending',
    appliedOn: '2024-03-15'
  }
];

export const useLeave = () => {
  const [stats] = useState<LeaveStatistics>(mockStats);
  const [history, setHistory] = useState<LeaveRequest[]>(mockHistory);
  const [upcoming] = useState<LeaveRequest[]>(mockUpcoming);

  const submitLeaveRequest = (request: NewLeaveRequest) => {
    const newRequest: LeaveRequest = {
      id: String(history.length + 1),
      ...request,
      status: 'Pending',
      appliedOn: new Date().toISOString()
    };
    setHistory([newRequest, ...history]);
  };

  return {
    stats,
    history,
    upcoming,
    submitLeaveRequest
  };
};