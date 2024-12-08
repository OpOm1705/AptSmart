import React from 'react';
import { TeacherLayout } from '../../TeacherLayout';
import { ClassTeacherPanel } from './components/ClassTeacherPanel';
import { ClassList } from './components/ClassList';
import { ClassStats } from './components/ClassStats';
import { UpcomingLessons } from './components/UpcomingLessons';
import { AssignmentOverview } from './components/AssignmentOverview';
import { useClasses } from './hooks/useClasses';

export const MyClasses: React.FC = () => {
  const { classes, stats, upcomingLessons, assignments } = useClasses();

  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Classes</h1>
          <p className="text-sm text-gray-600">Manage and monitor your class activities</p>
        </div>

        <ClassTeacherPanel />
        <ClassStats stats={stats} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ClassList classes={classes} />
          </div>
          <div className="space-y-6">
            <UpcomingLessons lessons={upcomingLessons} />
            <AssignmentOverview assignments={assignments} />
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};