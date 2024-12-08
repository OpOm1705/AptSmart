import { z } from 'zod';

export const MessageSchema = z.object({
  id: z.string(),
  subject: z.string(),
  content: z.string(),
  sender: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    avatar: z.string().optional()
  }),
  recipients: z.array(z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    type: z.enum(['to', 'cc', 'bcc'])
  })),
  attachments: z.array(z.object({
    id: z.string(),
    name: z.string(),
    size: z.number(),
    type: z.string(),
    url: z.string()
  })).optional(),
  timestamp: z.string(),
  isRead: z.boolean(),
  isStarred: z.boolean(),
  labels: z.array(z.string()).optional(),
  folder: z.string().default('inbox'),
  thread: z.string().optional()
});

export type Message = z.infer<typeof MessageSchema>;

export interface Folder {
  id: string;
  name: string;
  icon: React.ElementType;
  count?: number;
  type: 'system' | 'custom';
}

export interface Label {
  id: string;
  name: string;
  color: string;
}

export interface MailFilters {
  search: string;
  folder: string;
  labels: string[];
  read?: boolean;
  starred?: boolean;
  hasAttachments?: boolean;
  dateRange?: {
    start: Date;
    end: Date;
  };
}

export interface NewMessage {
  subject: string;
  content: string;
  recipients: {
    to: string[];
    cc?: string[];
    bcc?: string[];
  };
  attachments?: File[];
  scheduledFor?: Date;
}

export interface Template {
  id: string;
  name: string;
  subject: string;
  content: string;
}

export interface MailSettings {
  signature: string;
  autoReply: {
    enabled: boolean;
    message: string;
    startDate?: Date;
    endDate?: Date;
  };
  displayDensity: 'comfortable' | 'compact';
  threaded: boolean;
  notifications: {
    desktop: boolean;
    email: boolean;
  };
}