import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Plus, Users, Book, Clock } from 'lucide-react';
import { Class } from '../types';

interface ClassListProps {
  classes: Class[];
}

export const ClassList: React.FC<ClassListProps> = ({ classes }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Active Classes</h2>
          <Button icon={Plus}>Add Class</Button>
        </div>

        <div className="space-y-4">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {classItem.subject}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Grade {classItem.grade}-{classItem.section}
                  </p>
                </div>
                <Button variant="outline" size="sm">View Details</Button>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-600">
                    {classItem.totalStudents} Students
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Book className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    {classItem.completedLessons}/{classItem.totalLessons} Lessons
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-purple-500" />
                  <span className="text-sm text-gray-600">
                    {classItem.schedule}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center space-x-4">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(classItem.completedLessons / classItem.totalLessons) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">
                  {Math.round((classItem.completedLessons / classItem.totalLessons) * 100)}% Complete
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};