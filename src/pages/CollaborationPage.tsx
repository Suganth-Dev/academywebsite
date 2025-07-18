import React, { useState } from 'react';
import {
  Award,
  Users,
  MapPin,
  Building,
  Briefcase,
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
  Mail,
  Phone,
  User,
  MessageSquare,
  Building2,
  Globe,
  Handshake,
  Trophy,
  BookOpen,
  Lightbulb,
  Network,
  DollarSign,
  Camera,
  Megaphone,
  TrendingDown
} from 'lucide-react';

const CollaborationPage: React.FC = () => {
  type CriteriaKeys =
    | 'mou'
    | 'infrastructure'
    | 'transport'
    | 'studentBase'
    | 'mbaSupport'
    | 'promotion'
    | 'techInterest'
    | 'pastExposure';

  type FormData = {
    institutionName: string;
    contactPerson: string;
    designation: string;
    email: string;
    phone: string;
    city: string;
    collaborationType: string;
    message: string;
    studentCount: string;
    criteria: Record<CriteriaKeys, string>; // ensures valid keys
  };

  const [formData, setFormData] = useState<FormData>({
    institutionName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    city: '',
    collaborationType: '',
    message: '',
    studentCount: '',
    criteria: {
      mou: '',
      infrastructure: '',
      transport: '',
      studentBase: '',
      mbaSupport: '',
      promotion: '',
      techInterest: '',
      pastExposure: ''
    }
  });



  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const criteriaList = [
   
    { key: 'infrastructure', label: 'Availability of AV-enabled classrooms, computer labs, and open flying grounds' },
    { key: 'transport', label: 'College bus facility to reach IDA flying zone' },
    { key: 'studentBase', label: 'Large base from engineering, agriculture, or management disciplines' },
    { key: 'mbaSupport', label: 'MBA students to assist IDA branding and outreach' },
    { key: 'promotion', label: 'Students to promote IDA on social media and peer networks' },
    { key: 'techInterest', label: 'Active interest in innovation and drone applications' },
    { key: 'pastExposure', label: 'Preferred: Previous drone tech exposure or project involvement' },
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Government-Recognized Drone Training',
      description: 'DGCA-approved syllabus and certification',
      color: 'text-[#26A65B]',
      bgColor: 'bg-green-50'
    },
    {
      icon: DollarSign,
      title: 'Special Institutional Pricing',
      description: 'Up to 40% discount for bulk student batches',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Building2,
      title: 'Custom Training at Your Campus',
      description: 'We send trainers + simulators to your college',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: FileText,
      title: 'Joint Certification with Your Branding',
      description: 'IDA & college name on certificate',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Settings,
      title: 'Access to Simulator + Real Drone Equipment',
      description: 'Includes free practice hours for students',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Briefcase,
      title: 'Placement & Startup Guidance',
      description: 'Career sessions, entrepreneurship mentoring',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Globe,
      title: 'Exclusive Drone Industry Webinars',
      description: 'Guest sessions from industry partners like Corteva, Drone TV',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: Megaphone,
      title: 'Social Media & Press Promotion',
      description: 'We publicly highlight all institutional tie-ups',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Trophy,
      title: 'MoU Recognition for NAAC/AICTE',
      description: 'Boosts institutional ranking and student engagement',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Star,
      title: 'Priority Access to National Events & Drone Expos',
      description: 'Showcase student work in IDA-backed expos',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    }
  ];

  const existingPartners = [
    { name: 'Narayanamma Institute of Technology & Science', type: 'Premier Engineering College', location: 'Hyderabad' },
    { name: 'Mallareddy College of Engineering', type: 'Top Engineering Institution', location: 'Hyderabad' },
    { name: 'CBIT (Chaitanya Bharathi Institute)', type: 'Autonomous Engineering College', location: 'Hyderabad' },
    { name: 'VJIT (Vignan\'s Institute of Technology)', type: 'Leading Technical Institute', location: 'Hyderabad' },
    { name: 'MGIT (Mahatma Gandhi Institute)', type: 'Prestigious Engineering College', location: 'Hyderabad' },
    { name: 'JNTUH (Jawaharlal Nehru Technological University)', type: 'State Technical University', location: 'Hyderabad' },
    { name: 'Osmania University', type: 'Central University', location: 'Hyderabad' },
    { name: 'IIIT Hyderabad', type: 'Institute of National Importance', location: 'Hyderabad' },
    { name: 'VNR VJIET', type: 'Top Engineering College', location: 'Hyderabad' },
    { name: 'CMR College of Engineering', type: 'Leading Engineering Institute', location: 'Hyderabad' },
    { name: 'Gokaraju Rangaraju Institute', type: 'Premier Technical College', location: 'Hyderabad' },
    { name: 'Sreenidhi Institute of Science', type: 'Autonomous Engineering College', location: 'Hyderabad' }
  ];

  const collaborationModels = [
    {
      title: 'MoU-Based Training at Your Campus',
      description: 'We bring certified instructors and drone equipment to your campus.',
      features: [
        'On-campus delivery',
        'Drone equipment included',
        'Certified trainer support',
        'Flexible scheduling'
      ],
      icon: Building2,
      color: 'from-blue-500 to-blue-600'
    },

    {
      title: 'Joint Certificate Program with Revenue Share',
      description: 'Collaborative program where both institutions benefit from student enrollments.',
      features: [
        'Revenue sharing with joint certification',
        'Marketing & partnership support',
        'If Drone Lab is provided:',
        '■ Joint certification program',
        '■ Location branding (boards & banners)',
        '■ 1+ annual hosted event'
      ],
      icon: Handshake,
      color: 'from-green-500 to-green-600'
    },

    {
      title: 'Custom Bootcamps for Final-Year Students',
      description: 'Intensive training programs designed specifically for graduating students.',
      features: ['Career-focused training', 'Placement assistance', 'Industry connections', 'Fast-track certification'],
      icon: Rocket,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const {
      infrastructure,
      transport,
      studentBase,
      mbaSupport,
      promotion,
      techInterest,
      pastExposure
    } = formData.criteria;

    const payload = {
      ...formData,
      criteria: {
        avClassrooms: infrastructure,
        collegeBusFacility: transport,
        largeStudentBase: studentBase,
        mbaSupportForBranding: mbaSupport,
        studentSocialMediaPromo: promotion,
        innovationInterest: techInterest,
        priorDroneExposure: pastExposure
      }
    };

    const response = await fetch("https://wga2b0zo70.execute-api.ap-south-1.amazonaws.com/postcollaborate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (response.ok) {
      setIsSubmitted(true);
      setTimeout(() => {
        document.getElementById("collaboration-form")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
      console.log("Submission successful:", result);
    } else {
      console.error("Submission failed:", result.error);
      alert("Failed to submit: " + result.error);
    }
  } catch (error) {
    console.error("Network error:", error);
    alert("Something went wrong. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};



  const handleRadioChange = (key: string, value: 'Yes' | 'No') => {
    setFormData(prev => ({
      ...prev,
      criteria: {
        ...prev.criteria,
        [key]: value
      }
    }));
  };

  const [visibleCount, setVisibleCount] = useState(3); // show 1 row (assuming 4 per row)


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
                Collaborate with India's{' '}
                <span className="text-[#F15A24]">Leading Drone Training Academy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We empower institutions to deliver government-certified drone training programs on their campuses.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-[#26A65B]" />
                  <span>DGCA Approved</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-[#26A65B]" />
                  <span>50+ Top Institutions</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 mr-2 text-[#26A65B]" />
                  <span>NAAC/AICTE Recognition</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() =>
                  document.getElementById('collaboration-form')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-[#F15A24] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center"
              >
                Get Started With a Collaboration
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

      {/* Benefits Section */}
      <section className="pt-8 pb-0 lg:pt-10 lg:pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              What Your Institution Gains From This Collaboration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive benefits designed to enhance your institution's offerings and student outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-10 h-10 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                    <IconComponent className={`w-5 h-5 ${benefit.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>




      {/* Existing Collaborations */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Top Engineering Colleges
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Join our prestigious network of premier engineering colleges and universities across India.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {existingPartners.slice(0, visibleCount).map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#F15A24] bg-opacity-10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Building className="w-6 h-6 text-[#F15A24]" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm text-center leading-tight mb-1">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-600 text-center mb-1">{partner.type}</p>
                <div className="flex items-center justify-center text-xs text-gray-500">
                  <MapPin className="w-3 h-3 mr-1" />
                  {partner.location}
                </div>
              </div>
            ))}
          </div>

          {/* Show More */}
          {visibleCount < existingPartners.length && (
            <div className="flex justify-center mt-6 mb-8">
              <button
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="px-5 py-2 border border-[#F15A24] text-[#F15A24] text-sm font-medium rounded-full hover:bg-[#F15A24] hover:text-white transition-all duration-200 shadow-sm"
              >
                Show More Colleges
              </button>
            </div>
          )}

          {/* Featured Partnerships */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Featured Partnerships
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#26A65B] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-[#26A65B]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-base">Narayanamma Institute</h4>
                <p className="text-gray-600 text-sm">500+ students trained in drone technology with 100% placement success</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F15A24] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-8 h-8 text-[#F15A24]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-base">Mallareddy College</h4>
                <p className="text-gray-600 text-sm">Joint certification program with dedicated drone lab setup on campus</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-base">JNTUH</h4>
                <p className="text-gray-600 text-sm">University-wide drone curriculum integration across multiple engineering branches</p>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="text-center mt-6">
            <p className="text-gray-600 italic text-sm">
              Expanding partnerships with top engineering colleges across South India
            </p>
          </div>
        </div>
      </section>


      {/* Collaboration Models */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose a Model That Works for You
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible collaboration options designed to meet your institution's specific needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {collaborationModels.slice(0, 2).map((model, index) => {
              const IconComponent = model.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${model.color} p-3 text-white`}>
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-md flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-semibold mb-1">{model.title}</h3>
                    <p className="text-white text-opacity-90 text-sm">{model.description}</p>
                  </div>

                  {/* Features & Button Section */}
                  <div className="flex flex-col justify-between h-full p-4">
                    <ul className="space-y-2 mb-4">
                      {model.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 text-[#26A65B] mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button at Bottom */}
                    <button
                      onClick={() =>
                        document.getElementById('collaboration-form')?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className="w-full mt-auto bg-[#F15A24] text-white font-semibold text-sm py-2.5 px-4 rounded-lg hover:bg-[#D64A1A] transition-all duration-200"
                    >
                      Request This Model
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* Special Pricing Banner */}
      <section className="py-6 lg:py-10 bg-gradient-to-br from-orange-600 to-orange-400 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Special Institutional Pricing
          </h2>
          <p className="text-base sm:text-lg text-orange-100 mb-4 max-w-3xl mx-auto">
            We offer <strong>up to 40% discount</strong> for institutions onboarding batches of 20+ students.
          </p>
          <p className="text-sm sm:text-base text-orange-100 mb-6">
            Custom pricing available for government colleges, autonomous institutions, and women's colleges.
          </p>

          <button
            onClick={() => document.getElementById('collaboration-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#F15A24] font-semibold text-sm sm:text-base px-6 py-3 rounded-md hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            Request Pricing Sheet
          </button>
        </div>
      </section>


      {/* Contact Form */}
      <section id="collaboration-form" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            {!isSubmitted ? (

              <>
                
                {/* Title Section */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Let's Build a Collaboration
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Fill this form and our team will reach out you soon to discuss partnership opportunities.
                  </p>
                </div>

                {/* Form Starts */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Institution + Contact Person */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-2">
                        Institution Name *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="institutionName"
                          name="institutionName"
                          value={formData.institutionName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                          placeholder="Your institution name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Person Name *
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

                  {/* Designation + City */}
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
                        placeholder="Principal, Dean, Director, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City/Location *
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
                          placeholder="City, State"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          placeholder="your.email@institution.edu"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
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

                  {/* Collaboration Type + Student Count */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="collaborationType" className="block text-sm font-medium text-gray-700 mb-2">
                        Collaboration Type *
                      </label>
                      <select
                        id="collaborationType"
                        name="collaborationType"
                        value={formData.collaborationType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select collaboration type</option>
                        <option value="mou-campus">MoU-Based Training at Campus</option>
                        <option value="joint-certificate">Joint Certificate Program</option>
                        <option value="custom-bootcamp">Custom Bootcamps</option>
                        <option value="other">Other (specify in message)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="studentCount" className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Student Count
                      </label>
                      <input
                        type="text"
                        id="studentCount"
                        name="studentCount"
                        value={formData.studentCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="e.g., 50-100 students per batch"
                      />
                    </div>
                  </div>

                  {/* Selection Criteria */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-6">
                      College Selection Criteria <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-6">
                      {criteriaList.map((criterion, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                          <p className="font-medium text-gray-800 mb-2">{criterion.label}</p>
                          <div className="flex space-x-6">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                name={`criteria_${index}`}
                                value="Yes"
                                checked={formData.criteria[criterion.key] === 'Yes'}
                                onChange={() => handleRadioChange(criterion.key, 'Yes')}
                                className="text-[#26A65B]"
                              />
                              <span>Yes</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                name={`criteria_${index}`}
                                value="No"
                                checked={formData.criteria[criterion.key] === 'No'}
                                onChange={() => handleRadioChange(criterion.key, 'No')}
                                className="text-red-500"
                              />
                              <span>No</span>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message / Proposal / Additional Details
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="Tell us about your institution, specific requirements, or any questions..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F15A24] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              // ✅ Thank-you message shown ONLY after form is submitted
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#26A65B] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#26A65B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank you for your interest!</h3>
                <p className="text-gray-600 mb-6">
                  Our team will connect with you shortly to discuss collaboration opportunities and next steps.
                </p>
                <div className="bg-[#26A65B] bg-opacity-10 rounded-lg p-4">
                  <p className="text-[#26A65B] font-medium">
                    📧 You'll receive a confirmation email within 24 hours with detailed information about our partnership programs.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-6 -mt-4 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Our business development team is here to help you explore partnership opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919188883344"
              className="bg-[#F15A24] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-lg hover:bg-[#D64A1A] hover:shadow-md transition-all duration-200 flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call +91 9188883344
            </a>

            <a
              href="https://wa.me/919188883344?text=Hi, I'm interested in institutional collaboration with IDA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-lg hover:bg-[#20B954] transition-all duration-200 flex items-center justify-center"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CollaborationPage;