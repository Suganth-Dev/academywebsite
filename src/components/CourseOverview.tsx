import React, { useState, useEffect } from 'react';
import { ArrowRight, Plane, Wheat, Users, Clock, ChevronLeft, ChevronRight, Settings, Camera, Wrench, Monitor, Target, Zap, Award, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseOverview: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'DGCA Small Category',
      description: 'Government-certified training for small category drones (up to 2kg)',
      duration: '5 Days',
      price: '₹45,000',
      gst: '+ 18% GST',
      icon: Plane,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['DGCA Certification', 'Theory & Practical', 'Job Assistance', 'Small Drone Operations'],
      link: '/courses/dgca-small',
      badge: 'Most Popular',
      badgeColor: 'bg-[#26A65B]',
      category: 'DGCA Certified'
    },
    {
      id: 2,
      title: 'DGCA Medium Category',
      description: 'Advanced certification for medium category drones (2-25kg)',
      duration: '5 Days',
      price: '₹65,000',
      gst: '+ 18% GST',
      icon: Plane,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Medium Drone Ops', 'Advanced Training', 'Commercial License', 'Higher Payload'],
      link: '/courses/dgca-medium',
      badge: 'Professional',
      badgeColor: 'bg-blue-600',
      category: 'DGCA Certified'
    },
    {
      id: 3,
      title: 'Small + Medium Combined',
      description: 'Complete certification package for both small and medium categories',
      duration: '8 Days',
      price: '₹75,000',
      gst: '+ 18% GST',
      icon: Award,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Dual Certification', 'Complete Training', 'Best Value', 'All Categories'],
      link: '/courses/dgca-combined',
      badge: 'Best Value',
      badgeColor: 'bg-[#F15A24]',
      category: 'DGCA Certified'
    },
    {
      id: 4,
      title: 'Agriculture Spraying',
      description: 'Specialized training for precision farming and crop spraying operations',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      icon: Wheat,
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Precision Farming', 'Spraying Techniques', 'Crop Analysis', 'Field Practice'],
      link: '/courses/agriculture-spraying',
      badge: 'For Farmers',
      badgeColor: 'bg-green-600',
      category: 'Special Courses'
    },
    {
      id: 5,
      title: 'Aerial Cinematography',
      description: 'Professional drone filming and photography for creative industries',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      icon: Camera,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Professional Filming', 'Camera Operations', 'Creative Techniques', 'Portfolio Building'],
      link: '/courses/aerial-cinematography',
      badge: 'Creative',
      badgeColor: 'bg-purple-600',
      category: 'Special Courses'
    },
    {
      id: 6,
      title: 'Women Drone Pilot Bootcamp',
      description: 'Comprehensive training program designed specifically for women',
      duration: '5 Days',
      price: '₹42,000',
      gst: '+ 18% GST',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Women-Only Batches', 'Mentorship', 'Career Guidance', 'Networking'],
      link: '/courses/women-bootcamp',
      badge: 'Women Only',
      badgeColor: 'bg-pink-600',
      category: 'Women Programs'
    },
    {
      id: 7,
      title: 'Site Asset Mapping',
      description: 'Professional mapping and inspection services for infrastructure',
      duration: '3 Days',
      price: '₹35,000',
      gst: '+ 18% GST',
      icon: Target,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['3D Mapping', 'Asset Inspection', 'Survey Techniques', 'Data Processing'],
      link: '/courses/site-mapping',
      badge: 'Professional',
      badgeColor: 'bg-blue-600',
      category: 'Special Courses'
    },
    {
      id: 8,
      title: 'Drone Assembly & Repair',
      description: 'Learn to build, troubleshoot and repair drone systems',
      duration: '3-5 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      icon: Wrench,
      image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Hardware Assembly', 'Troubleshooting', 'Repair Techniques', 'Technical Skills'],
      link: '/courses/drone-assembly',
      badge: 'Technical',
      badgeColor: 'bg-gray-600',
      category: 'Special Courses'
    },
    {
      id: 9,
      title: 'FPV Drone Training',
      description: 'First Person View drone racing and advanced maneuvering',
      duration: '3-5 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      icon: Zap,
      image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['FPV Flying', 'Racing Techniques', 'Advanced Maneuvers', 'Competition Prep'],
      link: '/courses/fpv-training',
      badge: 'Advanced',
      badgeColor: 'bg-red-600',
      category: 'Special Courses'
    },
    {
      id: 10,
      title: 'Simulator Refresher',
      description: 'Enhance your skills with 50 hours of simulator practice',
      duration: '50 Hours',
      price: '₹15,000',
      gst: '+ 18% GST',
      icon: Monitor,
      image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['50 Hours Practice', 'Skill Enhancement', 'Emergency Scenarios', 'Flexible Schedule'],
      link: '/courses/simulator-refresher',
      badge: 'Refresher',
      badgeColor: 'bg-blue-500',
      category: 'Online Training'
    },
    {
      id: 11,
      title: 'Corporate Training',
      description: 'Customized training programs for organizations and institutions',
      duration: 'Flexible',
      price: '₹25,000',
      gst: '+ 18% GST',
      icon: Building,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Custom Curriculum', 'On-site Training', 'Bulk Pricing', 'Certification'],
      link: '/courses/corporate',
      badge: 'For Organizations',
      badgeColor: 'bg-gray-700',
      category: 'Corporate'
    },
    {
      id: 12,
      title: 'Ultimate Pro Bundle',
      description: 'Complete professional package: DGCA Medium + Cinematography + Mapping',
      duration: '10 Days',
      price: '₹115,000',
      gst: '+ 18% GST',
      icon: Award,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Triple Certification', 'Complete Package', 'Professional Level', 'Career Ready'],
      link: '/courses/ultimate-pro',
      badge: 'Ultimate Package',
      badgeColor: 'bg-gradient-to-r from-[#F15A24] to-[#26A65B]',
      category: 'Bundles'
    }
  ];

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(courses.length / cardsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleCourseClick = (link: string) => {
    navigate(link);
  };

  const handleApplyClick = () => {
    navigate('/apply');
  };

  const handleConsultationClick = () => {
    navigate('/contact');
  };

  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Our Training Programs
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Explore a wide range of drone training programs tailored to different careers and skill levels.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                 <div className="flex justify-center flex-wrap">
  {courses
    .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
    .map((course, index) => {
      const IconComponent = course.icon;
      return (
        <div
          key={course.id}
          className={`w-[300px] max-w-full bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer text-xs flex flex-col h-full ${
            index !== 0 ? 'ml-6' : ''
          }`}
          onClick={() => handleCourseClick(course.link)}
        >
          {/* Course Image */}
          <div className="relative h-32 overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            {/* Badge */}
            <div
              className={`absolute top-2 left-2 ${course.badgeColor} text-white px-1.5 py-0.5 rounded-full text-[10px] font-medium`}
            >
              {course.badge}
            </div>

            {/* Icon */}
            <div className="absolute top-2 right-2 bg-white bg-opacity-90 p-1 rounded-full">
              <IconComponent className="w-3.5 h-3.5 text-[#26A65B]" />
            </div>

            {/* Price */}
            <div className="absolute bottom-2 right-2 bg-white bg-opacity-90 px-2 py-0.5 rounded-full">
              <div className="text-[#F15A24] font-bold text-[10px]">{course.price}</div>
              <div className="text-gray-600 text-[8px]">{course.gst}</div>
            </div>
          </div>

          {/* Course Content */}
          <div className="p-3 flex flex-col flex-grow">
            <div className="text-[9px] text-[#F15A24] font-bold mb-1">{course.category}</div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-[#F15A24] transition-colors duration-200">
              {course.title}
            </h3>
            <p className="text-gray-600 mb-2 line-clamp-2 text-[11px]">{course.description}</p>

            {/* Duration */}
            <div className="flex items-center mb-2">
              <Clock className="w-3 h-3 text-[#F15A24] mr-1" />
              <span className="text-[11px] font-medium text-gray-700">{course.duration}</span>
            </div>

            {/* Features */}
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {course.features.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-1 py-0.5 rounded text-[9px]"
                  >
                    {feature}
                  </span>
                ))}
                {course.features.length > 2 && (
                  <span className="text-gray-500 text-[9px]">
                    +{course.features.length - 2}
                  </span>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-2 mt-auto pt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCourseClick(course.link);
                }}
                className="flex-1 bg-[#F15A24] hover:bg-[#D64A1A] text-white font-bold py-1 px-2 rounded-md transition-all duration-200 text-[11px]"
              >
                Explore
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleApplyClick();
                }}
                className="flex-1 bg-white border border-[#F15A24] text-[#F15A24] hover:bg-[#F15A24] hover:text-white font-bold py-1 px-2 rounded-md transition-all duration-200 text-[11px]"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      );
    })}
</div>

                </div>
              ))}

            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-1.5 hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Previous courses"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-1.5 hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Next courses"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-5 space-x-1.5">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentSlide
                    ? 'bg-[#F15A24] scale-105'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-[11px] px-3 py-1 rounded-full transition-colors duration-200 ${isAutoPlaying
                  ? 'bg-[#F15A24] text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-3 text-sm">
            Not sure which program is right for you?
          </p>
          <button
            onClick={handleConsultationClick}
            className="inline-flex items-center bg-[#26A65B] text-white font-bold px-5 py-2.5 rounded-md hover:bg-[#228B50] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>

  );
};

export default CourseOverview;