import React from 'react';
import { Card } from '../../../../ui/Card';
import { Bell, Pin } from 'lucide-react';

interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  isPinned: boolean;
  author: string;
}

interface NoticeBoardProps {
  notices: Notice[];
}

export const NoticeBoard: React.FC<NoticeBoardProps> = ({ notices }) => {
  const sortedNotices = [...notices].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">Notice Board</h2>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700">
            View All
          </button>
        </div>

        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {sortedNotices.map((notice) => (
            <div
              key={notice.id}
              className={`p-4 rounded-lg ${
                notice.isPinned ? 'bg-blue-50 border border-blue-100' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-medium text-gray-900">
                      {notice.title}
                    </h3>
                    {notice.isPinned && (
                      <Pin className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {notice.author} • {notice.date}
                  </p>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {notice.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};