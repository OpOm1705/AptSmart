import React, { useState } from 'react';
import { UserCog, ArrowRight, Eye, EyeOff, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { AdminAccount, AdminUser } from '../../types/onboarding';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';

interface AdminAccountStepProps {
  data: AdminAccount;
  onUpdate: (data: Partial<AdminAccount>) => void;
  onNext: () => void;
}

interface AdminUserFormProps {
  data: AdminUser;
  onChange: (data: Partial<AdminUser>) => void;
  onRemove?: () => void;
  showRemoveButton?: boolean;
  isPrimary?: boolean;
}

const AdminUserForm: React.FC<AdminUserFormProps> = ({
  data,
  onChange,
  onRemove,
  showRemoveButton = false,
  isPrimary = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof AdminUser, string>>>({});
  const [isExpanded, setIsExpanded] = useState(isPrimary);

  const validateForm = () => {
    const newErrors: Partial<Record<keyof AdminUser, string>> = {};
    
    if (!data.fullName) newErrors.fullName = 'Full name is required';
    if (!data.designation) newErrors.designation = 'Designation is required';
    if (!data.contactNumber) newErrors.contactNumber = 'Contact number is required';
    if (!data.userId) newErrors.userId = 'User ID is required';
    if (!data.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!data.password) {
      newErrors.password = 'Password is required';
    } else {
      if (data.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters long';
      }
      if (!/[A-Z]/.test(data.password)) {
        newErrors.password = 'Password must contain at least one uppercase letter';
      }
      if (!/[0-9]/.test(data.password)) {
        newErrors.password = 'Password must contain at least one number';
      }
      if (!/[!@#$%^&*]/.test(data.password)) {
        newErrors.password = 'Password must contain at least one special character (!@#$%^&*)';
      }
    }

    if (data.password !== confirmPassword) {
      newErrors.password = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <Card className="space-y-6">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <UserCog className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              {isPrimary ? 'Primary Administrator' : 'Additional Administrator'}
            </h3>
            {data.fullName && (
              <p className="text-sm text-gray-600">{data.fullName}</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {showRemoveButton && onRemove && (
            <Button
              variant="secondary"
              icon={Trash2}
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
              className="!p-2"
            />
          )}
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-6 pt-4 border-t">
          <Input
            label="Full Name"
            required
            value={data.fullName}
            onChange={(e) => onChange({ fullName: e.target.value })}
            error={errors.fullName}
            placeholder="John Doe"
          />

          <Input
            label="Designation"
            required
            value={data.designation}
            onChange={(e) => onChange({ designation: e.target.value })}
            error={errors.designation}
            placeholder="Principal / Director / Administrator"
          />

          <Input
            label="Contact Number"
            type="tel"
            required
            value={data.contactNumber}
            onChange={(e) => onChange({ contactNumber: e.target.value })}
            error={errors.contactNumber}
            placeholder="+91 XXXXX XXXXX"
          />

          <Input
            label="User ID"
            required
            value={data.userId}
            onChange={(e) => onChange({ userId: e.target.value })}
            error={errors.userId}
            placeholder="Choose a unique user ID"
          />

          <Input
            label="Email Address"
            type="email"
            required
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            error={errors.email}
            placeholder="admin@school.edu"
          />

          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              required
              value={data.password}
              onChange={(e) => onChange({ password: e.target.value })}
              error={errors.password}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="relative">
            <Input
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={confirmPassword !== data.password ? 'Passwords do not match' : undefined}
              placeholder="••••••••"
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export const AdminAccountStep: React.FC<AdminAccountStepProps> = ({
  data,
  onUpdate,
  onNext,
}) => {
  const handlePrimaryAdminUpdate = (updates: Partial<AdminUser>) => {
    onUpdate({
      primaryAdmin: { ...data.primaryAdmin, ...updates }
    });
  };

  const handleAdditionalAdminUpdate = (index: number, updates: Partial<AdminUser>) => {
    const newAdditionalAdmins = [...data.additionalAdmins];
    newAdditionalAdmins[index] = { ...newAdditionalAdmins[index], ...updates };
    onUpdate({ additionalAdmins: newAdditionalAdmins });
  };

  const addAdditionalAdmin = () => {
    onUpdate({
      additionalAdmins: [
        ...data.additionalAdmins,
        {
          fullName: '',
          designation: '',
          contactNumber: '',
          userId: '',
          email: '',
          password: '',
        }
      ]
    });
  };

  const removeAdditionalAdmin = (index: number) => {
    const newAdditionalAdmins = data.additionalAdmins.filter((_, i) => i !== index);
    onUpdate({ additionalAdmins: newAdditionalAdmins });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
      <div className="space-y-6">
        <AdminUserForm
          data={data.primaryAdmin}
          onChange={handlePrimaryAdminUpdate}
          isPrimary
        />

        {data.additionalAdmins.map((admin, index) => (
          <AdminUserForm
            key={index}
            data={admin}
            onChange={(updates) => handleAdditionalAdminUpdate(index, updates)}
            onRemove={() => removeAdditionalAdmin(index)}
            showRemoveButton
          />
        ))}

        <Button
          type="button"
          variant="outline"
          icon={Plus}
          onClick={addAdditionalAdmin}
          className="w-full"
        >
          Add Additional Administrator
        </Button>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-blue-800 mb-2">Password Requirements:</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• At least 8 characters long</li>
            <li>• At least one uppercase letter</li>
            <li>• At least one number</li>
            <li>• At least one special character (!@#$%^&*)</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-gray-200">
        <Button type="submit" icon={ArrowRight}>
          Next Step
        </Button>
      </div>
    </form>
  );
};