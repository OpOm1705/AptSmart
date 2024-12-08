export interface LeaveStatistics {
  totalLeaves: string;
  leavesChange: string;
  remainingLeaves: string;
  remainingChange: string;
  approvedLeaves: string;
  approvedChange: string;
  pendingLeaves: string;
  pendingChange: string;
}

export interface LeaveRequest {
  id: string;
  type: 'Sick' | 'Casual' | 'Emergency' | 'Other';
  startDate: string;
  endDate: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  appliedOn: string;
  approvedBy?: string;
  comments?: string;
}

export interface NewLeaveRequest {
  type: LeaveRequest['type'];
  startDate: string;
  endDate: string;
  reason: string;
}