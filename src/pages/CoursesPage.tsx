import React, { useState } from 'react';
import { ArrowRight, Filter, Plane, Wheat, Users, Clock, Award, MapPin, Calendar, Settings, Download, Camera, Wrench, Monitor, Target, Zap, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CoursesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const filters = ['All', 'DGCA Certified', 'Special Courses', 'Women Programs', 'Bundles', 'Online Training'];

  const courses = [
    {
      id: 1,
      title: 'DGCA Small Category',
      category: 'DGCA Certified',
      badge: 'Most Popular',
      badgeColor: 'bg-[#26A65B]',
      description: 'Government-certified training for small category drones (up to 2kg) with complete theory and practical sessions.',
      duration: '5 Days',
      price: '₹45,000',
      gst: '+ 18% GST',
      level: 'Beginner to Intermediate',
      icon: Plane,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/dgca-small',
      features: ['DGCA Certification', 'Theory & Practical', 'Job Assistance', 'Small Drone Operations'],
      locations: ['Hyderabad', 'Bangalore', 'Mumbai', 'Delhi']
    },
    {
      id: 2,
      title: 'DGCA Medium Category',
      category: 'DGCA Certified',
      badge: 'Professional',
      badgeColor: 'bg-blue-600',
      description: 'Advanced certification for medium category drones (2-25kg) for commercial operations.',
      duration: '5 Days',
      price: '₹65,000',
      gst: '+ 18% GST',
      level: 'Intermediate to Advanced',
      icon: Plane,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/dgca-medium',
      features: ['Medium Drone Ops', 'Advanced Training', 'Commercial License', 'Higher Payload'],
      locations: ['Hyderabad', 'Bangalore', 'Mumbai']
    },
    {
      id: 3,
      title: 'Medium Upgrade',
      category: 'DGCA Certified',
      badge: 'Upgrade Course',
      badgeColor: 'bg-purple-600',
      description: 'Upgrade from Small to Medium category certification in just 3 days.',
      duration: '3 Days',
      price: '₹45,000',
      gst: '+ 18% GST',
      level: 'Intermediate',
      icon: Award,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/medium-upgrade',
      features: ['Quick Upgrade', 'Medium Category', 'Advanced Operations', 'Commercial Ready'],
      locations: ['Hyderabad', 'Bangalore']
    },
    {
      id: 4,
      title: 'Small + Medium Combined',
      category: 'Bundles',
      badge: 'Best Value',
      badgeColor: 'bg-[#F15A24]',
      description: 'Complete certification package for both small and medium categories in one comprehensive course.',
      duration: '8 Days',
      price: '₹75,000',
      gst: '+ 18% GST',
      level: 'Beginner to Advanced',
      icon: Award,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/dgca-combined',
      features: ['Dual Certification', 'Complete Training', 'Best Value', 'All Categories'],
      locations: ['Hyderabad', 'Bangalore', 'Mumbai']
    },
    {
      id: 5,
      title: 'Agriculture Spraying',
      category: 'Special Courses',
      badge: 'For Farmers',
      badgeColor: 'bg-green-600',
      description: 'Specialized training for precision farming and crop spraying operations with hands-on field experience.',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      level: 'Beginner Friendly',
      icon: Wheat,
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/agriculture-spraying',
      features: ['Precision Farming', 'Spraying Techniques', 'Crop Analysis', 'Field Practice'],
      locations: ['Pune', 'Hyderabad', 'Bangalore']
    },
    {
      id: 6,
      title: 'Site Asset Mapping',
      category: 'Special Courses',
      badge: 'Professional',
      badgeColor: 'bg-blue-600',
      description: 'Professional mapping and inspection services for infrastructure and construction sites.',
      duration: '3 Days',
      price: '₹35,000',
      gst: '+ 18% GST',
      level: 'Intermediate',
      icon: Target,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/site-mapping',
      features: ['3D Mapping', 'Asset Inspection', 'Survey Techniques', 'Data Processing'],
      locations: ['Hyderabad', 'Bangalore', 'Mumbai']
    },
    {
      id: 7,
      title: 'Mining Excavation Analysis',
      category: 'Special Courses',
      badge: 'Industrial',
      badgeColor: 'bg-gray-600',
      description: 'Volumetric analysis and monitoring for mining and excavation projects.',
      duration: '3 Days',
      price: '₹35,000',
      gst: '+ 18% GST',
      level: 'Advanced',
      icon: Target,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/mining-analysis',
      features: ['Volumetric Analysis', 'Mining Operations', 'Data Processing', 'Industrial Applications'],
      locations: ['Hyderabad', 'Bangalore']
    },
    {
      id: 8,
      title: 'Aerial Cinematography',
      category: 'Special Courses',
      badge: 'Creative',
      badgeColor: 'bg-purple-600',
      description: 'Professional drone filming and photography for creative industries and media production.',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      level: 'Intermediate',
      icon: Camera,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/aerial-cinematography',
      features: ['Professional Filming', 'Camera Operations', 'Creative Techniques', 'Portfolio Building'],
      locations: ['Mumbai', 'Bangalore', 'Hyderabad']
    },
    {
      id: 9,
      title: 'Data Processing Course',
      category: 'Special Courses',
      badge: 'Technical',
      badgeColor: 'bg-indigo-600',
      description: 'Learn to process and analyze data from survey, mapping, and agriculture operations.',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      level: 'Intermediate',
      icon: Monitor,
      image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/data-processing',
      features: ['Data Analysis', 'Software Training', 'Report Generation', 'Technical Skills'],
      locations: ['Hyderabad', 'Bangalore']
    },
    {
      id: 10,
      title: 'Drone Assembly & Repair (Basic)',
      category: 'Special Courses',
      badge: 'Technical',
      badgeColor: 'bg-gray-600',
      description: 'Learn basic drone assembly, troubleshooting and repair techniques.',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      level: 'Beginner',
      icon: Wrench,
      image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/drone-assembly-basic',
      features: ['Hardware Assembly', 'Basic Troubleshooting', 'Repair Techniques', 'Technical Skills'],
      locations: ['Hyderabad', 'Bangalore']
    },
    {
      id: 11,
      title: 'Drone Assembly & Repair (Advanced)',
      category: 'Special Courses',
      badge: 'Advanced Technical',
      badgeColor: 'bg-red-600',
      description: 'Advanced drone assembly, complex troubleshooting and professional repair services.',
      duration: '5 Days',
      price: '₹45,000',
      gst: '+ 18% GST',
      level: 'Advanced',
      icon: Wrench,
      image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/drone-assembly-advanced',
      features: ['Advanced Assembly', 'Complex Repairs', 'Professional Service', 'Business Setup'],
      locations: ['Hyderabad', 'Bangalore']
    },
    {
      id: 12,
      title: 'FPV Drone Training (Basic)',
      category: 'Special Courses',
      badge: 'Racing',
      badgeColor: 'bg-red-500',
      description: 'First Person View drone racing and basic maneuvering techniques.',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      level: 'Beginner',
      icon: Zap,
      image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/fpv-basic',
      features: ['FPV Flying', 'Basic Racing', 'Maneuvering', 'Safety Training'],
      locations: ['Hyderabad', 'Bangalore']
    },
    {
      id: 13,
      title: 'FPV Drone Training (Advanced)',
      category: 'Special Courses',
      badge: 'Professional Racing',
      badgeColor: 'bg-red-600',
      description: 'Advanced FPV racing techniques and competition preparation.',
      duration: '5 Days',
      price: '₹45,000',
      gst: '+ 18% GST',
      level: 'Advanced',
      icon: Zap,
      image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/fpv-advanced',
      features: ['Advanced Racing', 'Competition Prep', 'Professional Techniques', 'Performance Tuning'],
      locations: ['Hyderabad', 'Bangalore']
    },
    {
      id: 14,
      title: 'Women Drone Pilot Bootcamp',
      category: 'Women Programs',
      badge: 'Women Only',
      badgeColor: 'bg-pink-600',
      description: 'Comprehensive training program designed specifically for women with mentorship and career guidance.',
      duration: '5 Days',
      price: '₹42,000',
      gst: '+ 18% GST',
      level: 'All Levels',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/women-bootcamp',
      features: ['Women-Only Batches', 'Mentorship', 'Career Guidance', 'Networking'],
      locations: ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad']
    },
    {
      id: 15,
      title: 'Drone-Didi Agri Program',
      category: 'Women Programs',
      badge: 'Women Empowerment',
      badgeColor: 'bg-green-500',
      description: 'Specialized agriculture program for rural and urban women focusing on precision farming.',
      duration: '3 Days',
      price: '₹22,000',
      gst: '+ 18% GST',
      level: 'Beginner Friendly',
      icon: Wheat,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/drone-didi-agri',
      features: ['Women-Focused', 'Agriculture Training', 'Rural Empowerment', 'Practical Skills'],
      locations: ['Pune', 'Hyderabad', 'Bangalore']
    },
    {
      id: 16,
      title: 'DGCA Small + Cinematography',
      category: 'Bundles',
      badge: 'Creative Bundle',
      badgeColor: 'bg-purple-600',
      description: 'Complete package combining DGCA certification with aerial cinematography skills.',
      duration: '8 Days',
      price: '₹85,000',
      gst: '+ 18% GST',
      level: 'Beginner to Advanced',
      icon: Camera,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/dgca-cinematography-bundle',
      features: ['DGCA Certification', 'Cinematography Skills', 'Creative Training', 'Portfolio Building'],
      locations: ['Mumbai', 'Bangalore', 'Hyderabad']
    },
    {
      id: 17,
      title: 'DGCA Medium + 3D Mapping',
      category: 'Bundles',
      badge: 'Professional Bundle',
      badgeColor: 'bg-blue-600',
      description: 'Advanced package combining medium category certification with professional mapping skills.',
      duration: '8 Days',
      price: '₹90,000',
      gst: '+ 18% GST',
      level: 'Intermediate to Advanced',
      icon: Target,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/dgca-mapping-bundle',
      features: ['Medium Category', '3D Mapping', 'Survey Techniques', 'Professional Skills'],
      locations: ['Hyderabad', 'Bangalore', 'Mumbai']
    },
    {
      id: 18,
      title: 'Ultimate Pro Bundle',
      category: 'Bundles',
      badge: 'Ultimate Package',
      badgeColor: 'bg-gradient-to-r from-[#F15A24] to-[#26A65B]',
      description: 'Complete professional package: DGCA Medium + Cinematography + Mapping for career-ready professionals.',
      duration: '10 Days',
      price: '₹115,000',
      gst: '+ 18% GST',
      level: 'Comprehensive',
      icon: Award,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/ultimate-pro',
      features: ['Triple Certification', 'Complete Package', 'Professional Level', 'Career Ready'],
      locations: ['Hyderabad', 'Bangalore', 'Mumbai']
    },
    {
      id: 19,
      title: 'Thermal Inspection & LiDAR',
      category: 'Special Courses',
      badge: 'Advanced Technology',
      badgeColor: 'bg-red-600',
      description: 'Advanced thermal inspection and LiDAR mapping for professional applications.',
      duration: '3 Days',
      price: '₹40,000',
      gst: '+ 18% GST',
      level: 'Advanced',
      icon: Target,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/thermal-lidar',
      features: ['Thermal Imaging', 'LiDAR Technology', 'Advanced Inspection', 'Professional Applications'],
      locations: ['Hyderabad', 'Bangalore']
    },
    {
      id: 20,
      title: 'BVLOS Training',
      category: 'Special Courses',
      badge: 'Beyond Visual Line',
      badgeColor: 'bg-indigo-600',
      description: 'Beyond Visual Line of Sight operations training for advanced commercial applications.',
      duration: '2 Days',
      price: '₹30,000',
      gst: '+ 18% GST',
      level: 'Advanced',
      icon: Plane,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/bvlos',
      features: ['BVLOS Operations', 'Advanced Navigation', 'Commercial Applications', 'Safety Protocols'],
      locations: ['Hyderabad', 'Bangalore']
    },
    {
      id: 21,
      title: 'Drone Safety & Incident Response',
      category: 'Special Courses',
      badge: 'Safety Training',
      badgeColor: 'bg-yellow-600',
      description: 'Comprehensive safety training and crash investigation procedures.',
      duration: '2 Days',
      price: '₹30,000',
      gst: '+ 18% GST',
      level: 'All Levels',
      icon: Settings,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/safety-incident',
      features: ['Safety Protocols', 'Incident Response', 'Crash Investigation', 'Risk Management'],
      locations: ['Hyderabad', 'Bangalore']
    },
    {
      id: 22,
      title: 'Simulator Refresher',
      category: 'Online Training',
      badge: 'Skill Enhancement',
      badgeColor: 'bg-blue-500',
      description: 'Enhance your skills with 50 hours of simulator practice and emergency scenarios.',
      duration: '50 Hours',
      price: '₹15,000',
      gst: '+ 18% GST',
      level: 'All Levels',
      icon: Monitor,
      image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/simulator-refresher',
      features: ['50 Hours Practice', 'Skill Enhancement', 'Emergency Scenarios', 'Flexible Schedule'],
      locations: ['Online + Center Access']
    },
    {
      id: 23,
      title: 'Online Theory Crash Course',
      category: 'Online Training',
      badge: 'Online Learning',
      badgeColor: 'bg-green-500',
      description: 'Complete drone pilot theory course delivered online with interactive sessions.',
      duration: 'Self-Paced',
      price: '₹7,500',
      gst: '+ 18% GST',
      level: 'Beginner',
      icon: Monitor,
      image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/online-theory',
      features: ['Online Learning', 'Interactive Sessions', 'Self-Paced', 'Theory Foundation'],
      locations: ['Online']
    },
    {
      id: 24,
      title: 'Corporate Training',
      category: 'Special Courses',
      badge: 'For Organizations',
      badgeColor: 'bg-gray-700',
      description: 'Customized training programs for organizations and institutions with flexible curriculum.',
      duration: 'Flexible',
      price: '₹25,000',
      gst: '+ 18% GST',
      level: 'Customized',
      icon: Building,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/courses/corporate',
      features: ['Custom Curriculum', 'On-site Training', 'Bulk Pricing', 'Certification'],
      locations: ['Pan India', 'On-site Available']
    }
  ];

  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  const handleCourseClick = (link: string) => {
    navigate(link);
  };

  const handleApplyClick = () => {
    navigate('/apply');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleDownloadBrochure = () => {
    // In a real app, this would trigger a download
    console.log('Download brochure');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Drone Training Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From DGCA certification to specialized skills, explore our complete range of drone training programs. 
              Choose from basic courses to advanced bundles designed for every career path and skill level.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm">
              <div className="flex items-center text-gray-600">
                <Award className="w-5 h-5 mr-2 text-[#26A65B]" />
                <span>DGCA Approved</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2 text-[#26A65B]" />
                <span>24+ Course Options</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-[#26A65B]" />
                <span>Multiple Locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <Filter className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by Category:</span>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-[#F15A24] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            {activeFilter !== 'All' && ` in ${activeFilter}`}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleCourseClick(course.link)}
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Badge */}
                    <div className={`absolute top-4 left-4 ${course.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {course.badge}
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full">
                      <IconComponent className="w-5 h-5 text-[#26A65B]" />
                    </div>
                    
                    {/* Price */}
                    <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                      <div className="text-[#F15A24] font-bold text-sm">{course.price}</div>
                      <div className="text-gray-600 text-xs">{course.gst}</div>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <div className="text-xs text-[#F15A24] font-bold mb-2">{course.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Course Details */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        <span>{course.level}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {course.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                        {course.features.length > 3 && (
                          <span className="text-gray-500 text-xs">
                            +{course.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Locations */}
                    <div className="mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{course.locations.slice(0, 2).join(', ')}</span>
                        {course.locations.length > 2 && (
                          <span className="ml-1">+{course.locations.length - 2} more</span>
                        )}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCourseClick(course.link);
                        }}
                        className="flex-1 bg-[#F15A24] hover:bg-[#D64A1A] text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownloadBrochure();
                        }}
                        className="flex-1 bg-white border border-[#F15A24] text-[#F15A24] hover:bg-[#F15A24] hover:text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Brochure
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filter or browse all courses.
              </p>
              <button
                onClick={() => setActiveFilter('All')}
                className="bg-[#F15A24] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#D64A1A] transition-colors duration-200"
              >
                Show All Courses
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F15A24] to-[#D64A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Drone Career?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful pilots who started their journey with India Drone Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleApplyClick}
              className="bg-white text-[#F15A24] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Apply Now
            </button>
            <button
              onClick={handleContactClick}
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#F15A24] transition-all duration-200"
            >
              Talk to Counselor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;