// WorkshopRegistrationPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; // Assuming Header component exists
import Footer from '../components/Footer'; // Assuming Footer component exists
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Building,
  FileText,
  Award,
  Users,
  Contact,
  Target,
  CheckCircle,
  ArrowRight,
  Download,
  Star,
  Briefcase,
  Shield
} from 'lucide-react';

const WorkshopRegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    educationLevel: '',
    dob: '', // Expecting format like "14th August 1994"
    collegeName: '',
    aadhaarNumber: '',
    email: '',
    phoneNumber: '',
    residentialAddress: '',
    declaration: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prevState => ({
        ...prevState,
        [name]: checked
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple client-side validation
    if (!formData.fullName || !formData.gender || !formData.educationLevel ||
        !formData.dob || !formData.collegeName || !formData.aadhaarNumber ||
        !formData.email || !formData.phoneNumber || !formData.residentialAddress ||
        !formData.declaration) {
      alert("Please fill in all required fields marked with *.");
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: Replace with your actual API endpoint for workshop registration
      const response = await fetch("https://your-api-endpoint-for-workshop/postworkshopregistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Workshop Registration successful:", result);
        setIsSubmitted(true);
        // Optional: Scroll to top or a confirmation section
        setTimeout(() => {
          document.getElementById("internship-form")?.scrollIntoView({ // Changed ID to match InternshipPage
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      } else {
        console.error("Workshop Registration failed:", result.error);
        alert("Registration failed: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Network error during Workshop Registration:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Award,
      title: 'Industry-Recognized Certification',
      description: 'Get certified by India\'s leading drone training academy',
      color: 'text-[#26A65B]',
      bgColor: 'bg-green-50'
    },
    {
      icon: Target,
      title: 'Hands-On Drone Experience',
      description: 'Work with real drones and cutting-edge technology',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Briefcase,
      title: 'Career Development',
      description: 'Build skills for future drone industry opportunities',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Users,
      title: 'Mentorship Program',
      description: 'Learn from industry experts and experienced pilots',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Star,
      title: 'Networking Opportunities',
      description: 'Connect with professionals and fellow drone enthusiasts',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const educationLevels = [
    { value: '', label: 'Select Education Level' },
    { value: '10th', label: '10th Standard' },
    { value: '12th', label: '12th Standard (Intermediate)' },
    { value: 'diploma', label: 'Diploma' },
    { value: 'btech', label: 'B.Tech / B.E.' },
    { value: 'bca', label: 'BCA' },
    { value: 'bba', label: 'BBA' },
    { value: 'mtech', label: 'M.Tech / M.E.' },
    { value: 'mca', label: 'MCA' },
    { value: 'mba', label: 'MBA' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer - adjust if your Header has a fixed height */}
      <div className="h-10"></div>

      {/* Hero Section - Simplified for Workshop */}
      <section className="pt-4 pb-16 lg:pt-6 lg:pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F15A24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#26A65B] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Register for Our{' '}
                <span className="text-[#F15A24]">Drone Workshop</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Secure your spot in our upcoming workshop and dive into the world of drones.
              </p>
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-[#26A65B]" />
                  <span>DGCA Approved</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-[#26A65B]" />
                  <span>500+ Participants</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-[#26A65B]" />
                  <span>Industry Recognized</span>
                </div>
              </div>
              {/* CTA */}
              <button
                onClick={() =>
                  document.getElementById('internship-form')?.scrollIntoView({ behavior: 'smooth' }) // Changed ID to match InternshipPage
                }
                className="bg-[#F15A24] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center"
              >
                Register Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            {/* Hero Image - Placeholder or relevant image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#F15A24] to-[#D64A1A] rounded-2xl p-8 shadow-2xl">
                <img
                  src="/workshop1.jpg" // Replace with your actual image path
                  alt="Drone Workshop"
                  className="w-full h-80 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-2xl font-bold text-[#26A65B]">500+</div>
                <div className="text-sm text-gray-600">Workshop Attendees</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-2xl font-bold text-[#F15A24]">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Kept exactly from InternshipPage.tsx */}
      <section className="pt-8 pb-0 lg:pt-10 lg:pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              What You'll Gain From This Workshop
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Practical knowledge and skills to kickstart your journey in the drone industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-10 h-10 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                    <IconComponent className={`w-5 h-5 ${benefit.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internship Models - Kept exactly from InternshipPage.tsx but with adjusted titles/descriptions */}
      <section className="py-10 lg:py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Workshop Opportunities
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible workshop options designed to match your academic background and career goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Student Workshop</h3>
              <p className="text-gray-600 mb-4">For current students looking to gain practical experience alongside their studies.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#26A65B] mr-2" />
                  3-6 months duration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#26A65B] mr-2" />
                  Academic credit support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#26A65B] mr-2" />
                  Certificate of completion
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Graduate Workshop</h3>
              <p className="text-gray-600 mb-4">For recent graduates seeking industry experience before full-time employment.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#26A65B] mr-2" />
                  6-12 months duration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#26A65B] mr-2" />
                  Potential for full-time role
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#26A65B] mr-2" />
                  Industry mentorship
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research Workshop</h3>
              <p className="text-gray-600 mb-4">For students and graduates interested in drone technology research and development.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#26A65B] mr-2" />
                  Project-based learning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#26A65B] mr-2" />
                  Publication opportunities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#26A65B] mr-2" />
                  Advanced technology access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       {/* Special Pricing Banner - Kept exactly from InternshipPage.tsx but adjusted text */}
      <section className="py-6 lg:py-10 bg-gradient-to-br from-orange-600 to-orange-400 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Workshop Fee & Registration
          </h2>
          <p className="text-base sm:text-lg text-orange-100 mb-4 max-w-3xl mx-auto">
            Early bird discounts available! Secure your seat today.
          </p>
          <p className="text-sm sm:text-base text-orange-100 mb-6">
            Includes workshop materials, certificate, and lunch.
          </p>
          <button
            onClick={() => {
                 // TODO: Implement brochure download logic or link
                 alert("Brochure download link would go here.");
            }}
            className="bg-white text-[#F15A24] font-semibold text-sm sm:text-base px-6 py-3 rounded-md hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Workshop Brochure
          </button>
        </div>
      </section>

      {/* Registration Form - This is the section where fields are changed */}
      <section id="internship-form" className="py-16 lg:py-24 bg-white"> {/* Kept ID from InternshipPage */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            {!isSubmitted ? (
              <>
                {/* Title Section */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Workshop Registration
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Please fill in your details to register for the workshop.
                  </p>
                </div>

                {/* Form Starts */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Details Section */}
                  <div className="border-l-2 border-orange-500 pl-3">
                    <h2 className="text-lg font-bold text-gray-800 mb-3">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-semibold text-gray-700 mb-1">
                          Full Name (as per SSC) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="gender" className="block text-xs font-semibold text-gray-700 mb-1">
                          Gender <span className="text-red-500">*</span>
                        </label>
                        <div className="flex space-x-4 mt-1">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              value="male"
                              checked={formData.gender === 'male'}
                              onChange={handleInputChange}
                              className="text-orange-600 focus:ring-orange-500"
                              required
                            />
                            <span className="ml-2 text-sm text-gray-700">Male</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              value="female"
                              checked={formData.gender === 'female'}
                              onChange={handleInputChange}
                              className="text-orange-600 focus:ring-orange-500"
                              required
                            />
                            <span className="ml-2 text-sm text-gray-700">Female</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="educationLevel" className="block text-xs font-semibold text-gray-700 mb-1">
                          Education <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="educationLevel"
                          name="educationLevel"
                          value={formData.educationLevel}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all"
                          required
                        >
                          {educationLevels.map((level) => (
                            <option key={level.value} value={level.value}>
                              {level.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="dob" className="block text-xs font-semibold text-gray-700 mb-1">
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text" // Keeping as text to allow custom format like "14th August 1994"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all"
                            placeholder="e.g., 14th August 1994"
                            required
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="collegeName" className="block text-xs font-semibold text-gray-700 mb-1">
                          Name Of the College <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            id="collegeName"
                            name="collegeName"
                            value={formData.collegeName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all"
                            placeholder="Enter college/university name"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="aadhaarNumber" className="block text-xs font-semibold text-gray-700 mb-1">
                          Aadhar Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Contact className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text" // Consider text for formatting flexibility
                            id="aadhaarNumber"
                            name="aadhaarNumber"
                            value={formData.aadhaarNumber}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all"
                            placeholder="Enter your Aadhaar number"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                          Email-ID <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phoneNumber" className="block text-xs font-semibold text-gray-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all"
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="residentialAddress" className="block text-xs font-semibold text-gray-700 mb-1">
                          Residential address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <textarea
                            id="residentialAddress"
                            name="residentialAddress"
                            value={formData.residentialAddress}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all"
                            placeholder="Enter your full residential address"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Declaration */}
                  <div className="border-l-2 border-orange-500 pl-3">
                    <h2 className="text-lg font-bold text-gray-800 mb-3">Declaration</h2>
                    <div className="bg-orange-50 rounded p-4">
                      <label className="flex items-start space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          id="declaration"
                          name="declaration"
                          checked={formData.declaration}
                          onChange={handleInputChange}
                          className="mt-1 h-4 w-4 text-orange-600 rounded focus:ring-orange-500"
                          required
                        />
                        <span className="text-xs text-gray-700">
                          I hereby declare that all the information provided is true to the best of my knowledge and I understand that any false information may lead to disqualification from the workshop.
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm flex items-center justify-center mx-auto disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Registering...
                        </>
                      ) : (
                        <>
                          Register for Workshop
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              // ✅ Thank-you message shown ONLY after form is submitted
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#26A65B] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#26A65B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for registering for our workshop. We look forward to seeing you there!
                </p>
                <div className="bg-[#26A65B] bg-opacity-10 rounded-lg p-4">
                  <p className="text-[#26A65B] font-medium">
                    📧 You'll receive a confirmation email shortly with workshop details and venue information.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA - Similar to Internship Page */}
      <section className="py-6 -mt-4 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Have Questions About Our Workshop?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Our team is here to help you with any queries regarding the workshop.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919188883344"
              className="bg-[#F15A24] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-lg hover:bg-[#D64A1A] hover:shadow-md transition-all duration-200 flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call +91 9188883344
            </a>
            <a
              href="https://wa.me/919188883344?text=Hi, I'm interested in the drone workshop at IDA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-lg hover:bg-[#20B954] transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default WorkshopRegistrationPage;