import React from 'react';

interface RubricPreviewProps {
  rubric: any; // Type this properly based on your API response
}

export const RubricPreview: React.FC<RubricPreviewProps> = ({ rubric }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <p className="text-gray-500 text-center">Rubric preview will be displayed here</p>
    </div>
  );
};