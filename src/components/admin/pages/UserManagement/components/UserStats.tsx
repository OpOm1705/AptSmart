import React from 'react';
import { Users, GraduationCap, UserCog, Users2 } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { User } from '../types';
import { getColorClass } from '../../../../../utils/styles';

interface UserStatsProps {
  users: User[];
}

const stats = [
  {
    title: 'Total Users',
    icon: Users,
    color: 'blue',
    getValue: (users: User[]) => users.length
  },
  {
    title: 'Active Teachers',
    icon: GraduationCap,
    color: 'green',
    getValue: (users: User[]) => users.filter(u => u.role === 'Teacher' && u.status === 'Active').length
  },
  {
    title: 'Active Students',
    icon: Users2,
    color: 'purple',
    getValue: (users: User[]) => users.filter(u => u.role === 'Student' && u.status === 'Active').length
  },
  {
    title: 'Administrators',
    icon: UserCog,
    color: 'orange',
    getValue: (users: User[]) => users.filter(u => u.role === 'Admin').length
  }
];

export const UserStats: React.FC<UserStatsProps> = ({ users }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const value = stat.getValue(users);
        
        return (
          <Card key={index}>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg ${getColorClass(stat.color)}`}>
                  <Icon className={`h-6 w-6 ${getColorClass(stat.color, 'text')}`} />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};