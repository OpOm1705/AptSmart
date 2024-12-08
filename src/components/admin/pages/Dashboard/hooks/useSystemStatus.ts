import { useState } from 'react';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'down';
}

export const useSystemStatus = () => {
  const [services] = useState<ServiceStatus[]>([
    { name: 'Authentication Service', status: 'operational' },
    { name: 'Database Service', status: 'operational' },
    { name: 'Storage Service', status: 'operational' },
    { name: 'Email Service', status: 'degraded' },
    { name: 'API Service', status: 'operational' }
  ]);

  return { services };
};