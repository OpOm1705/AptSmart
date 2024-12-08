import React from 'react';
import { Layout } from '../../Layout';
import { StudentStats } from './components/StudentStats';
import { StudentFilters } from './components/StudentFilters';
import { StudentList } from './components/StudentList';
import { StudentPerformance } from './components/StudentPerformance';
import { AIInsights } from './components/AIInsights';
import { useStudentData } from './hooks/useStudentData';

export const Students: React.FC = () => {
  const { students, filters, setFilters, stats, insights } = useStudentData();

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
          <p className="text-sm text-gray-600">Manage and monitor student information</p>
        </div>

        <StudentStats stats={stats} />
        <StudentFilters filters={filters} onFilterChange={setFilters} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StudentList students={students} />
          </div>
          <div className="space-y-6">
            <StudentPerformance />
            <AIInsights insights={insights} />
          </div>
        </div>
      </div>
    </Layout>
  );
};