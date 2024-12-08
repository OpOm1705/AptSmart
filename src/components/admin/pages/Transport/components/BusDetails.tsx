import React from 'react';
import { Card } from '../../../../ui/Card';
import { Info } from 'lucide-react';
import { useBusDetails } from '../hooks/useBusDetails';

interface BusDetailsProps {
  busId: string | null;
}

export const BusDetails: React.FC<BusDetailsProps> = ({ busId }) => {
  const { bus } = useBusDetails(busId);

  if (!bus) {
    return (
      <Card>
        <div className="p-6 text-center text-gray-500">
          Select a bus to view details
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Info className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Bus Details</h2>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Bus Information</h3>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Number:</span>
                <span className="text-sm font-medium text-gray-900">{bus.number}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Driver:</span>
                <span className="text-sm font-medium text-gray-900">{bus.driver}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Capacity:</span>
                <span className="text-sm font-medium text-gray-900">{bus.capacity} seats</span>
              </div>
            </div>
          </div>

          {bus.status === 'On Route' && (
            <div>
              <h3 className="text-sm font-medium text-gray-500">Current Trip</h3>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Location:</span>
                  <span className="text-sm font-medium text-gray-900">{bus.currentLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Next Stop:</span>
                  <span className="text-sm font-medium text-gray-900">{bus.nextStop}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">ETA:</span>
                  <span className="text-sm font-medium text-gray-900">{bus.eta}</span>
                </div>
              </div>
            </div>
          )}

          <div>
            <h3 className="text-sm font-medium text-gray-500">Maintenance</h3>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Last Service:</span>
                <span className="text-sm font-medium text-gray-900">{bus.lastService}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Next Service:</span>
                <span className="text-sm font-medium text-gray-900">{bus.nextService}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};