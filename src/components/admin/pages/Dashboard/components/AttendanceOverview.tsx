import React from 'react';
import { Card } from '../../../../ui/Card';
import { Users, UserCheck } from 'lucide-react';

interface AttendanceStats {
  students: {
    present: number;
    total: number;
  };
  staff: {
    present: number;
    total: number;
  };
}

interface AttendanceOverviewProps {
  stats: AttendanceStats;
}

const AttendanceBlock: React.FC<{
  title: string;
  present: number;
  total: number;
  icon: React.ElementType;
}> = ({ title, present, total, icon: Icon }) => {
  const percentage = Math.round((present / total) * 100);
  
  return (
    <div className="flex-1 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {present}/{total}
          </span>
          <span className={`text-lg font-semibold ${
            percentage >= 90 ? 'text-green-600' : 
            percentage >= 75 ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {percentage}%
          </span>
        </div>
        
        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${
              percentage >= 90 ? 'bg-green-500' : 
              percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <p className="text-sm text-gray-600">
          {total - present} {title.toLowerCase()} absent today
        </p>
      </div>
    </div>
  );
};

export const AttendanceOverview: React.FC<AttendanceOverviewProps> = ({ stats }) => {
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:space-x-5">
        <AttendanceBlock
          title="Student Attendance"
          present={stats.students.present}
          total={stats.students.total}
          icon={Users}
        />
        <div className="hidden md:block w-px bg-gray-200 my-4" />
        <AttendanceBlock
          title="Staff Attendance"
          present={stats.staff.present}
          total={stats.staff.total}
          icon={UserCheck}
        />
      </div>
    </Card>
  );
};