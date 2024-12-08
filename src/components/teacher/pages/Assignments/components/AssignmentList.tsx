import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Plus, Download, MoreVertical, Eye, Edit2, Trash2 } from 'lucide-react';
import { Menu } from '@headlessui/react';
import { Assignment } from '../types';

interface AssignmentListProps {
  assignments: Assignment[];
  onCreateNew: () => void;
}

export const AssignmentList: React.FC<AssignmentListProps> = ({ assignments, onCreateNew }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Assignments</h2>
          <div className="flex space-x-2">
            <Button variant="outline" icon={Download}>Export</Button>
            <Button icon={Plus} onClick={onCreateNew}>Create Assignment</Button>
          </div>
        </div>

        <div className="space-y-4">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {assignment.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {assignment.subject} • {assignment.class}
                  </p>
                </div>
                <Menu as="div" className="relative">
                  <Menu.Button className="p-2 hover:bg-gray-200 rounded-full">
                    <MoreVertical className="h-5 w-5 text-gray-500" />
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                        >
                          <Eye className="h-4 w-4 mr-3" />
                          View Details
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                        >
                          <Edit2 className="h-4 w-4 mr-3" />
                          Edit Assignment
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } flex items-center w-full px-4 py-2 text-sm text-red-600`}
                        >
                          <Trash2 className="h-4 w-4 mr-3" />
                          Delete
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Due Date</p>
                  <p className="text-sm font-medium text-gray-900">{assignment.dueDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Points</p>
                  <p className="text-sm font-medium text-gray-900">{assignment.totalPoints}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="text-sm font-medium text-gray-900">{assignment.type}</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">
                    Submissions: {assignment.submissionCount}/{assignment.totalStudents}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    assignment.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : assignment.status === 'Past Due'
                      ? 'bg-red-100 text-red-800'
                      : assignment.status === 'Completed'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {assignment.status}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(assignment.submissionCount / assignment.totalStudents) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};