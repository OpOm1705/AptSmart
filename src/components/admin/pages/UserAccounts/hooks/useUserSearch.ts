import { useState, useCallback } from 'react';
import { User } from '../types';

export const useUserSearch = () => {
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const searchUsers = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    setSearchError(null);

    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock results
      const results: User[] = [
        {
          id: '1',
          name: 'John Smith',
          email: 'john@example.com',
          role: 'Admin',
          status: 'active',
          lastLogin: new Date().toISOString(),
          createdAt: new Date().toISOString()
        }
      ];
      
      setSearchResults(results);
    } catch (error) {
      setSearchError('Failed to search users');
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  return {
    searchResults,
    isSearching,
    searchError,
    searchUsers
  };
};