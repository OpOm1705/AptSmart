import React from 'react';
import { TeacherLayout } from '../../TeacherLayout';
import { StudentList } from './components/StudentList';
import { StudentFilters } from './components/StudentFilters';
import { StudentStats } from './components/StudentStats';
import { PerformanceOverview } from './components/PerformanceOverview';
import { useStudents } from './hooks/useStudents';

export const Students: React.FC = () => {
  const { students, filters, stats, setFilters } = useStudents();

  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Students</h1>
          <p className="text-sm text-gray-600">View and manage your students</p>
        </div>

        <StudentStats stats={stats} />
        <StudentFilters filters={filters} onFilterChange={setFilters} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StudentList students={students} />
          </div>
          <div>
            <PerformanceOverview />
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};