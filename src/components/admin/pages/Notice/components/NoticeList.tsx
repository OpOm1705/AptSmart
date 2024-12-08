import React from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Plus, MoreVertical, Edit2, Trash2, Pin } from 'lucide-react';
import { Menu } from '@headlessui/react';
import { format } from 'date-fns';
import { Notice } from '../types';

interface NoticeListProps {
  title: string;
  notices: Notice[];
  onCreateNew: () => void;
  onDelete: (noticeId: string) => void;
  onUpdate: (noticeId: string, updates: Partial<Notice>) => void;
}

export const NoticeList: React.FC<NoticeListProps> = ({
  title,
  notices,
  onCreateNew,
  onDelete,
  onUpdate
}) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <Button icon={Plus} onClick={onCreateNew}>Add Notice</Button>
        </div>

        <div className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`p-4 rounded-lg ${
                notice.pinned ? 'bg-blue-50 border border-blue-100' : 'bg-gray-50'
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-medium text-gray-900">
                      {notice.title}
                    </h3>
                    {notice.pinned && (
                      <Pin className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{notice.content}</p>
                  <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                    <span>Posted by {notice.author}</span>
                    <span>{format(new Date(notice.date), 'MMM d, yyyy')}</span>
                    {notice.expiryDate && (
                      <span>Expires: {format(new Date(notice.expiryDate), 'MMM d, yyyy')}</span>
                    )}
                  </div>
                </div>

                <Menu as="div" className="relative ml-4">
                  <Menu.Button className="p-1 rounded-full hover:bg-gray-200">
                    <MoreVertical className="h-4 w-4 text-gray-500" />
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-1 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                          onClick={() => onUpdate(notice.id, { pinned: !notice.pinned })}
                        >
                          {notice.pinned ? 'Unpin Notice' : 'Pin Notice'}
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                          onClick={() => onUpdate(notice.id, {})}
                        >
                          <Edit2 className="h-4 w-4 inline mr-2" />
                          Edit Notice
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-red-50' : ''
                          } block px-4 py-2 text-sm text-red-600 w-full text-left`}
                          onClick={() => onDelete(notice.id)}
                        >
                          <Trash2 className="h-4 w-4 inline mr-2" />
                          Delete Notice
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          ))}

          {notices.length === 0 && (
            <div className="text-center py-6">
              <p className="text-sm text-gray-500">No notices to display</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};