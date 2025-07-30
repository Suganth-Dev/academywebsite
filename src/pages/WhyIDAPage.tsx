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

 const founderMessages = [
  {
    name: 'Dev.R',
    title: 'Founder & CEO, India Drone Academy',
    image: '/devR.jpg',
    video: 'https://www.youtube.com/embed/AcgtRz2mEWo?autoplay=1&mute=1',
    commitments: [
      'Visionary leadership to make India a global drone hub',
      'Strategic partnerships with government and industry bodies',
      'Driving innovation in drone education and simulation platforms',
    ],
  },
  {
    name: 'Kamala',
    title: 'Cofounder & Administrator',
    image: '/kamala.jpg',
    video: 'https://www.youtube.com/embed/gJgU3C2lRBQ?autoplay=1&mute=1',
    commitments: [
      'Overseeing daily operations and student welfare',
      'Streamlining batch schedules and academic workflows',
      'Maintaining institutional compliance and documentation',
    ],
  },
  {
    name: 'Vamsi Krishna Kurakula',
    title: 'Director',
    image: '/vamsi.jpg',
    video: 'https://www.youtube.com/embed/v6sOYpMdwCo?autoplay=1&mute=1',
    commitments: [
      'Supervising DGCA-certified flight training modules',
      'Leading simulator platform integration and pilot evaluations',
      'Expanding the academy’s outreach through strategic collaborations',
    ],
  },
  {
    name: 'Sumit Krishnan',
    title: 'RPAS Instructor (Small & Med)',
    image: '/sumit.jpg',
    video: 'https://www.youtube.com/embed/KW3e0iEEavY?autoplay=1&mute=1',
    commitments: [
      'Conducting RPTO-certified ground and flight training',
      'Personal mentoring for RPAS license aspirants',
      'Ensuring safety protocols and flight drill excellence',
    ],
  },
];


