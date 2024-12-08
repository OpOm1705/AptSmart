export interface Notice {
  id: string;
  title: string;
  content: string;
  type: 'general' | 'staff';
  author: string;
  date: string;
  pinned: boolean;
  expiryDate?: string;
}

export interface NewNotice {
  title: string;
  content: string;
  type: 'general' | 'staff';
  pinned: boolean;
  expiryDate?: string;
}

export interface NoticeStatistics {
  activeNotices: string;
  activeChange: string;
  pinnedNotices: string;
  pinnedChange: string;
  expiringSoon: string;
  expiringChange: string;
  totalRecipients: string;
  recipientChange: string;
}