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
<section className="-mt-6 pt-4 pb-16 lg:pt-6 lg:pb-24 bg-white">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose India Drone Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            India Drone Academy is a DGCA-certified training institute offering comprehensive drone pilot certification, simulator access, and placement guidance. Our mission is to build the next generation of skilled UAV professionals across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                
                  <div
  key={index}
  className="bg-white rounded-xl p-3 h-[230px] flex flex-col justify-start shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100"
>
  <div className={`w-11 h-11 ${benefit.bgColor} rounded-lg flex items-center justify-center mb-3`}>
    <IconComponent className={`w-6 h-6 ${benefit.color}`} />
  </div>
  <h3 className="text-base font-semibold text-gray-1000 mb-2">{benefit.title}</h3>
  <p className="text-sm text-gray-700 leading-tight">{benefit.description}</p>
</div>

              );
            })}
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning drone operations at India Drone Academy"
                className="w-full  h-[450px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Professional Training Environment</h4>
                <p className="text-white/90">State-of-the-art facilities with latest equipment</p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl font-bold text-[#26A65B] mb-2">100%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl font-bold text-[#F15A24] mb-2">2.5K+</div>
              <div className="text-gray-600 font-medium">Graduates</div>
            </div>

            {/* Additional floating element */}
            <div className="absolute top-1/2 -left-8 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-[#26A65B] mr-2" />
                <div>
                  <div className="text-lg font-bold text-gray-900">DGCA</div>
                  <div className="text-sm text-gray-600">Approved</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Drone Career?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful pilots who chose IDA to launch their drone careers. 
              Government-certified training with guaranteed job support.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#26A65B] mr-2" />
                <span className="font-medium text-gray-700">5-Day Certification</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#26A65B] mr-2" />
                <span className="font-medium text-gray-700">Real Flight Training</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#26A65B] mr-2" />
                <span className="font-medium text-gray-700">Job Assistance</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#26A65B] mr-2" />
                <span className="font-medium text-gray-700">Simulator Access</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleApplyClick}
                className="bg-[#F15A24] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Apply Now
              </button>
              <button
                onClick={handleLearnMoreClick}
                className="bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-200"
              >
                Learn More About IDA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIDASection;