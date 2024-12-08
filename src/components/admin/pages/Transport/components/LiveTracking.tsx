import React from 'react';
import { Card } from '../../../../ui/Card';
import { MapPin } from 'lucide-react';
import { Bus } from '../types';

interface LiveTrackingProps {
  buses: Bus[];
  selectedBusId: string | null;
}

export const LiveTracking: React.FC<LiveTrackingProps> = ({ buses, selectedBusId }) => {
  const activeBus = selectedBusId ? buses.find(bus => bus.id === selectedBusId) : null;

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <MapPin className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Live Tracking</h2>
        </div>

        <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
          {activeBus ? (
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">Tracking {activeBus.number}</p>
              <p className="text-xs text-gray-500 mt-1">Current Location: {activeBus.currentLocation}</p>
            </div>
          ) : (
            <div className="text-center">
              <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Select a bus to track its location</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};