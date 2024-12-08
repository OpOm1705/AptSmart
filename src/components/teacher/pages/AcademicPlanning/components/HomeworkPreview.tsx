import React from 'react';

interface HomeworkPreviewProps {
  homework: any; // Type this properly based on your API response
}

export const HomeworkPreview: React.FC<HomeworkPreviewProps> = ({ homework }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <p className="text-gray-500 text-center">Homework preview will be displayed here</p>
    </div>
  );
};