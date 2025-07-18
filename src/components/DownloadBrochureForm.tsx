import React, { useState } from 'react';
import { Download, Mail, Phone, CheckCircle } from 'lucide-react';

const DownloadBrochureForm: React.FC = () => {
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

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value, type, checked } = e.target as HTMLInputElement; // TypeScript cast to HTMLInputElement

  setFormData((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value // handle checkbox and other inputs
  }));
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Submit the form data to the API
    try {
      const response = await fetch(
        'https://99wtcgbrq4.execute-api.ap-south-1.amazonaws.com/brochur', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);

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
          subscribe: false,
        });
      }, 2500);

    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="w-full p-3">
      {!isSubmitted ? (
        <>
          {/* Header */}
          <div className="text-center mb-3">
            <h2 className="text-xl font-bold text-gray-800">Download Our Course Brochure</h2>
            <p className="text-sm text-gray-500">
              Get complete details about curriculum, duration, and certification
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-2 text-sm">
            {[
              { id: 'name', type: 'text', placeholder: 'John Doe', label: 'Full Name *' },
              { id: 'email', type: 'email', placeholder: 'your.email@example.com', label: 'Email Address *', icon: Mail },
              { id: 'phone', type: 'tel', placeholder: '+91 98765 43210', label: 'Phone Number *', icon: Phone },
              { id: 'city', type: 'text', placeholder: 'Hyderabad', label: 'City / Location *' }
            ].map(({ id, type, placeholder, label, icon: Icon }) => (
              <div key={id}>
                <label htmlFor={id} className="text-xs font-medium text-gray-700 mb-0.5 block">{label}</label>
                <div className="relative">
                  {Icon && <Icon className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />}
                  <input
                    id={id}
                    name={id}
                    type={type}
                    required
                    placeholder={placeholder}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleInputChange}
                    className={`w-full ${Icon ? 'pl-9' : 'pl-3'} pr-3 py-[6px] text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#F15A24] focus:outline-none`}
                  />
                </div>
              </div>
            ))}

            {/* Profession */}
            <div>
              <label htmlFor="profession" className="text-xs font-medium text-gray-700 mb-0.5 block">
                Profession / Industry *
              </label>
              <select
                id="profession"
                name="profession"
                required
                value={formData.profession}
                onChange={handleInputChange}
                className="w-full px-3 py-[6px] text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#F15A24] focus:outline-none"
              >
                <option value="">Select</option>
                <option>Student</option>
                <option>Working Professional</option>
                <option>Entrepreneur</option>
                <option>Farmer / Agri Specialist</option>
                <option>Drone Enthusiast</option>
                <option>Trainer / Educator</option>
                <option>Other</option>
              </select>
            </div>

            {/* Source */}
            <div>
              <label htmlFor="source" className="text-xs font-medium text-gray-700 mb-0.5 block">
                How did you hear about us? *
              </label>
              <select
                id="source"
                name="source"
                required
                value={formData.source}
                onChange={handleInputChange}
                className="w-full px-3 py-[6px] text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#F15A24] focus:outline-none"
              >
                <option value="">Select</option>
                <option>Social Media</option>
                <option>Google Search</option>
                <option>Word of Mouth</option>
                <option>Drone Expo</option>
                <option>WhatsApp</option>
                <option>Other</option>
              </select>
            </div>

            {/* Purpose */}
            <div>
              <label htmlFor="purpose" className="text-xs font-medium text-gray-700 mb-0.5 block">
                Purpose of Download *
              </label>
              <select
                id="purpose"
                name="purpose"
                required
                value={formData.purpose}
                onChange={handleInputChange}
                className="w-full px-3 py-[6px] text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#F15A24] focus:outline-none"
              >
                <option value="">Select</option>
                <option>Learning about drones</option>
                <option>Career planning / skill development</option>
                <option>Starting a drone business</option>
                <option>Research / Academic project</option>
                <option>Exploring training programs</option>
                <option>Other</option>
              </select>
            </div>

            {/* Subscribe */}
            <div className="flex items-start space-x-2 -mt-1">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleInputChange}
                className="mt-1"
              />
              <label htmlFor="subscribe" className="text-[11px] text-gray-600">
                I’d like to receive updates and offers from India Drone Academy.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#F15A24] text-white font-bold py-2 text-sm rounded-md hover:bg-[#D64A1A] transition flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-1" />
              Send Me the Guide
            </button>

            <p className="text-[10px] text-gray-500 text-center mt-1">
              We respect your privacy. No spam.
            </p>
          </form>
        </>
      ) : (
        <div className="text-center py-5">
          <div className="w-9 h-9 bg-[#26A65B] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-2">
            <CheckCircle className="w-5 h-5 text-[#26A65B]" />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-1">Success! Check Your Email</h3>
          <p className="text-sm text-gray-600 mb-2">
            Your guide has been sent to your email. Also check WhatsApp!
          </p>
          <div className="bg-[#26A65B] bg-opacity-10 rounded-md p-2.5 text-xs text-[#26A65B] font-medium">
            📱 Our counselor will contact you soon to discuss your career goals.
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadBrochureForm;
