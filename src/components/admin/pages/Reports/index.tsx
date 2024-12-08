import React, { useState } from 'react';
import { Layout } from '../../Layout';
import { PerformanceMetrics } from './components/PerformanceMetrics';
import { AttendanceAnalytics } from './components/AttendanceAnalytics';
import { AcademicProgress } from './components/AcademicProgress';
import { ResourceUtilization } from './components/ResourceUtilization';
import { AIInsights } from './components/AIInsights';
import { ReportFilters } from './components/ReportFilters';

export const Reports: React.FC = () => {
  const [filters, setFilters] = useState({
    dateRange: 'month',
    grade: 'all',
    section: 'all'
  });

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-sm text-gray-600">Comprehensive insights and performance analysis</p>
        </div>

        <ReportFilters filters={filters} onFilterChange={setFilters} />
        <PerformanceMetrics filters={filters} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AttendanceAnalytics filters={filters} />
          <AcademicProgress filters={filters} />
        </div>

        <ResourceUtilization filters={filters} />
        <AIInsights filters={filters} />
      </div>
    </Layout>
  );
};