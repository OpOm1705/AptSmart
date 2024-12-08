import React, { useCallback } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from './Button';

interface FileUploadProps {
  label: string;
  accept?: string;
  required?: boolean;
  file?: File;
  onFileSelect: (file: File | undefined) => void;
  error?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  accept,
  required,
  file,
  onFileSelect,
  error,
}) => {
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && accept?.includes(droppedFile.type.split('/')[1])) {
      onFileSelect(droppedFile);
    }
  }, [accept, onFileSelect]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  const removeFile = () => {
    onFileSelect(undefined);
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {file ? (
        <div className="mt-1 relative">
          <div className="flex items-center p-4 border rounded-lg bg-gray-50">
            <div className="flex-shrink-0 h-16 w-16 relative">
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="h-16 w-16 object-contain rounded"
              />
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <Button
                  variant="secondary"
                  onClick={removeFile}
                  icon={X}
                  className="!p-2"
                  aria-label="Remove file"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg
            ${error ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-400'}
            transition-colors duration-200`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="space-y-2 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                <span>Upload a file</span>
                <input
                  type="file"
                  className="sr-only"
                  accept={accept}
                  onChange={handleFileSelect}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      )}
      
      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
};