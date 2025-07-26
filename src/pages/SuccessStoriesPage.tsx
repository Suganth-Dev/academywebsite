import React, { useState, useEffect } from 'react';
import {
  Play,
  Star,
  Quote,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  TrendingUp,
  MapPin,
  Calendar,
  Briefcase,
  Filter,
  Upload,
  Mail,
  User,
  MessageSquare,
  Image as ImageIcon,
  CheckCircle,
  Heart,
  Share2,
  Instagram,
  Youtube,
  Linkedin,
  Eye,
  Clock,
  Target,
  Zap,
  X
} from 'lucide-react';

const SuccessStoriesPage: React.FC = () => {
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [visibleStories, setVisibleStories] = useState(6);
  const [currentSpotlight, setCurrentSpotlight] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    testimonial: ''
  });

  // Auto-rotate spotlight stories

  const videoTestimonials = [
    {
      id: 1,
      name: 'Sherya Reddy',
      role: 'Commercial Drone Pilot',
      course: 'DGCA Pilot Training',
      location: 'Hyderabad',
      videoUrl: 'https://www.youtube.com/embed/YeJaTI32lpQ', // Embedded URL for video
      caption: 'From zero to licensed in 5 days — leveraging my CSE AIML background for precision in drone technology.',
      achievement: 'Now earning ₹8L+ annually and applying AI/ML in drone operations for smarter solutions.',
      duration: '2:30',
      views: '12.5K'
    },

    {
      id: 2,
      name: 'Varshita',
      role: 'Agriculture Drone Specialist',
      course: 'Agriculture Drone Training',
      location: 'Hyderabad',
      videoUrl: 'https://www.youtube.com/embed/KPFG-npNnpA', // Updated to use embedded URL
      caption: 'India Drone Academy opened new doors for me, providing a fresh perspective and hands-on experience through internship and simulation labs.',
      achievement: 'Gained invaluable exposure to drone technology, leading to the launch of my own drone service company.',
      duration: '3:15',
      views: '8.2K'
    },

    {
      id: 3,
      name: 'Spandana Sripada',
      role: 'Survey & Mapping Expert',
      course: 'DGCA Pilot Training',
      location: 'Hyderabad',
      videoUrl: 'https://www.youtube.com/embed/wQ6cbWk3N4k', // Updated to use embedded URL
      caption: 'From gaining theoretical and practical drone knowledge to discovering a promising career path.',
      achievement: 'Placed in 2 weeks after certification, with a clear plan to work with drones in the future.',
      duration: '2:45',
      views: '15.1K'
    }

  ];


  const spotlightStories = [
    {
      id: 1,
      name: 'Captain Meera Reddy',
      role: 'Chief Drone Pilot at TechMahindra',
      course: 'DGCA Pilot Training',
      location: 'Hyderabad',
      batch: 'March 2023',
      quote:
        "IDA’s drone training gave me the hands-on experience and certification I needed to stand out in the job market. The program enhanced my technical skills, taught real-world drone operations, and helped me secure a role leading drone projects at a top company.",
      currentStatus: 'Leading a team of 15 drone pilots across India',
      achievement: 'Promoted to Chief Pilot in 8 months',
      salaryIncrease: '300%',
      testimonialVideo: 'https://www.youtube.com/embed/1W0Rwl7ZUtk',
    },
    {
      id: 2,
      name: 'Sneha Joshi',
      role: 'Celebrity Drone Photographer',
      course: 'DGCA Pilot Training',
      location: 'Mumbai',
      batch: 'February 2023',
      quote:
       "IDA’s drone training transformed my career by bridging my technical background with real-world applications. The hands-on learning and certification gave me industry recognition and connections, helping me land a role managing drone operations and contributing to advanced projects at a top company.",
      currentStatus: 'Working with top Bollywood productions and celebrity events',
      achievement: 'Successfully conducted drone surveys and mapping for various academic projects.',
      salaryIncrease: '500%',
      testimonialVideo: 'https://www.youtube.com/embed/ms3c5cLHSRA',
    },
  ];


  const successStories = [
    {
      id: 1,
      name: 'Vipin Kumar',
      role: 'Commercial Drone Pilot',
      course: 'DGCA Pilot Training',
      batch: 'March 2024',
      location: 'Mumbai',
      image: 'vipin.jpg',
      quote: 'The DGCA training at IDA gave me the confidence to operate drones professionally. The hands-on flying sessions and simulator access helped me master navigation and safety protocols.',
      achievement: 'Now flying drones for infrastructure inspection projects across Maharashtra',
      Class: 'Career Switch',
      rating: 5
    },
    {
      id: 2,
      name: 'Dhondi Jugge Rishika',
      role: 'Agriculture Drone Specialist',
      course: 'Agriculture Drone Training',
      batch: 'February 2024',
      location: 'Pune',
      image: '/Rishika.jpg',
      quote: 'IDA’s Women Drone Program opened up a whole new world for me. I gained not just skills in spraying and crop health monitoring, but also the courage to conduct training demos in rural areas.',
      achievement: 'Currently supporting women-led agri groups in drone spraying across 12 villages',
      Class: 'Entrepreneurship',
      rating: 5
    },
    {
      id: 3,
      name: 'Satish',
      role: 'Survey & Mapping Expert',
      course: 'DGCA Pilot Training',
      batch: 'January 2024',
      location: 'Bangalore',
      image: 'satish.jpg',
      quote: 'The outdoor training and map creation sessions at IDA helped me move from just learning GIS in theory to actually using drones for real surveying work.',
      achievement: 'Now working on urban land mapping projects using drone-GIS integration',
      Class: 'Quick Placement',
      rating: 5
    },
    {
      id: 4,
      name: 'N.Divya',
      role: 'Drone Instructor',
      course: 'Instructor Development Program',
      batch: 'December 2023',
      location: 'Hyderabad',
      image: '/N.Divya.jpg',
      quote: 'IDA transformed me from a drone learner to a certified instructor. The structured curriculum and simulator training made me confident to teach others.',
      achievement: 'Now conducting drone training sessions in Telangana RPTOs',
      Class: 'Women Empowerment',
      rating: 5
    },
    {
      id: 5,
      name: 'Mahesh',
      role: 'Mining Surveyor',
      course: 'Drone Mapping for Mining',
      batch: 'November 2023',
      location: 'Chennai',
      image: '/mahesh.jpg',
      quote: 'IDA’s mapping course helped me automate volume calculations for mining projects. The field sessions gave me practical exposure.',
      achievement: 'Deployed drone mapping in 3 major mining zones across Tamil Nadu',
      Class: 'Agriculture',
      rating: 5
    },
    {
      id: 6,
      name: 'Siddenki Udaya Sree',
      role: 'Student Trainee',
      course: 'Drone Summer Bootcamp',
      batch: 'July 2023',
      location: 'Lucknow',
      image: '/udaya.jpg',
      quote: 'The summer drone bootcamp was amazing! We learned about components, safety, and even flew real drones in the college ground.',
      achievement: 'Presented drone demo at inter-college tech fest',
      Class: 'Career Growth',
      rating: 5
    }
  ];


  const reviewWall = [
    {
      id: 1,
      platform: 'Google',
      name: 'Rajesh K.',
      rating: 5,
      comment: 'Best drone training institute in India! Practical approach and excellent job support.',
      verified: true
    },
    {
      id: 2,
      platform: 'Instagram',
      name: 'priya_drones',
      rating: 5,
      comment: 'IDA changed my life! From zero to drone entrepreneur in 6 months. 🚁✨',
      verified: true
    },
    {
      id: 3,
      platform: 'LinkedIn',
      name: 'Amit Patel',
      rating: 5,
      comment: 'Professional training with real industry connections. Highly recommended!',
      verified: true
    },
    {
      id: 4,
      platform: 'Google',
      name: 'Meera R.',
      rating: 5,
      comment: 'Women-friendly environment and supportive instructors. Excellent experience!',
      verified: true
    },
    {
      id: 5,
      platform: 'Instagram',
      name: 'kiran_agridrones',
      rating: 5,
      comment: 'Agriculture program is amazing! Now helping farmers with precision farming. 🌾',
      verified: true
    },
    {
      id: 6,
      platform: 'LinkedIn',
      name: 'Deepak Verma',
      rating: 5,
      comment: 'From student to instructor - IDA provides complete career transformation.',
      verified: true
    }
  ];

  const filters = ['All', 'Career Switch', 'Entrepreneurship', 'Women Empowerment', 'Agriculture', 'Quick Placement'];

  const filteredStories = activeFilter === 'All'
    ? successStories
    : successStories.filter(story => story.Class === activeFilter);

  const nextVideoSlide = () => {
    setCurrentVideoSlide((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideoSlide = () => {
    setCurrentVideoSlide((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Story submission:', formData);
    setShowSubmissionForm(false);
    setFormData({ name: '', email: '', course: '', testimonial: '' });
  };

  const loadMoreStories = () => {
    setVisibleStories(prev => prev + 3);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}


      {/* Hero Section - Compressed */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F15A24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#26A65B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Pilot Journeys That{' '}
              <span className="text-[#F15A24]">Inspire</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Real stories, real achievements, real transformations from certified drone pilots.
            </p>

            {/* Key Stats - Compressed */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { number: '2500+', label: 'Success Stories' },
                { number: '95%', label: 'Career Growth' },
                { number: '₹2.5L-₹7.5L', label: 'Average Salary' },
                { number: '15+', label: 'Companies Hiring' }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-2xl font-bold text-[#F15A24] mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Voices from Our Pilots
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch authentic video testimonials from graduates who transformed their careers.
            </p>
          </div>

          {/* Video Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
              >
                {videoTestimonials.map((video) => (
                  <div key={video.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl">
                      {/* Video Container */}
                      <div className="relative">
                        <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                          {/* YouTube Embedded Video */}
                          <div className="relative w-full h-64"> {/* Reduced height from h-96 to h-64 */}
                            <iframe
                              width="100%"
                              height="100%"
                              src={video.videoUrl}
                              title={video.name}
                              frameBorder="0"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="rounded-lg w-full h-full object-fill" // Ensure it fills the parent properly
                            />
                          </div>


                          {/* Video Stats */}
                          <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {video.views}
                          </div>
                          <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {video.duration}
                          </div>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{video.name}</h3>
                        <p className="text-[#F15A24] font-bold mb-1">{video.role}</p>
                        <p className="text-gray-600 text-sm mb-1">{video.course}</p>
                        <p className="text-gray-500 text-sm mb-4">{video.location}</p>

                        <blockquote className="text-gray-700 italic mb-4">
                          "{video.caption}"
                        </blockquote>

                        {/* Achievement */}
                        <div className="bg-[#26A65B] bg-opacity-10 rounded-lg p-3">
                          <p className="text-[#26A65B] font-bold text-sm">
                            🎉 {video.achievement}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevVideoSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 z-10"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextVideoSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 z-10"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentVideoSlide ? 'bg-[#F15A24]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Success Stories Grid - Compressed */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Certified & Soaring
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our graduates who've transformed their careers and are now leading in their fields.
            </p>
          </div>

          {/* Filters - Compressed */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <div className="flex items-center mr-3 mb-2">
              <Filter className="w-4 h-4 mr-2 text-gray-600" />
              <span className="text-sm text-gray-700 font-medium">Filter:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeFilter === filter
                  ? 'bg-[#F15A24] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Stories Grid - Compressed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.slice(0, visibleStories).map((story, index) => (
              <div
                key={story.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Story Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-contain"  // Use object-contain to keep the face visible
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Class Badge */}
                  <div className="absolute top-3 left-3 bg-[#F15A24] text-white px-2 py-1 rounded-full text-xs font-medium">
                    {story.Class}
                  </div>

                  {/* Name Overlay */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-lg font-bold">{story.name}</h3>
                    <p className="text-orange-200 text-sm">{story.role}</p>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-4">
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-3 text-sm leading-relaxed">
                    "{story.quote}"
                  </blockquote>

                  {/* Course Info */}
                  <div className="text-xs text-gray-600 mb-3">
                    <p className="font-medium">{story.course}</p>
                    <p>{story.batch} • {story.location}</p>
                  </div>

                  {/* Achievement */}
                  <div className="bg-[#26A65B] bg-opacity-10 rounded-lg p-2">
                    <p className="text-[#26A65B] font-bold text-xs">
                      🏆 {story.achievement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleStories < filteredStories.length && (
            <div className="text-center mt-6">
              <button
                onClick={loadMoreStories}
                className="bg-[#F15A24] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                View More Stories
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Spotlight Story Slider - Compressed */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              IDA Graduate Spotlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In-depth stories of transformation, featuring our most inspiring graduates.
            </p>
          </div>

          {/* Spotlight Slider */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSpotlight * 100}%)` }}
              >
                {spotlightStories.map((story) => (
                  <div key={story.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-xl">
                      {/* Video Container */}
                      <div className="relative">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                          {/* Video Iframe */}
                          {story.testimonialVideo && (
                            <div className="w-full h-[300px]"> {/* Adjusted height from 500px to 300px */}
                              <iframe
                                src={story.testimonialVideo}
                                title={`Testimonial video of ${story.name}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-lg"
                              />
                            </div>

                          )}
                        </div>

                        {/* Floating Stats */}

                      </div>

                      {/* Story Content */}
                      <div className="flex flex-col justify-center">
                        <Quote className="w-10 h-10 text-[#F15A24] mb-4" />

                        <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                          "{story.quote}"
                        </blockquote>

                        {/* Author Info */}


                        {/* Current Status */}

                        {/* Achievement Highlight */}
                        <div className="bg-[#26A65B] bg-opacity-10 rounded-lg p-3">
                          <p className="text-[#26A65B] font-bold text-sm">
                            🏆 {story.achievement}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={() => setCurrentSpotlight((prev) => (prev - 1 + spotlightStories.length) % spotlightStories.length)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 z-10"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => setCurrentSpotlight((prev) => (prev + 1) % spotlightStories.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 z-10"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {spotlightStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSpotlight(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSpotlight ? 'bg-[#F15A24] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>







      {/* Metrics & Stats - Compressed */}
      <section className="py-6 lg:py-10 bg-gradient-to-br from-orange-600 to-orange-400 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Success by the Numbers
            </h2>
            <p className="text-lg text-orange-100">
              Real metrics from our graduate community
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '2,500+', label: 'Pilots Trained', icon: Users },
              { number: '95%', label: 'Course Satisfaction', icon: Star },
              { number: '15+', label: 'States Covered', icon: MapPin },
              { number: '500+', label: 'Partner Companies', icon: Briefcase }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-orange-100 font-medium text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Review Wall - Compressed */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What They're Saying
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Authentic reviews from across social media platforms and review sites.
            </p>
          </div>

          {/* Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewWall.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Platform Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    {review.platform === 'Google' && (
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white font-bold text-xs">G</span>
                      </div>
                    )}
                    {review.platform === 'Instagram' && (
                      <Instagram className="w-6 h-6 text-pink-500 mr-2" />
                    )}
                    {review.platform === 'LinkedIn' && (
                      <Linkedin className="w-6 h-6 text-blue-600 mr-2" />
                    )}
                    <span className="font-bold text-gray-900 text-sm">{review.platform}</span>
                  </div>
                  {review.verified && (
                    <div className="bg-[#26A65B] bg-opacity-10 text-[#26A65B] px-2 py-1 rounded-full text-xs font-bold">
                      Verified
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 leading-relaxed mb-3 text-sm">"{review.comment}"</p>

                {/* Author */}
                <p className="text-gray-500 font-medium text-sm">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story - Compressed */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Are You a Proud IDA Graduate?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Share your transformation journey and inspire future students to pursue their drone career dreams.</p>
          </div>

          {!showSubmissionForm ? (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#F15A24] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#F15A24]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Submit Your Photo and Feedback to Be Featured</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">Join our success story showcase and help inspire the next generation of drone pilots.</p>
              <button onClick={() => setShowSubmissionForm(true)} className="bg-[#F15A24] text-white font-bold px-4 py-2 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center text-sm">
                <Upload className="w-4 h-4 mr-2" />
                Submit My Story
              </button>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Share Your Success Story</h3>
                <button onClick={() => setShowSubmissionForm(false)} className="text-gray-500 hover:text-gray-700 p-2">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200" placeholder="Your full name" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200" placeholder="your.email@example.com" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Course Completed *</label>
                  <div className="relative">
                    <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select id="course" name="course" value={formData.course} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200">
                      <option value="">Select your course</option>
                      <option value="DGCA Pilot Training">DGCA Pilot Training</option>
                      <option value="Agriculture Drone Training">Agriculture Drone Training</option>
                      <option value="Women Drone Program">Women Drone Program</option>
                      <option value="1-Day Special Course">1-Day Special Course</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">Your Success Story *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea id="testimonial" name="testimonial" value={formData.testimonial} onChange={handleInputChange} required rows={4} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200" placeholder="Share your transformation journey, career achievements, and how IDA helped you succeed..." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload Your Photo</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#F15A24] transition-colors duration-200 cursor-pointer">
                    <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 text-sm mb-1">Click to upload or drag and drop</p>
                    <p className="text-gray-500 text-xs">PNG, JPG up to 5MB</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="submit" className="flex-1 bg-[#F15A24] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center text-sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Submit My Story
                  </button>
                  <button type="button" onClick={() => setShowSubmissionForm(false)} className="flex-1 bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-all duration-200 text-sm">Cancel</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>



      {/* Final CTA - Compressed */}
      <section className="py-6 lg:py-10 bg-gradient-to-br from-orange-600 to-orange-400 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Drone Career?
          </h2>
          <p className="text-lg text-orange-100 mb-6 max-w-2xl mx-auto">
            Join thousands of successful pilots who chose IDA. Your success story could be next.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="bg-white text-[#F15A24] font-bold px-4 py-2 rounded-lg hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center text-sm"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/courses"
              className="bg-transparent border-2 border-white text-white font-bold px-4 py-2 rounded-lg hover:bg-white hover:text-[#F15A24] transition-all duration-200 text-sm"
            >
              View Upcoming Courses
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SuccessStoriesPage;