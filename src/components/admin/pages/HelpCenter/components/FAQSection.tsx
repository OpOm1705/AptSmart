import React, { useState } from 'react';
import { Card } from '../../../../ui/Card';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { FAQ } from '../types';

interface FAQSectionProps {
  faqs: FAQ[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <HelpCircle className="h-6 w-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
        </div>

        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="border rounded-lg">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {expandedId === faq.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedId === faq.id && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                  {faq.links && (
                    <div className="mt-2 pt-2 border-t">
                      <p className="text-sm font-medium text-gray-700">Related Links:</p>
                      <ul className="mt-1 space-y-1">
                        {faq.links.map((link, index) => (
                          <li key={index}>
                            <a href={link.url} className="text-sm text-blue-600 hover:text-blue-700">
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};