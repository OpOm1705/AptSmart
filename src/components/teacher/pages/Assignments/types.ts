export interface Assignment {
  id: string;
  title: string;
  subject: string;
  class: string;
  dueDate: string;
  totalPoints: number;
  submissionCount: number;
  totalStudents: number;
  status: 'Draft' | 'Active' | 'Past Due' | 'Completed';
  type: 'Homework' | 'Quiz' | 'Project' | 'Test';
}

export interface AssignmentStatistics {
  activeAssignments: string;
  assignmentChange: string;
  avgCompletion: string;
  completionChange: string;
  avgScore: string;
  scoreChange: string;
  pendingGrading: string;
  gradingChange: string;
}

export interface SubmissionAnalytics {
  onTime: number;
  late: number;
  missing: number;
  total: number;
  byGrade: {
    'A': number;
    'B': number;
    'C': number;
    'D': number;
    'F': number;
  };
}

export interface NewAssignment {
  title: string;
  subject: string;
  class: string;
  dueDate: string;
  totalPoints: number;
  type: Assignment['type'];
  description: string;
  attachments?: File[];
}