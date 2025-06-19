import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  Users, 
  Award,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  Twitter,
  CheckCircle,
  User,
  MessageCircle,
  Calendar,
  ArrowRight,
  ExternalLink,
  Navigation,
  Building,
  Globe,
  Headphones,
  Star,
  Shield,
  Zap
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseOfInterest: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', courseOfInterest: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+91 7799100040',
      secondary: 'Mon-Sat, 9 AM - 6 PM',
      action: 'tel:+917799100040',
      actionText: 'Call Now',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'bd@indiadroneacademy.com',
      secondary: 'We reply within 24 hours',
      action: 'mailto:bd@indiadroneacademy.com',
      actionText: 'Send Email',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      primary: 'Instant Support',
      secondary: 'Get quick answers to your questions',
      action: 'https://wa.me/917799100040?text=Hi, I need information about drone courses',
      actionText: 'Chat Now',
      color: 'text-[#25D366]',
      bgColor: 'bg-green-50'
    }
  ];

  const officeLocations = [
    {
      city: 'Hyderabad (Main Campus)',
      address: 'White Waters, 5A/6B, Lane beside KIMS Hospital, Timber Lake Colony, Shaikpet, Hyderabad, Telangana 500008',
      phone: '+91 7799100040',
      email: 'hyderabad@indiadroneacademy.com',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      mapLink: 'https://maps.google.com/?q=White+Waters+Shaikpet+Hyderabad',
      isMain: true
    },
    {
      city: 'Vijayawada',
      address: 'Training Center, Vijayawada, Andhra Pradesh',
      phone: '+91 7799100041',
      email: 'vijayawada@indiadroneacademy.com',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      mapLink: 'https://maps.google.com/?q=Vijayawada+Andhra+Pradesh',
      isMain: false
    }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      name: 'Instagram', 
      handle: '@indiadroneacademy',
      followers: '15K+',
      url: 'https://instagram.com/indiadroneacademy',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    { 
      icon: Youtube, 
      name: 'YouTube', 
      handle: 'India Drone Academy',
      followers: '25K+',
      url: 'https://youtube.com/@indiadroneacademy',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    { 
      icon: Linkedin, 
      name: 'LinkedIn', 
      handle: 'India Drone Academy',
      followers: '10K+',
      url: 'https://linkedin.com/company/indiadroneacademy',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      icon: Facebook, 
      name: 'Facebook', 
      handle: 'India Drone Academy',
      followers: '20K+',
      url: 'https://facebook.com/indiadroneacademy',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50'
    }
  ];

  const courseOptions = [
    'DGCA Drone Pilot Training',
    'Simulator Training Program',
    'Drone Mapping & Agriculture Course',
    'Women Drone Program',
    '1-Day Special Courses',
    'Corporate Training',
    'Not Sure - Need Guidance'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F15A24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#26A65B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Connect with India's{' '}
              <span className="text-[#F15A24]">Premier Drone Academy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              We're here to answer your questions, guide you through the application process, 
              and help you start your drone career journey.
            </p>
            
            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/917799100040?text=Hi, I need information about drone courses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#20B954] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="font-bold">Talk to Our Team on WhatsApp</div>
                <div className="text-sm text-green-100">Get instant answers to your questions</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the communication method that works best for you. We're available across all channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 ${method.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    {method.primary}
                  </p>
                  
                  <p className="text-gray-600 mb-6">
                    {method.secondary}
                  </p>
                  
                  <a
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-full bg-[#F15A24] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#D64A1A] transition-all duration-200 flex items-center justify-center"
                  >
                    {method.actionText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Visit Our Training Centers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience our world-class facilities and meet our expert instructors in person.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {officeLocations.map((location, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg ${
                  location.isMain ? 'ring-2 ring-[#F15A24] ring-opacity-50' : ''
                }`}
              >
                {location.isMain && (
                  <div className="inline-flex items-center bg-[#F15A24] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                    <Star className="w-4 h-4 mr-2" />
                    Main Campus
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {location.city}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#F15A24] mr-3 mt-0.5" />
                    <p className="text-gray-700">{location.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#F15A24] mr-3" />
                    <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-[#F15A24]">
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#F15A24] mr-3" />
                    <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-[#F15A24]">
                      {location.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-[#F15A24] mr-3" />
                    <p className="text-gray-700">{location.hours}</p>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#F15A24] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#D64A1A] transition-all duration-200 flex items-center justify-center"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                  <a
                    href={`tel:${location.phone}`}
                    className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Embedded Map */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Find Our Hyderabad Campus
            </h3>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.3!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="India Drone Academy Hyderabad Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a specific question? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="courseOfInterest" className="block text-sm font-medium text-gray-700 mb-2">
                    Course of Interest
                  </label>
                  <div className="relative">
                    <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="courseOfInterest"
                      name="courseOfInterest"
                      value={formData.courseOfInterest}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a course</option>
                      {courseOptions.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your questions, goals, or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F15A24] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#26A65B] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#26A65B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <div className="bg-[#26A65B] bg-opacity-10 rounded-lg p-4">
                  <p className="text-[#26A65B] font-medium">
                    📱 For urgent queries, you can also WhatsApp us at +91 7799100040
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Follow Our Drone Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest news, student achievements, and drone industry insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
                >
                  <div className={`w-16 h-16 ${social.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${social.color}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {social.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-2">
                    {social.handle}
                  </p>
                  
                  <p className="text-sm text-gray-500 mb-4">
                    {social.followers} followers
                  </p>
                  
                  <div className="flex items-center justify-center text-[#F15A24] font-medium group-hover:text-[#D64A1A]">
                    Follow Us
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#F15A24] to-[#26A65B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need an Urgent Response?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            For immediate assistance, call us directly or start a WhatsApp conversation. 
            We're here to help you take the next step in your drone career.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917799100040"
              className="bg-white text-[#F15A24] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a
              href="https://wa.me/917799100040?text=Hi, I need information about drone courses"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#20B954] transition-all duration-200 flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp Chat
            </a>
            <a
              href="/apply"
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#F15A24] transition-all duration-200 flex items-center justify-center"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;