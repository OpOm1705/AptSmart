import React from 'react';
import { Search } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { Select } from '../../../../ui/Select';
import { StudentFilters as FilterType } from '../types';

interface StudentFiltersProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
}

export const StudentFilters: React.FC<StudentFiltersProps> = ({ filters, onFilterChange }) => {
  return (
    <Card>
      <div className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search students..."
                value={filters.search}
                onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="w-48">
            <Select
              label="Grade"
              value={filters.grade}
              onChange={(value) => onFilterChange({ ...filters, grade: value })}
              options={['All', '9', '10', '11', '12']}
            />
          </div>

          <div className="w-48">
            <Select
              label="Section"
              value={filters.section}
              onChange={(value) => onFilterChange({ ...filters, section: value })}
              options={['All', 'A', 'B', 'C']}
            />
          </div>

          <div className="w-48">
            <Select
              label="Performance"
              value={filters.performance}
              onChange={(value) => onFilterChange({ ...filters, performance: value })}
              options={['All', 'Above 90%', 'Above 80%', 'Below 60%']}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};