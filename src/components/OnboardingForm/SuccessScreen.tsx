import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, BookOpen, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import * as XLSX from 'xlsx';

interface SuccessScreenProps {
  schoolName: string;
  adminEmail: string;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({
  schoolName,
  adminEmail,
}) => {
  const navigate = useNavigate();

  const downloadCredentials = () => {
    // Create workbook with multiple sheets
    const wb = XLSX.utils.book_new();

    // Sample data for each user type
    const adminData = [
      ['Email', 'User ID', 'Password', 'Role'],
      [adminEmail, 'admin123', '********', 'Administrator']
    ];

    const teacherData = [
      ['Email', 'User ID', 'Password', 'Role'],
      ['teacher1@school.com', 'teacher1', '********', 'Teacher'],
      ['teacher2@school.com', 'teacher2', '********', 'Teacher']
    ];

    const studentData = [
      ['Email', 'User ID', 'Password', 'Role'],
      ['student1@school.com', 'student1', '********', 'Student'],
      ['student2@school.com', 'student2', '********', 'Student']
    ];

    // Add sheets to workbook
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(adminData), 'Admin Credentials');
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(teacherData), 'Teacher Credentials');
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(studentData), 'Student Credentials');

    // Save the file
    XLSX.writeFile(wb, `${schoolName.replace(/\s+/g, '_')}_credentials.xlsx`);
  };

  const handleAdminLogin = () => {
    navigate('/admin/login');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-success">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Registration Successful!
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            {schoolName} has been successfully onboarded. Please use your admin credentials to log in to your admin account.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg max-w-md mx-auto">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            Admin Login Details
          </h2>
          <div className="space-y-2 text-left">
            <p className="text-sm text-blue-800">
              <span className="font-medium">Email:</span> {adminEmail}
            </p>
            <p className="text-sm text-blue-800">
              <span className="font-medium">Password:</span> (As set during registration)
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            icon={Download}
            onClick={downloadCredentials}
            className="w-full sm:w-auto"
          >
            Download All Credentials
          </Button>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="primary"
              icon={ArrowRight}
              onClick={handleAdminLogin}
              className="w-full sm:w-auto"
            >
              Go to Admin Login
            </Button>
            <Button
              variant="outline"
              icon={BookOpen}
              onClick={() => navigate('/docs/getting-started')}
              className="w-full sm:w-auto"
            >
              Learn More About Portal Features
            </Button>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <p>Need help? Contact our support team at support@aptsmart.com</p>
        </div>
      </Card>
    </div>
  );
};