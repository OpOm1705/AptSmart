import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { format, addDays, startOfWeek } from 'date-fns';
import { TIME_SLOTS, DAYS, CLASS_SCHEDULE } from '../constants';

interface WeeklyScheduleProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export const WeeklySchedule: React.FC<WeeklyScheduleProps> = ({
  selectedDate,
  onDateChange
}) => {
  const startDate = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const weekDays = DAYS;

  const getClassForTimeSlot = (time: string, day: string) => {
    return CLASS_SCHEDULE.find(cls => 
      cls.time === time && cls.days.includes(day)
    );
  };

  const isLunchTime = (time: string) => {
    return time === '12:00 PM';
  };

  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              icon={ChevronLeft}
              onClick={() => onDateChange(addDays(selectedDate, -7))}
            />
            <h2 className="text-lg font-semibold text-gray-900">
              {format(startDate, 'MMMM d, yyyy')}
            </h2>
            <Button
              variant="outline"
              icon={ChevronRight}
              onClick={() => onDateChange(addDays(selectedDate, 7))}
            />
          </div>
          <Button variant="outline" icon={Download}>Export</Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                  Time
                </th>
                {weekDays.map((day, index) => (
                  <th key={day} className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    index < weekDays.length - 1 ? 'border-r' : ''
                  }`}>
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {TIME_SLOTS.map((time, timeIndex) => (
                <tr key={time} className={timeIndex < TIME_SLOTS.length - 1 ? 'border-b' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r">
                    {time}
                  </td>
                  {weekDays.map((day, dayIndex) => {
                    const classInfo = getClassForTimeSlot(time, day);
                    const isLunch = isLunchTime(time);
                    
                    return (
                      <td 
                        key={`${day}-${time}`} 
                        className={`px-6 py-4 whitespace-nowrap ${
                          dayIndex < weekDays.length - 1 ? 'border-r' : ''
                        } ${isLunch ? 'bg-gray-100' : ''}`}
                      >
                        {isLunch ? (
                          <div className="text-sm text-gray-500 font-medium text-center">
                            Lunch Break
                          </div>
                        ) : classInfo ? (
                          <div className="border border-blue-200 rounded-lg p-3 bg-blue-50">
                            <div className="text-sm font-medium text-blue-900">
                              {classInfo.subject}
                            </div>
                            <div className="text-xs text-blue-700">
                              Grade {classInfo.grade}-{classInfo.section}
                            </div>
                            <div className="text-xs text-blue-600">
                              Room {classInfo.room}
                            </div>
                          </div>
                        ) : null}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-50 border border-blue-200 rounded mr-2"></div>
              <span>Class Period</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-100 rounded mr-2"></div>
              <span>Lunch Break</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};