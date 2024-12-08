import React from 'react';
import { Card } from '../../../../ui/Card';
import { Book, FileText, Download } from 'lucide-react';
import { Documentation as DocType } from '../types';

interface DocumentationProps {
  docs: DocType[];
}

export const Documentation: React.FC<DocumentationProps> = ({ docs }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Book className="h-6 w-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Documentation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((doc) => (
            <div key={doc.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{doc.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{doc.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Last updated: {new Date(doc.updatedAt).toLocaleDateString()}
                    </span>
                    <button
                      className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
                      onClick={() => window.open(doc.url, '_blank')}
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};