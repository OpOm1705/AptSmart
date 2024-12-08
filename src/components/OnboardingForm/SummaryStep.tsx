import React, { useState } from 'react';
import { ClipboardCheck, Edit2, ArrowRight } from 'lucide-react';
import { SchoolDetails, RegistrationDetails, AdminAccount, SetupPreferences } from '../../types/onboarding';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { portalDescriptions, serviceDescriptions } from '../../utils/serviceDescriptions';

interface SummaryStepProps {
  schoolDetails: SchoolDetails;
  registrationDetails: RegistrationDetails;
  adminAccount: AdminAccount;
  setupPreferences: SetupPreferences;
  onEdit: (step: 'school' | 'registration' | 'admin' | 'preferences') => void;
  onSubmit: () => void;
}

interface SectionProps {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, onEdit, children }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <Button
        variant="outline"
        icon={Edit2}
        onClick={onEdit}
        className="!py-1 !px-3"
      >
        Edit
      </Button>
    </div>
    {children}
  </div>
);

export const SummaryStep: React.FC<SummaryStepProps> = ({
  schoolDetails,
  registrationDetails,
  adminAccount,
  setupPreferences,
  onEdit,
  onSubmit,
}) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      setError('Please accept the terms and conditions to proceed');
      return;
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
      <Card className="space-y-8">
        <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <ClipboardCheck className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Review and Confirm</h2>
            <p className="text-gray-600">Please review your information before proceeding</p>
          </div>
        </div>

        <div className="space-y-8">
          <Section title="School Details" onEdit={() => onEdit('school')}>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">School Name</dt>
                <dd className="text-sm text-gray-900">{schoolDetails.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="text-sm text-gray-900">{schoolDetails.email}</dd>
              </div>
              <div className="md:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="text-sm text-gray-900">{schoolDetails.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Contact Number</dt>
                <dd className="text-sm text-gray-900">{schoolDetails.contactNumber}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Website</dt>
                <dd className="text-sm text-gray-900">{schoolDetails.website || 'Not provided'}</dd>
              </div>
            </dl>
          </Section>

          <Section title="Registration Details" onEdit={() => onEdit('registration')}>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Total Students</dt>
                <dd className="text-sm text-gray-900">{registrationDetails.studentCount}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Total Teachers</dt>
                <dd className="text-sm text-gray-900">{registrationDetails.teacherCount}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Academic Year Start</dt>
                <dd className="text-sm text-gray-900">
                  {new Date(registrationDetails.academicYearStart).toLocaleDateString()}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Academic Year End</dt>
                <dd className="text-sm text-gray-900">
                  {new Date(registrationDetails.academicYearEnd).toLocaleDateString()}
                </dd>
              </div>
            </dl>
          </Section>

          <Section title="Administrator Accounts" onEdit={() => onEdit('admin')}>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Primary Administrator</h4>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="text-sm text-gray-900">{adminAccount.primaryAdmin.fullName}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Designation</dt>
                    <dd className="text-sm text-gray-900">{adminAccount.primaryAdmin.designation}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="text-sm text-gray-900">{adminAccount.primaryAdmin.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">User ID</dt>
                    <dd className="text-sm text-gray-900">{adminAccount.primaryAdmin.userId}</dd>
                  </div>
                </dl>
              </div>

              {adminAccount.additionalAdmins.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Additional Administrators</h4>
                  <div className="space-y-4">
                    {adminAccount.additionalAdmins.map((admin, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Name</dt>
                            <dd className="text-sm text-gray-900">{admin.fullName}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Designation</dt>
                            <dd className="text-sm text-gray-900">{admin.designation}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="text-sm text-gray-900">{admin.email}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">User ID</dt>
                            <dd className="text-sm text-gray-900">{admin.userId}</dd>
                          </div>
                        </dl>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Section>

          <Section title="Setup Preferences" onEdit={() => onEdit('preferences')}>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Active Portals</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(setupPreferences.activePortals).map(([key, value]) => (
                    value && (
                      <div key={key} className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-900 mb-1">
                          {portalDescriptions[key as keyof typeof portalDescriptions].title}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {portalDescriptions[key as keyof typeof portalDescriptions].description}
                        </p>
                      </div>
                    )
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Selected Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(setupPreferences.services).map(([key, value]) => (
                    value && (
                      <div key={key} className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-900 mb-1">
                          {serviceDescriptions[key as keyof typeof serviceDescriptions].title}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {serviceDescriptions[key as keyof typeof serviceDescriptions].description}
                        </p>
                      </div>
                    )
                  ))}
                </div>
              </div>

              {setupPreferences.additionalRequirements && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Additional Requirements</h4>
                  <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                    {setupPreferences.additionalRequirements}
                  </p>
                </div>
              )}
            </div>
          </Section>
        </div>
      </Card>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="terms"
            className="mt-1"
            checked={termsAccepted}
            onChange={(e) => {
              setTermsAccepted(e.target.checked);
              setError('');
            }}
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I confirm that the provided details are accurate and accept the{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              terms and conditions
            </a>{' '}
            of AptSmart.
          </label>
        </div>

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <div className="flex justify-end">
          <Button type="submit" icon={ArrowRight}>
            Submit and Register
          </Button>
        </div>
      </div>
    </form>
  );
};