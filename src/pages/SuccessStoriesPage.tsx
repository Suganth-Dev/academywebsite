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
  const [visibleStories, setVisibleStories] = useState(9);
  const [currentSpotlight, setCurrentSpotlight] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    testimonial: ''
  });

  // Auto-rotate spotlight stories
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpotlight((prev) => (prev + 1) % spotlightStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const videoTestimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Commercial Drone Pilot',
      course: 'DGCA Pilot Training',
      location: 'Mumbai',
      thumbnail: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      caption: 'From zero to licensed in 5 days',
      achievement: 'Now earning ₹8L+ annually',
      duration: '2:30',
      views: '12.5K'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Agriculture Drone Specialist',
      course: 'Agriculture Drone Training',
      location: 'Pune',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      caption: 'Empowering farmers with technology',
      achievement: 'Started own drone service company',
      duration: '3:15',
      views: '8.2K'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Survey & Mapping Expert',
      course: 'DGCA Pilot Training',
      location: 'Bangalore',
      thumbnail: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      caption: 'Career transformation story',
      achievement: 'Placed in 2 weeks after certification',
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
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'IDA didn\'t just teach me to fly drones—they gave me wings to soar in my career. From a software engineer to leading drone operations for a Fortune 500 company, this journey has been incredible. The practical training, industry connections, and ongoing support made all the difference.',
      currentStatus: 'Leading a team of 15 drone pilots across India',
      achievement: 'Promoted to Chief Pilot in 8 months',
      salaryIncrease: '300%',
      testimonialVideo: true
    },
    {
      id: 2,
      name: 'Kiran Singh',
      role: 'Founder, AgroSky Drones',
      course: 'Agriculture Drone Training',
      location: 'Punjab',
      batch: 'January 2023',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'Being a farmer\'s son, I understood the challenges. IDA\'s agriculture program gave me the technical skills to revolutionize farming in my region. Today, my drone service helps 500+ farmers increase their yield by 35% while reducing costs by 40%.',
      currentStatus: 'Serving 500+ farmers across Punjab and Haryana',
      achievement: 'Built ₹2Cr revenue company in 18 months',
      salaryIncrease: '1000%',
      testimonialVideo: true
    },
    {
      id: 3,
      name: 'Sneha Joshi',
      role: 'Celebrity Drone Photographer',
      course: 'DGCA Pilot Training',
      location: 'Mumbai',
      batch: 'February 2023',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'From shooting local events to capturing Bollywood films and celebrity weddings, IDA opened doors I never imagined. The confidence I gained during training and the network I built through IDA alumni has been invaluable for my creative journey.',
      currentStatus: 'Working with top Bollywood productions and celebrity events',
      achievement: 'Shot for 3 major Bollywood films',
      salaryIncrease: '500%',
      testimonialVideo: true
    }
  ];

  const successStories = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Commercial Drone Pilot',
      course: 'DGCA Pilot Training',
      batch: 'March 2024',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'From mechanical engineer to commercial pilot - best decision ever! IDA\'s practical approach and job support helped me transition smoothly.',
      achievement: 'Now earning ₹8L+ annually',
      category: 'Career Switch',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Agriculture Drone Specialist',
      course: 'Agriculture Drone Training',
      batch: 'February 2024',
      location: 'Pune',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Started my own agri-drone service. Now helping 200+ farmers increase their yield and reduce costs significantly.',
      achievement: 'Started own drone service company',
      category: 'Entrepreneurship',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Survey & Mapping Expert',
      course: 'DGCA Pilot Training',
      batch: 'January 2024',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Got 3 job offers within 2 weeks of certification! The industry connections at IDA are unmatched.',
      achievement: 'Placed in 2 weeks after certification',
      category: 'Quick Placement',
      rating: 5
    },
    {
      id: 4,
      name: 'Meera Reddy',
      role: 'Drone Photographer',
      course: 'Women Drone Program',
      batch: 'December 2023',
      location: 'Hyderabad',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'From housewife to professional drone photographer in 6 months. The women-focused program gave me confidence.',
      achievement: 'Built successful photography business',
      category: 'Women Empowerment',
      rating: 5
    },
    {
      id: 5,
      name: 'Kiran Singh',
      role: 'Agri-Tech Entrepreneur',
      course: 'Agriculture Drone Training',
      batch: 'November 2023',
      location: 'Punjab',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Helping fellow farmers increase yield by 30% using drone technology. IDA made this dream possible.',
      achievement: 'Serving 500+ farmers',
      category: 'Agriculture',
      rating: 5
    },
    {
      id: 6,
      name: 'Deepak Verma',
      role: 'Senior Drone Instructor',
      course: 'DGCA Pilot Training',
      batch: 'October 2023',
      location: 'Delhi',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Student to instructor - now training the next generation of pilots. IDA\'s support never ends.',
      achievement: 'Became certified instructor',
      category: 'Career Growth',
      rating: 5
    },
    {
      id: 7,
      name: 'Sneha Joshi',
      role: 'Real Estate Photographer',
      course: 'DGCA Pilot Training',
      batch: 'September 2023',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Real estate photography business booming with drone skills! Clients love the aerial perspectives.',
      achievement: '300% business growth',
      category: 'Specialization',
      rating: 5
    },
    {
      id: 8,
      name: 'Ravi Kumar',
      role: 'Security Operations Specialist',
      course: 'DGCA Pilot Training',
      batch: 'August 2023',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Ex-military to civilian drone ops - seamless transition! IDA understood my background perfectly.',
      achievement: 'Leading security drone operations',
      category: 'Career Switch',
      rating: 5
    },
    {
      id: 9,
      name: 'Anita Gupta',
      role: 'Tech Innovation Lead',
      course: 'Women Drone Program',
      batch: 'July 2023',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Leading drone innovation at a major tech company now! The technical depth at IDA was impressive.',
      achievement: 'Promoted to innovation lead',
      category: 'Women Empowerment',
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
    : successStories.filter(story => story.category === activeFilter);

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
    setVisibleStories(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Professional Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F15A24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#26A65B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pilot Journeys That{' '}
              <span className="text-[#F15A24]">Inspire</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              See how students from all walks of life became certified drone pilots and launched successful careers. 
              Real stories, real achievements, real transformations.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '10,000+', label: 'Success Stories' },
                { number: '95%', label: 'Career Growth' },
                { number: '₹8L+', label: 'Average Salary' },
                { number: '500+', label: 'Companies Hiring' }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl font-bold text-[#F15A24] mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Voices from Our Pilots
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch authentic video testimonials from graduates who transformed their careers with India Drone Academy.
            </p>
          </div>

          {/* Video Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
              >
                {videoTestimonials.map((video) => (
                  <div key={video.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 p-8 lg:p-12 rounded-2xl">
                      {/* Video Thumbnail */}
                      <div className="relative">
                        <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                          <img
                            src={video.thumbnail}
                            alt={`${video.name} testimonial`}
                            className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                          
                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 shadow-lg transform group-hover:scale-110 transition-all duration-200">
                              <Play className="w-8 h-8 text-[#F15A24] ml-1" />
                            </div>
                          </div>
                          
                          {/* Video Stats */}
                          <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {video.views}
                          </div>
                          <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {video.duration}
                          </div>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{video.name}</h3>
                        <p className="text-[#F15A24] font-bold text-lg mb-1">{video.role}</p>
                        <p className="text-gray-600 mb-2">{video.course}</p>
                        <p className="text-gray-500 mb-6">{video.location}</p>
                        
                        <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                          "{video.caption}"
                        </blockquote>
                        
                        {/* Achievement */}
                        <div className="bg-[#26A65B] bg-opacity-10 rounded-lg p-4">
                          <p className="text-[#26A65B] font-bold">
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextVideoSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentVideoSlide ? 'bg-[#F15A24]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Certified & Soaring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our graduates who've transformed their careers and are now leading in their respective fields.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center mr-4 mb-2">
              <Filter className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#F15A24] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.slice(0, visibleStories).map((story, index) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Story Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#F15A24] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.category}
                  </div>
                  
                  {/* Name Overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{story.name}</h3>
                    <p className="text-orange-200">{story.role}</p>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-4 leading-relaxed">
                    "{story.quote}"
                  </blockquote>

                  {/* Course Info */}
                  <div className="text-sm text-gray-600 mb-4">
                    <p className="font-medium">{story.course}</p>
                    <p>{story.batch} • {story.location}</p>
                  </div>

                  {/* Achievement */}
                  <div className="bg-[#26A65B] bg-opacity-10 rounded-lg p-3">
                    <p className="text-[#26A65B] font-bold text-sm">
                      🏆 {story.achievement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleStories < filteredStories.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreStories}
                className="bg-[#F15A24] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                View More Stories
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Spotlight Story Slider */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              IDA Graduate Spotlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth stories of transformation, featuring our most inspiring graduates.
            </p>
          </div>

          {/* Spotlight Slider */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSpotlight * 100}%)` }}
              >
                {spotlightStories.map((story) => (
                  <div key={story.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-50 p-8 lg:p-16 rounded-2xl">
                      {/* Story Image */}
                      <div className="relative">
                        <div className="relative rounded-xl overflow-hidden shadow-lg">
                          <img
                            src={story.image}
                            alt={story.name}
                            className="w-full h-96 lg:h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          
                          {/* Video Badge */}
                          {story.testimonialVideo && (
                            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                              <Youtube className="w-3 h-3 mr-1" />
                              Video
                            </div>
                          )}
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                          <div className="text-2xl font-bold text-[#26A65B]">+{story.salaryIncrease}</div>
                          <div className="text-sm text-gray-600">Salary Increase</div>
                        </div>
                      </div>

                      {/* Story Content */}
                      <div className="flex flex-col justify-center">
                        <Quote className="w-12 h-12 text-[#F15A24] mb-6" />
                        
                        <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                          "{story.quote}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.name}</h3>
                          <p className="text-[#F15A24] font-bold text-lg mb-1">{story.role}</p>
                          <p className="text-gray-600">{story.course} • {story.batch}</p>
                          <p className="text-gray-500">{story.location}</p>
                        </div>

                        {/* Current Status */}
                        <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                          <h4 className="font-bold text-gray-900 mb-2">Current Status:</h4>
                          <p className="text-gray-700">{story.currentStatus}</p>
                        </div>

                        {/* Achievement Highlight */}
                        <div className="bg-[#26A65B] bg-opacity-10 rounded-xl p-4">
                          <p className="text-[#26A65B] font-bold">
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
            <div className="flex justify-center mt-8 space-x-2">
              {spotlightStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSpotlight(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSpotlight 
                      ? 'bg-[#F15A24] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Stats */}
      <section className="py-16 bg-gradient-to-r from-[#F15A24] to-[#26A65B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Success by the Numbers
            </h2>
            <p className="text-xl text-orange-100">
              Real metrics from our graduate community
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Pilots Trained', icon: Users },
              { number: '95%', label: 'Course Satisfaction', icon: Star },
              { number: '15+', label: 'States Covered', icon: MapPin },
              { number: '500+', label: 'Partner Companies', icon: Briefcase }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-orange-100 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Review Wall */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What They're Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Authentic reviews from across social media platforms and review sites.
            </p>
          </div>

          {/* Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewWall.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Platform Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {review.platform === 'Google' && (
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">G</span>
                      </div>
                    )}
                    {review.platform === 'Instagram' && (
                      <Instagram className="w-8 h-8 text-pink-500 mr-3" />
                    )}
                    {review.platform === 'LinkedIn' && (
                      <Linkedin className="w-8 h-8 text-blue-600 mr-3" />
                    )}
                    <span className="font-bold text-gray-900">{review.platform}</span>
                  </div>
                  {review.verified && (
                    <div className="bg-[#26A65B] bg-opacity-10 text-[#26A65B] px-2 py-1 rounded-full text-xs font-bold">
                      Verified
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 leading-relaxed mb-4">"{review.comment}"</p>

                {/* Author */}
                <p className="text-gray-500 font-medium">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Are You a Proud IDA Graduate?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Share your transformation journey and inspire future students to pursue their drone career dreams.
            </p>
          </div>

          {!showSubmissionForm ? (
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
              <div className="w-20 h-20 bg-[#F15A24] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-[#F15A24]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Submit Your Photo and Feedback to Be Featured
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our success story showcase and help inspire the next generation of drone pilots. 
                Your experience could be the motivation someone needs to start their career.
              </p>
              
              <button
                onClick={() => setShowSubmissionForm(true)}
                className="bg-[#F15A24] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center"
              >
                <Upload className="w-5 h-5 mr-2" />
                Submit My Story
              </button>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Share Your Success Story
                </h3>
                <button
                  onClick={() => setShowSubmissionForm(false)}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Course Completed *
                  </label>
                  <div className="relative">
                    <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select your course</option>
                      <option value="DGCA Pilot Training">DGCA Pilot Training</option>
                      <option value="Agriculture Drone Training">Agriculture Drone Training</option>
                      <option value="Women Drone Program">Women Drone Program</option>
                      <option value="1-Day Special Course">1-Day Special Course</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Success Story *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="testimonial"
                      name="testimonial"
                      value={formData.testimonial}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                      placeholder="Share your transformation journey, career achievements, and how IDA helped you succeed..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Your Photo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F15A24] transition-colors duration-200 cursor-pointer">
                    <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600 mb-1">Click to upload or drag and drop</p>
                    <p className="text-gray-500 text-sm">PNG, JPG up to 5MB</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#F15A24] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Submit My Story
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSubmissionForm(false)}
                    className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#F15A24] to-[#26A65B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Drone Career?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful pilots who chose IDA. Your success story could be next.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="bg-white text-[#F15A24] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/courses"
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#F15A24] transition-all duration-200"
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