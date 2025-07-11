import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FinalCTAFooter: React.FC = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/apply');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919188883344?text=Hi, I need information about drone courses', '_blank');
  };

  return (
    <section className="py-10 lg:py-16 bg-gradient-to-r from-[#F15A24] to-[#26A65B] text-white relative overflow-hidden">
  {/* Background Blur Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-10 left-20 w-24 h-24 bg-white rounded-full blur-3xl"></div>
    <div className="absolute bottom-10 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">
        Launch Your Drone Career With IDA
      </h2>
      <p className="text-base lg:text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
        Certified training. Real flight hours. Career-ready outcomes.
        Join the next generation of drone professionals.
      </p>

      {/* Key Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
        {[
          {
            icon: <Award className="w-8 h-8 text-white mx-auto mb-2" />,
            title: 'DGCA Certified Training',
            desc: 'Government-approved certification recognized nationwide',
          },
          {
            icon: <Users className="w-8 h-8 text-white mx-auto mb-2" />,
            title: 'Expert Instructors',
            desc: 'Learn from certified pilots with real industry experience',
          },
          {
            icon: <TrendingUp className="w-8 h-8 text-white mx-auto mb-2" />,
            title: 'Career Support',
            desc: '100% job assistance with 500+ hiring partners',
          }
        ].map((item, i) => (
          <div key={i} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 border border-white border-opacity-20 text-sm">
            {item.icon}
            <h3 className="font-semibold text-base mb-1">{item.title}</h3>
            <p className="text-orange-100 text-xs">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Success Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { number: '2500+', label: 'Graduates' },
          { number: '100%', label: 'Success Rate' },
          { number: '₹6L+', label: 'Avg. Salary' },
          { number: '5 Days', label: 'To Certification' }
        ].map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl lg:text-3xl font-bold mb-1">{metric.number}</div>
            <div className="text-orange-100 text-xs">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <button
          onClick={handleApplyClick}
          className="bg-white text-[#F15A24] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition duration-200 text-sm flex items-center justify-center group"
        >
          Apply Now
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#20B954] hover:shadow-xl transform hover:-translate-y-1 transition duration-200 text-sm flex items-center justify-center"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Talk to Our Team
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-orange-100 text-xs">
        <div className="flex items-center">
          <CheckCircle className="w-4 h-4 mr-2" />
          <span>No Hidden Fees</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="w-4 h-4 mr-2" />
          <span>Money Back Guarantee</span>
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default FinalCTAFooter;