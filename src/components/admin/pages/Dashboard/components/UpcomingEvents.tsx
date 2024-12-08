import React from 'react';
import { Card } from '../../../../ui/Card';
import { Calendar, ChevronRight } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'exam' | 'meeting' | 'event' | 'holiday';
}

interface UpcomingEventsProps {
  events: Event[];
}

const getEventColor = (type: Event['type']) => {
  switch (type) {
    case 'exam':
      return 'bg-purple-100 text-purple-600';
    case 'meeting':
      return 'bg-blue-100 text-blue-600';
    case 'event':
      return 'bg-green-100 text-green-600';
    case 'holiday':
      return 'bg-red-100 text-red-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
            View Calendar
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>

        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className={`p-2 rounded-lg ${getEventColor(event.type)}`}>
                <Calendar className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {event.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};