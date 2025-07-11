import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Why IDA?', href: '/why-ida' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Apply Now', href: '/apply' },
    { name: 'Career Support', href: '/contact' }
  ];

  const courses = [
    { name: 'DGCA Pilot Training', href: '/courses/dgca-pilot' },
    { name: 'Agriculture Drone Training', href: '/courses/agriculture' },
    { name: 'Women Drone Program', href: '/courses/women-program' },
    { name: '1-Day Special Courses', href: '/courses/one-day' },
    { name: 'Corporate Training', href: '/courses/corporate' },
    { name: 'Advanced Certification', href: '/courses/advanced' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <button 
                onClick={() => handleNavigation('/')}
                className="flex items-center"
              >
                <img 
                  src="/logo1.png" 
                  alt="India Drone Academy Logo" 
                  className="h-14 mb-4"
                />
              </button>
              <h3 className="text-xl font-bold mb-2">India Drone Academy</h3>
              <p className="text-gray-400 leading-relaxed">
                India's leading DGCA-certified drone training institute. Empowering careers through professional drone education and certification.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#F15A24]" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-[#F15A24] transition-colors duration-200">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#F15A24] mt-0.5" />
                <address className="text-gray-400 not-italic">
                  123 Tech Park, Hitech City<br />
                  Hyderabad, Telangana 500081
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-400 hover:text-[#F15A24] transition-colors duration-200 flex items-center group text-left"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#F15A24] mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <button
                    onClick={() => handleNavigation(course.href)}
                    className="text-gray-400 hover:text-[#F15A24] transition-colors duration-200 flex items-center group text-left"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#F15A24] mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {course.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Get the latest updates on drone careers, industry news, and course announcements.
            </p>

            {/* Newsletter Form */}
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="mb-6">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent text-white placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    className="bg-[#F15A24] hover:bg-[#D64A1A] px-4 py-3 rounded-r-lg transition-colors duration-200"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-[#26A65B] bg-opacity-20 border border-[#26A65B] rounded-lg p-4 mb-6">
                <p className="text-[#26A65B] font-medium">
                  ✅ Successfully subscribed! Check your email.
                </p>
              </div>
            )}

            {/* Social Links */}
            <div>
              <h5 className="font-medium mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 hover:bg-[#F15A24] rounded-lg flex items-center justify-center transition-all duration-200 transform hover:-translate-y-1"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 India Drone Academy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => handleNavigation('/privacy')}
                className="text-gray-400 hover:text-[#F15A24] transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavigation('/terms')}
                className="text-gray-400 hover:text-[#F15A24] transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => handleNavigation('/sitemap')}
                className="text-gray-400 hover:text-[#F15A24] transition-colors duration-200"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;