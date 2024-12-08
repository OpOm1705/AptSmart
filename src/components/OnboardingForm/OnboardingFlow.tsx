import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { WelcomeStep } from './WelcomeStep';
import { SchoolDetailsStep } from './SchoolDetailsStep';
import { RegistrationStep } from './RegistrationStep';
import { AdminAccountStep } from './AdminAccountStep';
import { SetupPreferencesStep } from './SetupPreferencesStep';
import { SummaryStep } from './SummaryStep';
import { SuccessScreen } from './SuccessScreen';
import { Navigation } from '../layout/Navigation';
import { OnboardingStep } from '../../types/onboarding';
import { useOnboardingState } from '../../hooks/useOnboardingState';

export const OnboardingFlow: React.FC = () => {
  const navigate = useNavigate();
  const { state, updateState } = useOnboardingState();

  const handleStepChange = (step: OnboardingStep) => {
    updateState({ currentStep: step });
    navigate(`/onboarding/${step}`);
  };

  const handleSchoolDetailsUpdate = (updates: any) => {
    updateState({ schoolDetails: { ...state.schoolDetails, ...updates } });
  };

  const handleRegistrationUpdate = (updates: any) => {
    updateState({ registrationDetails: { ...state.registrationDetails, ...updates } });
  };

  const handleAdminAccountUpdate = (updates: any) => {
    updateState({ adminAccount: { ...state.adminAccount, ...updates } });
  };

  const handleSetupPreferencesUpdate = (updates: any) => {
    updateState({ setupPreferences: { ...state.setupPreferences, ...updates } });
  };

  const handleSubmit = async () => {
    try {
      // Here you would typically send the data to your backend
      handleStepChange('complete');
    } catch (error) {
      console.error('Failed to submit onboarding data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navigation currentStep={state.currentStep} onStepChange={handleStepChange} />
      
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route 
            path="welcome" 
            element={<WelcomeStep onNext={() => handleStepChange('school')} />} 
          />
          <Route 
            path="school" 
            element={
              <SchoolDetailsStep 
                data={state.schoolDetails}
                onUpdate={handleSchoolDetailsUpdate}
                onNext={() => handleStepChange('registration')}
              />
            } 
          />
          <Route 
            path="registration" 
            element={
              <RegistrationStep 
                data={state.registrationDetails}
                onUpdate={handleRegistrationUpdate}
                onNext={() => handleStepChange('admin')}
              />
            } 
          />
          <Route 
            path="admin" 
            element={
              <AdminAccountStep 
                data={state.adminAccount}
                onUpdate={handleAdminAccountUpdate}
                onNext={() => handleStepChange('preferences')}
              />
            } 
          />
          <Route 
            path="preferences" 
            element={
              <SetupPreferencesStep 
                data={state.setupPreferences}
                onUpdate={handleSetupPreferencesUpdate}
                onNext={() => handleStepChange('summary')}
              />
            } 
          />
          <Route 
            path="summary" 
            element={
              <SummaryStep 
                schoolDetails={state.schoolDetails}
                registrationDetails={state.registrationDetails}
                adminAccount={state.adminAccount}
                setupPreferences={state.setupPreferences}
                onEdit={(step) => handleStepChange(step)}
                onSubmit={handleSubmit}
              />
            } 
          />
          <Route 
            path="complete" 
            element={
              <SuccessScreen 
                schoolName={state.schoolDetails.name}
                adminEmail={state.adminAccount.primaryAdmin.email}
              />
            } 
          />
        </Routes>
      </div>
    </div>
  );
};