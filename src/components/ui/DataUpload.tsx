import React, { useState } from 'react';
import { Upload, FileDown, AlertCircle, Check } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';
import { DataTemplate, DataPreview } from '../../types/onboarding';
import { generateTemplate, parseUploadedFile } from '../../utils/dataTemplates';

interface DataUploadProps {
  template: DataTemplate;
  onFileSelect: (file: File) => void;
  file?: File;
  preview?: DataPreview;
}

export const DataUpload: React.FC<DataUploadProps> = ({
  template,
  onFileSelect,
  file,
  preview
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      validateAndSelectFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      validateAndSelectFile(e.target.files[0]);
    }
  };

  const validateAndSelectFile = async (file: File) => {
    const validTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv'
    ];
    
    if (!validTypes.includes(file.type)) {
      alert('Please upload only XLSX or CSV files');
      return;
    }

    setIsProcessing(true);
    try {
      await parseUploadedFile(file);
      onFileSelect(file);
    } catch (error) {
      alert('Error processing file. Please ensure it matches the template format.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadTemplate = (format: 'xlsx' | 'csv') => {
    const blob = generateTemplate(template.type, format);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.type}_template.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{template.type.charAt(0).toUpperCase() + template.type.slice(1)} Data</h3>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            icon={FileDown}
            onClick={() => downloadTemplate('xlsx')}
          >
            XLSX Template
          </Button>
          <Button
            variant="outline"
            icon={FileDown}
            onClick={() => downloadTemplate('csv')}
          >
            CSV Template
          </Button>
        </div>
      </div>

      {!file ? (
        <div
          className={`
            border-2 border-dashed rounded-lg p-8 text-center
            ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
            ${isProcessing ? 'opacity-50 cursor-wait' : ''}
            transition-colors duration-200
          `}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            {isProcessing ? 'Processing file...' : (
              <>
                Drag and drop your file here, or{' '}
                <label className="text-blue-600 hover:text-blue-500 cursor-pointer">
                  browse
                  <input
                    type="file"
                    className="hidden"
                    accept=".xlsx,.csv"
                    onChange={handleFileSelect}
                    disabled={isProcessing}
                  />
                </label>
              </>
            )}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Supported formats: XLSX, CSV
          </p>
        </div>
      ) : (
        <Card className="bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg">
                <Check className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button
              variant="secondary"
              onClick={() => onFileSelect(file)}
            >
              Change File
            </Button>
          </div>

          {preview && (
            <div className="mt-4 border-t pt-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Preview</h4>
                <span className="text-sm text-gray-500">
                  {preview.validRows} of {preview.totalRows} rows valid
                </span>
              </div>
              
              {preview.errors.length > 0 && (
                <div className="mb-4 p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="text-sm text-red-700">
                      Found {preview.errors.length} errors
                    </span>
                  </div>
                  <ul className="mt-2 text-sm text-red-600 list-disc list-inside">
                    {preview.errors.slice(0, 3).map((error, i) => (
                      <li key={i}>{error}</li>
                    ))}
                    {preview.errors.length > 3 && (
                      <li>...and {preview.errors.length - 3} more</li>
                    )}
                  </ul>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {preview.headers.map((header, i) => (
                        <th
                          key={i}
                          className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {preview.rows.slice(0, 3).map((row, i) => (
                      <tr key={i}>
                        {Object.values(row).map((cell: any, j) => (
                          <td
                            key={j}
                            className="px-3 py-2 text-sm text-gray-500 truncate max-w-xs"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {preview.rows.length > 3 && (
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Showing 3 of {preview.rows.length} rows
                  </p>
                )}
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};