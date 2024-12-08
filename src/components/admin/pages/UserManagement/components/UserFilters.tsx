import React from 'react';
import { Search } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { Select } from '../../../../ui/Select';
import { UserFilters as FilterType } from '../types';

interface UserFiltersProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
}

export const UserFilters: React.FC<UserFiltersProps> = ({ filters, onFilterChange }) => {
  return (
    <Card>
      <div className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
                value={filters.search}
                onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="w-48">
            <Select
              label="Role"
              value={filters.role}
              onChange={(value) => onFilterChange({ ...filters, role: value })}
              options={['All', 'Admin', 'Teacher', 'Student', 'Staff']}
            />
          </div>

          <div className="w-48">
            <Select
              label="Status"
              value={filters.status}
              onChange={(value) => onFilterChange({ ...filters, status: value })}
              options={['All', 'Active', 'Inactive']}
            />
          </div>

          <div className="w-48">
            <Select
              label="Department"
              value={filters.department}
              onChange={(value) => onFilterChange({ ...filters, department: value })}
              options={['All', 'Science', 'Mathematics', 'English', 'Social Studies']}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};