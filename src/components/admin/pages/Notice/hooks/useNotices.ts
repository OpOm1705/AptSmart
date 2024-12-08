import { useState } from 'react';
import { Notice, NoticeStatistics, NewNotice } from '../types';

const mockNotices: Notice[] = [
  {
    id: '1',
    title: 'Annual Sports Day',
    content: 'The annual sports day will be held on March 25th. All students must participate.',
    type: 'general',
    author: 'Admin',
    date: '2024-03-15T10:30:00Z',
    pinned: true
  },
  {
    id: '2',
    title: 'Staff Meeting',
    content: 'Important staff meeting regarding curriculum changes on Monday.',
    type: 'staff',
    author: 'Principal',
    date: '2024-03-14T15:45:00Z',
    pinned: false,
    expiryDate: '2024-03-20T00:00:00Z'
  }
];

const mockStats: NoticeStatistics = {
  activeNotices: '12',
  activeChange: '+2 this week',
  pinnedNotices: '3',
  pinnedChange: '+1 today',
  expiringSoon: '4',
  expiringChange: '-2 from last week',
  totalRecipients: '1,250',
  recipientChange: '+50 this month'
};

export const useNotices = () => {
  const [notices, setNotices] = useState<Notice[]>(mockNotices);
  const [stats] = useState<NoticeStatistics>(mockStats);

  const createNotice = (newNotice: NewNotice) => {
    const notice: Notice = {
      id: String(notices.length + 1),
      ...newNotice,
      author: 'Admin',
      date: new Date().toISOString()
    };
    setNotices([notice, ...notices]);
  };

  const updateNotice = (noticeId: string, updates: Partial<Notice>) => {
    setNotices(prevNotices =>
      prevNotices.map(notice =>
        notice.id === noticeId ? { ...notice, ...updates } : notice
      )
    );
  };

  const deleteNotice = (noticeId: string) => {
    setNotices(prevNotices => prevNotices.filter(notice => notice.id !== noticeId));
  };

  return {
    notices,
    stats,
    createNotice,
    updateNotice,
    deleteNotice
  };
};