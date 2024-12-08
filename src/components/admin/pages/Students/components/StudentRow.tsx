import React from 'react';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { Menu } from '@headlessui/react';
import { Student } from '../types';

interface StudentRowProps {
  student: Student;
}

export const StudentRow: React.FC<StudentRowProps> = ({ student }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=random`}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{student.name}</div>
            <div className="text-sm text-gray-500">Roll No: {student.rollNumber}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">Grade {student.grade}</div>
        <div className="text-sm text-gray-500">Section {student.section}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Attendance:</span>
            <span className="text-sm font-medium text-gray-900">{student.attendance}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Performance:</span>
            <span className="text-sm font-medium text-gray-900">{student.performance}%</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{student.parentName}</div>
        <div className="text-sm text-gray-500">{student.contact}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
          student.status === 'Active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {student.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="p-2 hover:bg-gray-100 rounded-full">
            <MoreVertical className="h-5 w-5 text-gray-400" />
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } group flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                >
                  <Edit2 className="h-4 w-4 mr-3 text-gray-400" />
                  Edit Student
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } group flex items-center w-full px-4 py-2 text-sm text-red-600`}
                >
                  <Trash2 className="h-4 w-4 mr-3 text-red-400" />
                  Remove Student
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </td>
    </tr>
  );
};