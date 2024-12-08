import React, { useState } from 'react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { Upload, Download, FileText, HelpCircle } from 'lucide-react';
import * as XLSX from 'xlsx';

// Sample data for JSON format
const sampleJsonData = {
  studentName: "Alex Johnson",
  studentId: "2024-001",
  grade: "10",
  academicYear: "2023-2024",
  term: "Second Term",
  section: "A",
  subjects: [
    {
      name: "Mathematics",
      teacher: "Mr. John Smith",
      numericalGrade: 92,
      letterGrade: "A",
      creditHours: 4,
      status: "Pass",
      objectives: ["Master algebraic concepts", "Understand geometric principles"],
      comments: "Alex shows exceptional aptitude in mathematics."
    }
  ]
};

// Sample data for Excel format
const sampleExcelData = [
  {
    name: "Student Info",
    data: [
      ["Field", "Value"],
      ["Student Name", "Alex Johnson"],
      ["Student ID", "2024-001"],
      ["Grade", "10"],
      ["Section", "A"]
    ]
  },
  {
    name: "Subjects",
    data: [
      ["Subject", "Teacher", "Numerical Grade", "Letter Grade", "Status"],
      ["Mathematics", "Mr. John Smith", "92", "A", "Pass"],
      ["Science", "Ms. Sarah Williams", "88", "B+", "Pass"],
      ["English", "Mrs. Emily Davis", "85", "B", "Pass"]
    ]
  }
];

export const ReportCard: React.FC = () => {
  const [reportData, setReportData] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    
    if (file.name.endsWith('.json')) {
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          setReportData(data);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      };
      reader.readAsText(file);
    } else if (file.name.match(/\.(xlsx|xls|csv)$/)) {
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          setReportData(jsonData);
        } catch (error) {
          console.error('Error parsing Excel:', error);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const downloadSampleFile = (type: 'json' | 'xlsx') => {
    if (type === 'json') {
      const blob = new Blob([JSON.stringify(sampleJsonData, null, 2)], {
        type: 'application/json'
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'sample_report_card.json';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      // Create workbook
      const wb = XLSX.utils.book_new();
      
      // Add each sheet
      sampleExcelData.forEach(sheet => {
        const ws = XLSX.utils.aoa_to_sheet(sheet.data);
        XLSX.utils.book_append_sheet(wb, ws, sheet.name);
      });

      // Generate Excel file
      XLSX.writeFile(wb, 'sample_report_card.xlsx');
    }
  };

  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Academic Report Card</h2>
              <p className="text-sm text-gray-600">Generate and manage student report cards</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="relative group">
              <Button variant="outline" icon={HelpCircle}>
                Sample Files
              </Button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block z-10">
                <button
                  onClick={() => downloadSampleFile('json')}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  Download JSON Sample
                </button>
                <button
                  onClick={() => downloadSampleFile('xlsx')}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  Download Excel Sample
                </button>
              </div>
            </div>
            <Button variant="outline" icon={Upload}>
              <label className="cursor-pointer">
                Upload Data
                <input
                  type="file"
                  className="hidden"
                  accept=".json,.xlsx,.xls,.csv"
                  onChange={handleFileUpload}
                />
              </label>
            </Button>
            {reportData && (
              <Button icon={Download}>Download Report</Button>
            )}
          </div>
        </div>

        {reportData ? (
          <div className="bg-gray-50 rounded-lg p-6">
            <pre className="text-sm text-gray-700 overflow-auto">
              {JSON.stringify(reportData, null, 2)}
            </pre>
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No Report Card Data
            </h3>
            <p className="text-gray-600 mb-4">
              Upload a JSON or Excel file to generate a report card, or download a sample file to get started.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};