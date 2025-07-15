import React, { useState } from 'react';
import { Download, Mail, Phone, CheckCircle } from 'lucide-react';

const LeadMagnet: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    profession: '',
    source: '',
    purpose: '',
    subscribe: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your backend/CRM/WhatsApp
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        profession: '',
        source: '',
        purpose: '',
        subscribe: false
      });
    }, 3000);

  };

  return (
    <section id="lead-magnet" className="py-10 lg:py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Content */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Not sure where to start?
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Get our free <strong>Drone Career Starter Guide</strong> and discover:
            </p>

            <ul className="space-y-3 mb-6 text-sm">
              {[
                'Complete roadmap to becoming a certified drone pilot',
                'Salary expectations and career opportunities',
                'Industry insights and market trends',
                'Training requirements and certification process',
                'Equipment recommendations for beginners',
                'Success stories and case studies'
              ].map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#26A65B] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4 text-xs text-gray-600">
              <div className="flex items-center">
                <Download className="w-4 h-4 mr-1 text-[#26A65B]" />
                5,000+ Downloads
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-[#26A65B]" />
                100% Free
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-xl p-6 lg:p-8">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-[#F15A24] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Download className="w-6 h-6 text-[#F15A24]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Download Your Free Guide
                  </h3>
                  <p className="text-xs text-gray-600">Enter your details for instant access</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-sm">

                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F15A24] focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-medium text-gray-700 mb-1">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F15A24] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block font-medium text-gray-700 mb-1">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F15A24] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block font-medium text-gray-700 mb-1">City / Location *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="Hyderabad"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F15A24] focus:outline-none"
                    />
                  </div>

                  {/* Profession / Industry */}
                  <div>
                    <label htmlFor="profession" className="block font-medium text-gray-700 mb-1">
                      Profession / Industry *
                    </label>
                    <select
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F15A24] focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="Student">Student</option>
                      <option value="Working Professional">Working Professional</option>
                      <option value="Entrepreneur">Entrepreneur</option>
                      <option value="Farmer / Agri Specialist">Farmer / Agri Specialist</option>
                      <option value="Drone Enthusiast">Drone Enthusiast</option>
                      <option value="Trainer / Educator">Trainer / Educator</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>


                  {/* Source */}
                  <div>
                    <label htmlFor="source" className="block font-medium text-gray-700 mb-1">How did you hear about us? *</label>
                    <select
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F15A24] focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Word of Mouth">Word of Mouth</option>
                      <option value="Drone Expo">Drone Expo Event</option>
                      <option value="WhatsApp">WhatsApp / Email</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Purpose */}
                  <div>
                    <label htmlFor="purpose" className="block font-medium text-gray-700 mb-1">
                      Purpose of Download *
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F15A24] focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="Learning about drones">Learning about drones</option>
                      <option value="Career planning / skill development">Career planning / skill development</option>
                      <option value="Starting a drone business">Starting a drone business</option>
                      <option value="Research / Academic project">Research / Academic project</option>
                      <option value="Exploring training programs">Exploring training programs</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>


                  {/* Opt-in */}
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="subscribe"
                      name="subscribe"
                      checked={formData.subscribe || false}
                      onChange={(e) =>
                        setFormData({ ...formData, subscribe: e.target.checked })
                      }
                      className="mt-1"
                    />
                    <label htmlFor="subscribe" className="text-xs text-gray-600">
                      I’d like to receive updates and offers from India Drone Academy.
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#F15A24] text-white font-bold py-3 px-4 rounded-md hover:bg-[#D64A1A] transition transform hover:-translate-y-0.5 flex items-center justify-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Send Me the Guide
                  </button>

                  <p className="text-[10px] text-gray-500 text-center mt-1">
                    We respect your privacy. No spam.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-[#26A65B] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-[#26A65B]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Success! Check Your Email
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Your guide has been sent to your email. Also check WhatsApp!
                </p>
                <div className="bg-[#26A65B] bg-opacity-10 rounded-md p-3 text-xs text-[#26A65B] font-medium">
                  📱 Our counselor will contact you soon to discuss your career goals.
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>

  );
};

export default LeadMagnet;