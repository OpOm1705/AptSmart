import React from 'react';
import { Button } from '../../../../../ui/Button';
import { AlertCircle, Check, ArrowLeft } from 'lucide-react';

interface AttendanceReviewProps {
  attendanceData: Record<string, 'present' | 'absent' | null>;
  onBack: () => void;
  onConfirm: () => void;
  onStatusChange: (rollNo: string, status: 'present' | 'absent') => void;
}

export const AttendanceReview: React.FC<AttendanceReviewProps> = ({
  attendanceData,
  onBack,
  onConfirm,
  onStatusChange
}) => {
  const absentStudents = Object.entries(attendanceData)
    .filter(([_, status]) => status === 'absent')
    .map(([rollNo]) => ({
      rollNo,
      name: `Student ${rollNo}` // In real app, get actual name
    }));

  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-yellow-800">
              Review Absences
            </h3>
            <p className="mt-1 text-sm text-yellow-700">
              Please review the list of absent students before final submission.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-900">
            Absent Students ({absentStudents.length})
          </h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {absentStudents.map((student) => (
            <li key={student.rollNo} className="px-4 py-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{student.name}</p>
                  <p className="text-sm text-gray-500">Roll No: {student.rollNo}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  icon={Check}
                  onClick={() => onStatusChange(student.rollNo, 'present')}
                >
                  Mark as Present
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          variant="outline"
          onClick={onBack}
          icon={ArrowLeft}
        >
          Back to Attendance
        </Button>
        <Button
          onClick={onConfirm}
          icon={Check}
        >
          Confirm Absences
        </Button>
      </div>
    </div>
  );
};