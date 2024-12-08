import React, { useState } from 'react';
import { TeacherLayout } from '../../TeacherLayout';
import { AssignmentList } from './components/AssignmentList';
import { AssignmentStats } from './components/AssignmentStats';
import { GradingOverview } from './components/GradingOverview';
import { SubmissionAnalytics } from './components/SubmissionAnalytics';
import { CreateAssignmentModal } from './components/CreateAssignmentModal';
import { useAssignments } from './hooks/useAssignments';

export const Assignments: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { assignments, stats, analytics, createAssignment } = useAssignments();

  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
          <p className="text-sm text-gray-600">Create and manage assignments</p>
        </div>

        <AssignmentStats stats={stats} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AssignmentList 
              assignments={assignments} 
              onCreateNew={() => setIsCreateModalOpen(true)}
            />
          </div>
          <div className="space-y-6">
            <GradingOverview />
            <SubmissionAnalytics analytics={analytics} />
          </div>
        </div>

        <CreateAssignmentModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onSubmit={createAssignment}
        />
      </div>
    </TeacherLayout>
  );
};