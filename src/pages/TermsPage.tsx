import React from 'react';
import { FileText, Scale, Users, CreditCard, Shield, AlertTriangle, CheckCircle, Calendar, Mail, Phone, MapPin, Book, Award, Gavel } from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'December 15, 2024';

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: Scale,
      content: `By accessing and using the India Drone Academy website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: Book,
      content: `India Drone Academy provides DGCA-certified drone training programs, including theoretical instruction, practical flight training, certification assistance, and career support services. All training is conducted in accordance with DGCA regulations and industry standards.`
    },
    {
      id: 'enrollment',
      title: 'Course Enrollment and Fees',
      icon: CreditCard,
      content: [
        'Course fees must be paid in full before the start of training unless alternative payment arrangements have been made.',
        'Enrollment is confirmed only upon receipt of payment and completion of required documentation.',
        'Course fees are non-refundable except in cases of course cancellation by India Drone Academy.',
        'Students are responsible for any additional costs such as accommodation, travel, and examination fees.',
        'Fee structures may change with advance notice, but enrolled students will not be affected by increases.'
      ]
    },
    {
      id: 'student-responsibilities',
      title: 'Student Responsibilities',
      icon: Users,
      content: [
        'Attend all scheduled classes and practical sessions as per the course curriculum.',
        'Complete all assignments, assessments, and examinations within specified timeframes.',
        'Maintain professional conduct and respect for instructors, staff, and fellow students.',
        'Follow all safety protocols and guidelines during practical training sessions.',
        'Provide accurate and complete information during enrollment and certification processes.',
        'Comply with all DGCA regulations and requirements for drone pilot certification.'
      ]
    },
    {
      id: 'certification',
      title: 'Certification and Compliance',
      icon: Award,
      content: [
        'Successful completion of our training program makes students eligible for DGCA certification.',
        'Final certification is subject to passing DGCA examinations and meeting all regulatory requirements.',
        'India Drone Academy cannot guarantee certification outcomes as final approval rests with DGCA.',
        'Students must maintain their certification according to DGCA renewal requirements.',
        'Any misuse of certification or violation of regulations is the sole responsibility of the certificate holder.'
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: Shield,
      content: [
        'All course materials, including but not limited to manuals, videos, presentations, and software, are the intellectual property of India Drone Academy.',
        'Students may use course materials for personal learning purposes only.',
        'Reproduction, distribution, or commercial use of course materials without written permission is prohibited.',
        'The India Drone Academy name, logo, and branding are protected trademarks.',
        'Students may not use our intellectual property for commercial purposes without explicit authorization.'
      ]
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: Gavel,
      content: [
        'India Drone Academy provides training services to the best of our ability but cannot guarantee specific career outcomes.',
        'We are not liable for any damages arising from the use of our services beyond the fees paid for training.',
        'Students participate in practical training at their own risk and must follow all safety protocols.',
        'We are not responsible for third-party services, including but not limited to accommodation, travel, or examination centers.',
        'Our liability is limited to the direct costs of the training program enrolled in by the student.'
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy and Data Protection',
      icon: Shield,
      content: [
        'Student information is collected and used in accordance with our Privacy Policy.',
        'Personal data may be shared with DGCA and other regulatory bodies as required for certification.',
        'We implement appropriate security measures to protect student information.',
        'Students have the right to access, correct, or request deletion of their personal data.',
        'Marketing communications can be opted out of at any time.'
      ]
    },
    {
      id: 'modifications',
      title: 'Modifications to Terms',
      icon: FileText,
      content: `India Drone Academy reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.`
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: Scale,
      content: `These terms and conditions are governed by the laws of India. Any disputes arising from these terms or our services will be subject to the jurisdiction of courts in Hyderabad, Telangana.`
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
            <FileText className="w-10 h-10 text-[#F15A24]" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Please read these terms and conditions carefully before using our services. 
            By enrolling in our courses, you agree to these terms.
          </p>
          
          <div className="inline-flex items-center bg-[#26A65B] bg-opacity-10 text-[#26A65B] px-6 py-3 rounded-full font-medium">
            <Calendar className="w-5 h-5 mr-2" />
            Last Updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-16">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Important Notice</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms and conditions constitute a legal agreement between you and India Drone Academy. 
                  Please read them carefully as they affect your rights and obligations. If you have any questions 
                  about these terms, please contact us before enrolling in any course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={section.id} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-[#F15A24] bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-[#F15A24]" />
                    </div>
                    {index + 1}. {section.title}
                  </h2>
                  
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#26A65B] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F15A24] to-[#26A65B] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Questions About These Terms?</h2>
            <p className="text-orange-100 mb-8">
              If you have any questions about these terms and conditions or need clarification 
              on any point, please contact us before enrolling.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-orange-100">legal@indiadroneacademy.com</p>
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
                  <p className="font-bold">Office</p>
                  <p className="text-orange-100">Hyderabad, Telangana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agreement Confirmation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <CheckCircle className="w-12 h-12 text-[#26A65B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Ready to Start Your Drone Journey?
            </h3>
            <p className="text-gray-700 mb-6">
              By applying for our courses, you acknowledge that you have read, understood, 
              and agree to these terms and conditions.
            </p>
            <a
              href="/apply"
              className="bg-[#F15A24] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-block"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;