import React, { useState } from 'react';
import { AdminLayout } from '../../AdminLayout';
import { NoticeList } from './components/NoticeList';
import { CreateNoticeModal } from './components/CreateNoticeModal';
import { NoticeStats } from './components/NoticeStats';
import { useNotices } from './hooks/useNotices';

export const Notice: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { notices, stats, createNotice, deleteNotice, updateNotice } = useNotices();

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notice Board</h1>
          <p className="text-sm text-gray-600">Manage and publish school notices</p>
        </div>

        <NoticeStats stats={stats} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <NoticeList 
            title="General Notices"
            notices={notices.filter(n => n.type === 'general')}
            onCreateNew={() => setIsCreateModalOpen(true)}
            onDelete={deleteNotice}
            onUpdate={updateNotice}
          />
          <NoticeList 
            title="Staff Notices"
            notices={notices.filter(n => n.type === 'staff')}
            onCreateNew={() => setIsCreateModalOpen(true)}
            onDelete={deleteNotice}
            onUpdate={updateNotice}
          />
        </div>

        <CreateNoticeModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onSubmit={createNotice}
        />
      </div>
    </AdminLayout>
  );
};