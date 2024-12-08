import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LandingPage } from './components/landing/LandingPage';
import { LoginPage } from './components/auth/LoginPage';
import { AdminDashboard } from './components/admin/pages/Dashboard';
import { UserAccounts } from './components/admin/pages/UserAccounts';
import { Transport } from './components/admin/pages/Transport';
import { Calendar } from './components/admin/pages/Calendar';
import { Notice } from './components/admin/pages/Notice';
import { MailBox } from './components/admin/pages/MailBox';
import { Settings } from './components/admin/pages/Settings';
import { Contact } from './components/admin/pages/Contact';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users/*"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <UserAccounts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/transport/*"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Transport />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/calendar"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Calendar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/notice"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Notice />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/mail/*"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <MailBox />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/contact"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Contact />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;