import { useState, useEffect } from 'react';
import { 
  SchoolDetails, 
  RegistrationDetails, 
  AdminAccount, 
  SetupPreferences 
} from '../types/onboarding';

const STORAGE_KEY = 'onboarding_state';

interface OnboardingState {
  schoolDetails: SchoolDetails;
  registrationDetails: RegistrationDetails;
  adminAccount: AdminAccount;
  setupPreferences: SetupPreferences;
  currentStep: string;
}

const defaultState: OnboardingState = {
  schoolDetails: {
    name: '',
    address: '',
    affiliation: 'CBSE',
    schoolType: 'Private',
    udiseNumber: '',
    academicRange: {
      startingStandard: '',
      endingStandard: ''
    },
    contactNumber: '',
    email: '',
    website: '',
  },
  registrationDetails: {
    studentCount: 0,
    teacherCount: 0,
    adminStaffCount: 0,
    nonTeachingStaffCount: 0,
    academicYearStart: '',
    academicYearEnd: '',
  },
  adminAccount: {
    primaryAdmin: {
      fullName: '',
      designation: '',
      contactNumber: '',
      userId: '',
      email: '',
      password: '',
    },
    additionalAdmins: [],
  },
  setupPreferences: {
    activePortals: {
      administrator: true,
      teacher: false,
      staff: false,
      parent: false,
      student: false,
    },
    services: {
      attendance: false,
      transport: false,
      homework: false,
      examGrading: false,
      communication: false,
      feeManagement: false,
      scheduling: false,
      reports: false,
      aiHelpers: false,
    },
    additionalRequirements: '',
  },
  currentStep: 'welcome',
};

export function useOnboardingState() {
  const [state, setState] = useState<OnboardingState>(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    return savedState ? JSON.parse(savedState) : defaultState;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const updateState = (updates: Partial<OnboardingState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const resetState = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState(defaultState);
  };

  return {
    state,
    updateState,
    resetState,
  };
}