import React, { useState } from 'react';
import { Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { Button } from '../../../../ui/Button';
import { ClassData } from '../types';
import { getColorClass } from '../../../../../utils/styles';

interface ClassManagementProps {
  classes: ClassData[];
  onUpdate: (type: string, data: any) => void;
}

export const ClassManagement: React.FC<ClassManagementProps> = ({ classes, onUpdate }) => {
  const [expandedClass, setExpandedClass] = useState<string | null>(null);

  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Class Management</h2>
          <Button icon={Plus}>Add New Class</Button>
        </div>

        <div className="space-y-4">
          {classes.map((classData) => (
            <div key={classData.id} className="border rounded-lg">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => setExpandedClass(expandedClass === classData.id ? null : classData.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${getColorClass('blue')}`}>
                    <span className={`font-semibold ${getColorClass('blue', 'text')}`}>
                      {classData.grade}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Grade {classData.grade}</h3>
                    <p className="text-sm text-gray-500">
                      {classData.sections.length} sections • {classData.totalStudents} students
                    </p>
                  </div>
                </div>
                {expandedClass === classData.id ? <ChevronUp /> : <ChevronDown />}
              </div>

              {expandedClass === classData.id && (
                <div className="p-4 border-t bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Sections</h4>
                      <div className="flex flex-wrap gap-2">
                        {classData.sections.map((section) => (
                          <span key={section} className="px-3 py-1 bg-white rounded-full text-sm border">
                            Section {section}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Class Teachers</h4>
                      <div className="space-y-2">
                        {classData.teachers.map((teacher) => (
                          <div key={teacher.id} className="text-sm text-gray-600">
                            {teacher.name} - Section {teacher.section}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Subjects</h4>
                    <div className="flex flex-wrap gap-2">
                      {classData.subjects.map((subject) => (
                        <span key={subject} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2 mt-4">
                    <Button variant="outline">Edit Class</Button>
                    <Button variant="outline">Manage Sections</Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};