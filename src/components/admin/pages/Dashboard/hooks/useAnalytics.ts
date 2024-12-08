import { useState } from 'react';

interface AnalyticsData {
  date: string;
  attendance: number;
  performance: number;
}

export const useAnalytics = () => {
  const [data] = useState<AnalyticsData[]>([
    { date: 'Mon', attendance: 95, performance: 88 },
    { date: 'Tue', attendance: 93, performance: 85 },
    { date: 'Wed', attendance: 96, performance: 90 },
    { date: 'Thu', attendance: 94, performance: 87 },
    { date: 'Fri', attendance: 95, performance: 89 },
    { date: 'Sat', attendance: 97, performance: 92 },
    { date: 'Sun', attendance: 96, performance: 91 }
  ]);

  return { data };
};