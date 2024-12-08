import React from 'react';
import { Plus, CalendarDays } from 'lucide-react';
import { Button } from '../../../../ui/Button';
import { Event } from '../types';
import { EVENT_STYLES } from '../constants';

interface EventCalendarProps {
  events: Event[];
}

export const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Academic Calendar</h2>
        <Button icon={Plus}>Add Event</Button>
      </div>

      <div className="space-y-4">
        {events.map((event) => {
          const styles = EVENT_STYLES[event.type];
          return (
            <div key={event.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className={`p-2 rounded-lg ${styles.bg}`}>
                <CalendarDays className={`h-5 w-5 ${styles.text}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">{event.title}</h3>
                <p className="text-xs text-gray-500">{event.date}</p>
                <p className="text-sm text-gray-600 mt-1">{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};