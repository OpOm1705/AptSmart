import React, { useState } from 'react';
import { TeacherLayout } from '../../TeacherLayout';
import { WeeklySchedule } from './components/WeeklySchedule';
import { ScheduleStats } from './components/ScheduleStats';
import { UpcomingEvents } from './components/UpcomingEvents';
import { ClassReminders } from './components/ClassReminders';
import { useSchedule } from './hooks/useSchedule';

export const Schedule: React.FC = () => {
  const { schedule, stats, events, reminders } = useSchedule();
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Schedule</h1>
          <p className="text-sm text-gray-600">Manage your classes and events</p>
        </div>

        <ScheduleStats stats={stats} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <WeeklySchedule 
              schedule={schedule}
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
            />
          </div>
          <div className="space-y-6">
            <UpcomingEvents events={events} />
            <ClassReminders reminders={reminders} />
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};