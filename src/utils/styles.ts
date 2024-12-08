import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getColorClass(color: string, type: string = 'background'): string {
  const colorVariants: Record<string, Record<string, string>> = {
    blue: {
      background: 'bg-blue-100',
      text: 'text-blue-600',
      hover: 'hover:bg-blue-50',
      border: 'border-blue-200'
    },
    green: {
      background: 'bg-green-100',
      text: 'text-green-600',
      hover: 'hover:bg-green-50',
      border: 'border-green-200'
    },
    purple: {
      background: 'bg-purple-100',
      text: 'text-purple-600',
      hover: 'hover:bg-purple-50',
      border: 'border-purple-200'
    },
    orange: {
      background: 'bg-orange-100',
      text: 'text-orange-600',
      hover: 'hover:bg-orange-50',
      border: 'border-orange-200'
    },
    red: {
      background: 'bg-red-100',
      text: 'text-red-600',
      hover: 'hover:bg-red-50',
      border: 'border-red-200'
    },
    yellow: {
      background: 'bg-yellow-100',
      text: 'text-yellow-600',
      hover: 'hover:bg-yellow-50',
      border: 'border-yellow-200'
    }
  };

  return colorVariants[color]?.[type] || '';
}