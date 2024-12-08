import React from 'react';

interface SamplePaperPreviewProps {
  paper: any; // Type this properly based on your API response
}

export const SamplePaperPreview: React.FC<SamplePaperPreviewProps> = ({ paper }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <p className="text-gray-500 text-center">Sample paper preview will be displayed here</p>
    </div>
  );
};