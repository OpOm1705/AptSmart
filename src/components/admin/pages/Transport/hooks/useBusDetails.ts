import { useState, useEffect } from 'react';
import { Bus } from '../types';

const mockBusDetails: Record<string, Bus> = {
  '1': {
    id: '1',
    number: 'BUS-001',
    driver: 'John Smith',
    route: 'Route A',
    capacity: 45,
    status: 'On Route',
    currentLocation: 'Main Street',
    nextStop: 'Central Station',
    eta: '10 mins',
    lastService: '2024-02-15',
    nextService: '2024-03-15'
  },
  '2': {
    id: '2',
    number: 'BUS-002',
    driver: 'Sarah Johnson',
    route: 'Route B',
    capacity: 45,
    status: 'Available',
    lastService: '2024-02-10',
    nextService: '2024-03-10'
  }
};

export const useBusDetails = (busId: string | null) => {
  const [bus, setBus] = useState<Bus | null>(null);

  useEffect(() => {
    if (busId) {
      // Simulate API call
      setBus(mockBusDetails[busId] || null);
    } else {
      setBus(null);
    }
  }, [busId]);

  return { bus };
};