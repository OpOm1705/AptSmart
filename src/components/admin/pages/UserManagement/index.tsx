import React, { useState } from 'react';
import { Layout } from '../../Layout';
import { UserStats } from './components/UserStats';
import { UserFilters } from './components/UserFilters';
import { UserList } from './components/UserList';
import { AddUserModal } from './components/AddUserModal';
import { useUserManagement } from './hooks/useUserManagement';

export const UserManagement: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { users, filters, setFilters, addUser } = useUserManagement();

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            <p className="text-sm text-gray-600">Manage users, roles, and permissions</p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add New User
          </button>
        </div>

        <UserStats users={users} />
        <UserFilters filters={filters} onFilterChange={setFilters} />
        <UserList users={users} />
        
        <AddUserModal 
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAdd={addUser}
        />
      </div>
    </Layout>
  );
};