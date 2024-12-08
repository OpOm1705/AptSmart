import React from 'react';
import { TeacherLayout } from '../../TeacherLayout';
import { AIEvaluator } from './components/AIEvaluator';
import { HomeworkGenerator } from './components/HomeworkGenerator';
import { SamplePaperGenerator } from './components/SamplePaperGenerator';
import { ReportCard } from './components/ReportCard';
import { useAcademicPlanning } from './hooks/useAcademicPlanning';

export const AcademicPlanning: React.FC = () => {
  const { 
    generateRubric,
    generateHomework,
    generateSamplePaper,
    isLoading 
  } = useAcademicPlanning();

  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Academic Planning & Resources</h1>
          <p className="text-sm text-gray-600">AI-powered tools to enhance your teaching experience</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <ReportCard />
          <AIEvaluator onGenerate={generateRubric} isLoading={isLoading} />
          <HomeworkGenerator onGenerate={generateHomework} isLoading={isLoading} />
          <SamplePaperGenerator onGenerate={generateSamplePaper} isLoading={isLoading} />
        </div>
      </div>
    </TeacherLayout>
  );
};