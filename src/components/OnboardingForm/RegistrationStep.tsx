import React, { useState } from 'react';
import { Users, ArrowRight } from 'lucide-react';
import { RegistrationDetails, DataPreview } from '../../types/onboarding';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { NumberInput } from '../ui/NumberInput';
import { DateInput } from '../ui/DateInput';
import { DataUpload } from '../ui/DataUpload';
import { dataTemplates } from '../../utils/dataTemplates';

interface RegistrationStepProps {
  data: RegistrationDetails;
  onUpdate: (data: Partial<RegistrationDetails>) => void;
  onNext: () => void;
}

export const RegistrationStep: React.FC<RegistrationStepProps> = ({
  data,
  onUpdate,
  onNext,
}) => {
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationDetails, string>>>({});
  const [previews, setPreviews] = useState<Record<string, DataPreview>>({});

  const validateForm = () => {
    const newErrors: Partial<Record<keyof RegistrationDetails, string>> = {};
    
    if (data.studentCount <= 0) newErrors.studentCount = 'Must have at least one student';
    if (data.teacherCount <= 0) newErrors.teacherCount = 'Must have at least one teacher';
    if (!data.academicYearStart) newErrors.academicYearStart = 'Start date is required';
    if (!data.academicYearEnd) newErrors.academicYearEnd = 'End date is required';
    
    if (data.academicYearStart && data.academicYearEnd) {
      const start = new Date(data.academicYearStart);
      const end = new Date(data.academicYearEnd);
      if (end <= start) {
        newErrors.academicYearEnd = 'End date must be after start date';
      }
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

  const handleFileSelect = async (type: string, file: File) => {
    onUpdate({ [`${type}Data`]: file } as any);
    
    // TODO: Implement file preview logic here
    // This would parse the file and validate its contents
    const mockPreview: DataPreview = {
      headers: dataTemplates[type].fields,
      rows: [],
      totalRows: 0,
      validRows: 0,
      errors: []
    };
    
    setPreviews(prev => ({
      ...prev,
      [type]: mockPreview
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
      <Card className="space-y-8">
        <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Registration Details</h2>
            <p className="text-gray-600">Enter your institution's registration information</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NumberInput
            label="Number of Students"
            required
            min={1}
            value={data.studentCount}
            onChange={(value) => onUpdate({ studentCount: value })}
            error={errors.studentCount}
          />

          <NumberInput
            label="Number of Teachers"
            required
            min={1}
            value={data.teacherCount}
            onChange={(value) => onUpdate({ teacherCount: value })}
            error={errors.teacherCount}
          />

          <NumberInput
            label="Administrative Staff"
            required
            min={0}
            value={data.adminStaffCount}
            onChange={(value) => onUpdate({ adminStaffCount: value })}
            error={errors.adminStaffCount}
          />

          <NumberInput
            label="Non-Teaching Staff"
            required
            min={0}
            value={data.nonTeachingStaffCount}
            onChange={(value) => onUpdate({ nonTeachingStaffCount: value })}
            error={errors.nonTeachingStaffCount}
          />

          <DateInput
            label="Academic Year Start"
            required
            value={data.academicYearStart}
            onChange={(value) => onUpdate({ academicYearStart: value })}
            error={errors.academicYearStart}
          />

          <DateInput
            label="Academic Year End"
            required
            value={data.academicYearEnd}
            onChange={(value) => onUpdate({ academicYearEnd: value })}
            error={errors.academicYearEnd}
            min={data.academicYearStart}
          />
        </div>
      </Card>

      <Card className="space-y-8">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-xl font-bold text-gray-900">Bulk Data Upload</h3>
          <p className="text-gray-600">Upload your institution's data using our templates</p>
        </div>

        <div className="space-y-8">
          {Object.entries(dataTemplates).map(([key, template]) => (
            <DataUpload
              key={key}
              template={template}
              file={data[`${key}Data` as keyof RegistrationDetails] as File}
              preview={previews[key]}
              onFileSelect={(file) => handleFileSelect(key, file)}
            />
          ))}
        </div>
      </Card>

      <div className="flex justify-end">
        <Button type="submit" icon={ArrowRight}>
          Next Step
        </Button>
      </div>
    </form>
  );
};