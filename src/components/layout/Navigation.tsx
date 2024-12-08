import React, { useState } from 'react';
import { School, Menu, X, ChevronRight } from 'lucide-react';
import { OnboardingStep } from '../../types/onboarding';

interface NavigationProps {
  currentStep: OnboardingStep;
  onStepChange: (step: OnboardingStep) => void;
}

interface StepConfig {
  id: OnboardingStep;
  label: string;
  description: string;
}

const steps: StepConfig[] = [
  {
    id: 'welcome',
    label: 'Welcome',
    description: 'Get started with AptSmart'
  },
  {
    id: 'school',
    label: 'School Details',
    description: 'Basic school information'
  },
  {
    id: 'registration',
    label: 'Registration',
    description: 'Student and staff details'
  },
  {
    id: 'admin',
    label: 'Admin Account',
    description: 'Administrator setup'
  },
  {
    id: 'preferences',
    label: 'Preferences',
    description: 'Portal and service configuration'
  },
  {
    id: 'summary',
    label: 'Summary',
    description: 'Review and confirm'
  },
  {
    id: 'complete',
    label: 'Complete',
    description: 'Registration successful'
  }
];

export const Navigation: React.FC<NavigationProps> = ({ currentStep, onStepChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getCurrentStepIndex = () => steps.findIndex(step => step.id === currentStep);

  const getStepStatus = (stepId: OnboardingStep) => {
    const currentIndex = getCurrentStepIndex();
    const stepIndex = steps.findIndex(step => step.id === stepId);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'current';
    return 'upcoming';
  };

  const handleStepClick = (stepId: OnboardingStep) => {
    const clickedStepIndex = steps.findIndex(step => step.id === stepId);
    const currentIndex = getCurrentStepIndex();

    // Only allow navigation to completed steps or the next available step
    if (clickedStepIndex <= currentIndex) {
      onStepChange(stepId);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <School className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AptSmart</span>
            </div>
            
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {steps.map((step) => {
                const status = getStepStatus(step.id);
                return (
                  <div
                    key={step.id}
                    className={`group relative flex items-center ${
                      status === 'upcoming' ? 'cursor-not-allowed' : 'cursor-pointer'
                    }`}
                    onClick={() => handleStepClick(step.id)}
                  >
                    <div
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        status === 'current'
                          ? 'text-blue-600 bg-blue-50'
                          : status === 'completed'
                          ? 'text-green-600 hover:text-green-700'
                          : 'text-gray-400'
                      }`}
                    >
                      {step.label}
                      {status === 'current' && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
                      )}
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {step.description}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {steps.map((step) => {
            const status = getStepStatus(step.id);
            return (
              <div
                key={step.id}
                className={`group ${
                  status === 'upcoming' ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
                onClick={() => handleStepClick(step.id)}
              >
                <div
                  className={`
                    flex items-center justify-between px-3 py-2 rounded-md text-base font-medium
                    ${
                      status === 'current'
                        ? 'text-blue-600 bg-blue-50'
                        : status === 'completed'
                        ? 'text-green-600'
                        : 'text-gray-400'
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        status === 'current'
                          ? 'bg-blue-600'
                          : status === 'completed'
                          ? 'bg-green-600'
                          : 'bg-gray-300'
                      }`}
                    />
                    <span>{step.label}</span>
                  </div>
                  {status === 'current' && (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </div>
                <p className="ml-8 mt-1 text-sm text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};