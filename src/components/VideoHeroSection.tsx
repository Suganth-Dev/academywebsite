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
      <section className="relative h-[87vh] flex items-center justify-center overflow-hidden">


        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1920"
          >
            <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img 
              src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Drone training background"
              className="w-full h-full object-cover"
            />
          </video>
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

        {/* Content - Left aligned */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex items-center min-h-[80vh]">
            {/* Content - Left aligned */}
            <div className="text-left max-w-4xl">
              {/* DGCA Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                DGCA Certified Training Institute
              </div>

              {/* Main Headline - Updated SEO title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 text-left">
                India's Leading{' '}
                <span className="text-[#F15A24]">DGCA-Certified</span>{' '}
                Drone Academy
              </h1>

              {/* Powerful Career-Focused Tagline */}
              <div className="mb-6 md:mb-8">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#26A65B] mb-2 leading-tight">
                  Building Careers That 
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
                  Transform your future with cutting-edge drone technology training
                </p>
              </div>

              {/* Trust Indicators - Left aligned */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8 md:mb-12">
                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 mr-2 text-[#26A65B]" />
                  <span className="font-medium text-sm sm:text-base">2500+ Careers Launched</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 mr-2 text-[#26A65B]" />
                  <span className="font-medium text-sm sm:text-base">100% Success Rate</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Award className="w-5 h-5 mr-2 text-[#26A65B]" />
                  <span className="font-medium text-sm sm:text-base">DGCA Approved</span>
                </div>
              </div>

              {/* CTA Buttons - Updated button text */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-lg">
                <button
                  onClick={handleApplyNow}
                  className="bg-[#F15A24] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center text-sm sm:text-base"
                >
                  Apply Now
                </button>
                <button
                  onClick={handleWatchDemo}
                  className="bg-white text-[#F15A24] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-white hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center text-sm sm:text-base"
                >
                  Watch Demo
                </button>
              </div>
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