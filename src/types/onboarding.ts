export interface SchoolDetails {
  name: string;
  address: string;
  affiliation: 'CBSE' | 'ICSE' | 'State Board' | 'IB' | 'IGCSE' | 'Other';
  schoolType: 'Government' | 'Private' | 'Semi-Private' | 'International' | 'Religious/Trust' | 'Boarding/Residential' | 'Other';
  udiseNumber: string;
  academicRange: {
    startingStandard: string;
    endingStandard: string;
  };
  contactNumber: string;
  email: string;
  website?: string;
  logo?: File;
}

export interface RegistrationDetails {
  studentCount: number;
  teacherCount: number;
  adminStaffCount: number;
  nonTeachingStaffCount: number;
  academicYearStart: string;
  academicYearEnd: string;
  studentData?: File;
  teacherData?: File;
  parentData?: File;
  staffData?: File;
}

export interface AdminUser {
  fullName: string;
  designation: string;
  contactNumber: string;
  userId: string;
  email: string;
  password: string;
}

export interface AdminAccount {
  primaryAdmin: AdminUser;
  additionalAdmins: AdminUser[];
}

export interface SetupPreferences {
  activePortals: {
    administrator: boolean;
    teacher: boolean;
    staff: boolean;
    parent: boolean;
    student: boolean;
  };
  services: {
    attendance: boolean;
    transport: boolean;
    homework: boolean;
    examGrading: boolean;
    communication: boolean;
    feeManagement: boolean;
    scheduling: boolean;
    reports: boolean;
    aiHelpers: boolean;
  };
  additionalRequirements?: string;
}

export type OnboardingStep = 'welcome' | 'school' | 'registration' | 'admin' | 'preferences' | 'summary' | 'complete';

export interface DataTemplate {
  type: 'student' | 'teacher' | 'parent' | 'staff';
  fields: string[];
}

export interface DataPreview {
  headers: string[];
  rows: any[];
  totalRows: number;
  validRows: number;
  errors: string[];
}