const testimonials = [
  {
    id: 1,
    name: 'Vipin Kumar',
    role: 'Commercial Drone Pilot',
    course: 'DGCA Pilot Training',
    batch: 'March 2024',
    image: 'vipin.jpg',
    quote: 'The DGCA training at IDA gave me the confidence to operate drones professionally. The hands-on flying sessions and simulator access helped me master navigation and safety protocols.',
    rating: 5,
    achievement: 'Now flying drones for infrastructure inspection projects across Maharashtra'
  },
  {
    id: 2,
    name: 'Dhondi Jugge Rishika',
    role: 'Agriculture Drone Specialist',
    course: 'Agriculture Drone Training',
    batch: 'February 2024',
    image: '/Rishika.jpg',
    quote: 'IDA’s Women Drone Program opened up a whole new world for me. I gained not just skills in spraying and crop health monitoring, but also the courage to conduct training demos in rural areas.',
    rating: 5,
    achievement: 'Currently supporting women-led agri groups in drone spraying across 12 villages'
  },
  {
    id: 3,
    name: 'Satish',
    role: 'Survey & Mapping Expert',
    course: 'DGCA Pilot Training',
    batch: 'January 2024',
    image: 'satish.jpg',
    quote: 'The outdoor training and map creation sessions at IDA helped me move from just learning GIS in theory to actually using drones for real surveying work.',
    rating: 5,
    achievement: 'Now working on urban land mapping projects using drone-GIS integration'
  }
];

  const teamMembers = [
    {
      name: "Dev.R",
      designation: "Founder & CEO",
      image: "/devR.jpg",
      experience: "15+ years in aviation",
      icon: "🎯",
    },
 
    {
      name: "Vamsi Krishna Kurakula",
      designation: "Director",
      image: "/vamsi.jpg",
      experience: "DGCA Certified RPAS Instructor",
      icon: "🧭",
    },
    {
      name: "Sumit Krishnan",
      designation: "RPAS Instructor (Med & Small)",
      image: "/sumit.jpg",
      experience: "Aeronautical Engineer, A.M.AeSI, Author",
      icon: "📘",
    },
    {
      name: "V HariPrakash Raju",
      designation: "Remote Pilot",
      image: "/hari.jpg",
      experience: "Business Development",
      icon: "🚁",
    },
    {
      name: "Pagidi Srikanth",
      designation: "Remote Pilot",
      image: "/srikanth.jpg",
      experience: "UAV Maintenance Engineer",
      icon: "🛠️",
    },
    {
      name: "G Rakesh",
      designation: "Remote Pilot",
      image: "/rakesh.jpg",
      experience: "Precision Farming Expert",
      icon: "🌾",
    },
  
  ];
  const mediaLogos = [
     { name: 'CITD', type: 'Academic & Media Institute', src: '/citd.png' },
     { name: 'DTEA', type: 'Academic & Media Institute', src: '/dtea.jpg' },
      { name: 'NCC', type: 'Academic & Media Institute', src: '/ncc.png' },
       { name: 'SVCFA', type: 'Academic & Media Institute', src: '/svcfa.jpg' },
        { name: 'DroneTv', type: 'Academic & Media Institute', src: '/DroneTv.png' },
         { name: 'DroneExpo', type: 'Academic & Media Institute', src: '/droneexpo.jpg' },
    { name: 'DGCA', type: 'Government Body', src: '/DGCA.jpeg' },
    { name: 'Drone TV', type: 'Media Partner', src: '/DroneTv.png' },
    { name: 'Corteva Agriscience', type: 'Industry Leader', src: '/Corteva.png' },
    { name: 'Drogo Drones', type: 'Technology Partner', src: '/Drogo.png' },
    { name: 'Woxon University', type: 'Academic Partner', src: '/Woxen.png' },
    { name: 'Marut Drones', type: 'Drone Manufacturer', src: '/marut.png' },
   

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
              <div className="relative bg-gradient-to-br from-[#F15A24] to-[#D64A1A] rounded-2xl p-8 shadow-2xl overflow-hidden">
                {/* Auto-scroll image wrapper */}
                <div className="relative w-full overflow-hidden">
                  <div className="flex gap-4 animate-imageScroll w-max">
                    {/* Duplicate images to make seamless scroll */}
                    {[...Array(2)].map((_, i) => (
                      <React.Fragment key={i}>
                        <img
                          src="/whyida.jpg"
                          alt="Students training 1"
                          className="h-80 min-w-[300px] object-cover rounded-lg"
                          loading="lazy"
                        />
                        <img
                          src="/whyida1.jpg"
                          alt="Students training 1"
                          className="h-80 min-w-[300px] object-cover rounded-lg"
                          loading="lazy"
                        />
                        <img
                          src="/whyida6.jpg"
                          alt="Students training 2"
                          className="h-80 min-w-[300px] object-cover rounded-lg"
                          loading="lazy"
                        />
                        <img
                          src="/whyida2.jpg"
                          alt="Students training 2"
                          className="h-80 min-w-[300px] object-cover rounded-lg"
                          loading="lazy"
                        />
                        <img
                          src="/whyida3.jpg"
                          alt="Students training 3"
                          className="h-80 min-w-[300px] object-cover rounded-lg"
                          loading="lazy"
                        />
                        <img
                          src="/whyida4.jpg"
                          alt="Students training 4"
                          className="h-80 min-w-[300px] object-cover rounded-lg"
                          loading="lazy"
                        />
                        <img
                          src="/whyida5.jpg"
                          alt="Students training 5"
                          className="h-80 min-w-[300px] object-cover rounded-lg"
                          loading="lazy"
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
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

              {/* Scoped CSS for animation */}
              <style jsx>{`
    @keyframes imageScroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-imageScroll {
      animation: imageScroll 40s linear infinite;
    }
  `}</style>
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

          {founderMessages.map((person, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {index % 2 === 0 ? (
                <>
                  {/* Text Left */}
                  <div>
                    <div className="flex items-center mb-8">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{person.name}</h4>
                        <p className="text-[#F15A24] font-medium">{person.title}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h5 className="font-bold text-gray-900 mb-3">Our Commitment to You:</h5>
                      <ul className="space-y-2">
                        {person.commitments.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Video Right */}
                  <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <iframe
                      src={person.video}
                      title={`${person.name} video`}
                      className="w-full h-80 object-cover rounded-xl"
                      allow="autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Video Left */}
                  <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <iframe
                      src={person.video}
                      title={`${person.name} video`}
                      className="w-full h-80 object-cover rounded-xl"
                      allow="autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>

                  {/* Text Right */}
                  <div>
                    <div className="flex items-center mb-8">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{person.name}</h4>
                        <p className="text-[#F15A24] font-medium">{person.title}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h5 className="font-bold text-gray-900 mb-3">Our Commitment to You:</h5>
                      <ul className="space-y-2">
                        {person.commitments.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 text-[#26A65B] mr-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
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
              Passionate professionals including certified trainers, drone pilots,
              GIS experts, software developers, and video editors — bringing rich
              experience from aviation, technology, and training.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-10 animate-scroll w-max py-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 text-center transition-transform transform hover:-translate-y-2 relative"
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#F15A24] shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Centered Icon Badge at Bottom */}
                   

                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                  <p className="text-[#F15A24] text-sm font-medium mt-1">{member.designation}</p>
                  <p className="text-gray-600 text-xs mt-1">{member.experience}</p>
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
      animation: scroll 50s linear infinite;
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