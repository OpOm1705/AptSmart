import React from 'react';
import { Link } from 'react-router-dom';
import { 
  School, 
  UserCog, 
  GraduationCap, 
  Users, 
  BookOpen,
  ArrowRight,
  Shield,
  Brain,
  Clock,
  Globe
} from 'lucide-react';

const portalLinks = [
  {
    title: 'Teacher Portal',
    description: 'Digital classroom tools and student performance tracking',
    icon: BookOpen,
    path: '/login?role=teacher',
    color: 'green',
    features: ['Class Management', 'Grade Recording', 'Attendance Tracking']
  },
  {
    title: 'Administrator Portal',
    description: 'Comprehensive school management with AI-powered analytics',
    icon: UserCog,
    path: '/login?role=admin',
    color: 'blue',
    features: ['AI Analytics', 'Resource Management', 'Performance Tracking']
  },
  {
    title: 'Student Portal',
    description: 'Access learning resources and track academic progress',
    icon: GraduationCap,
    path: '/login?role=student',
    color: 'purple',
    features: ['Course Materials', 'Assignment Submission', 'Progress Reports']
  },
  {
    title: 'Parent Portal',
    description: 'Monitor student progress and communicate with teachers',
    icon: Users,
    path: '/login?role=parent',
    color: 'orange',
    features: ['Academic Monitoring', 'Fee Management', 'Communication']
  }
];

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Advanced analytics and personalized learning recommendations'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee'
  },
  {
    icon: Clock,
    title: 'Real-time Updates',
    description: 'Instant notifications and live progress tracking'
  },
  {
    icon: Globe,
    title: 'Accessible Anywhere',
    description: 'Access from any device, anytime, anywhere'
  }
];

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <School className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">AptSmart</span>
            </div>
            <Link
              to="/onboarding/welcome"
              className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your School Management
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            AI-powered school management platform designed for the modern educational institution
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/onboarding/welcome"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center px-6 py-3 border border-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Portals Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Integrated Portals for Everyone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portalLinks.map((portal, index) => {
              const Icon = portal.icon;
              return (
                <Link
                  key={index}
                  to={portal.path}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-${portal.color}-100`}>
                      <Icon className={`h-6 w-6 text-${portal.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {portal.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{portal.description}</p>
                      <ul className="space-y-2">
                        {portal.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-500">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${portal.color}-500 mr-2`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ArrowRight className={`h-5 w-5 text-${portal.color}-500`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose AptSmart?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <School className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">AptSmart</span>
              </div>
              <p className="text-sm">
                Transforming education through technology and innovation
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Portals</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/login?role=admin" className="hover:text-white">Admin Portal</Link></li>
                <li><Link to="/login?role=teacher" className="hover:text-white">Teacher Portal</Link></li>
                <li><Link to="/login?role=student" className="hover:text-white">Student Portal</Link></li>
                <li><Link to="/login?role=parent" className="hover:text-white">Parent Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>support@aptsmart.com</li>
                <li>+91 1800-123-4567</li>
                <li>9 AM - 6 PM IST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2024 AptSmart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};