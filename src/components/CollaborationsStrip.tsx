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
    <section className="py-10 lg:py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
        Our Trusted Collaborators
      </h2>
      <p className="text-sm text-gray-600 max-w-2xl mx-auto">
        Recognized by government bodies, trusted by industry leaders, and partnered with top organizations.
      </p>
    </div>

    {/* Auto-scrolling Strip */}
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      
      <div className="flex animate-scroll space-x-6 py-4 justify-center">
        {scrollingLogos.map((collaborator, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200 min-w-[160px] text-center group"
          >
            <div className="w-12 h-12 bg-[#F15A24] bg-opacity-10 rounded-md mx-auto mb-3 flex items-center justify-center group-hover:bg-opacity-20 transition">
              <Award className="w-6 h-6 text-[#F15A24]" />
            </div>
            <h3 className="font-semibold text-gray-900 text-xs mb-0.5">{collaborator.name}</h3>
            <p className="text-[10px] text-gray-600">{collaborator.type}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Trust Indicators */}
    <div className="mt-12 bg-white rounded-xl p-6 lg:p-8 shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Left Info */}
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
            Government Recognition & Industry Trust
          </h3>
          <div className="space-y-3 text-sm">
            {[
              {
                title: 'DGCA Approved Training Center',
                desc: 'Official certification recognized across India'
              },
              {
                title: 'Industry Partnerships',
                desc: 'Direct placement opportunities with leading companies'
              },
              {
                title: 'Academic Collaborations',
                desc: 'Research partnerships with top universities'
              },
              {
                title: 'Technology Integration',
                desc: 'Latest drone technology and equipment'
              }
            ].map((item, idx) => (
              <div className="flex items-start" key={idx}>
                <div className="w-2 h-2 bg-[#26A65B] rounded-full mt-1.5 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { color: '#F15A24', value: '500+', label: 'Hiring Partners' },
            { color: '#26A65B', value: '50+', label: 'Training Centers' },
            { color: '#3B82F6', value: '15+', label: 'States Covered' },
            { color: '#8B5CF6', value: '100%', label: 'Job Assistance' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center rounded-lg p-4"
              style={{ backgroundColor: `${item.color}1A` }}
            >
              <div className="text-2xl font-bold mb-1" style={{ color: item.color }}>
                {item.value}
              </div>
              <div className="text-xs text-gray-700 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Featured Badge */}
    <div className="text-center mt-10">
      <div className="inline-flex items-center bg-[#26A65B] bg-opacity-10 text-[#26A65B] px-5 py-2 rounded-full font-semibold text-sm">
        <Star className="w-4 h-4 mr-2" />
        As Featured In Leading Industry Publications
      </div>
    </div>
  </div>

  {/* Animation Keyframes */}
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