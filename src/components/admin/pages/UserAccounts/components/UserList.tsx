import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Plus, Download, MoreVertical, Edit2, Trash2, Ban } from 'lucide-react';
import { Menu } from '@headlessui/react';
import { format } from 'date-fns';
import { User } from '../types';

interface UserListProps {
  users: User[];
  onCreateNew: () => void;
  onDelete: (userId: string) => void;
  onUpdate: (userId: string, updates: Partial<User>) => void;
}

export const UserList: React.FC<UserListProps> = ({
  users,
  onCreateNew,
  onDelete,
  onUpdate
}) => {
  return (
    <Card className="w-full">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Users</h2>
          <div className="flex space-x-2">
            <Button variant="outline" icon={Download}>Export</Button>
            <Button icon={Plus} onClick={onCreateNew}>Create User</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[40%]">
                  User
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {format(new Date(user.lastLogin), 'MMM d, yyyy HH:mm')}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button className="p-1 hover:bg-gray-100 rounded-full">
                        <MoreVertical className="h-4 w-4 text-gray-400" />
                      </Menu.Button>
                      <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? 'bg-gray-100' : ''
                              } group flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                              onClick={() => onUpdate(user.id, {})}
                            >
                              <Edit2 className="h-4 w-4 mr-3 text-gray-400" />
                              Edit User
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? 'bg-gray-100' : ''
                              } group flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                              onClick={() => onUpdate(user.id, { 
                                status: user.status === 'active' ? 'suspended' : 'active' 
                              })}
                            >
                              <Ban className="h-4 w-4 mr-3 text-gray-400" />
                              {user.status === 'active' ? 'Suspend' : 'Activate'}
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? 'bg-red-50' : ''
                              } group flex items-center w-full px-4 py-2 text-sm text-red-600`}
                              onClick={() => onDelete(user.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-3 text-red-400" />
                              Delete User
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};