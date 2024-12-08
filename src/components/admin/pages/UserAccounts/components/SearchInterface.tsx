import React from 'react';
import { UserFilters } from './UserFilters';
import { ActiveFilters } from './ActiveFilters';
import { useUserFilters } from '../hooks/useUserFilters';

export const SearchInterface: React.FC = () => {
  const { filters, updateFilters, resetFilters } = useUserFilters();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserFilters
          filters={filters}
          onFilterChange={updateFilters}
          onReset={resetFilters}
        />
        <div className="flex flex-col space-y-4">
          <div className="flex-1">
            <ActiveFilters
              filters={filters}
              onRemoveFilter={(key) => {
                updateFilters({ [key]: key === 'sortBy' ? 'nameAsc' : 'All' });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};