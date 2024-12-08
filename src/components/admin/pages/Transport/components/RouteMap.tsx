import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { MapPin, Plus } from 'lucide-react';
import { Route } from '../types';

interface RouteMapProps {
  routes: Route[];
  onRouteUpdate: (routeId: string, updates: any) => void;
}

export const RouteMap: React.FC<RouteMapProps> = ({ routes, onRouteUpdate }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">Route Map</h2>
          </div>
          <Button icon={Plus}>Add Route</Button>
        </div>

        <div className="bg-gray-100 rounded-lg h-[400px] mb-4 flex items-center justify-center">
          <p className="text-gray-500">Map integration will be displayed here</p>
        </div>

        <div className="space-y-4">
          {routes.map((route) => (
            <div key={route.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">{route.name}</h3>
                <p className="text-sm text-gray-500">
                  {route.stops.length} stops • {route.distance} km • {route.students} students
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  route.status === 'Active' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {route.status}
                </span>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};