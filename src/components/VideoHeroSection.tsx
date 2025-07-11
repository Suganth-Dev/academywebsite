import React, { useState } from 'react';
import { Download, Award, Users, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VideoHeroSection: React.FC = () => {
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/apply');
  };

  const handleWatchDemo = () => {
    // For now, just show the brochure modal - in production this would open a video demo
    setShowBrochureModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your backend/CRM/WhatsApp
    console.log('Brochure request:', formData);
    setShowBrochureModal(false);
    setFormData({ name: '', email: '', phone: '' });
    // Trigger actual download
    alert('Brochure download will start shortly!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
<section className="relative h-[87vh] w-full overflow-hidden">
  {/* Background Video - covers full screen */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <iframe
    src="https://www.youtube.com/embed/eud60W_tjOQ?autoplay=1&mute=1&controls=0&loop=1&playlist=eud60W_tjOQ"

      className="w-[130vw] h-full object-cover transform -translate-x-1/6"
      title="Drone Background Video"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>

    {/* Gradient from left to right */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-[6vh]">
    <div className="max-w-2xl text-white">
      {/* Badge */}
      <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-medium mb-8">
        <Award className="w-4 h-4 mr-2" />
        India’s Premier Drone Training Institute
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-snug">
        India's Leading<br />
        <span className="text-[#F15A24]">DGCA-<br />Certified</span><br />
        Drone Academy
      </h1>

      {/* Trust Indicators */}
      <div className="flex flex-wrap gap-x-6 gap-y-4 text-sm text-gray-300 mb-8">
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-2 text-[#26A65B]" />
          2500+ Careers Launched
        </div>
        <div className="flex items-center">
          <CheckCircle className="w-4 h-4 mr-2 text-[#26A65B]" />
          100% Success Rate
        </div>
        <div className="w-full flex items-center">
          <Award className="w-4 h-4 mr-2 text-[#26A65B]" />
          Hands-on Drone Training
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={handleApplyNow}
          className="bg-[#F15A24] text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-[#D64A1A] transition"
        >
          Apply Now
        </button>
        <button
          onClick={handleWatchDemo}
          className="bg-white text-[#F15A24] text-sm font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Watch Demo
        </button>
      </div>
    </div>
  </div>
</section>





      {/* Brochure Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowBrochureModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#F15A24] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-[#F15A24]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Download Course Brochure
              </h3>
              <p className="text-gray-600">
                Get detailed information about all our programs
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Full Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-[#F15A24] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#D64A1A] transition-colors duration-200"
              >
                Download Now
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              We respect your privacy. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoHeroSection;