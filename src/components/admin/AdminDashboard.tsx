import React from 'react';
import { Layout } from './Layout';
import { DashboardStats } from './DashboardStats';
import { RecentActivities } from './RecentActivities';
import { QuickActions } from './QuickActions';
import { AnalyticsCharts } from './AnalyticsCharts';
import { AcademicOverview } from './AcademicOverview';
import { ResourceAllocation } from './ResourceAllocation';

export const AdminDashboard: React.FC = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-600">Welcome back, Administrator</p>
          </div>
          <div className="flex space-x-4">
            <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last year</option>
            </select>
          </div>
        </div>

        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AnalyticsCharts />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AcademicOverview />
          <ResourceAllocation />
        </div>

        <RecentActivities />
      </div>
    </Layout>
  );
};