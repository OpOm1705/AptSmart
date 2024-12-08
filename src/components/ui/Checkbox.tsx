import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  className = '',
}) => {
  return (
    <label className={`flex items-center space-x-3 cursor-pointer group ${className}`}>
      <div
        className={`
          w-5 h-5 rounded border transition-colors duration-200
          flex items-center justify-center
          ${checked
            ? 'bg-blue-600 border-blue-600'
            : 'border-gray-300 group-hover:border-blue-500'
          }
        `}
        onClick={onChange}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" />}
      </div>
      <span className="text-gray-700">{label}</span>
    </label>
  );
};