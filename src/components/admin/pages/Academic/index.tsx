import React from 'react';
import { Layout } from '../../Layout';
import { AcademicOverview } from './components/AcademicOverview';
import { ClassManagement } from './components/ClassManagement';
import { CurriculumPlanner } from './components/CurriculumPlanner';
import { AIRecommendations } from './components/AIRecommendations';
import { useAcademicData } from './hooks/useAcademicData';

export const Academic: React.FC = () => {
  const { academicData, updateAcademicData } = useAcademicData();

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Academic Management</h1>
          <p className="text-sm text-gray-600">Manage classes, curriculum, and academic performance</p>
        </div>

        <AcademicOverview data={academicData.overview} />
        <ClassManagement 
          classes={academicData.classes}
          onUpdate={updateAcademicData}
        />
        <CurriculumPlanner 
          curriculum={academicData.curriculum}
          onUpdate={updateAcademicData}
        />
        <AIRecommendations insights={academicData.aiInsights} />
      </div>
    </Layout>
  );
};