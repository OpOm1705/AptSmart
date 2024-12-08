import { User, NewUser } from '../types/user.types';

const BASE_URL = '/api';

export const api = {
  users: {
    getAll: async (): Promise<User[]> => {
      const response = await fetch(`${BASE_URL}/users`);
      if (!response.ok) throw new Error('Failed to fetch users');
      return response.json();
    },

    create: async (user: NewUser): Promise<User> => {
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });
      if (!response.ok) throw new Error('Failed to create user');
      return response.json();
    },

    update: async (id: string, updates: Partial<User>): Promise<User> => {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      if (!response.ok) throw new Error('Failed to update user');
      return response.json();
    },

    delete: async (id: string): Promise<void> => {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete user');
    }
  }
};