export interface AcademicOverviewData {
  activeClasses: number;
  teacherStudentRatio: string;
  avgClassDuration: string;
  performanceIndex: string;
  classDistribution: Array<{ label: string; value: string }>;
  staffingDetails: Array<{ label: string; value: string }>;
  scheduleDetails: Array<{ label: string; value: string }>;
  performanceDetails: Array<{ label: string; value: string }>;
}

export interface TeacherData {
  id: string;
  name: string;
  section: string;
}

export interface ClassData {
  id: string;
  grade: string;
  sections: string[];
  totalStudents: number;
  teachers: TeacherData[];
  subjects: string[];
}

export interface SubjectProgress {
  id: string;
  name: string;
  grade: string;
  completedUnits: number;
  totalUnits: number;
  status: 'On Track' | 'Behind' | 'Ahead';
}

export interface CurriculumData {
  subjects: SubjectProgress[];
}

export interface AIInsight {
  title: string;
  description: string;
  action?: string;
}

export interface AcademicData {
  overview: AcademicOverviewData;
  classes: ClassData[];
  curriculum: CurriculumData;
  aiInsights: AIInsight[];
}