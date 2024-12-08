import React from 'react';
import { Card } from '../../../../ui/Card';
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help via email',
    contact: 'support@aptsmart.com',
    response: 'Response within 24 hours'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak to our support team',
    contact: '+91 1800-123-4567',
    response: 'Available 9 AM - 6 PM IST'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team',
    contact: 'Start a chat session',
    response: 'Typical response in 5 minutes'
  }
];

export const ContactSupport: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Contact Support</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{method.title}</h3>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">{method.contact}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {method.response}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">Support Hours</h3>
          <p className="text-sm text-blue-800">
            Our support team is available Monday through Friday, 9:00 AM to 6:00 PM IST.
            For urgent issues outside of business hours, please use our emergency contact number.
          </p>
        </div>
      </div>
    </Card>
  );
};