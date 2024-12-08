import React from 'react';
import { Check, Circle } from 'lucide-react';
import { OnboardingStep } from '../../types/onboarding';

interface StepIndicatorProps {
  currentStep: OnboardingStep;
}

const steps = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'school', label: 'School Details' },
  { id: 'registration', label: 'Registration' },
  { id: 'admin', label: 'Admin Account' },
  { id: 'complete', label: 'Complete' },
];

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const getCurrentStepIndex = () => steps.findIndex(step => step.id === currentStep);

  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="relative flex flex-col items-center">
              <div className={`rounded-full transition duration-500 ease-in-out h-12 w-12 flex items-center justify-center ${
                getCurrentStepIndex() >= index ? 'bg-blue-600' : 'bg-gray-300'
              }`}>
                {getCurrentStepIndex() > index ? (
                  <Check className="w-6 h-6 text-white" />
                ) : (
                  <Circle className={`w-6 h-6 ${getCurrentStepIndex() >= index ? 'text-white' : 'text-gray-600'}`} />
                )}
              </div>
              <div className="absolute top-14 w-32 text-center text-xs font-medium">
                {step.label}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                getCurrentStepIndex() > index ? 'border-blue-600' : 'border-gray-300'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};