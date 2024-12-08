import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Download } from 'lucide-react';
import { LeaveRequest } from '../types';
import { format } from 'date-fns';

interface LeaveHistoryProps {
  history: LeaveRequest[];
}

export const LeaveHistory: React.FC<LeaveHistoryProps> = ({ history }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Leave History</h2>
          <Button variant="outline" icon={Download}>Export</Button>
        </div>

        <div className="space-y-4">
          {history.map((leave) => (
            <div
              key={leave.id}
              className="p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      leave.status === 'Approved'
                        ? 'bg-green-100 text-green-800'
                        : leave.status === 'Rejected'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {leave.status}
                    </span>
                    <span className="text-sm font-medium text-gray-900">{leave.type} Leave</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{leave.reason}</p>
                </div>
                <span className="text-sm text-gray-500">
                  Applied on {format(new Date(leave.appliedOn), 'MMM d, yyyy')}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="text-sm font-medium text-gray-900">
                    {format(new Date(leave.startDate), 'MMM d')} - {format(new Date(leave.endDate), 'MMM d, yyyy')}
                  </p>
                </div>
                {leave.status !== 'Pending' && (
                  <div>
                    <p className="text-sm text-gray-500">
                      {leave.status === 'Approved' ? 'Approved by' : 'Rejected by'}
                    </p>
                    <p className="text-sm font-medium text-gray-900">{leave.approvedBy}</p>
                  </div>
                )}
              </div>

              {leave.comments && (
                <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-600">{leave.comments}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};