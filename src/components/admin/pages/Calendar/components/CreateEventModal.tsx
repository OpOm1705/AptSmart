import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { Button } from '../../../../ui/Button';
import { Input } from '../../../../ui/Input';
import { Select } from '../../../../ui/Select';
import { Switch } from '../../../../ui/Switch';
import { NewEvent } from '../types';

interface CreateEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (event: NewEvent) => void;
}

export const CreateEventModal: React.FC<CreateEventModalProps> = ({
  isOpen,
  onClose,
  onSubmit
}) => {
  const [formData, setFormData] = useState<NewEvent>({
    title: '',
    description: '',
    date: '',
    type: 'event',
    isRecurring: false,
    recurringPattern: 'weekly'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg font-semibold">Create New Event</Dialog.Title>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Title"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />

            <Input
              label="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />

            <Input
              label="Date"
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />

            <Select
              label="Event Type"
              required
              value={formData.type}
              onChange={(value) => setFormData({ ...formData, type: value as NewEvent['type'] })}
              options={['event', 'exam', 'holiday']}
            />

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Recurring Event
              </label>
              <Switch
                checked={formData.isRecurring}
                onChange={(checked) => setFormData({ ...formData, isRecurring: checked })}
              />
            </div>

            {formData.isRecurring && (
              <Select
                label="Repeat Pattern"
                required
                value={formData.recurringPattern}
                onChange={(value) => setFormData({ ...formData, recurringPattern: value as NewEvent['recurringPattern'] })}
                options={['daily', 'weekly', 'monthly', 'yearly']}
              />
            )}

            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                Create Event
              </Button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};