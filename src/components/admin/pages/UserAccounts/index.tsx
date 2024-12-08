import React, { useState } from 'react';
import { AdminLayout } from '../../AdminLayout';
import { UserList } from './components/UserList';
import { UserStats } from './components/UserStats';
import { UserFilters } from './components/UserFilters';
import { CreateUserModal } from './components/CreateUserModal';
import { useUsers } from '../../hooks/useUsers';

export const UserAccounts: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { users, stats, filters, setFilters, createUser, deleteUser, updateUser } = useUsers();

  return (
    <AdminLayout>
      <div className="p-6 space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Accounts</h1>
          <p className="text-sm text-gray-600">Manage user accounts and permissions</p>
        </div>

        <UserStats stats={stats} />
        <UserFilters filters={filters} onFilterChange={setFilters} />
        
        <UserList 
          users={users}
          onCreateNew={() => setIsCreateModalOpen(true)}
          onDelete={deleteUser}
          onUpdate={updateUser}
        />

        <CreateUserModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onSubmit={createUser}
        />
      </div>
    </AdminLayout>
  );
};