import React from 'react';
import { Card } from '../../../../ui/Card';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { useSystemStatus } from '../hooks/useSystemStatus';

export const SystemStatus: React.FC = () => {
  const { services } = useSystemStatus();

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">System Status</h2>

        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {service.status === 'operational' ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : service.status === 'degraded' ? (
                  <Clock className="h-5 w-5 text-yellow-500" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                )}
                <span className="text-sm font-medium text-gray-900">
                  {service.name}
                </span>
              </div>
              <span className={`text-sm ${
                service.status === 'operational' ? 'text-green-600' :
                service.status === 'degraded' ? 'text-yellow-600' :
                'text-red-600'
              }`}>
                {service.status === 'operational' ? 'Operational' :
                 service.status === 'degraded' ? 'Degraded' :
                 'Down'}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Last updated:</span>
            <span className="text-gray-900">2 minutes ago</span>
          </div>
        </div>
      </div>
    </Card>
  );
};