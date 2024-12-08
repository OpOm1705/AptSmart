import React from 'react';
import { Card } from '../../../../ui/Card';
import { Select } from '../../../../ui/Select';

interface ReportFiltersProps {
  filters: {
    dateRange: string;
    grade: string;
    section: string;
  };
  onFilterChange: (filters: any) => void;
}

export const ReportFilters: React.FC<ReportFiltersProps> = ({ filters, onFilterChange }) => {
  return (
    <Card>
      <div className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="w-48">
            <Select
              label="Date Range"
              value={filters.dateRange}
              onChange={(value) => onFilterChange({ ...filters, dateRange: value })}
              options={['week', 'month', 'quarter', 'year']}
            />
          </div>
          <div className="w-48">
            <Select
              label="Grade"
              value={filters.grade}
              onChange={(value) => onFilterChange({ ...filters, grade: value })}
              options={['all', '9', '10', '11', '12']}
            />
          </div>
          <div className="w-48">
            <Select
              label="Section"
              value={filters.section}
              onChange={(value) => onFilterChange({ ...filters, section: value })}
              options={['all', 'A', 'B', 'C']}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};