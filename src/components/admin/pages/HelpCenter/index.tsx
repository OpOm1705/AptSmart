import React from 'react';
import { Layout } from '../../Layout';
import { FAQSection } from './components/FAQSection';
import { SupportTickets } from './components/SupportTickets';
import { Documentation } from './components/Documentation';
import { ContactSupport } from './components/ContactSupport';
import { useHelpCenter } from './hooks/useHelpCenter';

export const HelpCenter: React.FC = () => {
  const { faqs, tickets, docs, createTicket } = useHelpCenter();

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Help Center</h1>
          <p className="text-sm text-gray-600">Get help and support for AptSmart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FAQSection faqs={faqs} />
          <SupportTickets tickets={tickets} onCreateTicket={createTicket} />
        </div>

        <Documentation docs={docs} />
        <ContactSupport />
      </div>
    </Layout>
  );
};