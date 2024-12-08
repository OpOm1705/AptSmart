import React from 'react';
import { Users, UserCheck } from 'lucide-react';

interface AttendanceStatsProps {
  totalStudents: number;
  markedCount: number;
  presentCount: number;
}

export const AttendanceStats: React.FC<AttendanceStatsProps> = ({
  totalStudents,
  markedCount,
  presentCount
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-900">Progress</p>
              <p className="text-2xl font-bold text-blue-700">
                {markedCount}/{totalStudents}
              </p>
            </div>
          </div>
          <div className="h-2 w-24 bg-blue-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${(markedCount / totalStudents) * 100}%` }}
            />
          </div>
        </div>
        <p className="text-xs text-blue-600 mt-2">
          {((markedCount / totalStudents) * 100).toFixed(1)}% students marked
        </p>
      </div>

      <div className="bg-green-50 rounded-lg p-4 border border-green-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <UserCheck className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-900">Present</p>
              <p className="text-2xl font-bold text-green-700">
                {presentCount}/{totalStudents}
              </p>
            </div>
          </div>
          <div className="h-2 w-24 bg-green-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-600 rounded-full transition-all duration-500"
              style={{ width: `${(presentCount / totalStudents) * 100}%` }}
            />
          </div>
        </div>
        <p className="text-xs text-green-600 mt-2">
          {((presentCount / totalStudents) * 100).toFixed(1)}% attendance rate
        </p>
      </div>
    </div>
  );
};