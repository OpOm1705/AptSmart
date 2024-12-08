import React from 'react';
import { ArrowRight, School, GraduationCap, Users, UserCog, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface WelcomeStepProps {
  onNext: () => void;
}

const portalLinks = [
  {
    title: 'Administrator Portal',
    description: 'School management and analytics dashboard',
    icon: UserCog,
    path: '/admin/dashboard',
    color: 'blue'
  },
  {
    title: 'Teacher Portal',
    description: 'Classroom management and student tracking',
    icon: BookOpen,
    path: '/teacher/dashboard',
    color: 'green'
  },
  {
    title: 'Staff Portal',
    description: 'Administrative operations and resources',
    icon: Users,
    path: '/staff/dashboard',
    color: 'purple'
  },
  {
    title: 'Parent Portal',
    description: 'Student progress and communication',
    icon: Users,
    path: '/parent/dashboard',
    color: 'orange'
  },
  {
    title: 'Student Portal',
    description: 'Learning resources and assignments',
    icon: GraduationCap,
    path: '/student/dashboard',
    color: 'pink'
  }
];

const colors = {
  blue: 'bg-blue-100 text-blue-600 hover:bg-blue-50',
  green: 'bg-green-100 text-green-600 hover:bg-green-50',
  purple: 'bg-purple-100 text-purple-600 hover:bg-purple-50',
  orange: 'bg-orange-100 text-orange-600 hover:bg-orange-50',
  pink: 'bg-pink-100 text-pink-600 hover:bg-pink-50'
};

export const WelcomeStep: React.FC<WelcomeStepProps> = ({ onNext }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <School className="w-10 h-10 text-blue-600" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Welcome to AptSmart
          </h1>
          <h2 className="text-xl font-semibold text-blue-600">
            Bridging The Gap
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Comprehensive school management solution with AI-enhanced features for K-12 Indian schools.
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={onNext}
            icon={ArrowRight}
            className="transform hover:translate-x-1"
          >
            Register Your School
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portalLinks.map((portal, index) => {
          const Icon = portal.icon;
          const colorClass = colors[portal.color as keyof typeof colors];
          
          return (
            <Link
              key={index}
              to={portal.path}
              className="block"
            >
              <Card className="h-full transition-all duration-200 hover:shadow-md">
                <div className="flex items-start space-x-4 p-4">
                  <div className={`p-3 rounded-lg ${colorClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {portal.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {portal.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>Already registered? Choose your portal above to access your dashboard.</p>
        <p className="mt-2">Need help? Contact our support team at support@aptsmart.com</p>
      </div>
    </div>
  );
};