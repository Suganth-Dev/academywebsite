import React from 'react';
import { Star, Quote, ArrowRight, TrendingUp, Award, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentSuccessSnapshot: React.FC = () => {
  const navigate = useNavigate();

const testimonials = [
  {
    id: 1,
    name: 'Vipin Kumar',
    role: 'Commercial Drone Pilot',
    course: 'DGCA Pilot Training',
    location: 'Mumbai',
    image: 'vipin.jpg',
    quote:
      'The DGCA training at IDA gave me the confidence to operate drones professionally. The hands-on flying sessions and simulator access helped me master navigation and safety protocols.',
    achievement: 'Now flying drones for infrastructure inspection projects across Maharashtra',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dhondi Jugge Rishika',
    role: 'Agriculture Drone Specialist',
    course: 'Agriculture Drone Training',
    location: 'Pune',
    image: '/Rishika.jpg',
    quote:
      'IDA’s Women Drone Program opened up a whole new world for me. I gained not just skills in spraying and crop health monitoring, but also the courage to conduct training demos in rural areas.',
    achievement: 'Currently supporting women-led agri groups in drone spraying across 12 villages',
    rating: 5,
  },
  {
  id: 3,
  name: 'Satish',
  role: 'Survey & Mapping Expert',
  course: 'DGCA Pilot Training',
  location: 'Bangalore',
  image: 'satish.jpg',
  quote:
    'The outdoor training and map creation sessions at IDA helped me move from just learning GIS in theory to actually using drones for real surveying work.',
  achievement: 'Now working on urban land mapping projects using drone-GIS integration',
  rating: 5,
}

];


  const handleReadMoreClick = () => {
    navigate('/success-stories');
  };

  return (
  <section className="py-10 lg:py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
        Real Pilots. Real Outcomes.
      </h2>
      <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
        See how our graduates transformed their careers and now lead successful drone operations across India.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition duration-200 transform hover:-translate-y-0.5 text-center"
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
            loading="lazy"
          />
          <h4 className="font-bold text-gray-900 text-base mb-0.5">{testimonial.name}</h4>
          <p className="text-gray-600 text-xs mb-0.5">{testimonial.role}</p>
          <p className="text-[#F15A24] text-xs font-medium mb-2">{testimonial.course}</p>
          <div className="flex justify-center mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-gray-700 text-xs leading-snug mb-3 px-2">
            "{testimonial.quote}"
          </blockquote>
          <div className="bg-[#26A65B] bg-opacity-10 rounded-md p-2">
            <p className="text-[#26A65B] font-bold text-[10px]">
              🎉 {testimonial.achievement}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Stats Section */}
   <div className="bg-white rounded-xl p-4 lg:p-6 shadow-md mb-6">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      { number: '2500+', label: 'Students Placed', icon: Users },
      { number: '100%', label: 'Success Rate', icon: TrendingUp },
      { number: '₹2.5L-₹7.5L', label: 'Average Salary', icon: Award },
      { number: '50+', label: 'Partner Companies', icon: Users }
    ].map((stat, index) => {
      const IconComponent = stat.icon;
      return (
        <div key={index} className="text-center">
          <div className="w-9 h-9 bg-[#F15A24] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-2">
            <IconComponent className="w-5 h-5 text-[#F15A24]" />
          </div>
          <div className="text-lg font-bold text-[#F15A24] mb-0.5">
            {stat.number}
          </div>
          <div className="text-xs text-gray-600 font-medium">
            {stat.label}
          </div>
        </div>
      );
    })}
  </div>
</div>


    {/* CTA Button */}
    <div className="text-center">
      <button
        onClick={handleReadMoreClick}
        className="inline-flex items-center bg-[#F15A24] text-white font-bold px-6 py-3 rounded-md hover:bg-[#D64A1A] hover:shadow-md transform hover:-translate-y-0.5 transition duration-200 text-sm"
      >
        Read More Success Stories
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  </div>
</section>

  );
};

export default StudentSuccessSnapshot;