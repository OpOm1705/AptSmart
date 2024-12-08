import { useState, useEffect } from 'react';
import { User, UserFilters, NewUser } from '../types';

const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@school.com',
    role: 'Teacher',
    department: 'Science',
    status: 'Active',
    lastActive: '2 hours ago'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@school.com',
    role: 'Admin',
    status: 'Active',
    lastActive: '5 mins ago'
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael@school.com',
    role: 'Student',
    status: 'Active',
    lastActive: '1 hour ago'
  }
];

export const useUserManagement = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [filters, setFilters] = useState<UserFilters>({
    search: '',
    role: 'All',
    status: 'All',
    department: 'All'
  });

  const addUser = (newUser: NewUser) => {
    const user: User = {
      id: users.length + 1,
      ...newUser,
      status: 'Active',
      lastActive: 'Just now'
    };
    setUsers([...users, user]);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                         user.email.toLowerCase().includes(filters.search.toLowerCase());
    const matchesRole = filters.role === 'All' || user.role === filters.role;
    const matchesStatus = filters.status === 'All' || user.status === filters.status;
    const matchesDepartment = filters.department === 'All' || user.department === filters.department;

    return matchesSearch && matchesRole && matchesStatus && matchesDepartment;
  });

  return {
    users: filteredUsers,
    filters,
    setFilters,
    addUser
  };
};