import React from 'react';
import { TeacherLayout } from './TeacherLayout';
import { ClassOverview } from './dashboard/ClassOverview';
import { UpcomingClasses } from './dashboard/UpcomingClasses';
import { StudentPerformance } from './dashboard/StudentPerformance';
import { TaskList } from './dashboard/TaskList';
import { RecentActivities } from './dashboard/RecentActivities';

export const TeacherDashboard: React.FC = () => {
  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-sm text-gray-600">Welcome back, Teacher</p>
        </div>

        <ClassOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UpcomingClasses />
          <TaskList />
        </div>

        <StudentPerformance />
        <RecentActivities />
      </div>
    </TeacherLayout>
  );
};