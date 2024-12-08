import React from 'react';
import { getResponsiveClasses } from '../../utils/responsive';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  required,
  className = '',
  ...props
}) => {
  return (
    <div className={getResponsiveClasses('space-y-1')}>
      <label className={getResponsiveClasses('block text-sm font-medium text-gray-700')}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        className={getResponsiveClasses(`
          block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-colors duration-200
          ${error ? 'border-red-500' : 'border-gray-300'}
          ${className}
        `)}
        {...props}
      />
      {error && (
        <p className={getResponsiveClasses('text-sm text-red-600 mt-1')}>{error}</p>
      )}
    </div>
  );
};