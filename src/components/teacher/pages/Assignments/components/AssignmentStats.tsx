import React from 'react';
import { ClipboardList, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import { Card } from '../../../../ui/Card';
import { AssignmentStatistics } from '../types';

interface AssignmentStatsProps {
  stats: AssignmentStatistics;
}

export const AssignmentStats: React.FC<AssignmentStatsProps> = ({ stats }) => {
  const statItems = [
    {
      title: 'Active Assignments',
      value: stats.activeAssignments,
      change: stats.assignmentChange,
      icon: ClipboardList,
      color: 'blue'
    },
    {
      title: 'Average Completion',
      value: stats.avgCompletion,
      change: stats.completionChange,
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Average Score',
      value: stats.avgScore,
      change: stats.scoreChange,
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Pending Grading',
      value: stats.pendingGrading,
      change: stats.gradingChange,
      icon: Clock,
      color: 'orange'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${item.color}-100`}>
                  <Icon className={`h-6 w-6 text-${item.color}-600`} />
                </div>
                <span className={`text-sm ${
                  item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{item.value}</h3>
              <p className="text-sm text-gray-600">{item.title}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};