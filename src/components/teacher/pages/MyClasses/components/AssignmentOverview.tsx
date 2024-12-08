import React from 'react';
import { Card } from '../../../../ui/Card';
import { ClipboardList } from 'lucide-react';
import { Assignment } from '../types';

interface AssignmentOverviewProps {
  assignments: Assignment[];
}

export const AssignmentOverview: React.FC<AssignmentOverviewProps> = ({ assignments }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Active Assignments</h2>
          <ClipboardList className="h-5 w-5 text-gray-400" />
        </div>

        <div className="space-y-4">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{assignment.title}</h3>
                  <p className="text-sm text-gray-600">
                    {assignment.class}
                  </p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  assignment.status === 'Due Soon' 
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {assignment.status}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                <span>Due: {assignment.dueDate}</span>
                <span>{assignment.submissions} submissions</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};