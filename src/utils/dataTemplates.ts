import { DataTemplate } from '../types/onboarding';
import * as XLSX from 'xlsx';

export const dataTemplates: Record<string, DataTemplate> = {
  student: {
    type: 'student',
    fields: [
      'Full Name',
      'Student ID',
      'Date of Birth',
      'Grade/Class',
      'Parent Contact Number',
      'Parent Email',
      'Home Address',
      'Emergency Contact'
    ]
  },
  parent: {
    type: 'parent',
    fields: [
      'Full Name',
      'Relationship to Student',
      'Contact Number',
      'Email Address',
      'Student ID(s)',
      'Home Address'
    ]
  },
  teacher: {
    type: 'teacher',
    fields: [
      'Full Name',
      'Employee ID',
      'Subject Specialization',
      'Contact Number',
      'Email Address',
      'Class Engagements'
    ]
  },
  staff: {
    type: 'staff',
    fields: [
      'Full Name',
      'Employee ID',
      'Department/Role',
      'Contact Number',
      'Email Address'
    ]
  }
};

export const generateTemplate = (type: string, format: 'xlsx' | 'csv'): Blob => {
  const template = dataTemplates[type];
  if (!template) throw new Error('Invalid template type');

  if (format === 'csv') {
    const csvContent = template.fields.join(',') + '\n';
    return new Blob([csvContent], { type: 'text/csv' });
  } else {
    // Create a new workbook
    const wb = XLSX.utils.book_new();
    
    // Create worksheet with headers only
    const ws = XLSX.utils.aoa_to_sheet([template.fields]);
    
    // Add some sample data (one empty row)
    XLSX.utils.sheet_add_aoa(ws, [template.fields.map(() => '')], { origin: 1 });
    
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Template');
    
    // Generate the file
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    
    return new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
  }
};

// Function to parse uploaded files
export const parseUploadedFile = async (file: File): Promise<{
  headers: string[];
  rows: any[];
}> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        
        // Get the first worksheet
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        
        // Convert to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
        // Extract headers and rows
        const headers = jsonData[0] as string[];
        const rows = jsonData.slice(1);
        
        resolve({ headers, rows });
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
};