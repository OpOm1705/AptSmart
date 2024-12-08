import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Plus, MoreVertical, Calendar as CalendarIcon } from 'lucide-react';
import { Menu } from '@headlessui/react';
import { format } from 'date-fns';
import { Event } from '../types';

interface EventListProps {
  events: Event[];
  onCreateNew: () => void;
  onDelete: (eventId: string) => void;
  onUpdate: (eventId: string, updates: Partial<Event>) => void;
}

export const EventList: React.FC<EventListProps> = ({
  events,
  onCreateNew,
  onDelete,
  onUpdate
}) => {
  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
          <Button icon={Plus} onClick={onCreateNew}>
            Add Event
          </Button>
        </div>

        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className={`p-2 rounded-lg ${
                event.type === 'exam'
                  ? 'bg-red-100'
                  : event.type === 'holiday'
                  ? 'bg-green-100'
                  : 'bg-blue-100'
              }`}>
                <CalendarIcon className={`h-5 w-5 ${
                  event.type === 'exam'
                    ? 'text-red-600'
                    : event.type === 'holiday'
                    ? 'text-green-600'
                    : 'text-blue-600'
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{event.title}</h3>
                    <p className="text-xs text-gray-500">
                      {format(new Date(event.date), 'MMM d, yyyy')}
                    </p>
                  </div>
                  <Menu as="div" className="relative">
                    <Menu.Button className="p-1 rounded-full hover:bg-gray-200">
                      <MoreVertical className="h-4 w-4 text-gray-500" />
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 mt-1 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                            onClick={() => onUpdate(event.id, {})}
                          >
                            Edit Event
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-red-50' : ''
                            } block px-4 py-2 text-sm text-red-600 w-full text-left`}
                            onClick={() => onDelete(event.id)}
                          >
                            Delete Event
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
                {event.description && (
                  <p className="mt-1 text-sm text-gray-600 truncate">
                    {event.description}
                  </p>
                )}
              </div>
            </div>
          ))}

          {upcomingEvents.length === 0 && (
            <div className="text-center py-6">
              <p className="text-sm text-gray-500">No upcoming events</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};