import React from 'react';
import { TeacherLayout } from '../../TeacherLayout';
import { LeaveStats } from './components/LeaveStats';
import { LeaveRequestForm } from './components/LeaveRequestForm';
import { LeaveHistory } from './components/LeaveHistory';
import { UpcomingLeaves } from './components/UpcomingLeaves';
import { useLeave } from './hooks/useLeave';

export const Leave: React.FC = () => {
  const { stats, history, upcoming, submitLeaveRequest } = useLeave();

  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leave Management</h1>
          <p className="text-sm text-gray-600">Request and track your leaves</p>
        </div>

        <LeaveStats stats={stats} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <LeaveHistory history={history} />
          </div>
          <div className="space-y-6">
            <LeaveRequestForm onSubmit={submitLeaveRequest} />
            <UpcomingLeaves leaves={upcoming} />
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};