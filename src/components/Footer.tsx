import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');
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
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <button onClick={() => handleNavigation('/')} className="flex items-center mb-4">
              <img src="/logo1.png" alt="India Drone Academy Logo" className="h-14" />
            </button>
            <h3 className="text-xl font-bold mb-2">India Drone Academy</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              India's leading DGCA-certified drone training institute. Empowering careers through professional drone education and certification.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#F15A24]" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-[#F15A24]">+91 9188883344</a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#F15A24] mt-0.5" />
                <address className="text-gray-400 not-italic">
                  IPage UM Services Pvt Ltd
                  5A/6B, White Waters,<br />
                  Timber Lake Colony, Shaikpet,<br />
                  Hyderabad - 500008 India<br />

                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => handleNavigation(link.href)} className="text-gray-400 hover:text-[#F15A24] flex items-center group text-left">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#F15A24] mr-2 transition-all duration-200"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Courses</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <button onClick={() => handleNavigation(course.href)} className="text-gray-400 hover:text-[#F15A24] flex items-center group text-left">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#F15A24] mr-2 transition-all duration-200"></span>
                    {course.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Get the latest updates on drone careers, industry news, and course announcements.</p>

            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="mb-4 flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-[#F15A24] text-white"
                />
                <button type="submit" className="bg-[#F15A24] hover:bg-[#D64A1A] px-4 py-3 rounded-r-lg transition-colors duration-200">
                  <Send className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="bg-[#26A65B] bg-opacity-20 border border-[#26A65B] rounded-lg p-4 mb-4">
                <p className="text-[#26A65B] font-medium">✅ Successfully subscribed! Check your email.</p>
              </div>
            )}

            <div>
              <h5 className="font-medium mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} className="w-10 h-10 bg-gray-800 hover:bg-[#F15A24] rounded-lg flex items-center justify-center transition-all duration-200 transform hover:-translate-y-1" aria-label={social.name}>
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 India Drone Academy. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm">
            <button onClick={() => handleNavigation('/privacy')} className="text-gray-400 hover:text-[#F15A24]">Privacy Policy</button>
            <button onClick={() => handleNavigation('/terms')} className="text-gray-400 hover:text-[#F15A24]">Terms of Service</button>
            <button onClick={() => handleNavigation('/sitemap')} className="text-gray-400 hover:text-[#F15A24]">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
