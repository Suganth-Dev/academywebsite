import React from 'react';
import { Globe, ArrowRight, ExternalLink, MapPin, Calendar, Users, Award, BookOpen, MessageSquare, Phone } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      category: 'Main Pages',
      icon: Globe,
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page with course overview and key information' },
        { name: 'About Us', url: '/why-ida', description: 'Learn about India Drone Academy and our mission' },
        { name: 'Contact Us', url: '/contact', description: 'Get in touch with our team and visit our centers' },
        { name: 'Apply Now', url: '/apply', description: 'Submit your application for drone training courses' }
      ]
    },
    {
      category: 'Training Courses',
      icon: Award,
      pages: [
        { name: 'All Courses', url: '/courses', description: 'Browse all available drone training programs' },
        { name: 'DGCA Pilot Training', url: '/courses/dgca-pilot', description: '5-day government-certified commercial pilot training' },
        { name: 'Agriculture Drone Training', url: '/courses/agriculture', description: '3-day specialized training for precision agriculture' },
        { name: 'Women Drone Program', url: '/courses/women-program', description: '5-day empowerment program for women in aviation' },
        { name: '1-Day Special Courses', url: '/courses/one-day', description: 'Quick introduction to drone technology' },
        { name: 'Corporate Training', url: '/courses/corporate', description: 'Customized training programs for organizations' },
        { name: 'Advanced Operations', url: '/courses/advanced', description: 'Advanced techniques for experienced pilots' }
      ]
    },
    {
      category: 'Student Resources',
      icon: Users,
      pages: [
        { name: 'Success Stories', url: '/success-stories', description: 'Read inspiring stories from our graduates' },
        { name: 'Blog & Insights', url: '/blog', description: 'Latest news, tips, and industry updates' },
        { name: 'Career Guidance', url: '/contact', description: 'Get personalized career advice and support' }
      ]
    },
    {
      category: 'Legal & Policies',
      icon: BookOpen,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we collect, use, and protect your information' },
        { name: 'Terms & Conditions', url: '/terms', description: 'Terms of service and student responsibilities' },
        { name: 'Sitemap', url: '/sitemap', description: 'Complete overview of our website structure' }
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Start Your Application',
      description: 'Ready to begin your drone career? Apply now for our upcoming batches.',
      url: '/apply',
      icon: ArrowRight,
      color: 'bg-[#F15A24]'
    },
    {
      title: 'Talk to Our Team',
      description: 'Have questions? Get instant answers from our counselors.',
      url: '/contact',
      icon: MessageSquare,
      color: 'bg-[#26A65B]'
    },
    {
      title: 'Download Brochure',
      description: 'Get detailed information about all our courses and programs.',
      url: '/contact',
      icon: BookOpen,
      color: 'bg-blue-600'
    }
  ];

  const importantLinks = [
    { name: 'DGCA Official Website', url: 'https://dgca.gov.in', external: true },
    { name: 'Drone Rules 2021', url: 'https://dgca.gov.in/digigov-portal/Upload/whatsnew/Drone%20Rules%202021.pdf', external: true },
    { name: 'Digital Sky Platform', url: 'https://digitalsky.dgca.gov.in', external: true },
    { name: 'Ministry of Civil Aviation', url: 'https://www.civilaviation.gov.in', external: true }
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
            <Globe className="w-10 h-10 text-[#F15A24]" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Website Sitemap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Navigate through all pages and resources available on the India Drone Academy website. 
            Find exactly what you're looking for quickly and easily.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Quick Actions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <a
                  key={index}
                  href={action.url}
                  className={`${action.color} text-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
                >
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{action.title}</h3>
                  <p className="text-white text-opacity-90 mb-4">{action.description}</p>
                  <div className="flex items-center text-white font-medium group-hover:translate-x-1 transition-transform duration-200">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Site Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Complete Site Structure
          </h2>
          
          <div className="space-y-12">
            {siteStructure.map((section, sectionIndex) => {
              const IconComponent = section.icon;
              return (
                <div key={sectionIndex} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="w-10 h-10 bg-[#F15A24] bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-[#F15A24]" />
                    </div>
                    {section.category}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.pages.map((page, pageIndex) => (
                      <a
                        key={pageIndex}
                        href={page.url}
                        className="block p-6 border border-gray-200 rounded-lg hover:border-[#F15A24] hover:shadow-md transition-all duration-200 group"
                      >
                        <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#F15A24] transition-colors duration-200">
                          {page.name}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {page.description}
                        </p>
                        <div className="flex items-center text-[#F15A24] text-sm font-medium">
                          Visit Page
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important External Links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Important External Resources
          </h2>
          
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Government & Regulatory Links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {importantLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 group"
                >
                  <span className="font-medium text-gray-900 group-hover:text-[#F15A24] transition-colors duration-200">
                    {link.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#F15A24] transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F15A24] to-[#26A65B] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Our team is here to help you navigate our website and find the information you need. 
              Don't hesitate to reach out with any questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-[#F15A24] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="tel:+917799100040"
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#F15A24] transition-all duration-200 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;