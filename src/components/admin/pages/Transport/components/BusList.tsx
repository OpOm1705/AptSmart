import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Bus, Plus } from 'lucide-react';
import { TransportBus } from '../types';

interface BusListProps {
  buses: TransportBus[];
}

export const BusList: React.FC<BusListProps> = ({ buses }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Bus className="h-6 w-6 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">Buses</h2>
          </div>
          <Button icon={Plus}>Add Bus</Button>
        </div>

        <div className="space-y-4">
          {buses.map((bus) => (
            <div key={bus.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{bus.number}</h3>
                  <p className="text-sm text-gray-500">
                    Driver: {bus.driver} • Capacity: {bus.capacity}
                  </p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  bus.status === 'On Route' 
                    ? 'bg-green-100 text-green-800'
                    : bus.status === 'Maintenance'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {bus.status}
                </span>
              </div>

              {bus.status === 'On Route' && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Current Location:</span>
                    <span className="font-medium text-gray-900">{bus.currentLocation}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-500">Next Stop:</span>
                    <span className="font-medium text-gray-900">{bus.nextStop}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-500">ETA:</span>
                    <span className="font-medium text-gray-900">{bus.eta}</span>
                  </div>
                </div>
              )}

              <div className="mt-4 flex justify-end space-x-2">
                <Button variant="outline" size="sm">Track</Button>
                <Button variant="outline" size="sm">Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};