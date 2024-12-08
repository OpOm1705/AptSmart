import React from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

interface CreateBusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateBusModal: React.FC<CreateBusModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg font-semibold">Add New Bus</Dialog.Title>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Bus creation form will go here */}
          <p className="text-gray-500">Bus creation form coming soon...</p>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};