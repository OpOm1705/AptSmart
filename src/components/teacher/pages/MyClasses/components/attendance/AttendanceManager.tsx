import React, { useState, useCallback } from 'react';
import { Card } from '../../../../../ui/Card';
import { Button } from '../../../../../ui/Button';
import { Download, Check, Clock } from 'lucide-react';
import { AttendanceTable } from './AttendanceTable';
import { AttendanceReview } from './AttendanceReview';
import { AttendanceStats } from './AttendanceStats';
import { format } from 'date-fns';

interface AttendanceManagerProps {
  classId: string;
  savedData: Record<string, 'present' | 'absent' | null> | null;
  onDataChange: (data: Record<string, 'present' | 'absent' | null>) => void;
  onSubmitSuccess: () => void;
}

const TOTAL_STUDENTS = 35;

export const AttendanceManager: React.FC<AttendanceManagerProps> = ({
  classId,
  savedData,
  onDataChange,
  onSubmitSuccess
}) => {
  const [attendanceData, setAttendanceData] = useState<Record<string, 'present' | 'absent' | null>>(
    savedData || {}
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const getStats = useCallback(() => {
    const markedCount = Object.keys(attendanceData).length;
    const presentCount = Object.values(attendanceData).filter(status => status === 'present').length;
    return { markedCount, presentCount };
  }, [attendanceData]);

  const handleAttendanceChange = (rollNo: string, status: 'present' | 'absent') => {
    const newData = {
      ...attendanceData,
      [rollNo]: status
    };
    setAttendanceData(newData);
    onDataChange(newData);
  };

  const handleSaveDraft = () => {
    onDataChange(attendanceData);
  };

  const handleSubmit = () => {
    const { markedCount } = getStats();
    if (markedCount < TOTAL_STUDENTS) {
      alert(`Please mark attendance for all students. ${TOTAL_STUDENTS - markedCount} remaining.`);
      return;
    }
    setShowReview(true);
  };

  const handleConfirmSubmission = () => {
    setIsSubmitted(true);
    setShowReview(false);
    onSubmitSuccess();
  };

  const { markedCount, presentCount } = getStats();

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Daily Attendance</h2>
            <p className="text-sm text-gray-600">
              {format(new Date(), 'EEEE, MMMM d, yyyy')} • {format(new Date(), 'h:mm a')}
            </p>
          </div>
        </div>

        {!isSubmitted ? (
          <>
            <AttendanceStats
              totalStudents={TOTAL_STUDENTS}
              markedCount={markedCount}
              presentCount={presentCount}
            />

            {!showReview ? (
              <>
                <AttendanceTable
                  attendanceData={attendanceData}
                  onAttendanceChange={handleAttendanceChange}
                />

                <div className="mt-6 flex justify-end space-x-4">
                  <Button
                    variant="outline"
                    onClick={handleSaveDraft}
                    icon={Clock}
                  >
                    Save Draft
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    icon={Check}
                  >
                    Proceed
                  </Button>
                </div>
              </>
            ) : (
              <AttendanceReview
                attendanceData={attendanceData}
                onBack={() => setShowReview(false)}
                onConfirm={handleConfirmSubmission}
                onStatusChange={handleAttendanceChange}
              />
            )}
          </>
        ) : (
          <div className="text-center py-8">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              ✓ Attendance successfully recorded
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Submitted at {format(new Date(), 'h:mm a')}
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                icon={Download}
                onClick={() => console.log('Downloading report...')}
              >
                Download Report
              </Button>
              <Button onClick={() => window.history.back()}>
                Return to Dashboard
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};