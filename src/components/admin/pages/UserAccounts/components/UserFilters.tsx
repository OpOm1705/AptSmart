import React from 'react';
import { Search } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { Select } from '../../../../ui/Select';
import { UserFilters as FilterType } from '../types';

interface UserFiltersProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
}

const roleOptions = [
  { value: 'All', label: 'All Roles' },
  { value: 'admin', label: 'Admin' },
  { value: 'teacher', label: 'Teacher' },
  { value: 'student', label: 'Student' },
  { value: 'parent', label: 'Parent' },
  { value: 'staff', label: 'Staff' }
];

const statusOptions = [
  { value: 'All', label: 'All Status' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'suspended', label: 'Suspended' }
];

const sortOptions = [
  { value: 'nameAsc', label: 'Name (A-Z)' },
  { value: 'nameDesc', label: 'Name (Z-A)' }
];

export const UserFilters: React.FC<UserFiltersProps> = ({
  filters,
  onFilterChange
}) => {
  return (
    <Card>
      <div className="p-4">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex-1 min-w-[240px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search Users
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name, email, or ID"
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
              options={roleOptions}
            />
          </div>

          <div className="w-48">
            <Select
              label="Status"
              value={filters.status}
              onChange={(value) => onFilterChange({ ...filters, status: value })}
              options={statusOptions}
            />
          </div>

          <div className="w-48">
            <Select
              label="Sort By"
              value={filters.sortBy}
              onChange={(value) => onFilterChange({ ...filters, sortBy: value as FilterType['sortBy'] })}
              options={sortOptions}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};