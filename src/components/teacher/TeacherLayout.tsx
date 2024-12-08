import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Calendar,
  ClipboardList,
  MessageSquare,
  Settings,
  Bell,
  Menu,
  X,
  LogOut,
  Clock,
  Shield,
  Brain,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const navItems = [
  { 
    label: 'Dashboard', 
    path: '/teacher/dashboard', 
    icon: LayoutDashboard 
  },
  { 
    label: 'My Classes', 
    path: '/teacher/classes', 
    icon: BookOpen 
  },
  { 
    label: 'Students', 
    path: '/teacher/students', 
    icon: Users 
  },
  { 
    label: 'Schedule', 
    path: '/teacher/schedule', 
    icon: Calendar 
  },
  { 
    label: 'Assignments', 
    path: '/teacher/assignments', 
    icon: ClipboardList 
  },
  {
    label: 'Academic Planning',
    path: '/teacher/academic-planning',
    icon: Brain
  },
  { 
    label: 'Messages', 
    path: '/teacher/messages', 
    icon: MessageSquare 
  },
  {
    label: 'Leave',
    path: '/teacher/leave',
    icon: Clock
  },
  { 
    label: 'Settings', 
    path: '/teacher/settings', 
    icon: Settings 
  }
];

interface LayoutProps {
  children: React.ReactNode;
}

export const TeacherLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between h-16 px-4 border-b bg-gray-50">
            <Link to="/teacher/dashboard" className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-xl font-bold text-gray-900">AptSmart</span>
            </Link>
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700'
                      : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
                  }`}
                >
                  <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  <span className={`transition-opacity duration-200 ${
                    isSidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t bg-gray-50">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 active:bg-red-100 rounded-lg transition-colors"
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={`lg:ml-64 flex flex-col min-h-screen transition-all duration-300 ${
        isSidebarOpen ? 'ml-0' : 'ml-0'
      }`}>
        {/* Header */}
        <header className="bg-white shadow-lg sticky top-0 z-40">
          <div className="h-16 px-4 flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
              <button
                onClick={toggleSidebar}
                className="hidden lg:block p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200"
              >
                {isSidebarOpen ? (
                  <ChevronLeft className="h-5 w-5" />
                ) : (
                  <ChevronRight className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full ring-2 ring-white" />
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200"
                >
                  <img
                    src="https://ui-avatars.com/api/?name=Teacher&background=random"
                    alt="Profile"
                    className="h-8 w-8 rounded-full ring-2 ring-gray-200"
                  />
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-900">Teacher</p>
                    <p className="text-xs text-gray-600">Mathematics</p>
                  </div>
                </button>

                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 z-50 ring-1 ring-black ring-opacity-5">
                    <Link
                      to="/teacher/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                    >
                      Profile Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 active:bg-red-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};