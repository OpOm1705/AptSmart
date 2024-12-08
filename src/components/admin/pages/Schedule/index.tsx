import React, { useState } from 'react';
import { Clock, Calendar } from 'lucide-react';
import { Layout } from '../../Layout';
import { Button } from '../../../ui/Button';
import { WeeklyTimetable } from './components/WeeklyTimetable';
import { EventCalendar } from './components/EventCalendar';
import { AIInsights } from './components/AIInsights';
import { mockTimeSlots, mockEvents } from './mockData';

export const Schedule: React.FC = () => {
  const [view, setView] = useState<'timetable' | 'calendar'>('timetable');

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Schedule Management</h1>
            <p className="text-sm text-gray-600">Manage timetables and academic calendar</p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={view === 'timetable' ? 'primary' : 'outline'}
              onClick={() => setView('timetable')}
              icon={Clock}
            >
              Timetable
            </Button>
            <Button
              variant={view === 'calendar' ? 'primary' : 'outline'}
              onClick={() => setView('calendar')}
              icon={Calendar}
            >
              Calendar
            </Button>
          </div>
        </div>

        {view === 'timetable' ? (
          <>
            <WeeklyTimetable timeSlots={mockTimeSlots} />
            <AIInsights />
          </>
        ) : (
          <EventCalendar events={mockEvents} />
        )}
      </div>
    </Layout>
  );
};