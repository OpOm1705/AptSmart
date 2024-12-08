import React from 'react';
import { Users, GraduationCap, UserCheck, TrendingUp, BrainCircuit } from 'lucide-react';

const stats = [
  {
    label: 'Total Students',
    value: '2,543',
    change: '+12.5%',
    trend: 'up',
    icon: GraduationCap,
    color: 'blue',
    aiInsight: 'Enrollment increased by 12.5% compared to last semester'
  },
  {
    label: 'Average Attendance',
    value: '94.8%',
    change: '+2.3%',
    trend: 'up',
    icon: UserCheck,
    color: 'green',
    aiInsight: 'Attendance improved after implementing new tracking system'
  },
  {
    label: 'Resource Utilization',
    value: '87.2%',
    change: '+5.7%',
    trend: 'up',
    icon: TrendingUp,
    color: 'purple',
    aiInsight: 'Optimal resource allocation achieved through AI recommendations'
  },
  {
    label: 'AI Assistance Usage',
    value: '76.4%',
    change: '+15.2%',
    trend: 'up',
    icon: BrainCircuit,
    color: 'orange',
    aiInsight: 'Increased adoption of AI-powered learning tools'
  }
];

const colors = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    lighter: 'bg-blue-50',
    border: 'border-blue-200'
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    lighter: 'bg-green-50',
    border: 'border-green-200'
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    lighter: 'bg-purple-50',
    border: 'border-purple-200'
  },
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
    lighter: 'bg-orange-50',
    border: 'border-orange-200'
  }
};

export const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const colorScheme = colors[stat.color as keyof typeof colors];
        
        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg ${colorScheme.bg}`}>
                <Icon className={`h-6 w-6 ${colorScheme.text}`} />
              </div>
              <div className="flex items-center space-x-1">
                <span className={`text-sm ${
                  stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>

            <div className={`mt-4 p-3 rounded-lg ${colorScheme.lighter} border ${colorScheme.border}`}>
              <p className="text-xs text-gray-600">
                <span className="font-medium">AI Insight:</span> {stat.aiInsight}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};