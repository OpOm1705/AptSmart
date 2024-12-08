import { useState } from 'react';
import { TransportStats, Route, TransportBus, Student } from '../types';

const mockStats: TransportStats = {
  activeBuses: '12',
  busesChange: '+2',
  activeRoutes: '8',
  routesChange: '+1',
  totalStudents: '450',
  studentsChange: '+15',
  activeAlerts: '2',
  alertsChange: '-1'
};

const mockRoutes: Route[] = [
  {
    id: '1',
    name: 'Route A - North',
    stops: ['Stop 1', 'Stop 2', 'Stop 3'],
    distance: 12.5,
    students: 45,
    status: 'Active'
  },
  {
    id: '2',
    name: 'Route B - South',
    stops: ['Stop 4', 'Stop 5', 'Stop 6'],
    distance: 15.2,
    students: 38,
    status: 'Active'
  }
];

const mockBuses: TransportBus[] = [
  {
    id: '1',
    number: 'BUS-001',
    driver: 'John Smith',
    capacity: 45,
    status: 'On Route',
    currentLocation: 'Stop 2',
    nextStop: 'Stop 3',
    eta: '10 mins'
  },
  {
    id: '2',
    number: 'BUS-002',
    driver: 'Sarah Johnson',
    capacity: 45,
    status: 'Available'
  }
];

const mockStudents: Student[] = [
  {
    id: 'STU001',
    name: 'Alex Johnson',
    grade: '10',
    section: 'A',
    route: 'Route A - North',
    stop: 'Stop 2',
    status: 'Active'
  },
  {
    id: 'STU002',
    name: 'Emma Davis',
    grade: '9',
    section: 'B',
    route: 'Route B - South',
    stop: 'Stop 5',
    status: 'Active'
  }
];

export const useTransport = () => {
  const [routes, setRoutes] = useState<Route[]>(mockRoutes);
  const [buses] = useState<TransportBus[]>(mockBuses);
  const [students] = useState<Student[]>(mockStudents);
  const [stats] = useState<TransportStats>(mockStats);

  const updateRoute = (routeId: string, updates: Partial<Route>) => {
    setRoutes(prevRoutes =>
      prevRoutes.map(route =>
        route.id === routeId ? { ...route, ...updates } : route
      )
    );
  };

  return {
    routes,
    buses,
    students,
    stats,
    updateRoute
  };
};