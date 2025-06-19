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
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Pilots. Real Outcomes.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our graduates transformed their careers and are now leading successful drone operations across India.
          </p>
        </div>

        {/* Testimonials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
  {testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
    >
      {/* Profile Image */}
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
        loading="lazy"
      />

      {/* Name & Info */}
      <h4 className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</h4>
      <p className="text-gray-600 text-sm mb-1">{testimonial.role}</p>
      <p className="text-[#F15A24] text-sm font-medium mb-3">{testimonial.course}</p>

      {/* Rating Stars */}
      <div className="flex justify-center mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Review */}
      <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 px-2">
        "{testimonial.quote}"
      </blockquote>

      {/* Achievement */}
      <div className="bg-[#26A65B] bg-opacity-10 rounded-lg p-3">
        <p className="text-[#26A65B] font-bold text-xs">
          🎉 {testimonial.achievement}
        </p>
      </div>
    </div>
  ))}
</div>


        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '2500+', label: 'Students Placed', icon: Users },
              { number: '100%', label: 'Success Rate', icon: TrendingUp },
              { number: '₹6L+', label: 'Average Salary', icon: Award },
              { number: '500+', label: 'Partner Companies', icon: Users }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#F15A24] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#F15A24]" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-[#F15A24] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
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
            className="inline-flex items-center bg-[#F15A24] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Read More Success Stories
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentSuccessSnapshot;