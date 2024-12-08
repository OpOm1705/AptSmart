import { useState } from 'react';
import { User } from '../pages/UserAccounts/types';

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@school.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-03-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@school.com',
    role: 'teacher',
    status: 'active',
    lastLogin: '2024-03-15T09:15:00Z'
  }
];

const mockStats = {
  totalUsers: '156',
  totalChange: '+12 this week',
  activeUsers: '145',
  activeChange: '+10 this week',
  suspendedUsers: '11',
  suspendedChange: '+2 this week',
  recentLogins: '89',
  loginChange: '+15 today'
};

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [stats] = useState(mockStats);
  const [filters, setFilters] = useState({
    search: '',
    role: 'All',
    status: 'All',
    sortBy: 'nameAsc' as const
  });

  const createUser = (user: Omit<User, 'id' | 'lastLogin'>) => {
    const newUser: User = {
      id: String(users.length + 1),
      lastLogin: new Date().toISOString(),
      ...user
    };
    setUsers([newUser, ...users]);
  };

  const updateUser = (userId: string, updates: Partial<User>) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, ...updates } : user
      )
    );
  };

  const deleteUser = (userId: string) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                         user.email.toLowerCase().includes(filters.search.toLowerCase());
    const matchesRole = filters.role === 'All' || user.role === filters.role.toLowerCase();
    const matchesStatus = filters.status === 'All' || user.status === filters.status.toLowerCase();

    return matchesSearch && matchesRole && matchesStatus;
  }).sort((a, b) => {
    if (filters.sortBy === 'nameAsc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return {
    users: filteredUsers,
    stats,
    filters,
    setFilters,
    createUser,
    updateUser,
    deleteUser
  };
};