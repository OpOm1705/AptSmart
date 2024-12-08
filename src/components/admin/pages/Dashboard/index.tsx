import React from 'react';
import { AdminLayout } from '../../AdminLayout';
import { AttendanceOverview } from './components/AttendanceOverview';
import { AnalyticsOverview } from './components/AnalyticsOverview';
import { UpcomingEvents } from './components/UpcomingEvents';
import { NoticeBoard } from './components/NoticeBoard';
import { RecentActivities } from '../../RecentActivities';

const mockAttendanceStats = {
  students: {
    present: 234,
    total: 250
  },
  staff: {
    present: 45,
    total: 50
  }
};

const mockEvents = [
  {
    id: '1',
    title: 'Final Exams - Grade 10',
    description: 'Mathematics and Science examinations for Grade 10 students',
    date: 'Tomorrow, 9:00 AM',
    type: 'exam' as const
  },
  {
    id: '2',
    title: 'Parent-Teacher Meeting',
    description: 'Annual parent-teacher conference for discussing student progress',
    date: 'Mar 20, 2:00 PM',
    type: 'meeting' as const
  },
  {
    id: '3',
    title: 'Annual Sports Day',
    description: 'School-wide sports competition and activities',
    date: 'Mar 25, All Day',
    type: 'event' as const
  }
];

const mockNotices = [
  {
    id: '1',
    title: 'Important: School Timings Update',
    content: 'Due to the upcoming summer schedule, school timings will be adjusted to start at 8:00 AM from next week.',
    date: 'Today, 10:30 AM',
    isPinned: true,
    author: 'Principal'
  },
  {
    id: '2',
    title: 'Library Access Hours Extended',
    content: 'The school library will now remain open until 5:00 PM to support exam preparation.',
    date: 'Yesterday, 3:45 PM',
    isPinned: false,
    author: 'Library Department'
  },
  {
    id: '3',
    title: 'COVID-19 Safety Guidelines Reminder',
    content: 'Please continue to follow all safety protocols including wearing masks and maintaining social distance.',
    date: 'Mar 15, 11:20 AM',
    isPinned: true,
    author: 'Health Committee'
  }
];

export const AdminDashboard: React.FC = () => {
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-600">Welcome back, Administrator</p>
        </div>

        <AttendanceOverview stats={mockAttendanceStats} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AnalyticsOverview />
            <div className="mt-6">
              <UpcomingEvents events={mockEvents} />
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <NoticeBoard notices={mockNotices} />
              <RecentActivities />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};