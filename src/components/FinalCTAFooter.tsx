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
    <section className="py-6 lg:py-10 bg-gradient-to-br from-orange-600 to-orange-400 text-white relative overflow-hidden">

      {/* Optional Faded Circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-20 h-20 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3 leading-tight">
            Launch Your Drone Career With IDA
          </h2>
          <p className="text-sm lg:text-base text-white mb-6 max-w-2xl mx-auto leading-relaxed">
            Certified training. Real flight hours. Career-ready outcomes.
            Join the next generation of drone professionals.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 max-w-4xl mx-auto text-xs">
            {[
              {
                icon: <Award className="w-6 h-6 text-white mx-auto mb-1" />,
                title: 'DGCA Certified Training',
                desc: 'Government-approved certification recognized nationwide',
              },
              {
                icon: <Users className="w-6 h-6 text-white mx-auto mb-1" />,
                title: 'Expert Instructors',
                desc: 'Learn from certified pilots with real industry experience',
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white mx-auto mb-1" />,
                title: 'Career Support',
                desc: '100% job assistance with 500+ hiring partners',
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-4 border border-white/20">
                {item.icon}
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-white text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6 text-center">
            {[
              { number: '2500+', label: 'Graduates' },
              { number: '100%', label: 'Success Rate' },
              { number: '₹6L+', label: 'Avg. Salary' },
              { number: '5 Days', label: 'To Certification' }
            ].map((metric, index) => (
              <div key={index}>
                <div className="text-xl lg:text-2xl font-bold mb-1">{metric.number}</div>
                <div className="text-white text-[11px]">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <button
              onClick={handleApplyClick}
              className="bg-white text-[#F15A24] font-semibold px-5 py-2 rounded-md hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-1 transition duration-200 text-sm flex items-center justify-center group"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#20B954] hover:shadow-lg transform hover:-translate-y-1 transition duration-200 text-sm flex items-center justify-center"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Talk to Our Team
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white text-[11px]">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              <span>Money Back Guarantee</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTAFooter;
