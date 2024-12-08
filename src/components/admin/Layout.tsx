import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Calendar,
  FileText,
  Settings,
  Bell,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  BookOpen,
  DollarSign,
  Shield,
  Bus,
  HelpCircle
} from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
  description?: string;
}

const navItems: NavItem[] = [
  { 
    label: 'Dashboard', 
    path: '/admin/dashboard', 
    icon: LayoutDashboard,
    description: 'Overview and analytics'
  },
  { 
    label: 'User Management', 
    path: '/admin/users', 
    icon: Users,
    description: 'Manage roles and permissions'
  },
  { 
    label: 'Academic', 
    path: '/admin/academic', 
    icon: BookOpen,
    description: 'Classes and curriculum'
  },
  { 
    label: 'Students', 
    path: '/admin/students', 
    icon: GraduationCap,
    description: 'Student management'
  },
  { 
    label: 'Schedule', 
    path: '/admin/schedule', 
    icon: Calendar,
    description: 'Timetable management'
  },
  { 
    label: 'Finance', 
    path: '/admin/finance', 
    icon: DollarSign,
    description: 'Fee management'
  },
  { 
    label: 'Reports', 
    path: '/admin/reports', 
    icon: FileText,
    description: 'Analytics and insights'
  },
  { 
    label: 'Transport', 
    path: '/admin/transport', 
    icon: Bus,
    description: 'Transport management'
  },
  { 
    label: 'Access Control', 
    path: '/admin/access', 
    icon: Shield,
    description: 'Security settings'
  },
  { 
    label: 'Settings', 
    path: '/admin/settings', 
    icon: Settings,
    description: 'System configuration'
  },
  { 
    label: 'Help Center', 
    path: '/admin/help', 
    icon: HelpCircle,
    description: 'Get help and support'
  }
];

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <Link to="/admin/dashboard" className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-xl font-bold text-gray-900">AptSmart</span>
            </Link>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors group relative ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  <span>{item.label}</span>
                  
                  {item.description && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {item.description}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className={`lg:ml-64 flex flex-col min-h-screen`}>
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="h-16 px-4 flex items-center justify-between">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md lg:hidden hover:bg-gray-100"
            >
              {isSidebarOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <img
                    src="https://ui-avatars.com/api/?name=Admin&background=random"
                    alt="Profile"
                    className="h-8 w-8 rounded-full"
                  />
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-700">Admin</p>
                    <p className="text-xs text-gray-500">Administrator</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>

                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                    <Link
                      to="/admin/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile Settings
                    </Link>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};