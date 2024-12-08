import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/styles';
import { getResponsiveClasses } from '../../utils/responsive';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-500',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
};

const sizes = {
  sm: getResponsiveClasses('px-3 py-1.5 text-sm'),
  md: getResponsiveClasses('px-4 py-2 text-base'),
  lg: getResponsiveClasses('px-6 py-3 text-lg')
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md',
    icon: Icon,
    iconPosition = 'left',
    className,
    disabled,
    ...props 
  }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          getResponsiveClasses('inline-flex items-center justify-center font-medium rounded-lg'),
          'transition-colors duration-200 ease-in-out',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {Icon && iconPosition === 'left' && (
          <Icon className={cn('w-5 h-5 xs:w-4 xs:h-4', children ? 'mr-2 xs:mr-scaled-2' : '')} />
        )}
        {children}
        {Icon && iconPosition === 'right' && (
          <Icon className={cn('w-5 h-5 xs:w-4 xs:h-4', children ? 'ml-2 xs:ml-scaled-2' : '')} />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';