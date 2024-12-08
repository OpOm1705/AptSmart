import React from 'react';
import { Clock } from 'lucide-react';
import { Card } from '../../ui/Card';

const classes = [
  {
    id: 1,
    subject: 'Mathematics',
    class: 'Grade 10-A',
    time: '10:30 AM',
    duration: '45 min',
    topic: 'Quadratic Equations',
    students: 32
  },
  {
    id: 2,
    subject: 'Mathematics',
    class: 'Grade 9-B',
    time: '11:30 AM',
    duration: '45 min',
    topic: 'Linear Algebra',
    students: 28
  },
  {
    id: 3,
    subject: 'Mathematics',
    class: 'Grade 11-A',
    time: '2:00 PM',
    duration: '45 min',
    topic: 'Calculus',
    students: 30
  }
];

export const UpcomingClasses: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Classes</h2>
          <Clock className="h-5 w-5 text-gray-400" />
        </div>

        <div className="space-y-4">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h3 className="font-medium text-gray-900">{classItem.subject}</h3>
                <p className="text-sm text-gray-600">{classItem.class}</p>
                <p className="text-xs text-gray-500 mt-1">Topic: {classItem.topic}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{classItem.time}</p>
                <p className="text-xs text-gray-500">{classItem.duration}</p>
                <p className="text-xs text-gray-500">{classItem.students} students</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};