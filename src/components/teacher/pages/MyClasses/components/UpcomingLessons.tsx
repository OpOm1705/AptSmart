import React from 'react';
import { Card } from '../../../../ui/Card';
import { Clock } from 'lucide-react';
import { Lesson } from '../types';

interface UpcomingLessonsProps {
  lessons: Lesson[];
}

export const UpcomingLessons: React.FC<UpcomingLessonsProps> = ({ lessons }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Lessons</h2>
          <Clock className="h-5 w-5 text-gray-400" />
        </div>

        <div className="space-y-4">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{lesson.subject}</h3>
                  <p className="text-sm text-gray-600">
                    Grade {lesson.grade}-{lesson.section}
                  </p>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {lesson.time}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Topic: {lesson.topic}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};