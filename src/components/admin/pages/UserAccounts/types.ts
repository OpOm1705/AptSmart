export interface UserFilters {
  search: string;
  role: string;
  status: string;
  sortBy: 'nameAsc' | 'nameDesc';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'suspended';
  lastLogin: string;
}

export interface UserStatistics {
  totalUsers: string;
  totalChange: string;
  activeUsers: string;
  activeChange: string;
  suspendedUsers: string;
  suspendedChange: string;
  recentLogins: string;
  loginChange: string;
}