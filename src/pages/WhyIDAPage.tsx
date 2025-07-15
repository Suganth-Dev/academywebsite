import React, { useState } from 'react';
import {
  Award,
  Users,
  Plane,
  Building,
  Briefcase,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Download,
  Quote,
  TrendingUp,
  Shield,
  Target,
  Zap,
  Play,
  Calendar,
  Clock,
  X,
  ChevronRight,
  FileText,
  GraduationCap,
  Settings,
  Rocket,

} from 'lucide-react';

const WhyIDAPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      step: 1,
      title: 'Apply Online',
      description: 'Submit your application and get instant confirmation',
      icon: FileText,
      details: 'Simple online application process with immediate response and counselor contact',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      step: 2,
      title: 'DGCA Training',
      description: 'Attend government-certified classroom sessions',
      icon: GraduationCap,
      details: 'Comprehensive theory covering regulations, safety, and operations with expert instructors',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      step: 3,
      title: 'Hands-On Practice',
      description: 'Simulator training and real outdoor flying',
      icon: Settings,
      details: '15+ hours of practical experience with professional equipment and certified instructors',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      step: 4,
      title: 'Assessment',
      description: 'Pass DGCA examination with our support',
      icon: Award,
      details: 'Written and practical tests with 95% first-time pass rate and unlimited retake support',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      step: 5,
      title: 'Launch Career',
      description: 'Get licensed and start your drone career',
      icon: Rocket,
      details: 'Job placement assistance, resume building, and ongoing career support for life',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    }
  ];

  const comparisonFeatures = [
    { feature: 'DGCA-Certified Training', ida: true, others: false },
    { feature: 'Real Outdoor Flying', ida: true, others: false },
    { feature: 'Simulator Experience', ida: true, others: 'Limited' },
    { feature: 'Placement Assistance', ida: true, others: false },
    { feature: 'Women-Focused Programs', ida: true, others: false },
    { feature: 'Free Career Guidance', ida: true, others: false },
    { feature: 'Industry Partnerships', ida: true, others: false },
    { feature: 'Alumni Support', ida: true, others: false }
  ];

  const founderMessage = {
    name: 'Dev.R',
    title: 'Founder & CEO, India Drone Academy',
    image: '/devR.jpg',
    quote: 'India Drone Academy leads India\'s UAV training ecosystem with DGCA-approved programs, hands-on learning, and high-end simulator labs. Our mission is to make drone certification accessible and career-focused.',
    videoThumbnail: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600'
  };

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Commercial Drone Pilot',
      course: 'DGCA Pilot Training',
      batch: 'March 2024',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'IDA didn\'t just teach me to fly drones—they transformed my entire career. From a mechanical engineer earning ₹3L to a certified pilot earning ₹8L annually. The practical training and job support made all the difference.',
      rating: 5,
      achievement: 'Now earning ₹8L+ annually'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Agriculture Drone Specialist',
      course: 'Agriculture Drone Training',
      batch: 'February 2024',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'As a woman entering the drone industry, IDA\'s supportive environment gave me confidence. Their agriculture program helped me start my own precision farming service. I now serve 200+ farmers across Maharashtra.',
      rating: 5,
      achievement: 'Started own drone service company'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Survey & Mapping Expert',
      course: 'DGCA Pilot Training',
      batch: 'January 2024',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'The industry connections at IDA are unmatched. Within 2 weeks of certification, I had 3 job offers. The instructors are industry veterans who share real insights, not just textbook knowledge.',
      rating: 5,
      achievement: 'Placed in 2 weeks after certification'
    }
  ];
  const teamMembers = [
    {
      name: "Dev.R",
      designation: "Founder & CEO",
      image: "/devR.jpg",
      experience: "15+ years in aviation"
    },
    {
      name: "Dr. Priya Patel",
      designation: "Chief Training Officer",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300",
      experience: "PhD in Aeronautical Engineering"
    },
    {
      name: "Vamsi Krishna Kurakula",
      designation: "Director",
      image: "/vamsi.jpg",
      experience: "DGCA Certified RPAS Instructor "
    },
    {
      name: "Sumit Krishnan",
      designation: " DGCA Certified RPAS Instructor (Medium and Small)",
      image: "/sumit.jpg",
      experience: "Aeronautical Engineer, A.M.AeSI, Author"
    },
    {
      name: " V HariPrakash Raju",
      designation: "DGCA Certified Remote Pilot",
      image: "/hari.jpg",
      experience: "Business Development"
    },
    {
      name: "Pagidi Srikanth",
      designation: "DGCA Certified Remote Pilot",
      image: "/srikanth.jpg",
      experience: "UAV Maintenance Engineer"
    },
    {
      name: "G Rakesh",
      designation: "DGCA Certified Remote Pilot",
      image: "/rakesh.jpg",
      experience: "Expert in precision farming"
    },
    {
      name: "Deepak Verma",
      designation: "Placement Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      experience: "500+ successful placements"
    }
  ];
  const mediaLogos = [
    { name: 'DGCA', type: 'Government Body', src: '/DGCA.jpeg' },
    { name: 'Drone TV', type: 'Media Partner', src: '/DroneTv.png' },
    { name: 'Corteva Agriscience', type: 'Industry Leader', src: '/Corteva.png' },
    { name: 'Drogo Drones', type: 'Technology Partner', src: '/Drogo.png' },
    { name: 'Woxon University', type: 'Academic Partner', src: '/Woxen.png' },
    { name: 'Marut Drones', type: 'Drone Manufacturer', src: '/marut.png' },
    { name: 'FTIH', type: 'Academic & Media Institute', src: '/ftih.png' }

  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}


      {/* Hero Intro */}
      <section className="pt-8 pb-20 lg:pt-10 lg:pb-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F15A24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#26A65B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Why Choose{' '}
                <span className="text-[#F15A24]">India Drone Academy</span>?
              </h1>
              <p className="text-2xl text-gray-600 mb-8 font-medium">
                DGCA-approved. Student-trusted. Future-ready.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                India Drone Academy leads India's UAV training ecosystem with DGCA-approved programs, hands-on learning, and high-end simulator labs. Our mission is to make drone certification accessible and career-focused.
              </p>

              {/* Trust Badge */}
              <div className="inline-flex items-center bg-[#26A65B] bg-opacity-10 text-[#26A65B] px-6 py-3 rounded-full font-bold mb-8">
                <Award className="w-5 h-5 mr-2" />
                2500+ Certified Drone Pilots Trained
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/apply"
                  className="bg-[#F15A24] text-white font-semibold text-base px-4 py-2 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center"
                >
                  Apply Now
                </a>
              </div>

            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#F15A24] to-[#D64A1A] rounded-2xl p-8 shadow-2xl">
                <img
                  src="/whyida.jpg"
                  alt="Students training at India Drone Academy"
                  className="w-full h-80 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-2xl font-bold text-[#26A65B]">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-2xl font-bold text-[#F15A24]">5 Days</div>
                <div className="text-sm text-gray-600">To Certification</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Vision & Mission */}
      <section className="py-0 lg:py-8 bg-white -mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Message */}
            <div>

              <div className="flex items-center mb-8">
                <img
                  src={founderMessage.image}
                  alt={founderMessage.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{founderMessage.name}</h4>
                  <p className="text-[#F15A24] font-medium">{founderMessage.title}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h5 className="font-bold text-gray-900 mb-3">Our Commitment to You:</h5>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                    Government-certified training that employers trust
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                    Hands-on experience with latest drone technology
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                    Career support that extends beyond certification
                  </li>
                </ul>
              </div>
            </div>

            {/* Video Thumbnail */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <iframe
                src="https://www.youtube.com/embed/AcgtRz2mEWo?autoplay=1&mute=1"
                title="Campus walkthrough video"
                className="w-full h-80 object-cover rounded-xl"
                allow="autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>



          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Message */}
            {/* Video Thumbnail */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={founderMessage.videoThumbnail}
                  alt="Campus walkthrough video"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 shadow-lg transform group-hover:scale-110 transition-all duration-200">
                    <Play className="w-8 h-8 text-[#F15A24] ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  Campus Tour - 2 min
                </div>
              </div>
            </div>
            <div>

              <div className="flex items-center mb-8">
                <img
                  src={founderMessage.image}
                  alt={founderMessage.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{founderMessage.name}</h4>
                  <p className="text-[#F15A24] font-medium">{founderMessage.title}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h5 className="font-bold text-gray-900 mb-3">Our Commitment to You:</h5>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                    Government-certified training that employers trust
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                    Hands-on experience with latest drone technology
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                    Career support that extends beyond certification
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Message */}
            <div>
              <div className="flex items-center mb-8">
                <img
                  src={founderMessage.image}
                  alt={founderMessage.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{founderMessage.name}</h4>
                  <p className="text-[#F15A24] font-medium">{founderMessage.title}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h5 className="font-bold text-gray-900 mb-3">Our Commitment to You:</h5>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                    Government-certified training that employers trust
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                    Hands-on experience with latest drone technology
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                    Career support that extends beyond certification
                  </li>
                </ul>
              </div>
            </div>

            {/* Video Thumbnail */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={founderMessage.videoThumbnail}
                  alt="Campus walkthrough video"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 shadow-lg transform group-hover:scale-110 transition-all duration-200">
                    <Play className="w-8 h-8 text-[#F15A24] ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  Campus Tour - 2 min
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Message */}
            {/* Video Thumbnail */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={founderMessage.videoThumbnail}
                  alt="Campus walkthrough video"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 shadow-lg transform group-hover:scale-110 transition-all duration-200">
                    <Play className="w-8 h-8 text-[#F15A24] ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  Campus Tour - 2 min
                </div>
              </div>
            </div>
            <div>

              <div className="flex items-center mb-8">
                <img
                  src={founderMessage.image}
                  alt={founderMessage.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{founderMessage.name}</h4>
                  <p className="text-[#F15A24] font-medium">{founderMessage.title}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h5 className="font-bold text-gray-900 mb-3">Our Commitment to You:</h5>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                    Government-certified training that employers trust
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                    Hands-on experience with latest drone technology
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                    Career support that extends beyond certification
                  </li>
                </ul>
              </div>
            </div>


          </div>



        </div>
      </section>

      {/* Team Members Scrolling Section */}
     <section className="py-16 lg:py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Meet Our Expert Team
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Passionate professionals including certified trainers, drone pilots, GIS experts, software developers, and video editors — bringing rich experience from aviation, technology, and training.
      </p>
    </div>

    {/* Scrolling Cards */}
    <div className="relative overflow-hidden">
      <div className="flex gap-6 animate-scroll py-8 w-max">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-[420px] bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-2/3 object-cover"
              loading="lazy"
            />
            <div className="flex-1 flex flex-col justify-end items-center text-center p-4">
              <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
              <p className="text-[#F15A24] font-medium text-sm mt-1">{member.designation}</p>
              <p className="text-gray-600 text-xs mt-1">{member.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Scroll Animation */}
  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    .animate-scroll {
      animation: scroll 60s linear infinite;
    }
    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>
</section>


      {/* Training Milestones */}
      <section className="py-8 lg:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Training Milestones</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">From application to career launch, we guide you through every step of becoming a certified drone pilot.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className={`relative bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-200 group ${index === activeStep ? 'ring-4 ring-[#F15A24]' : ''}`} onClick={() => setActiveStep(index)}>
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#F15A24] to-[#D64A1A] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon + Title and Description in Row */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${step.textColor}`} />
                    </div>

                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className={`${step.bgColor} p-4 rounded-lg`}>
                    <p className="text-sm text-gray-700">{step.details}</p>
                  </div>

                  {/* Active Indicator */}
                  {index === activeStep && <div className="absolute top-4 right-4 w-3 h-3 bg-[#26A65B] rounded-full animate-pulse"></div>}
                  {/* Arrow to Next Step */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden xl:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-[#F15A24] rounded-full flex items-center justify-center text-white">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mb-8 mt-8">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center space-x-4 mt-4">
                <span className="text-gray-600">Your Progress:</span>
                <div className="flex space-x-2">
                  {journeySteps.map((_, index) => (
                    <div key={index} className={`w-3 h-3 rounded-full cursor-pointer ${index <= activeStep ? 'bg-[#F15A24]' : 'bg-gray-300'}`} onClick={() => setActiveStep(index)}></div>
                  ))}
                </div>
                <span className="text-gray-600">Step {activeStep + 1} of {journeySteps.length}</span>
              </div>
            </div>
          </div>


          <div className="text-center">
            <div className="bg-gradient-to-br from-orange-600 to-orange-400
 rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">Join thousands of successful pilots who transformed their careers with our proven 5-step process.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/apply" className="bg-white text-[#F15A24] font-bold px-6 py-3 rounded-md hover:bg-[#D64A1A] transition-all duration-200 inline-flex items-center justify-center">
                  Begin Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="/courses" className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-md hover:bg-white hover:text-[#F15A24] transition-all duration-200">View All Courses</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Core Differentiators Grid */}
      <section className="pt-8 lg:pt-12 pb-12 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Makes Us India's Premier Drone Academy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Six core differentiators that set us apart from other training institutes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: 'DGCA-Approved RPTO', description: 'Officially recognized by DGCA', color: 'text-[#26A65B]', bgColor: 'bg-green-50' },
              { icon: Users, title: 'Expert Instructors', description: 'DGCA-rated trainers with industry experience', color: 'text-blue-600', bgColor: 'bg-blue-50' },
              { icon: Plane, title: 'Hands-on Flying', description: 'Simulator + real-world flying at certified zones', color: 'text-purple-600', bgColor: 'bg-purple-50' },
              { icon: Building, title: 'State-of-the-Art Facility', description: 'Modern classrooms, labs, and airspace', color: 'text-orange-600', bgColor: 'bg-orange-50' },
              { icon: Briefcase, title: 'Placement Support', description: 'Career guidance, job network', color: 'text-red-600', bgColor: 'bg-red-50' },
              {
                icon: Rocket,
                title: 'Entrepreneurship Enablement',
                description: 'Support to build your own drone business with mentorship',
                color: 'text-indigo-600',
                bgColor: 'bg-indigo-50'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-12 h-12 ${item.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Inspiring Young Minds: Drone Awareness for School Students
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IDA empowers school students through interactive workshops, live demos, and STEM-aligned drone education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Video Section */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/c-_51Uu537o?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1"
                title="Campus walkthrough video"
                className="w-full h-80 object-cover rounded-xl"
                allow="autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>


            {/* Content Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nurturing the Next Generation of Drone Innovators
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#26A65B] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Interactive Drone Demonstrations</h4>
                    <p className="text-gray-600">Live flight demos sparking curiosity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#26A65B] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Hands-on Experience</h4>
                    <p className="text-gray-600">Supervised drone flying sessions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#26A65B] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">STEM Education Integration</h4>
                    <p className="text-gray-600">Linking drone tech with science, math, and engineering.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#26A65B] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Career Exposure</h4>
                    <p className="text-gray-600">Introducing students to drone career paths.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-3xl font-bold text-[#F15A24] mb-2">50+</div>
              <div className="text-gray-700">Schools Visited</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-3xl font-bold text-[#F15A24] mb-2">5,000+</div>
              <div className="text-gray-700">Students Inspired</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-3xl font-bold text-[#F15A24] mb-2">12</div>
              <div className="text-gray-700">States Covered</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-3xl font-bold text-[#F15A24] mb-2">100%</div>
              <div className="text-gray-700">Student Engagement</div>
            </div>
          </div>
        </div>
      </section>


      {/* IDA vs Others Comparison */}
      <section className="py-8 lg:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How We Compare</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">See what makes us different before you decide.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gray-50 p-4 font-bold text-gray-900">
              <div>Feature</div>
              <div className="text-center text-[#F15A24]">India Drone Academy</div>
              <div className="text-center text-gray-500">Other Institutes</div>
            </div>

            {/* Table Rows */}
            {comparisonFeatures.map((feature, index) => (
              <div key={index} className={`grid grid-cols-3 p-4 border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-25' : 'bg-white'}`}>
                <div className="font-medium text-gray-900">{feature.feature}</div>
                <div className="text-center">{feature.ida === true ? <CheckCircle className="w-5 h-5 text-[#26A65B]" /> : <span className="text-[#26A65B] font-medium">{feature.ida}</span>}</div>
                <div className="text-center">{feature.others === false ? <X className="w-5 h-5 text-red-500" /> : feature.others === true ? <CheckCircle className="w-5 h-5 text-[#26A65B]" /> : <span className="text-gray-500 font-medium">{feature.others}</span>}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600 italic">"See what makes us different before you decide."</p>
          </div>
        </div>
      </section>



      {/* In the Media */}
      <section className="-mt-12 py-8 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              IDA In The Spotlight
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognized by government bodies, featured in media, and trusted by industry leaders.
            </p>
          </div>

          <div className="overflow-hidden relative">
            <div className="flex animate-marquee gap-12 py-6">
              {[...mediaLogos, ...mediaLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-transform duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="object-contain h-20 w-full mb-2"
                    loading="lazy"
                  />
                  <p className="text-base font-semibold text-center text-gray-700">{logo.name}</p>
                </div>
              ))}
            </div>
          </div>


        </div>

        <style jsx>{`
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-marquee {
      animation: marquee 35s linear infinite;
    }

    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `}</style>
      </section>



      {/* Student Voices */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hear From Our Pilots
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Real stories from real graduates who transformed their careers with India Drone Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#F15A24] mb-4" />

                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>

                {/* Achievement Highlight */}
                <div className="bg-[#26A65B] bg-opacity-10 rounded-lg p-3 mb-4">
                  <p className="text-[#26A65B] font-bold text-sm">
                    🎉 {testimonial.achievement}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-[#F15A24] text-sm font-medium">
                      {testimonial.course} • {testimonial.batch}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link to Success Stories */}
          <div className="text-center mt-8">
            <a
              href="/success-stories"
              className="inline-flex items-center text-[#F15A24] font-bold hover:text-[#D64A1A] transition-colors duration-200"
            >
              Read More Success Stories
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-6 lg:py-10 bg-gradient-to-br from-orange-600 to-orange-400 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Join India's Fastest-Growing Drone Pilot Community
          </h2>
          <p className="text-lg text-orange-100 mb-6 max-w-2xl mx-auto">
            Take your first flight with confidence. Let's get licensed together and soar to new heights in your career.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-3">
              <CheckCircle className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="font-medium">DGCA Certified Training</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-3">
              <CheckCircle className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="font-medium">100% Job Assistance</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-3">
              <CheckCircle className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="font-medium">Lifetime Support</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/apply"
              className="bg-white text-[#F15A24] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <button className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#F15A24] transition-all duration-200 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </button>
            <a
              href="https://wa.me/919876543210"
              className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#20B954] transition-all duration-200"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyIDAPage;