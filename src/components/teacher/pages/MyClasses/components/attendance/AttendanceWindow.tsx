import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { X, Save } from 'lucide-react';
import { Button } from '../../../../../ui/Button';
import { AttendanceManager } from './AttendanceManager';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface AttendanceWindowProps {
  isOpen: boolean;
  onClose: () => void;
  classId: string;
}

export const AttendanceWindow: React.FC<AttendanceWindowProps> = ({
  isOpen,
  onClose,
  classId
}) => {
  const [isDirty, setIsDirty] = useState(false);
  const [localData, setLocalData] = useLocalStorage(`attendance-draft-${classId}`, null);

  // Handle window close
  const handleClose = () => {
    if (isDirty) {
      const confirm = window.confirm('You have unsaved changes. Do you want to save them as a draft?');
      if (confirm) {
        // Save current state as draft
        setLocalData(localData);
      }
    }
    onClose();
  };

  // Handle beforeunload event
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  return (
    <Dialog 
      open={isOpen} 
      onClose={handleClose}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="flex min-h-screen items-center justify-center">
        <Dialog.Overlay className="fixed inset-0 bg-black/30" />

        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl m-4">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Dialog.Title className="text-lg font-semibold text-gray-900">
              Mark Attendance
            </Dialog.Title>
            <div className="flex items-center space-x-2">
              {isDirty && (
                <Button
                  variant="outline"
                  size="sm"
                  icon={Save}
                  onClick={() => setLocalData(localData)}
                >
                  Save Draft
                </Button>
              )}
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
            <AttendanceManager
              classId={classId}
              savedData={localData}
              onDataChange={(data) => {
                setIsDirty(true);
                setLocalData(data);
              }}
              onSubmitSuccess={() => {
                setIsDirty(false);
                setLocalData(null);
              }}
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};