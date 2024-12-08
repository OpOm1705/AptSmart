import { useState } from 'react';
import { Mail, MailFolder, NewMail } from '../types';
import { Inbox, Send, Star, Archive, Trash } from 'lucide-react';

const mockMails: Mail[] = [
  {
    id: '1',
    from: 'John Smith',
    subject: 'Meeting Tomorrow',
    preview: 'Hi, just wanted to confirm our meeting tomorrow at 10 AM...',
    content: 'Hi,\n\nJust wanted to confirm our meeting tomorrow at 10 AM in the conference room. Please let me know if you need to reschedule.\n\nBest regards,\nJohn',
    date: '2024-03-15T10:30:00Z',
    read: false,
    starred: true
  },
  {
    id: '2',
    from: 'Sarah Johnson',
    subject: 'Project Update',
    preview: 'Here\'s the latest update on the project status...',
    content: 'Hello,\n\nI wanted to share the latest updates on our project. We\'ve made significant progress and are on track to meet our deadlines.\n\nRegards,\nSarah',
    date: '2024-03-14T15:45:00Z',
    read: true,
    starred: false,
    attachments: [
      { name: 'project-report.pdf', size: '2.5 MB' },
      { name: 'timeline.xlsx', size: '1.2 MB' }
    ]
  }
];

const mockFolders: MailFolder[] = [
  { id: 'inbox', name: 'Inbox', icon: Inbox, count: 2, active: true },
  { id: 'sent', name: 'Sent', icon: Send, count: 0, active: false },
  { id: 'starred', name: 'Starred', icon: Star, count: 1, active: false },
  { id: 'archive', name: 'Archive', icon: Archive, count: 0, active: false },
  { id: 'trash', name: 'Trash', icon: Trash, count: 0, active: false }
];

export const useMail = () => {
  const [mails, setMails] = useState<Mail[]>(mockMails);
  const [folders] = useState<MailFolder[]>(mockFolders);

  const sendMail = (newMail: NewMail) => {
    const mail: Mail = {
      id: String(mails.length + 1),
      from: 'You',
      subject: newMail.subject,
      preview: newMail.content.slice(0, 100) + '...',
      content: newMail.content,
      date: new Date().toISOString(),
      read: true,
      starred: false
    };
    setMails([mail, ...mails]);
  };

  const deleteMail = (mailId: string) => {
    setMails(prevMails => prevMails.filter(mail => mail.id !== mailId));
  };

  const markAsRead = (mailId: string) => {
    setMails(prevMails =>
      prevMails.map(mail =>
        mail.id === mailId ? { ...mail, read: true } : mail
      )
    );
  };

  return {
    mails,
    folders,
    sendMail,
    deleteMail,
    markAsRead
  };
};