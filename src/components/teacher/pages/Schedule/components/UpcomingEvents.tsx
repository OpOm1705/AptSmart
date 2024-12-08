import React from 'react';
import { Card } from '../../../../ui/Card';
import { Calendar, Plus } from 'lucide-react';
import { Button } from '../../../../ui/Button';
import { Event } from '../types';

interface UpcomingEventsProps {
  events: Event[];
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
          <Button variant="outline" icon={Plus} size="sm">
            Add Event
          </Button>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className={`p-2 rounded-lg ${
                event.type === 'exam' 
                  ? 'bg-purple-100' 
                  : event.type === 'meeting'
                  ? 'bg-blue-100'
                  : 'bg-green-100'
              }`}>
                <Calendar className={`h-5 w-5 ${
                  event.type === 'exam'
                    ? 'text-purple-600'
                    : event.type === 'meeting'
                    ? 'text-blue-600'
                    : 'text-green-600'
                }`} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">{event.title}</h3>
                <p className="text-xs text-gray-500">{event.date}</p>
                <p className="text-sm text-gray-600 mt-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};