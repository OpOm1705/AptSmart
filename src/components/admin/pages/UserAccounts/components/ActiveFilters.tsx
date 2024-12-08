import React from 'react';
import { X } from 'lucide-react';
import { UserFilters } from '../types';

interface ActiveFiltersProps {
  filters: UserFilters;
  onRemoveFilter: (key: keyof UserFilters) => void;
}

export const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  filters,
  onRemoveFilter
}) => {
  const activeFilters = Object.entries(filters).filter(([key, value]) => {
    if (key === 'sortBy') return value !== 'nameAsc';
    if (key === 'search') return value !== '';
    return value !== 'All';
  });

  if (activeFilters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {activeFilters.map(([key, value]) => (
        <span
          key={key}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
        >
          <span className="mr-1">{key}:</span>
          <span className="font-medium">{value}</span>
          <button
            onClick={() => onRemoveFilter(key as keyof UserFilters)}
            className="ml-2 p-0.5 hover:bg-blue-100 rounded-full"
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}
    </div>
  );
};