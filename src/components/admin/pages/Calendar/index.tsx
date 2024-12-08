import React, { useState } from 'react';
import { AdminLayout } from '../../AdminLayout';
import { CalendarView } from './components/CalendarView';
import { EventList } from './components/EventList';
import { CreateEventModal } from './components/CreateEventModal';
import { useCalendar } from './hooks/useCalendar';

export const Calendar: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { events, createEvent, updateEvent, deleteEvent } = useCalendar();

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
            <p className="text-sm text-gray-600">Manage school events and schedules</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <CalendarView 
              events={events}
              onEventClick={(eventId) => {
                const event = events.find(e => e.id === eventId);
                if (event) {
                  // Handle event click
                }
              }}
            />
          </div>
          <div>
            <EventList 
              events={events}
              onCreateNew={() => setIsCreateModalOpen(true)}
              onDelete={deleteEvent}
              onUpdate={updateEvent}
            />
          </div>
        </div>

        <CreateEventModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onSubmit={createEvent}
        />
      </div>
    </AdminLayout>
  );
};