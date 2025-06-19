import React, { useState } from 'react';

import { 
  Rocket, 
  Users, 
  Building, 
  CheckCircle,
  Star,
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

  const partnershipTypes = [
    {
      icon: Cpu,
      title: 'Drone Technology Partnerships',
      description: 'Work with us to test, demo, or co-brand hardware/software solutions',
      examples: ['Hardware integration', 'Software development', 'Co-branding opportunities', 'Product testing'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Settings,
      title: 'Simulator & Hardware Vendors',
      description: 'Integrate your training tools with our state-of-the-art facilities',
      examples: ['Training simulators', 'Equipment supply', 'Technology integration', 'Maintenance support'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Building2,
      title: 'Corporate Training Tie-Ups',
      description: 'Upskill your workforce in drone usage across various industries',
      examples: ['Employee training', 'Custom programs', 'Industry-specific courses', 'Certification support'],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Placement & Recruitment Partners',
      description: 'Hire IDA-certified pilots directly from our talent pool',
      examples: ['Direct recruitment', 'Talent pipeline', 'Skill assessment', 'Ongoing support'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Rocket,
      title: 'Startup Incubation Partners',
      description: 'Co-develop drone startups with our alumni and resources',
      examples: ['Incubation programs', 'Mentorship', 'Funding support', 'Market access'],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Megaphone,
      title: 'Media & Outreach Collaborators',
      description: 'Work with our media partners to amplify drone impact stories',
      examples: ['Content creation', 'Event coverage', 'Brand promotion', 'Industry advocacy'],
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      gradient: 'from-pink-500 to-pink-600'
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
    if (formData.partnershipType.length === 0) {
      alert('Please select at least one partnership type.');
      return;
    }
    setIsSubmitting(true);




    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Partnership request submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: '', contactPerson: '', designation: '', email: '', phone: '', city: '',
        partnershipType: [], message: '', revenue: '', clients: '', website: '', experience: '',
        teamSize: '', model: '', linkedin: '', gst: '', droneExperience: '', otherPartnership: '', // 
      });
    }, 3000);
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Explore Our Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From technology integration to talent acquisition, we offer diverse partnership models to drive mutual growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${type.gradient} p-6 text-white`}>
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                    <p className="text-white text-opacity-90">{type.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Areas:</h4>
                    <ul className="space-y-2 mb-6">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-[#26A65B] mr-2" />
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-[#F15A24] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#D64A1A] transition-all duration-200"
                    >
                      Explore Partnership
                    </button>
                  </div>
                </div>
              );
            })}
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
          <div className="text-center">
  <p className="text-gray-600 mb-8 text-xl font-semibold">Featured In:</p>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center">
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
        <img src={item.img} alt={item.name} className="h-20 object-contain mb-5" />
        <p className="font-semibold text-gray-800 text-base mb-1">{item.name}</p>
        <p className="text-sm text-gray-500">{item.info}</p>
      </div>
    ))}
  </div>
</div>

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
      <section id="partnership-form" className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let's Build a Drone-Powered Future Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Share your goals and we'll tailor a partnership approach that fits your business needs and objectives.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
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
          <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">Revenue Bracket *</label>
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
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
          <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">Team Size</label>
          <input type="number" id="teamSize" name="teamSize" value={formData.teamSize} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
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
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#26A65B] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#26A65B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Partnership Request Received!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in partnering with India Drone Academy. Our business development team will review your proposal and get back to you within 48 hours.
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