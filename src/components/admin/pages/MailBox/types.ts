export interface Mail {
  id: string;
  from: string;
  subject: string;
  preview: string;
  content: string;
  date: string;
  read: boolean;
  starred: boolean;
  attachments?: Array<{
    name: string;
    size: string;
  }>;
}

export interface NewMail {
  to: string;
  subject: string;
  content: string;
  attachments?: File[];
}

export interface MailFolder {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  count: number;
  active: boolean;
}