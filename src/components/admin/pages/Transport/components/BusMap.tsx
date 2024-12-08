import React from 'react';
import { Card } from '../../../../ui/Card';
import { MapPin } from 'lucide-react';

export const BusMap: React.FC = () => {
  return (
    <Card className="h-[calc(100vh-12rem)] sticky top-24">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-4">
          <MapPin className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Live Tracking</h2>
        </div>
        
        <div className="bg-gray-100 rounded-lg h-full flex items-center justify-center">
          <div className="text-center p-4">
            <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 text-sm">Interactive map will be displayed here</p>
            <p className="text-gray-400 text-xs mt-1">Showing real-time bus locations</p>
          </div>
        </div>
      </div>
    </Card>
  );
};