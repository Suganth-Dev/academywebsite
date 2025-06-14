import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FinalCTAFooter: React.FC = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/apply');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917799100040?text=Hi, I need information about drone courses', '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-[#F15A24] to-[#26A65B] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Launch Your Drone Career With IDA
          </h2>
          <p className="text-xl lg:text-2xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Certified training. Real flight hours. Career-ready outcomes.
            Join the next generation of drone professionals.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <Award className="w-10 h-10 text-white mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">DGCA Certified Training</h3>
              <p className="text-orange-100 text-sm">Government-approved certification recognized nationwide</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <Users className="w-10 h-10 text-white mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Expert Instructors</h3>
              <p className="text-orange-100 text-sm">Learn from certified pilots with real industry experience</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <TrendingUp className="w-10 h-10 text-white mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Career Support</h3>
              <p className="text-orange-100 text-sm">100% job assistance with 500+ hiring partners</p>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { number: '10,000+', label: 'Graduates' },
              { number: '95%', label: 'Success Rate' },
              { number: '₹6L+', label: 'Avg. Salary' },
              { number: '5 Days', label: 'To Certification' }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">{metric.number}</div>
                <div className="text-orange-100 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button
              onClick={handleApplyClick}
              className="bg-white text-[#F15A24] font-bold px-10 py-5 rounded-lg hover:bg-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center group"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] text-white font-bold px-10 py-5 rounded-lg hover:bg-[#20B954] hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Talk to Our Team
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-orange-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Lifetime Support</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTAFooter;