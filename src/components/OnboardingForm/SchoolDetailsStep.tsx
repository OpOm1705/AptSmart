import React, { useState } from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { SchoolDetails } from '../../types/onboarding';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Card } from '../ui/Card';
import { FileUpload } from '../ui/FileUpload';

interface SchoolDetailsStepProps {
  data: SchoolDetails;
  onUpdate: (data: Partial<SchoolDetails>) => void;
  onNext: () => void;
}

const AFFILIATIONS = ['CBSE', 'ICSE', 'State Board', 'IB', 'IGCSE', 'Other'];
const SCHOOL_TYPES = [
  'Government',
  'Private',
  'Semi-Private',
  'International',
  'Religious/Trust',
  'Boarding/Residential',
  'Other'
];
const STANDARDS = [
  'Nursery',
  'Lower Kindergarten',
  'Upper Kindergarten',
  ...Array.from({ length: 12 }, (_, i) => (i + 1).toString())
];

export const SchoolDetailsStep: React.FC<SchoolDetailsStepProps> = ({
  data,
  onUpdate,
  onNext,
}) => {
  const [errors, setErrors] = useState<Partial<Record<keyof SchoolDetails, string>>>({});

  const validateForm = () => {
    const newErrors: Partial<Record<keyof SchoolDetails, string>> = {};
    
    if (!data.name) newErrors.name = 'School name is required';
    if (!data.address) newErrors.address = 'Address is required';
    if (!data.affiliation) newErrors.affiliation = 'Affiliation is required';
    if (!data.schoolType) newErrors.schoolType = 'School type is required';
    if (!data.udiseNumber) {
      newErrors.udiseNumber = 'UDISE number is required';
    } else if (!/^\d{11}$/.test(data.udiseNumber)) {
      newErrors.udiseNumber = 'UDISE number must be 11 digits';
    }
    
    if (!data.academicRange.startingStandard) {
      newErrors['academicRange.startingStandard'] = 'Starting standard is required';
    }
    if (!data.academicRange.endingStandard) {
      newErrors['academicRange.endingStandard'] = 'Ending standard is required';
    }
    
    const startIndex = STANDARDS.indexOf(data.academicRange.startingStandard);
    const endIndex = STANDARDS.indexOf(data.academicRange.endingStandard);
    if (startIndex > endIndex) {
      newErrors['academicRange.endingStandard'] = 'Ending standard must be greater than or equal to starting standard';
    }

    if (!data.contactNumber) newErrors.contactNumber = 'Contact number is required';
    if (!data.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <Card className="space-y-8">
        <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Building2 className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">School Details</h2>
            <p className="text-gray-600">Please provide your school's information</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="School Name"
            required
            value={data.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
            error={errors.name}
            placeholder="Enter school name"
          />

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              School Address <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              value={data.address}
              onChange={(e) => onUpdate({ address: e.target.value })}
              rows={3}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 
                       focus:ring-blue-500 transition-colors duration-200"
              placeholder="Enter complete address"
            />
            {errors.address && (
              <p className="text-sm text-red-600 mt-1">{errors.address}</p>
            )}
          </div>

          <Select
            label="School Affiliation"
            required
            value={data.affiliation}
            onChange={(value) => onUpdate({ affiliation: value as SchoolDetails['affiliation'] })}
            options={AFFILIATIONS}
            error={errors.affiliation}
          />

          <Select
            label="School Type"
            required
            value={data.schoolType}
            onChange={(value) => onUpdate({ schoolType: value as SchoolDetails['schoolType'] })}
            options={SCHOOL_TYPES}
            error={errors.schoolType}
          />

          <Input
            label="UDISE Number"
            required
            value={data.udiseNumber}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 11);
              onUpdate({ udiseNumber: value });
            }}
            error={errors.udiseNumber}
            placeholder="11-digit number"
            maxLength={11}
            pattern="\d{11}"
          />

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              label="Starting Standard"
              required
              value={data.academicRange.startingStandard}
              onChange={(value) => onUpdate({
                academicRange: {
                  ...data.academicRange,
                  startingStandard: value
                }
              })}
              options={STANDARDS}
              error={errors['academicRange.startingStandard']}
            />

            <Select
              label="Ending Standard"
              required
              value={data.academicRange.endingStandard}
              onChange={(value) => onUpdate({
                academicRange: {
                  ...data.academicRange,
                  endingStandard: value
                }
              })}
              options={STANDARDS}
              error={errors['academicRange.endingStandard']}
            />
          </div>

          <Input
            label="Contact Number"
            type="tel"
            required
            value={data.contactNumber}
            onChange={(e) => onUpdate({ contactNumber: e.target.value })}
            error={errors.contactNumber}
            placeholder="+91 XXXXX XXXXX"
          />

          <Input
            label="Email Address"
            type="email"
            required
            value={data.email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            error={errors.email}
            placeholder="school@example.com"
          />

          <Input
            label="Website"
            type="url"
            value={data.website || ''}
            onChange={(e) => onUpdate({ website: e.target.value })}
            placeholder="https://example.com"
          />

          <div className="md:col-span-2">
            <FileUpload
              label="School Logo"
              accept="image/*"
              file={data.logo}
              onFileSelect={(file) => onUpdate({ logo: file })}
            />
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-gray-200">
          <Button type="submit" icon={ArrowRight}>
            Next Step
          </Button>
        </div>
      </Card>
    </form>
  );
};