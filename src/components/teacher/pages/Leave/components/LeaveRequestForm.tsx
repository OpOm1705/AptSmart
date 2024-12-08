import React, { useState } from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Input } from '../../../../ui/Input';
import { Select } from '../../../../ui/Select';
import { NewLeaveRequest } from '../types';

interface LeaveRequestFormProps {
  onSubmit: (request: NewLeaveRequest) => void;
}

export const LeaveRequestForm: React.FC<LeaveRequestFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<NewLeaveRequest>({
    type: 'Casual',
    startDate: '',
    endDate: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      type: 'Casual',
      startDate: '',
      endDate: '',
      reason: ''
    });
  };

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Request Leave</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Select
            label="Leave Type"
            required
            value={formData.type}
            onChange={(value) => setFormData({ ...formData, type: value as NewLeaveRequest['type'] })}
            options={['Sick', 'Casual', 'Emergency', 'Other']}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              type="date"
              label="Start Date"
              required
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />

            <Input
              type="date"
              label="End Date"
              required
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason
            </label>
            <textarea
              required
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              rows={3}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Request
          </Button>
        </form>
      </div>
    </Card>
  );
};