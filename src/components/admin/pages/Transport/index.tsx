import React, { useState } from 'react';
import { AdminLayout } from '../../AdminLayout';
import { BusTable } from './components/BusTable';
import { BusDetails } from './components/BusDetails';
import { LiveTracking } from './components/LiveTracking';
import { useTransport } from './hooks/useTransport';

export const Transport: React.FC = () => {
  const { buses, stats } = useTransport();
  const [selectedBusId, setSelectedBusId] = useState<string | null>(null);

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Transport Management</h1>
        </div>

        <div className="flex gap-5">
          <div className="flex-1">
            <BusTable 
              buses={buses}
              onSelectBus={setSelectedBusId}
              selectedBusId={selectedBusId}
            />
          </div>
          
          <div className="w-96 space-y-5">
            <LiveTracking buses={buses} selectedBusId={selectedBusId} />
            <BusDetails busId={selectedBusId} />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};