import React from 'react';
import { Card } from '../../../../ui/Card';
import { Calendar } from 'lucide-react';
import { LeaveRequest } from '../types';
import { format } from 'date-fns';

interface UpcomingLeavesProps {
  leaves: LeaveRequest[];
}

export const UpcomingLeaves: React.FC<UpcomingLeavesProps> = ({ leaves }) => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Leaves</h2>

        <div className="space-y-4">
          {leaves.map((leave) => (
            <div
              key={leave.id}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">{leave.type} Leave</h3>
                <p className="text-xs text-gray-500">
                  {format(new Date(leave.startDate), 'MMM d')} - {format(new Date(leave.endDate), 'MMM d, yyyy')}
                </p>
                <p className="text-sm text-gray-600 mt-1">{leave.reason}</p>
              </div>
            </div>
          ))}

          {leaves.length === 0 && (
            <p className="text-sm text-gray-500 text-center">No upcoming leaves</p>
          )}
        </div>
      </div>
    </Card>
  );
};