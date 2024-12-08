import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(['admin', 'teacher', 'student', 'staff']),
  status: z.enum(['active', 'inactive', 'suspended']),
  lastLogin: z.string(),
  createdAt: z.string()
});

export type User = z.infer<typeof UserSchema>;

export interface UserFilters {
  search: string;
  role: string;
  status: string;
  sortBy: string;
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

export interface NewUser {
  name: string;
  email: string;
  role: string;
  password: string;
}