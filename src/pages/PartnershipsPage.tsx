import React, { useState, useRef, useEffect } from 'react';
import {
  Rocket,
  Users,
  Building,
  CheckCircle,
  Star,
  Briefcase,
  ArrowRight,
  Quote,
  Calendar,
  Settings,
  Mail,
  Phone,
  User,
  MessageSquare,
  Building2,
  Megaphone,
  Cpu,
  MapPin,
  Award,
} from 'lucide-react';

const PartnershipsPage: React.FC = () => {


  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    mobile: '',
    cityState: '',
    website: '',
    partnershipType: [] as string[],
    daas: '',
    keyAreaGroup: [] as string[],
    projectVision: '',
    attachments: null as File | null,
  });


  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const thankYouRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll effect
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollIntervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % partnershipTypes.length;
          return nextIndex;
        });
      }, 3000); // Change card every 3 seconds
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);

  // Update scroll position when currentIndex changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; // 300px width + 20px gap
      const scrollPosition = currentIndex * cardWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  // Handle manual scroll
  const handleManualScroll = (direction: 'left' | 'right') => {
    setIsAutoScrolling(false);

    if (direction === 'left') {
      setCurrentIndex(prevIndex =>
        prevIndex === 0 ? partnershipTypes.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex(prevIndex => (prevIndex + 1) % partnershipTypes.length);
    }

    // Resume auto-scrolling after 5 seconds
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  // Pause auto-scroll on hover


  // Resume auto-scroll on mouse leave


  useEffect(() => {
    if (isSubmitted && thankYouRef.current) {
      const offset = thankYouRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }, [isSubmitted]);

  const partnershipTypes = [
    {
      icon: User,
      title: 'Drone Pilots',
      description: 'Join India’s top drone pilot network for jobs, missions & rewards.',
      examples: [
        'DGCA & advanced drone training',
        'National job opportunities',
        'Paid flight missions & simulator credits',
        'Freelance onboarding via IDA',
        'Referral & earn programs'
      ],
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Building,
      title: 'Colleges & Universities',
      description: 'Empower students through drone and GIS-integrated curriculum and labs.',
      examples: [
        'Curriculum for CSE/ECE/EEE & civil',
        'Drone & GIS lab setup',
        'Workshops & internships',
        'Faculty certifications & MoUs',
        'Placement and project collaboration'
      ],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Rocket,
      title: 'Drone Manufacturers',
      description: 'Deploy drones with certified training, testing, and exposure.',
      examples: [
        'AI-ready drone kits for training',
        'Payload customization support',
        'GIS-enabled deployment testing',
        'Showcase at IDA expos'
      ],
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Cpu,
      title: 'Software & AI Developers',
      description: 'Build drone automation and intelligence systems with us.',
      examples: [
        'Flight simulator integration',
        'Object detection & computer vision',
        'GIS mapping & analytics tools',
        'Real-time automation systems'
      ],
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Briefcase,
      title: 'Drone As a Service Providers (DAAS)',
      description: 'Partner on spraying, survey, inspection, data delivery, etc.',
      examples: [
        'Access to certified drone pilots',
        'Project execution support',
        'Joint bidding & data services',
        'DAAS-based deployment'
      ],
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: MapPin,
      title: 'Agritech & Farmer Groups',
      description: 'Bring precision agri solutions to the grassroots with drone tech.',
      examples: [
        'Aerial spraying & seeding',
        'NDVI crop health monitoring',
        'Kisan Drone & Drone Didi programs',
        'Land mapping & chakbandi'
      ],
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Settings,
      title: 'RPTOs & Training Institutes',
      description: 'Enhance your RPTO capabilities with IDA tools and support.',
      examples: [
        'Simulator integration & upgrades',
        'Access to e-learning resources',
        'Joint certifications',
        'Tech support & licensing aid'
      ],
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Megaphone,
      title: 'Media & Event Agencies',
      description: 'Create impactful drone stories, events, and media content.',
      examples: [
        'Aerial photography & video training',
        'Drone TV coverage & interviews',
        'Live drone shows & reels',
        'Media student internships'
      ],
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: Award,
      title: 'Government & NGOs',
      description: 'Deploy drone training for skill development and public welfare.',
      examples: [
        'Skill India & PMKVY tie-ups',
        'Women skilling via Drone Didi',
        'Smart city & rural surveys',
        'Post-disaster drone response'
      ],
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: MapPin,
      title: 'GIS Experts & Organizations',
      description: 'Partner on drone-powered spatial intelligence projects.',
      examples: [
        'GIS data capture via drones',
        'Land use & environmental mapping',
        'AI-powered GIS dashboards',
        'Training & Web GIS collaboration'
      ],
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  const existingPartners = [
    { name: 'Corteva Agriscience', logo: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Agriculture Technology' },
    { name: 'Drone TV', logo: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Media Partner' },
    { name: 'Zen Technologies', logo: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Simulation Technology' },
    { name: 'Wizeiz LLP', logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Technology Solutions' },
    { name: 'Drongo Drones', logo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Drone Manufacturing' },
    { name: 'AP Drone Corporation', logo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Government Partner' }
  ];

  const benefits = [
    'Access to 2500+ certified pilots across India',
    'DGCA-approved training infrastructure',
    'Real-world testing grounds (simulators + outdoor)',
    'Joint branding and media exposure',
    'Collaboration in government drone programs',
    'Feature opportunities on Drone TV',
    'Pan-India network of training centers',
    'Industry-leading placement success rates',
    'Ongoing technical and business support'
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      role: 'VP Technology',
      company: 'Corteva Agriscience',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'Our partnership with IDA has been instrumental in advancing precision agriculture across India. Their trained pilots understand both technology and farming, making them invaluable for our field operations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Head of Operations',
      company: 'Zen Technologies',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'IDA\'s commitment to quality training and their state-of-the-art facilities make them the perfect partner for our simulation technology. Together, we\'re shaping the future of drone training.',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Kumar',
      role: 'Founder & CEO',
      company: 'Drongo Drones',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'The technical expertise and industry knowledge at IDA is unmatched. Our hardware integration partnership has opened new markets and enhanced our product development significantly.',
      rating: 5
    }
  ];
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement; // Type assertion for HTMLInputElement
    const { name, value, type } = target;

    if (type === 'checkbox') {
      // For 'checkbox' inputs, handle the checked state
      if (name === 'partnershipType') {
        const updatedPartnershipTypes = target.checked
          ? [...formData.partnershipType, value]
          : formData.partnershipType.filter(item => item !== value);
        setFormData(prevState => ({ ...prevState, partnershipType: updatedPartnershipTypes }));
      }
      if (name === 'keyAreaGroup') {
        const updatedKeyAreas = target.checked
          ? [...formData.keyAreaGroup, value]
          : formData.keyAreaGroup.filter(item => item !== value);
        setFormData(prevState => ({ ...prevState, keyAreaGroup: updatedKeyAreas }));
      }
    } else if (type === 'radio') {
      // For 'radio' inputs, directly set the value
      setFormData(prevState => ({ ...prevState, [name]: value }));
    } else if (type === 'file') {
      // Handle file uploads
      if (target.files) {
        const file = target.files[0] || null; // If no file selected, set it to null
        setFormData(prevState => ({ ...prevState, attachments: file }));
      }
    } else {
      // For text inputs and others, just update the value
      setFormData(prevState => ({ ...prevState, [name]: value }));
    }
  };





  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://clxqhy12ik.execute-api.ap-south-1.amazonaws.com/postpartner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          fullName: '',
          organization: '',
          email: '',
          mobile: '',
          cityState: '',
          website: '',
          partnershipType: [],
          daas: '',
          keyAreaGroup: [],
          projectVision: '',
          attachments: null,
        });
      } else {
        alert('Error submitting the form.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form.');
    }
  };



  const partnershipOptions: { label: string; value: string }[] = [
    { label: 'Drone Technology Partnership', value: 'technology' },
    { label: 'Simulator & Hardware Vendor', value: 'hardware' },
    { label: 'Corporate Training Tie-Up', value: 'corporate' },
    { label: 'Placement & Recruitment Partner', value: 'recruitment' },
    { label: 'Startup Incubation Partner', value: 'incubation' },
    { label: 'Media & Outreach Collaborator', value: 'media' },
    { label: 'Other (specify in message)', value: 'other' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    const collaborators = [
    { name: 'DGCA', type: 'Government Body', src: '/DGCA.jpeg' },
    { name: 'Drone TV', type: 'Media Partner', src: '/DroneTv.png' },
    { name: 'Corteva Agriscience', type: 'Industry Leader', src: '/Corteva.png' },
    { name: 'Drogo Drones', type: 'Technology Partner', src: '/Drogo.png' },
    { name: 'Woxon University', type: 'Academic Partner', src: '/Woxen.png' },
    { name: 'Marut Drones', type: 'Drone Manufacturer', src: '/marut.png' },
    { name: 'FTIH', type: 'Academic & Media Institute', src: '/ftih.png' }
  ];
const scrollingLogos = [...collaborators, ...collaborators];
  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}

      {/* Hero Section */}
      <section className="pt-4 pb-16 lg:pt-6 lg:pb-20 relative overflow-hidden mt-8">
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
                Partner With India's{' '}
                <span className="text-[#F15A24]">Premier Drone Training Ecosystem</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Together, let's shape the future of drone innovation, training, and deployment across India and beyond.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-[#26A65B]" />
                  <span>DGCA Approved</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-[#26A65B]" />
                  <span>2500+ Pilots Trained</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2 text-[#26A65B]" />
                  <span>50+ Training Centers</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#F15A24] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#F15A24] to-[#D64A1A] rounded-2xl p-8 shadow-2xl">
               <img
  src="/partner1.png"  // Reference the image from the public folder
  alt="Partnership collaboration showing flight demos, equipment, simulators, and industry presence"
  className="w-full h-80 object-cover rounded-lg"
  loading="lazy"
/>

              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-2xl font-bold text-[#26A65B]">500+</div>
                <div className="text-sm text-gray-600">Active Partners</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-2xl font-bold text-[#F15A24]">15+</div>
                <div className="text-sm text-gray-600">Industries</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Partnership Types */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore Our Partnership Opportunities
            </h2>
            <div className="w-full">
              <p className="text-lg sm:text-xl text-gray-600">
                From technology integration to talent acquisition, we offer diverse partnership models to drive mutual growth and innovation.
              </p>
            </div>
          </div>


          {/* Auto-scrolling Container */}
          <div className="relative">
            {/* Left Button */}
            <button
              onClick={() => handleManualScroll('left')}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Cards Container - Shows exactly 3 cards */}
            <div className="overflow-hidden">
              <div
                ref={scrollContainerRef}
                className="flex gap-5 transition-transform duration-500 ease-in-out"
                style={{
                  width: `${partnershipTypes.length * 320}px`,
                  transform: `translateX(-${currentIndex * 320}px)`
                }}
              >
                {partnershipTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <div
                      key={index}
                      className="w-[300px] flex-shrink-0 flex flex-col bg-white shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border rounded-2xl"
                    >
                      {/* Header */}
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-white rounded-t-2xl">

                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-md flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold">{type.title}</h3>
                        </div>
                        <p className="text-sm text-white/90">{type.description}</p>

                      </div>

                      {/* Content */}
                      <div className="p-4 flex-1 flex flex-col justify-between rounded-b-2xl">
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Areas:</h4>
                          <ul className="space-y-1 text-xs mb-4">
                            {type.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex} className="flex items-start">
                                <CheckCircle className="w-3.5 h-3.5 text-[#26A65B] mr-2 mt-0.5" />
                                <span className="text-gray-700 leading-snug">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button
                          onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
                          className="mt-auto bg-[#F15A24] text-white text-xs font-bold py-2 px-3 rounded-md hover:bg-[#D64A1A] transition"
                        >
                          Explore Partnership
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={() => handleManualScroll('right')}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}


            {/* Manual Play / Pause Controls */}
            <div className="flex flex-col items-center mt-6 space-y-2">
              {/* Dots */}
              <div className="flex space-x-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${currentIndex === i ? 'bg-[#F15A24]' : 'bg-gray-300'}`}
                  />
                ))}
              </div>

              {/* Toggle Play/Pause Text */}
              <div
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                className="text-sm font-medium text-gray-700 cursor-pointer hover:text-[#F15A24]"
              >
                {isAutoScrolling ? 'Pause' : 'Play'}
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* Existing Partners */}
        <section className="py-10 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
       <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We've Worked With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies across technology, agriculture, media, and government sectors.
            </p>
          </div>

        {/* Auto-scrolling Strip */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <div className="flex animate-scroll space-x-6 py-4 justify-center">
            {scrollingLogos.map((collaborator, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200 min-w-[160px] text-center group"
              >
                <img
                  src={collaborator.src}
                  alt={`${collaborator.name} Logo`}
                  className="w-24 h-24 object-contain mx-auto mb-3 group-hover:scale-110 transition-transform duration-200"
                />
                <h3 className="font-semibold text-gray-900 text-xs mb-0.5">{collaborator.name}</h3>
                <p className="text-[10px] text-gray-600">{collaborator.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 bg-white rounded-xl p-6 lg:p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left Info */}
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                Government Recognition & Industry Trust
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  {
                    title: 'DGCA Approved Training Center',
                    desc: 'Official certification recognized across India'
                  },
                  {
                    title: 'Industry Partnerships',
                    desc: 'Direct placement opportunities with leading companies'
                  },
                  {
                    title: 'Academic Collaborations',
                    desc: 'Research partnerships with top educational institutes and universities'
                  },
                  {
                    title: 'Technology Integration',
                    desc: 'Latest drone technology and equipment'
                  }
                ].map((item, idx) => (
                  <div className="flex items-start" key={idx}>
                    <div className="w-2 h-2 bg-[#26A65B] rounded-full mt-1.5 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { color: '#F15A24', value: '15+', label: 'Hiring Partners' },
                { color: '#26A65B', value: '6+', label: 'Training Centers' },
                { color: '#3B82F6', value: '6+', label: 'States Covered' },
                { color: '#8B5CF6', value: '100%', label: 'Job Assistance' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center rounded-lg p-4"
                  style={{ backgroundColor: `${item.color}1A` }}
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: item.color }}>
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-700 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-scroll {
      animation: scroll 30s linear infinite;
    }

    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>
    </section>


      {/* Benefits Section */}
      <section className="py-4 lg:py-8 bg-white"> {/* Reduced padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> {/* Reduced gap */}
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"> {/* Reduced margin-bottom */}
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-600 mb-4"> {/* Reduced margin-bottom */}
                Leverage our expertise, infrastructure, and network to accelerate your business growth in the drone ecosystem.
              </p>

              <div className="space-y-3"> {/* Reduced space between benefits */}
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#26A65B] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/partner2.png"
                  alt="Partnership benefits visualization"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Partnership Success</h4>
                  <p className="text-white/90">Building the future of drone technology together</p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4"> {/* Reduced padding */}
                <div className="text-3xl font-bold text-[#F15A24] mb-2">100%</div>
                <div className="text-gray-600 font-medium">Partner Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      {/* <section className="py-8 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"> 
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Hear from industry leaders who have successfully partnered with us to drive innovation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              
                <Quote className="w-10 h-10 text-[#F15A24] mb-4" /> 
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

              
                <blockquote className="text-gray-700 leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>

               
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-[#F15A24] text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* Partnership Form */}
      <section id="partnership-form" className="pt-16 pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Partner with India Drone Academy – Strategic Collaboration Form
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              India Drone Academy (IDA) invites you to join hands through specialized partnership models, including our <strong>DAAS (Drone As a Service)</strong> program. This form helps us explore synergies tailored to your goals.
            </p>
            <p className="text-sm text-gray-500 mt-2"><strong>* All fields marked with an asterisk are required</strong></p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:pt-12 lg:pb-6">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2"><strong>Full Name *</strong></label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Organization Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Organization/Company Name</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2"><strong>Email ID *</strong></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2"><strong>Mobile Number *</strong></label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              {/* City & State */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2"><strong>City & State *</strong></label>
                <input
                  type="text"
                  name="cityState"
                  value={formData.cityState}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Website */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Select Your Partnership Type */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2"><strong>Select Your Partnership Type *</strong></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {['Drone Pilots', 'Drone Manufacturers', 'Software & AI Developers', 'Drone As a Service Providers', 'Agritech & Farmer Groups', 'RPTOs & Drone Training Institutes', 'Media & Event Agencies', 'Government & NGOs', 'GIS Experts & Organizations'].map(type => (
                    <label key={type}>
                      <input
                        type="checkbox"
                        name="partnershipType"
                        value={type}
                        checked={formData.partnershipType.includes(type)}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              {/* DAAS Opportunities */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2"><strong>Are you interested in DAAS opportunities? *</strong></label>
                <label>
                  <input
                    type="radio"
                    name="daas"
                    value="offer"
                    checked={formData.daas === 'offer'}
                    onChange={handleInputChange}
                  />
                  Yes, I want to offer my drone services under DAAS
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="daas"
                    value="hire"
                    checked={formData.daas === 'hire'}
                    onChange={handleInputChange}
                  />
                  Yes, I want to hire drones/pilots via DAAS
                </label>
              </div>

              {/* Key Areas of Interest */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2"><strong>Key Areas of Interest *</strong></label>
                <p className="text-sm text-gray-500 mb-4">Please select all areas of interest under your chosen partnership type(s):</p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  {[
                    { title: 'Drone Pilots', options: 'DGCA training, Paid Missions, Simulator Access, Freelance Onboarding, DAAS Deployment' },
                    { title: 'Drone Manufacturers', options: 'AI-ready Drone Kits, Payload Customization, GIS Testing, Expos & Demos, DAAS Equipment Supply' },
                    { title: 'Software & AI Developers', options: 'Flight Sim APIs, Object Detection, GIS Tools, Real-time Automation' },
                    { title: 'Drone As a Service Providers', options: 'Certified Pilot Access, Joint Project Bidding, Survey Partnerships, DAAS Operational Scaling' },
                    { title: 'Agritech & Farmer Groups', options: 'Aerial Spraying/Seeding, NDVI Health Analysis, Drone Didi Training, Land Mapping' },
                    { title: 'RPTOs & Training Institutes', options: 'Simulator Setup, Courseware Access, Co-certification, DAAS Collaboration' },
                    { title: 'Media & Event Agencies', options: 'Aerial Photography Training, Event Coverage, Live Drone Shows, Intern Collab' },
                    { title: 'Government & NGOs', options: 'Skill India Integration, Women Upliftment via Drone Didi, Smart City Surveys, DAAS for Public Services' },
                    { title: 'GIS Experts & Orgs', options: 'Data Collection, Land Use Mapping, AI Dashboard Integration, Drone-GIS Training' }
                  ].map(group => (
                    <div key={group.title} className="flex items-start space-x-4">
                      <label className="inline-flex items-center font-semibold whitespace-nowrap">
                        <input
                          type="checkbox"
                          name="keyAreaGroup"
                          value={group.title}
                          checked={formData.keyAreaGroup.includes(group.title)}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        {group.title}
                      </label>
                      <p className="text-gray-700 flex-1">{group.options}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Vision */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2"><strong>Project Vision *</strong></label>
                <textarea
                  name="projectVision"
                  value={formData.projectVision}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Tell us how you envision this partnership. What problems are you solving or exploring?"
                />
              </div>

              {/* File Upload (Optional) */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">File Upload (Optional)</label>
                <input
                  type="file"
                  name="attachments"
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F15A24] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#D64A1A] transition-all duration-200"
              >
                Submit Partnership Request
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-6 lg:py-10 bg-gradient-to-br from-orange-600 to-orange-400 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4"> {/* Reduced margin */}
            Need to Talk to Us Directly?
          </h2>
          <p className="text-xl text-orange-100 mb-6"> {/* Reduced margin */}
            Our partnership team is ready to discuss opportunities and answer any questions you may have.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center"> {/* Reduced gap */}
            <a
              href="https://calendly.com/indiadroneacademy/partnership-discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#F15A24] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </a>
            <a
              href="https://wa.me/919188883344?text=Hi, I'm interested in exploring partnership opportunities with IDA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#20B954] transition-all duration-200 flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PartnershipsPage;