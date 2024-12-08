import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '../../../../../ui/Button';

interface AttendanceTableProps {
  attendanceData: Record<string, 'present' | 'absent' | null>;
  onAttendanceChange: (rollNo: string, status: 'present' | 'absent') => void;
}

const students = Array.from({ length: 35 }, (_, i) => ({
  rollNo: String(i + 1).padStart(2, '0'),
  name: `Student ${i + 1}` // In real app, this would come from props or API
}));

export const AttendanceTable: React.FC<AttendanceTableProps> = ({
  attendanceData,
  onAttendanceChange
}) => {
  const handleMarkAllPresent = () => {
    students.forEach(student => {
      if (!attendanceData[student.rollNo]) {
        onAttendanceChange(student.rollNo, 'present');
      }
    });
  };

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <Button
          size="sm"
          variant="outline"
          icon={Check}
          onClick={handleMarkAllPresent}
        >
          Mark Remaining as Present
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Roll No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status Selection
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.rollNo}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.rollNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onAttendanceChange(student.rollNo, 'present')}
                      className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors
                        ${attendanceData[student.rollNo] === 'present'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      <Check className="w-4 h-4 mr-1" />
                      Present
                    </button>
                    <button
                      onClick={() => onAttendanceChange(student.rollNo, 'absent')}
                      className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors
                        ${attendanceData[student.rollNo] === 'absent'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      <X className="w-4 h-4 mr-1" />
                      Absent
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`text-sm font-medium ${
                    !attendanceData[student.rollNo]
                      ? 'text-gray-400'
                      : attendanceData[student.rollNo] === 'present'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}>
                    {!attendanceData[student.rollNo]
                      ? 'Not Marked'
                      : attendanceData[student.rollNo] === 'present'
                      ? 'Present'
                      : 'Absent'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};