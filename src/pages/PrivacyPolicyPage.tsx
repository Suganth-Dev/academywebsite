import React from 'react';
import { Shield, Lock, Eye, Users, Mail, Phone, MapPin, Calendar, CheckCircle, AlertTriangle, FileText, Globe, Database, Settings } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = 'December 15, 2024';

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Personal Information',
          items: [
            'Name, email address, and phone number when you apply for courses',
            'Educational background and work experience for course placement',
            'Payment information for course fees (processed securely)',
            'Government ID details for DGCA certification requirements'
          ]
        },
        {
          subtitle: 'Usage Information',
          items: [
            'Website browsing patterns and preferences',
            'Course progress and completion data',
            'Communication preferences and history',
            'Device information and IP addresses'
          ]
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Settings,
      content: [
        {
          subtitle: 'Primary Uses',
          items: [
            'Processing course applications and enrollments',
            'Providing customer support and communication',
            'Issuing certificates and maintaining training records',
            'Sending important updates about courses and regulations'
          ]
        },
        {
          subtitle: 'Secondary Uses',
          items: [
            'Improving our training programs and services',
            'Conducting research on industry trends',
            'Marketing relevant courses and opportunities',
            'Compliance with legal and regulatory requirements'
          ]
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: Users,
      content: [
        {
          subtitle: 'We Share Information With',
          items: [
            'DGCA and other regulatory bodies for certification purposes',
            'Partner companies for job placement assistance',
            'Payment processors for secure transaction handling',
            'Service providers who assist in our operations'
          ]
        },
        {
          subtitle: 'We Do Not Share',
          items: [
            'Personal information with unauthorized third parties',
            'Student data for commercial purposes without consent',
            'Sensitive information with marketing companies',
            'Any data that violates your privacy rights'
          ]
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Security Measures',
          items: [
            'SSL encryption for all data transmission',
            'Secure servers with regular security updates',
            'Access controls and authentication systems',
            'Regular security audits and monitoring'
          ]
        },
        {
          subtitle: 'Data Retention',
          items: [
            'Student records maintained for 7 years as per regulations',
            'Payment information deleted after transaction completion',
            'Marketing data retained until you opt out',
            'Website analytics data aggregated and anonymized'
          ]
        }
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      icon: Shield,
      content: [
        {
          subtitle: 'You Have the Right To',
          items: [
            'Access your personal information we hold',
            'Correct any inaccurate or incomplete data',
            'Request deletion of your personal information',
            'Opt out of marketing communications'
          ]
        },
        {
          subtitle: 'How to Exercise Your Rights',
          items: [
            'Contact us at privacy@indiadroneacademy.com',
            'Call our privacy helpline at +91 7799100040',
            'Submit a written request to our office address',
            'Use the privacy settings in your student portal'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F15A24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#26A65B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="w-20 h-20 bg-[#F15A24] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-[#F15A24]" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Your privacy is important to us. This policy explains how India Drone Academy collects, 
            uses, and protects your personal information.
          </p>
          
          <div className="inline-flex items-center bg-[#26A65B] bg-opacity-10 text-[#26A65B] px-6 py-3 rounded-full font-medium">
            <Calendar className="w-5 h-5 mr-2" />
            Last Updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-blue-600" />
              Privacy at a Glance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#26A65B] mr-3 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">We collect minimal data</h3>
                  <p className="text-gray-700 text-sm">Only information necessary for training and certification</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#26A65B] mr-3 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Your data is secure</h3>
                  <p className="text-gray-700 text-sm">Protected with industry-standard security measures</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#26A65B] mr-3 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">You have control</h3>
                  <p className="text-gray-700 text-sm">Access, correct, or delete your information anytime</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#26A65B] mr-3 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">No unauthorized sharing</h3>
                  <p className="text-gray-700 text-sm">We never sell or misuse your personal information</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={section.id} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-[#F15A24] bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-[#F15A24]" />
                    </div>
                    {section.title}
                  </h2>
                  
                  <div className="space-y-6">
                    {section.content.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                          {subsection.subtitle}
                        </h3>
                        <ul className="space-y-2">
                          {subsection.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-[#26A65B] rounded-full mr-3 mt-2"></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F15A24] to-[#26A65B] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Questions About Your Privacy?</h2>
            <p className="text-orange-100 mb-8">
              If you have any questions about this privacy policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-orange-100">privacy@indiadroneacademy.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-orange-100">+91 7799100040</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-orange-100">Hyderabad, Telangana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Notice */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Policy Updates</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may update this privacy policy from time to time to reflect changes in our practices 
                  or legal requirements. We will notify you of any significant changes by email or through 
                  our website. Your continued use of our services after such changes constitutes acceptance 
                  of the updated policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;