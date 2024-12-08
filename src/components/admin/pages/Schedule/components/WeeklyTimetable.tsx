import React from 'react';
import { Download } from 'lucide-react';
import { format, startOfWeek, addDays } from 'date-fns';
import { Button } from '../../../../ui/Button';
import { TimeSlot } from '../types';
import { PERIODS } from '../constants';

interface WeeklyTimetableProps {
  timeSlots: TimeSlot[];
}

export const WeeklyTimetable: React.FC<WeeklyTimetableProps> = ({ timeSlots }) => {
  const startDate = startOfWeek(new Date());
  const weekDays = Array.from({ length: 5 }, (_, i) => addDays(startDate, i));

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Weekly Timetable</h2>
        <div className="flex space-x-2">
          <select className="rounded-lg border-gray-300">
            <option>Class 10-A</option>
            <option>Class 10-B</option>
          </select>
          <Button icon={Download} variant="outline">Export</Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              {weekDays.map((day, index) => (
                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {format(day, 'EEEE')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {PERIODS.map((time, timeIndex) => (
              <tr key={timeIndex}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {time}
                </td>
                {weekDays.map((_, dayIndex) => {
                  const slot = timeSlots.find(
                    s => s.time === time && s.day === format(weekDays[dayIndex], 'EEEE')
                  );
                  return (
                    <td key={dayIndex} className="px-6 py-4 whitespace-nowrap">
                      {slot ? (
                        <div className="bg-blue-50 p-2 rounded-lg">
                          <div className="text-sm font-medium text-blue-900">{slot.subject}</div>
                          <div className="text-xs text-blue-700">{slot.teacher}</div>
                          <div className="text-xs text-blue-600">Room {slot.room}</div>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-400 italic">Free Period</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};