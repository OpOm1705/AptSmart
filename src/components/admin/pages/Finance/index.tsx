import React from 'react';
import { Layout } from '../../Layout';
import { FinanceOverview } from './components/FinanceOverview';
import { FeeCollection } from './components/FeeCollection';
import { Expenses } from './components/Expenses';
import { FinancialReports } from './components/FinancialReports';

export const Finance: React.FC = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Finance Management</h1>
          <p className="text-sm text-gray-600">Manage school finances and fee collections</p>
        </div>

        <FinanceOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeeCollection />
          <Expenses />
        </div>

        <FinancialReports />
      </div>
    </Layout>
  );
};