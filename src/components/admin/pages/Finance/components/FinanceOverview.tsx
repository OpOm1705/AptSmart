import React from 'react';
import { DollarSign, TrendingUp, CreditCard, AlertCircle } from 'lucide-react';
import { Card } from '../../../../ui/Card';

const stats = [
  {
    title: 'Total Revenue',
    value: '₹24,50,000',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'blue'
  },
  {
    title: 'Fee Collection',
    value: '₹18,75,000',
    change: '+8.2%',
    trend: 'up',
    icon: CreditCard,
    color: 'green'
  },
  {
    title: 'Expenses',
    value: '₹12,25,000',
    change: '+5.7%',
    trend: 'up',
    icon: TrendingUp,
    color: 'orange'
  },
  {
    title: 'Pending Fees',
    value: '₹3,25,000',
    change: '-2.3%',
    trend: 'down',
    icon: AlertCircle,
    color: 'red'
  }
];

export const FinanceOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="relative overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <div className={`text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.title}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};