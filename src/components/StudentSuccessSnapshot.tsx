import React from 'react';
import { Star, Quote, ArrowRight, TrendingUp, Award, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentSuccessSnapshot: React.FC = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Commercial Drone Pilot',
      course: 'DGCA Pilot Training',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'IDA transformed my career completely. From a mechanical engineer to a certified drone pilot earning 6 figures. The training was comprehensive and the placement support was exceptional.',
      achievement: 'Now earning ₹8L+ annually',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Agriculture Drone Specialist',
      course: 'Agriculture Drone Training',
      location: 'Pune',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'The Women Drone Program gave me confidence and skills to start my own agriculture drone service. I\'m now helping farmers across Maharashtra with precision agriculture.',
      achievement: 'Started own drone service company',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Survey & Mapping Expert',
      course: 'DGCA Pilot Training',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'The practical training at IDA was outstanding. Real-world projects and industry connections helped me land a job at a top surveying company within 2 weeks of certification.',
      achievement: 'Placed in 2 weeks after certification',
      rating: 5
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
            className="w-12 h-12 rounded-full object-cover mx-auto mb-3"
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
      { number: '₹6L+', label: 'Average Salary', icon: Award },
      { number: '500+', label: 'Partner Companies', icon: Users }
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