import { useState, useCallback } from 'react';
import { UserFilters } from '../types';

const defaultFilters: UserFilters = {
  search: '',
  role: 'All',
  status: 'All',
  sortBy: 'nameAsc'
};

export const useUserFilters = () => {
  const [filters, setFilters] = useState<UserFilters>(defaultFilters);

  const updateFilters = useCallback((updates: Partial<UserFilters>) => {
    setFilters(prev => ({
      ...prev,
      ...updates
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  return {
    filters,
    updateFilters,
    resetFilters
  };
};