import React from 'react';
import { Award, Star } from 'lucide-react';

const CollaborationsStrip: React.FC = () => {
  const collaborators = [
    { name: 'DGCA', type: 'Government Body' },
    { name: 'Drone TV', type: 'Media Partner' },
    { name: 'Corteva Agriscience', type: 'Industry Leader' },
    { name: 'Drongo Drones', type: 'Technology Partner' },
    { name: 'Woxon University', type: 'Academic Partner' },
    { name: 'TechMahindra', type: 'Corporate Partner' },
    { name: 'Mahindra Group', type: 'Industry Partner' },
    { name: 'Reliance Industries', type: 'Corporate Partner' }
  ];

  // Duplicate the array for seamless scrolling
  const scrollingLogos = [...collaborators, ...collaborators];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Trusted Collaborators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized by government bodies, trusted by industry leaders, and partnered with top organizations.
          </p>
        </div>

        {/* Auto-scrolling Strip */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="flex animate-scroll space-x-12 py-8 justify-center">
            {scrollingLogos.map((collaborator, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[200px] text-center group"
              >
                <div className="w-16 h-16 bg-[#F15A24] bg-opacity-10 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-[#F15A24] group-hover:bg-opacity-20 transition-colors duration-300">
                  <Award className="w-8 h-8 text-[#F15A24]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">
                  {collaborator.name}
                </h3>
                <p className="text-xs text-gray-600">
                  {collaborator.type}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Government Recognition & Industry Trust
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#26A65B] rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">DGCA Approved Training Center</h4>
                    <p className="text-gray-600">Official certification recognized across India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#26A65B] rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Industry Partnerships</h4>
                    <p className="text-gray-600">Direct placement opportunities with leading companies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#26A65B] rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Academic Collaborations</h4>
                    <p className="text-gray-600">Research partnerships with top universities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#26A65B] rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Technology Integration</h4>
                    <p className="text-gray-600">Latest drone technology and equipment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-[#F15A24] bg-opacity-10 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#F15A24] mb-2">500+</div>
                <div className="text-gray-700 font-medium">Hiring Partners</div>
              </div>
              <div className="text-center bg-[#26A65B] bg-opacity-10 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#26A65B] mb-2">50+</div>
                <div className="text-gray-700 font-medium">Training Centers</div>
              </div>
              <div className="text-center bg-blue-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-700 font-medium">States Covered</div>
              </div>
              <div className="text-center bg-purple-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Job Assistance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-[#26A65B] bg-opacity-10 text-[#26A65B] px-6 py-3 rounded-full font-bold">
            <Star className="w-5 h-5 mr-2" />
            As Featured In Leading Industry Publications
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CollaborationsStrip;