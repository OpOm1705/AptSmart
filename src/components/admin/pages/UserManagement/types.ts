export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department?: string;
  status: 'Active' | 'Inactive';
  lastActive: string;
}

export interface NewUser {
  name: string;
  email: string;
  role: string;
  department?: string;
  password: string;
}

export interface UserFilters {
  search: string;
  role: string;
  status: string;
  department: string;
}