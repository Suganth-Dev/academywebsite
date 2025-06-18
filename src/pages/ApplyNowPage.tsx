import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle, 
  Phone, 
  Mail, 
  User, 
  MapPin, 
  Calendar, 
  MessageSquare,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Star,
  Download,
  AlertCircle,
  Loader,
  X,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';

const ApplyNowPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: '',
    location: '',
    batchDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const courses = [
    { value: 'dgca-small', label: 'DGCA Small Category (5 Days) - ₹45,000 + GST' },
    { value: 'dgca-medium', label: 'DGCA Medium Category (5 Days) - ₹65,000 + GST' },
    { value: 'medium-upgrade', label: 'Medium Upgrade (3 Days) - ₹45,000 + GST' },
    { value: 'dgca-combined', label: 'Small + Medium Combined (8 Days) - ₹75,000 + GST' },
    { value: 'agriculture-spraying', label: 'Agriculture Spraying (3 Days) - ₹25,000 + GST' },
    { value: 'site-mapping', label: 'Site Asset Mapping (3 Days) - ₹35,000 + GST' },
    { value: 'mining-analysis', label: 'Mining Excavation Analysis (3 Days) - ₹35,000 + GST' },
    { value: 'aerial-cinematography', label: 'Aerial Cinematography (3 Days) - ₹25,000 + GST' },
    { value: 'data-processing', label: 'Data Processing (3 Days) - ₹25,000 + GST' },
    { value: 'drone-assembly-basic', label: 'Drone Assembly Basic (3 Days) - ₹25,000 + GST' },
    { value: 'drone-assembly-advanced', label: 'Drone Assembly Advanced (5 Days) - ₹45,000 + GST' },
    { value: 'fpv-basic', label: 'FPV Training Basic (3 Days) - ₹25,000 + GST' },
    { value: 'fpv-advanced', label: 'FPV Training Advanced (5 Days) - ₹45,000 + GST' },
    { value: 'women-bootcamp', label: 'Women Drone Pilot Bootcamp (5 Days) - ₹42,000 + GST' },
    { value: 'drone-didi-agri', label: 'Drone-Didi Agri Program (3 Days) - ₹22,000 + GST' },
    { value: 'dgca-cinematography-bundle', label: 'DGCA Small + Cinematography (8 Days) - ₹85,000 + GST' },
    { value: 'dgca-mapping-bundle', label: 'DGCA Medium + 3D Mapping (8 Days) - ₹90,000 + GST' },
    { value: 'ultimate-pro', label: 'Ultimate Pro Bundle (10 Days) - ₹115,000 + GST' },
    { value: 'thermal-lidar', label: 'Thermal Inspection & LiDAR (3 Days) - ₹40,000 + GST' },
    { value: 'bvlos', label: 'BVLOS Training (2 Days) - ₹30,000 + GST' },
    { value: 'safety-incident', label: 'Drone Safety & Incident Response (2 Days) - ₹30,000 + GST' },
    { value: 'simulator-refresher', label: 'Simulator Refresher (50 hrs) - ₹15,000 + GST' },
    { value: 'online-theory', label: 'Online Theory Crash Course - ₹7,500 + GST' },
    { value: 'corporate', label: 'Corporate Training (Flexible) - ₹25,000 + GST' }
  ];

  const locations = [
   'Gurugram, Haryana',
  'Harsola, Madhya Pradesh',
  'Meerut, Uttar Pradesh',
  'Nagpur, Maharashtra',
  'Belgaum, Karnataka'
  ];

  const batchDates = [
    'January 15-20, 2025 (Hyderabad) - DGCA Small',
    'January 22-27, 2025 (Hyderabad) - DGCA Medium',
    'January 25-27, 2025 (Pune) - Agriculture',
    'February 2-7, 2025 (Bangalore) - DGCA Small',
    'February 10-12, 2025 (Hyderabad) - Medium Upgrade',
    'February 15-23, 2025 (Hyderabad) - Combined Package',
    'March 1-6, 2025 (Mumbai) - DGCA Small',
    'March 8-13, 2025 (Bangalore) - DGCA Medium'
  ];

  const faqs = [
    {
      question: 'Who can apply for drone pilot training?',
      answer: 'Anyone above 18 years with basic English understanding and 10th standard education can apply. No prior aviation experience is required.'
    },
    {
      question: 'What happens after I submit this application?',
      answer: 'Our counselor will contact you within 24 hours to discuss your course selection, answer questions, and guide you through the enrollment process.'
    },
    {
      question: 'Can I pay the course fee in installments?',
      answer: 'Yes, we offer flexible payment options including EMI plans. Our counselor will discuss payment options that suit your budget.'
    },
    {
      question: 'Do I need prior drone flying experience?',
      answer: 'No prior experience needed! Our courses are designed for complete beginners. We start from basics and build up to advanced operations.'
    },
    {
      question: 'Is accommodation provided during training?',
      answer: 'We can help arrange accommodation near our training centers. Our team will provide recommendations for hotels and hostels in the area.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    if (!formData.location) {
      newErrors.location = 'Please select a preferred location';
    }

    if (!formData.batchDate) {
      newErrors.batchDate = 'Please select a preferred batch date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Application submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="h-20"></div>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#26A65B] rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Application Received Successfully!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for applying to India Drone Academy. Our counselor will contact you within 24 hours to discuss your course selection and next steps.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#F15A24] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Counselor Call (Within 24 hours)</h4>
                    <p className="text-gray-600">Our expert will call to understand your goals and recommend the best course.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#F15A24] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Course Confirmation</h4>
                    <p className="text-gray-600">Finalize your course, batch, and payment details.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#F15A24] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Pre-Training Materials</h4>
                    <p className="text-gray-600">Receive course materials and preparation guidelines.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="bg-[#F15A24] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#D64A1A] transition-all duration-200"
              >
                Back to Home
              </a>
              <a
                href="/courses"
                className="bg-gray-200 text-gray-700 font-bold px-8 py-4 rounded-lg hover:bg-gray-300 transition-all duration-200"
              >
                View All Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F15A24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#26A65B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          {/* DGCA Badge */}
          <div className="inline-flex items-center bg-[#26A65B] bg-opacity-10 text-[#26A65B] px-6 py-3 rounded-full font-bold mb-8">
            <Award className="w-5 h-5 mr-2" />
            DGCA Approved Training Partner
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Apply Now & Start Your{' '}
            <span className="text-[#F15A24]">Drone Journey</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose from 24+ specialized courses. Fill the form to book your seat. Limited seats per batch - secure your spot today!
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-[#26A65B]" />
              <span>Secure Application</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-[#26A65B]" />
              <span>24hr Response</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-[#26A65B]" />
              <span>Expert Counseling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Fill Out Your Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200 ${
                            errors.fullName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.fullName}
                        </p>
                      )}
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
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200 ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.phone}
                        </p>
                      )}
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
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Course *
                    </label>
                    <div className="relative">
                      <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200 appearance-none ${
                          errors.course ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select your preferred course</option>
                        {courses.map((course) => (
                          <option key={course.value} value={course.value}>
                            {course.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    {errors.course && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.course}
                      </p>
                    )}
                  </div>

                  {/* Location and Batch */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Training Location *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200 appearance-none ${
                            errors.location ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select location</option>
                          {locations.map((location) => (
                            <option key={location} value={location}>
                              {location}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                      {errors.location && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.location}
                        </p>
                      )}
                    </div>

                    
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="Tell us about your goals, experience, or any specific questions..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F15A24] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Apply Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>

                  {/* Privacy Note */}
                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We respect your data and will only use it to contact you about your application.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* WhatsApp Quick Help */}
              <div className="bg-[#25D366] bg-opacity-10 rounded-2xl p-8 border border-[#25D366] border-opacity-20">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Need Help Choosing the Right Course?
                </h3>
                <p className="text-gray-600 mb-6">
                  Talk to our advisors instantly on WhatsApp. Get personalized course recommendations and answers to all your questions.
                </p>
                <a
                  href="https://wa.me/917799100040?text=Hi, I need help choosing the right drone course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#20B954] transition-all duration-200 flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Chat Now on WhatsApp
                </a>
              </div>

              {/* Trust Reminders */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Why Choose IDA?
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Award, text: 'DGCA Certified RPTO' },
                    { icon: Users, text: '2500+ Students Trained' },
                    { icon: CheckCircle, text: 'Placement Guidance & Startup Support' },
                    { icon: Star, text: '100% Success Rate' }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 bg-[#26A65B] bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                          <IconComponent className="w-4 h-4 text-[#26A65B]" />
                        </div>
                        <span className="text-gray-700 font-medium">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Download Brochure */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Want to Learn More?
                </h3>
                <p className="text-gray-600 mb-6">
                  Download our comprehensive course brochure with detailed curriculum, fees, and batch schedules.
                </p>
                <button className="w-full bg-gray-100 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Before You Apply...
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our application process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <HelpCircle className="w-5 h-5 text-[#F15A24] mr-3" />
                    <span className="font-medium text-gray-900">{faq.question}</span>
                  </div>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyNowPage;