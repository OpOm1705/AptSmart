import React from 'react';
import { ClipboardList, Plus } from 'lucide-react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';

const tasks = [
  {
    id: 1,
    title: 'Grade Math Assignments',
    dueDate: 'Today',
    priority: 'high',
    status: 'pending'
  },
  {
    id: 2,
    title: 'Prepare Quiz for Grade 10',
    dueDate: 'Tomorrow',
    priority: 'medium',
    status: 'in-progress'
  },
  {
    id: 3,
    title: 'Submit Progress Reports',
    dueDate: 'Next Week',
    priority: 'low',
    status: 'pending'
  }
];

const priorityColors = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800'
};

export const TaskList: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <ClipboardList className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">Tasks</h2>
          </div>
          <Button icon={Plus} variant="outline" size="sm">
            Add Task
          </Button>
        </div>

        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{task.title}</h3>
                  <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                {task.priority}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};