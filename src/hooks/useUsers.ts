import { useState, useCallback } from 'react';
import { User, UserFilters, UserStatistics, NewUser } from '../types/user.types';
import { api } from '../services/api';

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@school.com',
    role: 'teacher',
    status: 'active',
    lastLogin: '2024-03-15T10:30:00Z',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@school.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-03-15T09:15:00Z',
    createdAt: '2024-01-01T00:00:00Z'
  }
];

const mockStats: UserStatistics = {
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats] = useState<UserStatistics>(mockStats);
  const [filters, setFilters] = useState<UserFilters>({
    search: '',
    role: 'All',
    status: 'All',
    sortBy: 'Name'
  });

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const data = await api.users.getAll();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }, []);

  const createUser = async (newUser: NewUser) => {
    try {
      setLoading(true);
      const user = await api.users.create(newUser);
      setUsers(prev => [user, ...prev]);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (userId: string, updates: Partial<User>) => {
    try {
      setLoading(true);
      const updatedUser = await api.users.update(userId, updates);
      setUsers(prev => prev.map(user => 
        user.id === userId ? updatedUser : user
      ));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId: string) => {
    try {
      setLoading(true);
      await api.users.delete(userId);
      setUsers(prev => prev.filter(user => user.id !== userId));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                         user.email.toLowerCase().includes(filters.search.toLowerCase());
    const matchesRole = filters.role === 'All' || user.role === filters.role.toLowerCase();
    const matchesStatus = filters.status === 'All' || user.status === filters.status.toLowerCase();

    return matchesSearch && matchesRole && matchesStatus;
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'Name':
        return a.name.localeCompare(b.name);
      case 'Role':
        return a.role.localeCompare(b.role);
      case 'Status':
        return a.status.localeCompare(b.status);
      case 'Last Login':
        return new Date(b.lastLogin).getTime() - new Date(a.lastLogin).getTime();
      default:
        return 0;
    }
  });

  return {
    users: filteredUsers,
    loading,
    error,
    stats,
    filters,
    setFilters,
    createUser,
    updateUser,
    deleteUser
  };
};