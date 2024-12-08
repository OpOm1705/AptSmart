import React from 'react';
import { Search } from 'lucide-react';
import { Card } from '../../../../ui/Card';

interface UserSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const UserSearch: React.FC<UserSearchProps> = ({ value, onChange }) => {
  return (
    <Card className="p-4">
      <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
        Search
      </label>
      <div className="relative">
        <input
          id="search"
          type="text"
          placeholder="Search by name, email, or role..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </Card>
  );
};