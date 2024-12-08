import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { MapPin, Info } from 'lucide-react';

interface Bus {
  id: string;
  number: string;
  driver: string;
  capacity: number;
  status: 'On Route' | 'Available' | 'Maintenance';
  currentLocation?: string;
}

const mockBuses: Bus[] = [
  {
    id: '1',
    number: 'BUS-001',
    driver: 'John Smith',
    capacity: 45,
    status: 'On Route',
    currentLocation: 'Main Street'
  },
  {
    id: '2',
    number: 'BUS-002',
    driver: 'Sarah Johnson',
    capacity: 45,
    status: 'Available'
  },
  {
    id: '3',
    number: 'BUS-003',
    driver: 'Michael Brown',
    capacity: 45,
    status: 'Maintenance'
  }
];

export const BusGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[calc(100vh-12rem)] overflow-y-auto">
      {mockBuses.map((bus) => (
        <Card key={bus.id} className="p-4">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{bus.number}</h3>
                <p className="text-sm text-gray-600">{bus.driver}</p>
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

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Capacity:</span>
                <span className="font-medium text-gray-900">{bus.capacity} seats</span>
              </div>
              {bus.currentLocation && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Location:</span>
                  <span className="font-medium text-gray-900">{bus.currentLocation}</span>
                </div>
              )}
            </div>

            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                icon={MapPin}
                className="flex-1"
                disabled={bus.status !== 'On Route'}
              >
                Track
              </Button>
              <Button
                variant="outline"
                size="sm"
                icon={Info}
                className="flex-1"
              >
                Details
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};