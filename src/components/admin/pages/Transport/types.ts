export interface Bus {
  id: string;
  number: string;
  driver: string;
  route: string;
  capacity: number;
  status: 'On Route' | 'Available' | 'Maintenance';
  currentLocation?: string;
  nextStop?: string;
  eta?: string;
  lastService: string;
  nextService: string;
}