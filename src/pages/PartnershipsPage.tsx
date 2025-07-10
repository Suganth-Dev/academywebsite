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

  type PartnershipFormData = {
    companyName: string;
    contactPerson: string;
    designation: string;
    email: string;
    phone: string;
    city: string;
    partnershipType: string[];
    message: string;
    otherPartnership: string;
    revenue: string;
    clients: string;
    website: string;
    experience: string;
    teamSize: string;
    model: string;
    linkedin: string;
    gst: string;
    droneExperience: string;
  };

  const [formData, setFormData] = useState<PartnershipFormData>({
    companyName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    city: '',
    partnershipType: [],
    message: '',
    otherPartnership: '', // 
    revenue: '',
    clients: '',
    website: '',
    experience: '',
    teamSize: '',
    model: '',
    linkedin: '',
    gst: '',
    droneExperience: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const thankYouRef = useRef<HTMLDivElement | null>(null);

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
      description: 'Join India’s fastest-growing pilot network and unlock jobs, missions, and rewards.',
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
      title: 'Drone Service Providers',
      description: 'Partner on inspections, surveys, and data delivery with skilled pilots.',
      examples: [
        'Access to certified drone pilots',
        'Project execution support',
        'Joint bidding & data services',
        'Visualization & reporting tools'
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
    'Scalable partner models (revenue-share / flat-fee / licensing)',
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
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;

    if (type === 'checkbox' && name === 'partnershipType') {
      const checked = target.checked;
      const newSelection = checked
        ? [...formData.partnershipType, value]
        : formData.partnershipType.filter(item => item !== value);
      setFormData({ ...formData, partnershipType: newSelection });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://clxqhy12ik.execute-api.ap-south-1.amazonaws.com/postpartner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Network response was not ok');

      setIsSubmitting(false);
      setIsSubmitted(true); // 👈 Instantly replaces the form
      // REMOVE THIS LINE 👇
      // window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setIsSubmitting(false);
      console.error('Submission failed:', error);
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}


      {/* Hero Section */}
      <section className="pt-4 pb-16 lg:pt-6 lg:pb-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
                  src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Explore Our Partnership Opportunities
      </h2>
      <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
        From technology integration to talent acquisition, we offer diverse partnership models to drive mutual growth and innovation.
      </p>
    </div>

    {/* Scrollable Container */}
    <div className="relative">
      {/* Left Button */}
      <button
        onClick={() => document.getElementById('partner-scroll')?.scrollBy({ left: -900, behavior: 'smooth' })}
        className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border shadow-md rounded-full w-10 h-10 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Cards Scroll Area - Show 3 at a time */}
      <div
        id="partner-scroll"
        className="overflow-x-auto flex gap-6 px-12 snap-x snap-mandatory scroll-smooth scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {partnershipTypes.map((type, index) => {
          const IconComponent = type.icon;
          return (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] snap-start flex-shrink-0 flex flex-col bg-white shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border rounded-2xl"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${type.gradient} p-4 text-white rounded-t-2xl`}>
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-md flex items-center justify-center mb-3">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{type.title}</h3>
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

      {/* Right Button */}
      <button
        onClick={() => document.getElementById('partner-scroll')?.scrollBy({ left: 900, behavior: 'smooth' })}
        className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border shadow-md rounded-full w-10 h-10 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>



      {/* Existing Partners */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We've Worked With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies across technology, agriculture, media, and government sectors.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-12">
            {existingPartners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-600">
                  {partner.type}
                </p>
              </div>
            ))}
          </div>

          {/* Featured In Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
                Featured In
              </h2>
              <div className="text-center">
                <p className="text-gray-600 mb-8 text-xl font-semibold"></p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center">

                  {[
                    {
                      name: 'The Hindu',
                      img: '/5.jpg',
                      info: 'National Daily Coverage'
                    },
                    {
                      name: 'Eenadu',
                      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Eenadu_logo.svg/512px-Eenadu_logo.svg.png',
                      info: 'Regional Telugu Feature'
                    },
                    {
                      name: 'Times of India',
                      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/The_Times_of_India_logo.svg/512px-The_Times_of_India_logo.svg.png',
                      info: 'Tech & Education Column'
                    },
                    {
                      name: 'Business Standard',
                      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Business_Standard_logo.svg/512px-Business_Standard_logo.svg.png',
                      info: 'Business Feature'
                    },
                    {
                      name: 'Economic Times',
                      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/The_Economic_Times_logo.svg/512px-The_Economic_Times_logo.svg.png',
                      info: 'Start-up Highlights'
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white shadow-xl rounded-2xl p-8 min-h-[220px] flex flex-col items-center text-center"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-32 h-32 rounded-xl object-contain bg-white mb-5 border border-gray-200 shadow-sm"
                      />

                      <p className="font-semibold text-gray-800 text-base mb-1">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.info}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Leverage our expertise, infrastructure, and network to accelerate your business growth in the drone ecosystem.
              </p>

              <div className="space-y-4">
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
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold text-[#F15A24] mb-2">100%</div>
                <div className="text-gray-600 font-medium">Partner Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from industry leaders who have successfully partnered with us to drive innovation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#F15A24] mb-6" />

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
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
      </section>

      {/* Partnership Form */}
      <section id="partnership-form" className="pt-16 pb-0 bg-white">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let's Build a Drone-Powered Future Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Share your goals and we'll tailor a partnership approach that fits your business needs and objectives.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:pt-12 lg:pb-6">

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization Name *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="contactPerson"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-2">
                      Designation *
                    </label>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                      placeholder="CEO, CTO, Business Development Manager, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City / Region *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="City, State, Country"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
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
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Partnership *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-4">
                    {partnershipOptions.map(option => (
                      <label
                        key={option.value}
                        className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-[#F15A24] transition-all"
                      >
                        <input
                          type="checkbox"
                          name="partnershipType"
                          value={option.value}
                          checked={formData.partnershipType.includes(option.value)}
                          onChange={handleInputChange}
                          className="h-5 w-5 text-[#F15A24] mr-4"
                        />
                        <span className="text-gray-800 font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {formData.partnershipType.includes('other') && (
                    <div className="mt-4">
                      <input
                        type="text"
                        name="otherPartnership"
                        placeholder="Please specify"
                        value={formData.otherPartnership}
                        onChange={handleInputChange}
                        className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">Last Year Turnover *</label>
                    <select id="revenue" name="revenue" value={formData.revenue} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                      <option value="">Select</option>
                      <option value="<10L">Less than ₹10 Lakh</option>
                      <option value="10-50L">₹10–50 Lakh</option>
                      <option value="50L-2Cr">₹50 Lakh – 2 Cr</option>
                      <option value="2-10Cr">₹2–10 Cr</option>
                      <option value=">10Cr">Above ₹10 Cr</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">Company Website</label>
                    <input type="url" id="website" name="website" value={formData.website} onChange={handleInputChange} placeholder="https://example.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Company Tenure</label>
                    <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div className="mb-4 w-full">
                    <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-1">
                      Team Size
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                    >

                      <option value="">Select Team Size</option>
                      <option value="1–5">1–5</option>
                      <option value="6–10">6–10</option>
                      <option value="11–15">11–15</option>
                      <option value="16–25">16–25</option>
                      <option value="26–50">26–50</option>
                      <option value="51–100">51–100</option>
                      <option value="101+">101+</option>
                    </select>

                  </div>

                </div>

                <div>
                  <label htmlFor="clients" className="block text-sm font-medium text-gray-700 mb-2">Key Clients / Industries</label>
                  <textarea id="clients" name="clients" value={formData.clients} onChange={handleInputChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Mention a few key clients or sectors you serve." />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                    <input type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="https://linkedin.com/in/yourprofile" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">GST / Business Registration No.</label>
                    <input type="text" id="gst" name="gst" value={formData.gst} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label htmlFor="droneExperience" className="block text-sm font-medium text-gray-700 mb-2">Past Drone Collaboration?</label>
                    <input type="text" id="droneExperience" name="droneExperience" value={formData.droneExperience} onChange={handleInputChange} placeholder="Yes / No. If yes, describe briefly." className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message / Proposal *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your company, partnership goals, specific requirements, or any questions you have..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F15A24] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting Partnership Request...
                    </>
                  ) : (
                    <>
                      Submit Partnership Request
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div ref={thankYouRef} className="text-center py-8">
                <div className="w-16 h-16 bg-[#26A65B] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#26A65B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Partnership Request Received!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in partnering with India Drone Academy. Our business development team will review your proposal and get back to you soon.
                </p>
                <div className="bg-[#26A65B] bg-opacity-10 rounded-lg p-4">
                  <p className="text-[#26A65B] font-medium">
                    📧 You'll receive a confirmation email shortly with next steps and additional information about our partnership programs.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#F15A24] to-[#26A65B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need to Talk to Us Directly?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Our partnership team is ready to discuss opportunities and answer any questions you may have.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/indiadroneacademy/partnership-discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#F15A24] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </a>
            <a
              href="https://wa.me/919188883344?text=Hi, I'm interested in exploring partnership opportunities with IDA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#20B954] transition-all duration-200 flex items-center justify-center"
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