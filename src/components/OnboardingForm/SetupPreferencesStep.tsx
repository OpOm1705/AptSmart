import React, { useState } from 'react';
import { Settings, ArrowRight } from 'lucide-react';
import { SetupPreferences } from '../../types/onboarding';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Checkbox } from '../ui/Checkbox';
import { Textarea } from '../ui/Textarea';

interface SetupPreferencesStepProps {
  data: SetupPreferences;
  onUpdate: (data: Partial<SetupPreferences>) => void;
  onNext: () => void;
}

export const SetupPreferencesStep: React.FC<SetupPreferencesStepProps> = ({
  data,
  onUpdate,
  onNext,
}) => {
  const [errors, setErrors] = useState<string[]>([]);

  const validateForm = () => {
    const newErrors: string[] = [];
    
    // Check if at least one portal is selected
    if (!Object.values(data.activePortals).some(value => value)) {
      newErrors.push('Please select at least one portal to activate');
    }

    // Check if at least one service is selected
    if (!Object.values(data.services).some(value => value)) {
      newErrors.push('Please select at least one service');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  const updatePortal = (key: keyof SetupPreferences['activePortals']) => {
    onUpdate({
      activePortals: {
        ...data.activePortals,
        [key]: !data.activePortals[key],
      },
    });
  };

  const updateService = (key: keyof SetupPreferences['services']) => {
    onUpdate({
      services: {
        ...data.services,
        [key]: !data.services[key],
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
      <Card className="space-y-8">
        <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Settings className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Setup Preferences</h2>
            <p className="text-gray-600">Configure your school's digital environment</p>
          </div>
        </div>

        {errors.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <ul className="list-disc list-inside text-sm text-red-600">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Portals to Activate</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Checkbox
                label="Administrator Portal"
                checked={data.activePortals.administrator}
                onChange={() => updatePortal('administrator')}
              />
              <Checkbox
                label="Teacher Portal"
                checked={data.activePortals.teacher}
                onChange={() => updatePortal('teacher')}
              />
              <Checkbox
                label="Staff Portal"
                checked={data.activePortals.staff}
                onChange={() => updatePortal('staff')}
              />
              <Checkbox
                label="Parent Portal"
                checked={data.activePortals.parent}
                onChange={() => updatePortal('parent')}
              />
              <Checkbox
                label="Student Portal"
                checked={data.activePortals.student}
                onChange={() => updatePortal('student')}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Primary Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Checkbox
                label="Attendance Management"
                checked={data.services.attendance}
                onChange={() => updateService('attendance')}
              />
              <Checkbox
                label="Transport Management"
                checked={data.services.transport}
                onChange={() => updateService('transport')}
              />
              <Checkbox
                label="Homework and Assignment Management"
                checked={data.services.homework}
                onChange={() => updateService('homework')}
              />
              <Checkbox
                label="Exam and Grading System"
                checked={data.services.examGrading}
                onChange={() => updateService('examGrading')}
              />
              <Checkbox
                label="Communication Tools"
                checked={data.services.communication}
                onChange={() => updateService('communication')}
              />
              <Checkbox
                label="Fee Management"
                checked={data.services.feeManagement}
                onChange={() => updateService('feeManagement')}
              />
              <Checkbox
                label="Scheduling/Timetabling"
                checked={data.services.scheduling}
                onChange={() => updateService('scheduling')}
              />
              <Checkbox
                label="Reports and Insights"
                checked={data.services.reports}
                onChange={() => updateService('reports')}
              />
              <Checkbox
                label="AI Student Helpers"
                checked={data.services.aiHelpers}
                onChange={() => updateService('aiHelpers')}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Additional Requirements</h3>
            <Textarea
              placeholder="Please specify any additional services or special requirements..."
              value={data.additionalRequirements || ''}
              onChange={(e) => onUpdate({ additionalRequirements: e.target.value })}
              rows={4}
            />
          </div>
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