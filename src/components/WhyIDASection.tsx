import React from 'react';
import { Award, Users, Plane, Briefcase, CheckCircle, Target, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhyIDASection: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Award,
      title: 'DGCA-Approved Curriculum',
      description: 'Government-recognized certification that employers trust nationwide.',
      color: 'text-[#26A65B]',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Real-Time Simulator Access',
      description: 'Train on India\'s most advanced drone simulators with realistic scenarios.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Plane,
      title: '100% Placement Support',
      description: 'Comprehensive job assistance with our network of 500+ hiring partners.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Briefcase,
      title: 'Industry Tie-ups & Certifications',
      description: 'Direct partnerships with leading companies for immediate job opportunities.',
      color: 'text-[#F15A24]',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Target,
      title: 'Industrial-Based Training',
      description: 'Hands-on sessions aligned with real-time industrial drone use-cases and challenges.',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Zap,
      title: 'AI & GIS Integration',
      description: 'Master next-gen drone operations with AI and Geographic Information Systems.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];


  const handleApplyClick = () => {
    navigate('/apply');
  };

  const handleLearnMoreClick = () => {
    navigate('/why-ida');
  };

  return (
<section className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
        Why Choose India Drone Academy?
      </h2>
      <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
        India Drone Academy is a DGCA-certified training institute offering drone pilot certification, simulator access, and placement guidance.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      {/* Benefits Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg p-3 flex flex-col justify-start shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 border border-gray-100"
            >
              <div className={`w-9 h-9 ${benefit.bgColor} rounded-md flex items-center justify-center mb-2`}>
                <IconComponent className={`w-5 h-5 ${benefit.color}`} />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-tight">{benefit.title}</h3>
              <p className="text-xs text-gray-600 leading-snug">{benefit.description}</p>
            </div>
          );
        })}
      </div>

      {/* Visual Content */}
      <div className="relative">
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Students learning drone operations at India Drone Academy"
            className="w-full h-[360px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="text-sm font-bold mb-1">Professional Training Environment</h4>
            <p className="text-xs text-white/90">State-of-the-art facilities with latest equipment</p>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow p-3">
          <div className="text-xl font-bold text-[#26A65B] mb-1">100%</div>
          <div className="text-sm text-gray-600 font-medium">Success Rate</div>
        </div>
        <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow p-3">
          <div className="text-xl font-bold text-[#F15A24] mb-1">2.5K+</div>
          <div className="text-sm text-gray-600 font-medium">Graduates</div>
        </div>
        <div className="absolute top-1/2 -left-6 bg-white rounded-lg shadow p-2">
          <div className="flex items-center">
            <Shield className="w-4 h-4 text-[#26A65B] mr-1" />
            <div>
              <div className="text-xs font-bold text-gray-900">DGCA</div>
              <div className="text-[10px] text-gray-600">Approved</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-12">
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 max-w-4xl mx-auto border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Ready to Start Your Drone Career?
        </h3>
        <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of successful pilots who chose IDA. Government-certified training with job support.
        </p>

        {/* Key Benefits */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-xs text-gray-700 font-medium">
          <div className="flex items-center justify-center gap-1">
            <CheckCircle className="w-4 h-4 text-[#26A65B]" />
            5-Day Certification
          </div>
          <div className="flex items-center justify-center gap-1">
            <CheckCircle className="w-4 h-4 text-[#26A65B]" />
            Real Flight Training
          </div>
          <div className="flex items-center justify-center gap-1">
            <CheckCircle className="w-4 h-4 text-[#26A65B]" />
            Job Assistance
          </div>
          <div className="flex items-center justify-center gap-1">
            <CheckCircle className="w-4 h-4 text-[#26A65B]" />
            Simulator Access
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleApplyClick}
            className="bg-[#F15A24] text-white font-bold px-6 py-3 rounded-md hover:bg-[#D64A1A] transition-all duration-200"
          >
            Apply Now
          </button>
          <button
            onClick={handleLearnMoreClick}
            className="bg-gray-100 text-gray-900 font-bold px-6 py-3 rounded-md hover:bg-gray-200 transition-all duration-200"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default WhyIDASection;