import React, { useState } from 'react';
import { ArrowRight, Filter, Plane, Wheat, Users, Clock, Award, MapPin, Percent, Calendar, Settings, Download, Camera, Wrench, Monitor, Target, Zap, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DownloadBrochureForm from '../components/DownloadBrochureForm';

const CoursesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const filters = ['All', 'DGCA Certified', 'Special Courses', 'Women Programs', 'Bundles', 'Online Training'];

  const courses = [
    {
      id: 1,
      title: 'DGCA Small Class',
      Class: 'DGCA Certified',
      badge: 'Most Popular',
      badgeColor: 'bg-[#26A65B]',
      description: 'Government-certified training for small Class drones (up to 25kg) with complete theory and practical sessions.',
      duration: '5 Days',
      price: '₹45,000',
      gst: '+ 18% GST',
      level: 'Beginner to Intermediate',
      icon: Plane,
      image: '/dgca-small.jpg',
      link: '/courses/dgca-small',
      features: ['DGCA Certification', 'Theory & Practical', 'Job Assistance', 'Small Drone Operations'],

    },
    {
      id: 2,
      title: 'DGCA Medium Class',
      Class: 'DGCA Certified',
      badge: 'Professional',
      badgeColor: 'bg-blue-600',
      description: 'Advanced certification for medium Class drones more than 25kg upto 50kg for commercial operations.',
      duration: '5 Days',
      price: '₹65,000',
      gst: '+ 18% GST',
      level: 'Intermediate to Advanced',
      icon: Plane,
      image: '/dgca-medium.jpg',
      link: '/courses/dgca-medium',
      features: ['Medium Drone Ops', 'Advanced Training', 'Commercial License', 'Higher Payload'],
      locations: ['Hyderabad',]
    },
    {
      id: 3,
      title: 'Medium Upgrade',
      Class: 'DGCA Certified',
      badge: 'Upgrade Course',
      badgeColor: 'bg-purple-600',
      description: 'Upgrade from Small to Medium Class certification in just 3 days.',
      duration: '3 Days',
      price: '₹45,000',
      gst: '+ 18% GST',
      level: 'Intermediate',
      icon: Award,
      image: '/medium-upgrade.jpg',
      link: '/courses/medium-upgrade',
      features: ['Quick Upgrade', 'Medium Class', 'Advanced Operations', 'Commercial Ready'],
      locations: ['Hyderabad', ]
    },
    {
      id: 4,
      title: 'DGCA Small + Medium Combined',
      Class: 'DGCA Certified',
      badge: 'Best Value',
      badgeColor: 'bg-[#F15A24]',
      description: 'Complete certification package for both small and medium categories in one comprehensive course.',
      duration: '8 Days',
      price: '₹75,000',
      gst: '+ 18% GST',
      level: 'Beginner to Advanced',
      icon: Award,
      image: '/small-medium.jpg',
      link: '/courses/dgca-combined',
      features: ['Dual Certification', 'Complete Training', 'Best Value', 'All Categories'],
      locations: ['Hyderabad']
    },
    {
      id: 5,
      title: 'Site Asset Mapping & Inspection',
      Class: 'Special Courses',
      badge: 'Infrastructure',
      badgeColor: 'bg-blue-600',
      description: 'Inspection and mapping of roads, railways, telecom, and industrial infrastructure using drones.',
      duration: '5 Days',
      price: '₹35,000',
      gst: '+ 18% GST',
      level: 'Intermediate',
      icon: Target,
      image: '/site-asset.jpg',
      link: '/courses/site-asset-inspection',
      features: ['Infrastructure Mapping', 'Utilities Inspection', 'Survey Tools', 'Road & Rail Monitoring'],
      locations: ['Hyderabad']
    },

    {
      id: 6,
      title: 'Mining Excavation Volumetric Analysis',
      Class: 'Special Courses',
      badge: 'Mining',
      badgeColor: 'bg-gray-700',
      description: 'Analyze and calculate volumes for mining excavation projects using aerial survey techniques.',
      duration: '5 Days',
      price: '₹35,000',
      gst: '+ 18% GST',
      level: 'Advanced',
      icon: Target,
      image: '/mining.webp',
      link: '/courses/mining-excavation',
      features: ['Volumetric Analysis', 'Mining Monitoring', '3D Modeling', 'Drone Mapping'],
      locations: ['Hyderabad']
    },

    {
      id: 7,
      title: 'Agriculture Crop Monitoring & Precision Farming',
      Class: 'Special Courses',
      badge: 'For Farmers',
      badgeColor: 'bg-green-600',
      description: 'Precision spraying techniques for crop protection and optimized agriculture operations.',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      level: 'Beginner Friendly',
      icon: Wheat,
      image: '/agricrop-monitor.webp',
      link: '/courses/agriculture-precision',
      features: ['Spraying Techniques', 'Crop Monitoring', 'Agri Mapping', 'Flight Demos'],
      locations: ['Hyderabad']
    },

    {
      id: 8,
      title: 'Aerial Cinematography',
      Class: 'Special Courses',
      badge: 'Creative',
      badgeColor: 'bg-purple-600',
      description: 'Learn professional aerial photography and cinematic drone shots for media projects.',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      level: 'Intermediate',
      icon: Camera,
      image: '/aerial.avif',
      link: '/courses/aerial-cinematography',
      features: ['Cinematic Shots', 'Camera Gimbal Use', 'Creative Angles', 'Footage Editing'],
      locations: ['Hyderabad']
    },

    {
      id: 9,
      title: 'Drone Survey & Data Processing',
      Class: 'Special Courses',
      badge: 'Technical',
      badgeColor: 'bg-indigo-600',
      description: 'Post-processing and analytics of drone survey data for agriculture and mapping use cases.',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      level: 'Intermediate',
      icon: Monitor,
      image: '/dataprocessing.png',
      link: '/courses/data-processing',
      features: ['Orthomosaics', 'DEM/DSM', '3D Models', 'QGIS Export'],
      locations: ['Hyderabad']
    },
{
  id: 10,
  title: 'Drone Assembly & Repair (Basic)',
  Class: 'Special Courses',
  badge: 'Basic Repair',
  badgeColor: 'bg-green-600',
  description: 'Learn essential repairs, soldering, and maintenance for drones.',
  duration: '5 Days',
  price: '₹30,000',
  gst: '+ 18% GST',
  level: 'Beginner',
  icon: Wrench,
  image: '/repair-basic.jpg',
  link: '/courses/assembly-basic',
  features: ['Basic Soldering', 'Motor Setup', 'ESC Troubleshooting', 'Flight Performance Tuning'],
  locations: ['Hyderabad']
},

    {
      id: 11,
      title: 'Drone Assembly & Repair (Advanced)',
      Class: 'Special Courses',
      badge: 'Advanced Repair',
      badgeColor: 'bg-red-600',
      description: 'Master advanced repairs, calibration, soldering and maintenance for drone fleets.',
      duration: '5 Days',
      price: '₹45,000',
      gst: '+ 18% GST',
      level: 'Advanced',
      icon: Wrench,
      image: '/repair-advanced.jpg',
      link: '/courses/assembly-advanced',
      features: ['Advanced Soldering', 'ESC Tuning', 'IMU Calibration', 'Motor Testing'],
      locations: ['Hyderabad']
    },

    {
      id: 12,
      title: 'Custom Training / Workshop for Institutes',
      Class: 'Special Courses',
      badge: 'Institutional',
      badgeColor: 'bg-orange-500',
      description: 'Tailored drone workshops for universities and government agencies.',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      level: 'Customized',
      icon: Building,
      image: '/workshop1.jpg',
      link: '/courses/custom-training',
      features: ['Curriculum Design', 'Field Training', 'Certification', 'Project Work'],
      locations: ['Hyderabad']
    },
    {
      id: 13,
      title: 'FPV Drone Training (Basic)',
      Class: 'Special Courses',
      badge: 'Racing',
      badgeColor: 'bg-pink-600',
      description: 'FPV drone flight training for beginners focusing on racing and freestyle maneuvers.',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      level: 'Beginner',
      icon: Zap,
      image: '/fpv-basic.png',
      link: '/courses/fpv-basic',
      features: ['Line of Sight', 'Simulator Flying', 'Basic FPV Kit', 'Safety Protocols'],
      locations: ['Hyderabad']
    },

    {
      id: 14,
      title: 'FPV Drone Training (Advanced)',
      Class: 'Special Courses',
      badge: 'Professional Racing',
      badgeColor: 'bg-red-600',
      description: 'Advanced FPV racing techniques and competition preparation.',
      duration: '5 Days',
      price: '₹45,000',
      gst: '+ 18% GST',
      level: 'Advanced',
      icon: Zap,
      image: '/fpv-advanced.png',
      link: '/courses/fpv-advanced',
      features: ['Advanced Racing', 'Competition Prep', 'Professional Techniques', 'Performance Tuning'],
      locations: ['Hyderabad']
    },

    {
      id: 15,
      title: 'Women Drone Pilot Bootcamp',
      Class: 'Women Programs',
      badge: 'Women Only',
      badgeColor: 'bg-pink-600',
      description: 'Comprehensive training program designed specifically for women with mentorship and career guidance.',
      duration: '5 Days',
      price: '₹35,000',
      gst: '+ 18% GST',
      level: 'All Levels',
      icon: Users,
      image: '/whyida.jpg',
      link: '/courses/women-bootcamp',
      features: ['Women-Only Batches', 'Mentorship', 'Career Guidance', 'Networking'],
      locations: ['Hyderabad']
    },
    {
      id: 16,
      title: 'Drone-Didi Agri Program',
      Class: 'Women Programs',
      badge: 'Women Empowerment',
      badgeColor: 'bg-green-500',
      description: 'Specialized agriculture program for rural and urban women focusing on precision farming.',
      duration: '15 Days',
      price: '₹35,000',
      gst: '+ 18% GST',
      level: 'Beginner Friendly',
      icon: Wheat,
      image: '/didi-agri.jpg',
      link: '/courses/drone-didi-agri',
      features: ['Women-Focused', 'Agriculture Training', 'Rural Empowerment', 'Practical Skills'],
      locations: ['Hyderabad']
    },

    {
      id: 17,
      title: 'DGCA Medium + 3D Mapping',
      Class: 'Bundles',
      badge: 'Professional Bundle',
      badgeColor: 'bg-blue-600',
      description: 'Advanced package combining medium Class certification with professional mapping skills.',
      duration: '8 Days',
      price: '₹90,000',
      gst: '+ 18% GST',
      level: 'Intermediate to Advanced',
      icon: Target,
      image: '/medium-3d.png',
      link: '/courses/dgca-mapping-bundle',
      features: ['Medium Class', '3D Mapping', 'Survey Techniques', 'Professional Skills'],
      locations: ['Hyderabad']
    },
    {
      id: 18,
      title: 'Ultimate Pro Bundle',
      Class: 'Bundles',
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
      locations: ['Hyderabad']
    },
    {
      id: 19,
      title: 'Master Drone Technology (Training + Internship)',
      Class: 'Special Courses',
      badge: 'Job Ready',
      badgeColor: 'bg-gradient-to-r from-blue-500 to-green-500',
      description: '12-week training and internship on drone tech, data, GIS and engineering applications.',
      duration: '3 Months',
      price: '₹65,000',
      gst: '+ 18% GST',
      level: 'Advanced',
      icon: Award,
      image: '/training-intern.jpg',
      link: '/courses/master-drone-tech',
      features: ['DGCA License', 'Photogrammetry', 'LiDAR & CAD', 'Internship Projects'],
      locations: ['Hyderabad']
    },
    {
      id: 20,
      title: 'Advanced Drone Missions & Payload Handling',
      Class: 'Special Courses',
      badge: 'Industrial',
      badgeColor: 'bg-blue-700',
      description: 'Train on dynamic payloads and advanced flight missions including thermal and LiDAR.',
      duration: '4 Days',
      price: '₹30,000',
      gst: '+ 18% GST',
      level: 'Advanced',
      icon: Plane,
      image: '/mission.png',
      link: '/courses/advanced-missions',
      features: ['Orbit & Oblique', 'Payload Drop', 'Thermal Imaging', 'Sensor Setup'],
      locations: ['Hyderabad']
    },
    {
      id: 21,
      title: 'Engineering GIS Analytics using Drone Data',
      Class: 'Special Courses',
      badge: 'Engineering',
      badgeColor: 'bg-green-600',
      description: 'Post-process drone data for engineering analytics, GIS modeling and infrastructure monitoring.',
      duration: '5 Days',
      price: '₹30,000',
      gst: '+ 18% GST',
      level: 'Intermediate to Advanced',
      icon: Monitor,
      image: '/gis.png',
      link: '/courses/gis-analytics',
      features: ['CAD+GIS', 'Contours/TIN', 'X-Section Analysis', 'Alignment Modeling'],
      locations: ['Hyderabad']
    },
    {
      id: 22,
      title: 'Simulator Refresher',
      Class: 'Online Training',
      badge: 'Skill Enhancement',
      badgeColor: 'bg-blue-500',
      description: 'Enhance your skills with 50 hours of simulator practice and emergency scenarios.',
      duration: '50 Hours',
      price: '₹15,000',
      gst: '+ 18% GST',
      level: 'All Levels',
      icon: Monitor,
      image: '/simulator.png',
      link: '/courses/simulator-refresher',
      features: ['50 Hours Practice', 'Skill Enhancement', 'Emergency Scenarios', 'Flexible Schedule'],
      locations: ['Online + Center Access']
    },
    {
      id: 23,
      title: 'Online Theory Crash Course',
      Class: 'Online Training',
      badge: 'Online Learning',
      badgeColor: 'bg-green-500',
      description: 'Complete drone pilot theory course delivered online with interactive sessions.',
      duration: 'Self-Paced',
      price: '₹7,500',
      gst: '+ 18% GST',
      level: 'Beginner',
      icon: Monitor,
      image: '/online-class.png',
      link: '/courses/online-theory',
      features: ['Online Learning', 'Interactive Sessions', 'Self-Paced', 'Theory Foundation'],
      locations: ['Online']
    },
   {
  id: 24,
  title: 'Drone Awareness for Schools',
  Class: 'Special Courses',
  badge: 'For School Students',
  badgeColor: 'bg-yellow-600',
  description: 'IDA empowers school students through live drone demos, hands-on flying, and STEM-integrated workshops.',
  duration: '1 Day / Custom',
  price: '₹15,000',
  gst: '+ 18% GST',
  level: 'Beginner (K-12)',
  icon: Building,
  image: '/school.png',
  link: '/courses/school-awareness',
  features: [
    'Interactive Drone Demonstrations',
    'Hands-on Supervised Flying',
    'STEM Education Integration',
    'Drone Career Path Guidance'
  ],
  locations: ['Pan India', 'On-campus Available']
}

  ];

  const filteredCourses = activeFilter === 'All'
    ? courses
    : courses.filter(course => course.Class === activeFilter);

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add these functions to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}


      {/* Page Header */}
      <section className="pt-10 pb-10 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Drone Training Programs
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Students enrolled in the DGCA Drone Pilot Certification at India Drone Academy
              can now boost their expertise with additional drone training programs.
              Explore specialized courses from mapping to cinematography, tailored for your career path.
              Limited-Time Offer: Get 20% Off on Any Add-On Course with DGCA Enrollment.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
              <div className="flex items-center text-gray-600">
                <Award className="w-5 h-5 mr-1 text-[#26A65B]" />
                <span>DGCA Approved</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-1 text-[#26A65B]" />
                <span>24+ Course Options</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-1 text-[#26A65B]" />
                <span>Multiple Locations</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Percent className="w-5 h-5 mr-1 text-[#26A65B]" />
                <span>Combo Discount</span>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Filters */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center">
              <Filter className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by Class:</span>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${activeFilter === filter
                    ? 'bg-[#F15A24] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {filter}
                </button>
              ))}

              {/* ✅ Curriculum Page Button */}
              <button
                onClick={() => navigate('/curriculum')}
                className="px-3 py-2 rounded-lg font-medium transition-all duration-200 bg-[#26A65B] text-white hover:bg-[#1e894b]"
              >
                Drone in Curriculum
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-2 text-gray-600">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            {activeFilter !== 'All' && ` in ${activeFilter}`}
          </div>
        </div>
      </section>


      {/* Courses Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer flex flex-col"
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
                  <div className={`absolute top-4 left-4 ${course.badgeColor} text-white px-2 py-1 rounded-full text-sm font-medium`}>
                    {course.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full">
                    <course.icon className="w-5 h-5 text-[#26A65B]" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <div className="text-[#F15A24] font-bold text-xs">{course.price}</div>
                    <div className="text-gray-600 text-xs">{course.gst}</div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-4 flex-1">
                  <div className="text-xs text-[#F15A24] font-bold mb-2">{course.Class}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
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
                  <div className="mb-4">
                    <div className="flex gap-2 flex-wrap">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                      {course.features.length > 3 && (
                        <span className="text-gray-500 text-xs">+{course.features.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-2 p-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCourseClick(course.link);
                    }}
                    className="flex-1 bg-[#F15A24] hover:bg-[#D64A1A] text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(); // Open the modal when clicking the Brochure button
                    }}
                    className="flex-1 bg-white border border-[#F15A24] text-[#F15A24] hover:bg-[#F15A24] hover:text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Brochure
                  </button>


                </div>
              </div>
            ))}

          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filter or browse all courses.</p>
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

{isModalOpen && (
  <>
    {/* Background Overlay */}
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={closeModal}
    />

    {/* Modal Content */}
    <div className="fixed inset-0 z-50 overflow-y-auto px-4 py-10">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg mx-auto p-4 sm:p-5 mt-24">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        {/* Form */}
        <DownloadBrochureForm />
      </div>
    </div>
  </>
)}




      {/* Bottom CTA Section */}
      <section className="py-6 lg:py-10 bg-gradient-to-br from-orange-600 to-orange-400 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Ready to Start Your Drone Career?</h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-4 max-w-2xl mx-auto">
            Join thousands of successful pilots who started their journey with India Drone Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button
              onClick={handleApplyClick}
              className="bg-white text-[#F15A24] font-bold px-4 py-2 rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-200"
            >
              Apply Now
            </button>
            <button
              onClick={handleContactClick}
              className="bg-transparent border-2 border-white text-white font-bold px-4 py-2 rounded-lg hover:bg-white hover:text-[#F15A24] transition-all duration-200"
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