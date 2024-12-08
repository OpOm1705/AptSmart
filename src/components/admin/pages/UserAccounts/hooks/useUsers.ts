import { useState } from 'react';
import { User, UserFilters, UserStatistics, NewUser } from '../types';

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@school.com',
    role: 'Teacher',
    department: 'Mathematics',
    status: 'Active',
    lastLogin: '2 hours ago'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@school.com',
    role: 'Admin',
    department: 'Administration',
    status: 'Active',
    lastLogin: '5 mins ago'
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
  const [stats] = useState<UserStatistics>(mockStats);
  const [filters, setFilters] = useState<UserFilters>({
    search: '',
    role: 'All',
    status: 'All',
    sortBy: 'Name'
  });

  const createUser = (newUser: NewUser) => {
    const user: User = {
      id: String(users.length + 1),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      department: newUser.department,
      status: 'Active',
      lastLogin: 'Just now'
    };
    setUsers([user, ...users]);
  };

  const deleteUser = (userId: string) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  const updateUser = (userId: string, updates: Partial<User>) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, ...updates } : user
      )
    );
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                         user.email.toLowerCase().includes(filters.search.toLowerCase());
    const matchesRole = filters.role === 'All' || user.role === filters.role;
    const matchesStatus = filters.status === 'All' || user.status === filters.status;

    return matchesSearch && matchesRole && matchesStatus;
  });

  return {
    users: filteredUsers,
    stats,
    filters,
    setFilters,
    createUser,
    deleteUser,
    updateUser
  };
};