import React, { useState } from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { UserCheck, FileSpreadsheet, MessageSquare } from 'lucide-react';
import { AttendanceWindow } from './attendance/AttendanceWindow';

export const ClassTeacherPanel: React.FC = () => {
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);

  return (
    <>
      <Card className="mb-6">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Panel - Class Information */}
            <div className="flex-grow bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Class Teacher</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Class Name:</span>
                  <span className="font-medium text-gray-900">Grade 10-A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subject:</span>
                  <span className="font-medium text-gray-900">Mathematics</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Students:</span>
                  <span className="font-medium text-gray-900">35</span>
                </div>
              </div>
            </div>

            {/* Right Panel - Action Buttons */}
            <div className="flex lg:flex-col justify-end space-y-0 lg:space-y-2 space-x-2 lg:space-x-0">
              <Button 
                size="sm"
                icon={UserCheck}
                className="w-auto lg:w-40"
                onClick={() => setIsAttendanceOpen(true)}
              >
                Mark Attendance
              </Button>
              <Button 
                size="sm"
                icon={MessageSquare}
                variant="outline"
                className="w-auto lg:w-40"
              >
                Leave Appeals
              </Button>
              <Button 
                size="sm"
                icon={FileSpreadsheet}
                variant="outline"
                className="w-auto lg:w-40"
              >
                View Excel
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <AttendanceWindow 
        isOpen={isAttendanceOpen}
        onClose={() => setIsAttendanceOpen(false)}
        classId="10A"
      />
    </>
  );
};