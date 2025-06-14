export interface CourseData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  badge: string;
  badgeColor: string;
  price: string;
  gst: string;
  originalPrice?: string;
  duration: string;
  mode: string;
  certificate: string;
  language: string;
  locations: string[];
  level: string;
  learningOutcomes: string[];
  courseFeatures: {
    icon: string;
    title: string;
    description: string;
  }[];
  batchDates: {
    startDate: string;
    endDate: string;
    location: string;
    seatsLeft: number;
    totalSeats: number;
  }[];
  instructor?: {
    name: string;
    image: string;
    title: string;
    experience: string;
    description: string;
    credentials: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  highlights: string[];
}

export const coursesData: Record<string, CourseData> = {
  'dgca-small': {
    id: 'dgca-small',
    title: 'DGCA Small Category Training',
    subtitle: 'Government-Certified Training for Small Category Drones (up to 2kg)',
    description: 'Become a certified commercial drone pilot for small category operations with our comprehensive DGCA-approved training program. Perfect for beginners entering the drone industry.',
    heroImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'DGCA Certified',
    badgeColor: 'bg-[#26A65B]',
    price: '₹45,000',
    gst: '+ 18% GST',
    originalPrice: '₹55,000',
    duration: '5 Days',
    mode: 'In-Person + Practical',
    certificate: 'DGCA Small Category License',
    language: 'English / Hindi / Telugu',
    locations: ['Hyderabad', 'Bangalore', 'Mumbai', 'Delhi'],
    level: 'Beginner to Intermediate',
    learningOutcomes: [
      'Small drone airframe and component basics',
      'DGCA regulations for small category operations',
      'Flight planning and navigation for small drones',
      'Weather assessment and safety protocols',
      'Simulator training (8+ hours)',
      'Live flight experience (4+ hours)',
      'Emergency procedures and troubleshooting',
      'Commercial operations setup'
    ],
    courseFeatures: [
      {
        icon: 'Award',
        title: 'DGCA Small Category Certification',
        description: 'Government-recognized license for small drone operations'
      },
      {
        icon: 'Users',
        title: 'Expert Instructors',
        description: 'Learn from certified pilots with 500+ flight hours'
      },
      {
        icon: 'Plane',
        title: 'Small Drone Equipment',
        description: 'Train on professional small category drones'
      },
      {
        icon: 'Briefcase',
        title: 'Job Assistance',
        description: '100% placement support with partner companies'
      }
    ],
    batchDates: [
      {
        startDate: 'January 15, 2025',
        endDate: 'January 20, 2025',
        location: 'Hyderabad',
        seatsLeft: 8,
        totalSeats: 20
      },
      {
        startDate: 'February 2, 2025',
        endDate: 'February 7, 2025',
        location: 'Bangalore',
        seatsLeft: 12,
        totalSeats: 20
      }
    ],
    instructor: {
      name: 'Captain Rajesh Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Chief Flight Instructor',
      experience: '15+ Years Aviation Experience',
      description: 'Former Indian Air Force pilot with extensive experience in both manned and unmanned aircraft operations.',
      credentials: ['DGCA Certified Instructor', 'Commercial Pilot License', '2000+ Flight Hours', 'Drone Safety Expert']
    },
    faq: [
      {
        question: 'What is the difference between small and medium category?',
        answer: 'Small category covers drones up to 2kg weight, suitable for photography, surveillance, and light commercial operations. Medium category covers 2-25kg drones for heavier commercial applications.'
      },
      {
        question: 'Can I upgrade to medium category later?',
        answer: 'Yes, we offer a 3-day Medium Upgrade course for ₹45,000 + GST for existing small category license holders.'
      },
      {
        question: 'What jobs can I get with small category license?',
        answer: 'Aerial photography, real estate documentation, small area surveying, inspection services, and content creation roles.'
      }
    ],
    highlights: [
      '5-day comprehensive training',
      'DGCA small category certification',
      'Hands-on flying experience',
      'Job placement assistance'
    ]
  },
  'dgca-medium': {
    id: 'dgca-medium',
    title: 'DGCA Medium Category Training',
    subtitle: 'Advanced Certification for Medium Category Drones (2-25kg)',
    description: 'Advanced training for medium category drone operations covering heavier payloads and complex commercial applications.',
    heroImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Professional Level',
    badgeColor: 'bg-blue-600',
    price: '₹65,000',
    gst: '+ 18% GST',
    duration: '5 Days',
    mode: 'In-Person + Advanced Practical',
    certificate: 'DGCA Medium Category License',
    language: 'English / Hindi / Telugu',
    locations: ['Hyderabad', 'Bangalore', 'Mumbai'],
    level: 'Intermediate to Advanced',
    learningOutcomes: [
      'Medium drone systems and operations',
      'Advanced flight planning and navigation',
      'Payload management and operations',
      'Complex weather assessment',
      'Advanced simulator training (12+ hours)',
      'Live flight experience (6+ hours)',
      'Commercial operations management',
      'Advanced emergency procedures'
    ],
    courseFeatures: [
      {
        icon: 'Award',
        title: 'DGCA Medium Category Certification',
        description: 'Advanced license for medium category operations'
      },
      {
        icon: 'Users',
        title: 'Advanced Training',
        description: 'Comprehensive training for complex operations'
      },
      {
        icon: 'Plane',
        title: 'Medium Drone Equipment',
        description: 'Train on professional medium category drones'
      },
      {
        icon: 'Briefcase',
        title: 'Premium Job Support',
        description: 'Access to high-paying commercial opportunities'
      }
    ],
    batchDates: [
      {
        startDate: 'January 22, 2025',
        endDate: 'January 27, 2025',
        location: 'Hyderabad',
        seatsLeft: 6,
        totalSeats: 15
      }
    ],
    instructor: {
      name: 'Captain Rajesh Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Chief Flight Instructor',
      experience: '15+ Years Aviation Experience',
      description: 'Former Indian Air Force pilot with extensive experience in both manned and unmanned aircraft operations.',
      credentials: ['DGCA Certified Instructor', 'Commercial Pilot License', '2000+ Flight Hours', 'Drone Safety Expert']
    },
    faq: [
      {
        question: 'Do I need small category license first?',
        answer: 'No, you can directly pursue medium category certification. However, having small category experience is beneficial.'
      },
      {
        question: 'What additional opportunities does medium category provide?',
        answer: 'Heavy payload operations, agricultural spraying, large area surveying, industrial inspections, and cargo delivery services.'
      }
    ],
    highlights: [
      'Advanced 5-day training',
      'Medium category certification',
      'Heavy payload operations',
      'Premium job opportunities'
    ]
  },
  'medium-upgrade': {
    id: 'medium-upgrade',
    title: 'Medium Category Upgrade',
    subtitle: 'Upgrade from Small to Medium Category in 3 Days',
    description: 'Fast-track upgrade course for existing small category license holders to obtain medium category certification.',
    heroImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Upgrade Course',
    badgeColor: 'bg-purple-600',
    price: '₹45,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Intensive Training',
    certificate: 'DGCA Medium Category License',
    language: 'English / Hindi',
    locations: ['Hyderabad', 'Bangalore'],
    level: 'Intermediate',
    learningOutcomes: [
      'Medium category regulations and differences',
      'Advanced payload operations',
      'Enhanced safety protocols',
      'Medium drone practical training',
      'Advanced flight scenarios',
      'Commercial operation upgrades'
    ],
    courseFeatures: [
      {
        icon: 'Award',
        title: 'Quick Upgrade',
        description: 'Fast-track to medium category certification'
      },
      {
        icon: 'Plane',
        title: 'Advanced Operations',
        description: 'Learn medium category specific operations'
      },
      {
        icon: 'Users',
        title: 'Focused Training',
        description: 'Intensive 3-day focused curriculum'
      },
      {
        icon: 'Briefcase',
        title: 'Career Advancement',
        description: 'Access to higher-paying opportunities'
      }
    ],
    batchDates: [
      {
        startDate: 'February 10, 2025',
        endDate: 'February 12, 2025',
        location: 'Hyderabad',
        seatsLeft: 10,
        totalSeats: 15
      }
    ],
    instructor: {
      name: 'Captain Rajesh Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Chief Flight Instructor',
      experience: '15+ Years Aviation Experience',
      description: 'Former Indian Air Force pilot with extensive experience in both manned and unmanned aircraft operations.',
      credentials: ['DGCA Certified Instructor', 'Commercial Pilot License', '2000+ Flight Hours', 'Drone Safety Expert']
    },
    faq: [
      {
        question: 'Who is eligible for this upgrade course?',
        answer: 'Existing DGCA small category license holders who want to upgrade to medium category operations.'
      },
      {
        question: 'What is covered in the 3-day program?',
        answer: 'Medium category specific regulations, advanced operations, payload management, and practical training on medium category drones.'
      }
    ],
    highlights: [
      'Quick 3-day upgrade',
      'For existing license holders',
      'Medium category access',
      'Enhanced career opportunities'
    ]
  },
  'dgca-combined': {
    id: 'dgca-combined',
    title: 'Small + Medium Combined Package',
    subtitle: 'Complete Dual Certification in 8 Days',
    description: 'Comprehensive training package covering both small and medium category certifications in one complete course.',
    heroImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Best Value',
    badgeColor: 'bg-[#F15A24]',
    price: '₹75,000',
    gst: '+ 18% GST',
    originalPrice: '₹110,000',
    duration: '8 Days',
    mode: 'Comprehensive Training',
    certificate: 'DGCA Small + Medium Category License',
    language: 'English / Hindi / Telugu',
    locations: ['Hyderabad', 'Bangalore', 'Mumbai'],
    level: 'Beginner to Advanced',
    learningOutcomes: [
      'Complete small category training',
      'Complete medium category training',
      'Dual certification preparation',
      'Comprehensive flight experience',
      'Advanced operational knowledge',
      'Complete commercial readiness',
      'Both category practical training',
      'Enhanced job opportunities'
    ],
    courseFeatures: [
      {
        icon: 'Award',
        title: 'Dual Certification',
        description: 'Both small and medium category licenses'
      },
      {
        icon: 'Users',
        title: 'Complete Training',
        description: 'Comprehensive 8-day program'
      },
      {
        icon: 'Plane',
        title: 'All Equipment Access',
        description: 'Train on both small and medium drones'
      },
      {
        icon: 'Briefcase',
        title: 'Maximum Opportunities',
        description: 'Access to all job categories'
      }
    ],
    batchDates: [
      {
        startDate: 'February 15, 2025',
        endDate: 'February 23, 2025',
        location: 'Hyderabad',
        seatsLeft: 5,
        totalSeats: 15
      }
    ],
    instructor: {
      name: 'Captain Rajesh Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Chief Flight Instructor',
      experience: '15+ Years Aviation Experience',
      description: 'Former Indian Air Force pilot with extensive experience in both manned and unmanned aircraft operations.',
      credentials: ['DGCA Certified Instructor', 'Commercial Pilot License', '2000+ Flight Hours', 'Drone Safety Expert']
    },
    faq: [
      {
        question: 'Why choose the combined package?',
        answer: 'Save ₹35,000 compared to taking courses separately, get comprehensive training, and access to all job opportunities in the drone industry.'
      },
      {
        question: 'Is this suitable for complete beginners?',
        answer: 'Yes, the course is designed to take you from beginner to advanced level with both category certifications.'
      }
    ],
    highlights: [
      'Best value package',
      'Dual certification',
      'Save ₹35,000',
      'Complete career readiness'
    ]
  },
  'site-mapping': {
    id: 'site-mapping',
    title: 'Site Asset Mapping & Inspections',
    subtitle: 'Professional Infrastructure Mapping and Inspection Services',
    description: 'Master professional mapping and inspection techniques for infrastructure, construction sites, and asset management using advanced drone technology.',
    heroImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Professional',
    badgeColor: 'bg-blue-600',
    price: '₹35,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Field Training + Software',
    certificate: 'Site Mapping Specialist',
    language: 'English / Hindi',
    locations: ['Hyderabad', 'Bangalore', 'Mumbai'],
    level: 'Intermediate',
    learningOutcomes: [
      '3D mapping and photogrammetry',
      'Infrastructure inspection techniques',
      'Survey-grade data collection',
      'Asset condition assessment',
      'Professional mapping software',
      'Report generation and analysis',
      'Client presentation skills',
      'Business development strategies'
    ],
    courseFeatures: [
      {
        icon: 'Target',
        title: '3D Mapping',
        description: 'Advanced 3D mapping and modeling techniques'
      },
      {
        icon: 'Settings',
        title: 'Professional Software',
        description: 'Training on industry-standard mapping software'
      },
      {
        icon: 'Users',
        title: 'Expert Training',
        description: 'Learn from certified mapping professionals'
      },
      {
        icon: 'Briefcase',
        title: 'Business Support',
        description: 'Guidance on starting mapping services'
      }
    ],
    batchDates: [
      {
        startDate: 'February 5, 2025',
        endDate: 'February 7, 2025',
        location: 'Hyderabad',
        seatsLeft: 8,
        totalSeats: 12
      }
    ],
    instructor: {
      name: 'Eng. Suresh Patel',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Senior Mapping Specialist',
      experience: '10+ Years in Surveying & Mapping',
      description: 'Professional surveyor with extensive experience in drone mapping and infrastructure inspection projects.',
      credentials: ['Licensed Surveyor', 'Drone Mapping Expert', '500+ Projects Completed', 'GIS Specialist']
    },
    faq: [
      {
        question: 'What equipment is used in this course?',
        answer: 'Professional mapping drones, high-resolution cameras, GPS systems, and industry-standard software like Pix4D and DroneDeploy.'
      },
      {
        question: 'What career opportunities are available?',
        answer: 'Infrastructure inspection, construction monitoring, real estate mapping, insurance assessment, and surveying services.'
      }
    ],
    highlights: [
      'Professional mapping techniques',
      'Industry-standard software training',
      'Real project experience',
      'Business development guidance'
    ]
  },
  'mining-analysis': {
    id: 'mining-analysis',
    title: 'Mining Excavation Volumetric Analysis',
    subtitle: 'Advanced Volumetric Analysis for Mining and Excavation',
    description: 'Specialized training in volumetric analysis and monitoring for mining operations, quarries, and large excavation projects.',
    heroImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Industrial',
    badgeColor: 'bg-gray-600',
    price: '₹35,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Field + Software Training',
    certificate: 'Mining Analysis Specialist',
    language: 'English / Hindi',
    locations: ['Hyderabad', 'Bangalore'],
    level: 'Advanced',
    learningOutcomes: [
      'Volumetric calculation techniques',
      'Mining operation monitoring',
      'Stockpile measurement',
      'Progress tracking systems',
      'Safety compliance monitoring',
      'Environmental impact assessment',
      'Advanced data processing',
      'Industrial reporting standards'
    ],
    courseFeatures: [
      {
        icon: 'Target',
        title: 'Volumetric Analysis',
        description: 'Precise volume calculations for mining operations'
      },
      {
        icon: 'Settings',
        title: 'Industrial Applications',
        description: 'Real-world mining and excavation scenarios'
      },
      {
        icon: 'Users',
        title: 'Industry Experts',
        description: 'Training from mining industry professionals'
      },
      {
        icon: 'Briefcase',
        title: 'Specialized Career',
        description: 'Access to high-paying industrial roles'
      }
    ],
    batchDates: [
      {
        startDate: 'February 12, 2025',
        endDate: 'February 14, 2025',
        location: 'Hyderabad',
        seatsLeft: 6,
        totalSeats: 10
      }
    ],
    instructor: {
      name: 'Dr. Vikram Singh',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Mining Technology Expert',
      experience: '12+ Years in Mining Operations',
      description: 'Mining engineer with extensive experience in drone applications for mining and excavation projects.',
      credentials: ['Mining Engineer', 'Drone Technology Specialist', 'Safety Expert', 'Industrial Consultant']
    },
    faq: [
      {
        question: 'What industries can I work in after this course?',
        answer: 'Mining companies, quarries, construction firms, environmental consulting, and government agencies involved in excavation monitoring.'
      },
      {
        question: 'What software will I learn?',
        answer: 'Specialized mining software including Carlson Mining, Surpac, and advanced volumetric analysis tools.'
      }
    ],
    highlights: [
      'Specialized industrial training',
      'High-paying career opportunities',
      'Advanced technology applications',
      'Industry certification'
    ]
  },
  'agriculture-spraying': {
    id: 'agriculture-spraying',
    title: 'Agriculture Spraying & Precision Farming',
    subtitle: 'Specialized Training for Agricultural Drone Operations',
    description: 'Master precision agriculture techniques with drone technology. Learn crop monitoring, spraying operations, and data analysis for modern farming.',
    heroImage: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Agriculture Specialist',
    badgeColor: 'bg-green-600',
    price: '₹25,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Field Training + Practical',
    certificate: 'Agriculture Drone Specialist',
    language: 'English / Hindi / Regional',
    locations: ['Pune', 'Hyderabad', 'Bangalore', 'Indore'],
    level: 'Beginner Friendly',
    learningOutcomes: [
      'Crop health assessment techniques',
      'Precision spraying operations',
      'Agricultural drone regulations',
      'Spray pattern optimization',
      'Chemical handling and safety',
      'Field mapping and planning',
      'ROI calculation for farmers',
      'Equipment maintenance'
    ],
    courseFeatures: [
      {
        icon: 'Wheat',
        title: 'Field Experience',
        description: 'Hands-on training in real agricultural fields'
      },
      {
        icon: 'Target',
        title: 'Precision Spraying',
        description: 'Master precision spraying techniques'
      },
      {
        icon: 'Users',
        title: 'Farmer Network',
        description: 'Connect with farming community'
      },
      {
        icon: 'TrendingUp',
        title: 'Business Support',
        description: 'Guidance on starting agri-drone service'
      }
    ],
    batchDates: [
      {
        startDate: 'January 25, 2025',
        endDate: 'January 27, 2025',
        location: 'Pune',
        seatsLeft: 8,
        totalSeats: 12
      }
    ],
    instructor: {
      name: 'Dr. Priya Sharma',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Agriculture Technology Expert',
      experience: '12+ Years in Precision Agriculture',
      description: 'PhD in Agricultural Engineering with specialization in drone technology applications for modern farming.',
      credentials: ['PhD Agricultural Engineering', 'Precision Agriculture Expert', 'Drone Technology Specialist', 'Published Researcher']
    },
    faq: [
      {
        question: 'Do I need farming background?',
        answer: 'No farming background required. We teach everything from basics. However, farmers and agriculture graduates will find it especially valuable.'
      },
      {
        question: 'What equipment is covered?',
        answer: 'Various agriculture drones, spraying systems, sensors, and data analysis software used in precision agriculture.'
      }
    ],
    highlights: [
      'Field-based practical training',
      'Latest agriculture drone technology',
      'Business setup guidance',
      'Farmer network connections'
    ]
  },
  'aerial-cinematography': {
    id: 'aerial-cinematography',
    title: 'Aerial Cinematography',
    subtitle: 'Professional Drone Filming and Photography',
    description: 'Master the art of aerial cinematography and photography for creative industries, media production, and commercial applications.',
    heroImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Creative',
    badgeColor: 'bg-purple-600',
    price: '₹25,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Creative Workshop + Practical',
    certificate: 'Aerial Cinematography Specialist',
    language: 'English / Hindi',
    locations: ['Mumbai', 'Bangalore', 'Hyderabad'],
    level: 'Intermediate',
    learningOutcomes: [
      'Professional camera operations',
      'Creative shot composition',
      'Cinematic movement techniques',
      'Lighting and exposure control',
      'Post-production workflow',
      'Client project management',
      'Portfolio development',
      'Industry networking'
    ],
    courseFeatures: [
      {
        icon: 'Camera',
        title: 'Professional Filming',
        description: 'Master professional aerial filming techniques'
      },
      {
        icon: 'Users',
        title: 'Creative Training',
        description: 'Learn from industry cinematographers'
      },
      {
        icon: 'Target',
        title: 'Portfolio Building',
        description: 'Create impressive demo reel'
      },
      {
        icon: 'Briefcase',
        title: 'Industry Connections',
        description: 'Network with media professionals'
      }
    ],
    batchDates: [
      {
        startDate: 'February 8, 2025',
        endDate: 'February 10, 2025',
        location: 'Mumbai',
        seatsLeft: 10,
        totalSeats: 15
      }
    ],
    instructor: {
      name: 'Arjun Mehta',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Professional Cinematographer',
      experience: '8+ Years in Film Industry',
      description: 'Award-winning cinematographer with extensive experience in aerial filming for Bollywood and commercial projects.',
      credentials: ['Professional Cinematographer', 'Drone Specialist', 'Award Winner', 'Industry Mentor']
    },
    faq: [
      {
        question: 'What career opportunities are available?',
        answer: 'Film industry, advertising, real estate marketing, event coverage, wedding photography, and content creation for digital platforms.'
      },
      {
        question: 'Do I need prior photography experience?',
        answer: 'Basic photography knowledge is helpful but not required. We cover fundamentals as part of the course.'
      }
    ],
    highlights: [
      'Creative industry focus',
      'Professional portfolio creation',
      'Industry networking opportunities',
      'Award-winning instructor'
    ]
  },
  'data-processing': {
    id: 'data-processing',
    title: 'Data Processing (Survey, Mapping, Agri)',
    subtitle: 'Advanced Data Analysis and Processing Techniques',
    description: 'Learn to process and analyze data from survey, mapping, and agriculture operations using professional software and techniques.',
    heroImage: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Technical',
    badgeColor: 'bg-indigo-600',
    price: '₹25,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Software Training + Practical',
    certificate: 'Data Processing Specialist',
    language: 'English / Hindi',
    locations: ['Hyderabad', 'Bangalore'],
    level: 'Intermediate',
    learningOutcomes: [
      'Professional data processing software',
      'Survey data analysis techniques',
      'Agricultural data interpretation',
      'Report generation and visualization',
      'Quality control procedures',
      'Client deliverable preparation',
      'Workflow optimization',
      'Technical troubleshooting'
    ],
    courseFeatures: [
      {
        icon: 'Monitor',
        title: 'Software Training',
        description: 'Master industry-standard processing software'
      },
      {
        icon: 'Target',
        title: 'Data Analysis',
        description: 'Advanced analysis and interpretation techniques'
      },
      {
        icon: 'Users',
        title: 'Expert Guidance',
        description: 'Learn from data processing specialists'
      },
      {
        icon: 'Briefcase',
        title: 'Technical Skills',
        description: 'High-demand technical expertise'
      }
    ],
    batchDates: [
      {
        startDate: 'February 15, 2025',
        endDate: 'February 17, 2025',
        location: 'Hyderabad',
        seatsLeft: 12,
        totalSeats: 15
      }
    ],
    instructor: {
      name: 'Rahul Gupta',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Data Processing Expert',
      experience: '10+ Years in GIS and Remote Sensing',
      description: 'GIS specialist with extensive experience in drone data processing and analysis for various industries.',
      credentials: ['GIS Expert', 'Remote Sensing Specialist', 'Software Trainer', 'Technical Consultant']
    },
    faq: [
      {
        question: 'What software will I learn?',
        answer: 'Pix4D, DroneDeploy, AgiSoft Metashape, QGIS, and other industry-standard processing software.'
      },
      {
        question: 'What career paths are available?',
        answer: 'GIS analyst, data processing specialist, remote sensing expert, and technical consultant roles.'
      }
    ],
    highlights: [
      'Industry-standard software training',
      'High-demand technical skills',
      'Multiple industry applications',
      'Expert-level instruction'
    ]
  },
  'drone-assembly-basic': {
    id: 'drone-assembly-basic',
    title: 'Drone Assembly, Troubleshooting & Repair (Basic)',
    subtitle: 'Fundamental Drone Hardware and Maintenance Skills',
    description: 'Learn basic drone assembly, troubleshooting, and repair techniques to understand drone hardware and perform basic maintenance.',
    heroImage: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Technical',
    badgeColor: 'bg-gray-600',
    price: '₹25,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Hands-on Workshop',
    certificate: 'Basic Drone Technician',
    language: 'English / Hindi',
    locations: ['Hyderabad', 'Bangalore'],
    level: 'Beginner',
    learningOutcomes: [
      'Drone component identification',
      'Basic assembly procedures',
      'Troubleshooting common issues',
      'Basic repair techniques',
      'Maintenance schedules',
      'Safety protocols',
      'Tool usage and care',
      'Quality control basics'
    ],
    courseFeatures: [
      {
        icon: 'Wrench',
        title: 'Hands-on Assembly',
        description: 'Build drones from components'
      },
      {
        icon: 'Settings',
        title: 'Troubleshooting',
        description: 'Diagnose and fix common problems'
      },
      {
        icon: 'Users',
        title: 'Technical Training',
        description: 'Learn from experienced technicians'
      },
      {
        icon: 'Briefcase',
        title: 'Technical Career',
        description: 'Foundation for technical roles'
      }
    ],
    batchDates: [
      {
        startDate: 'February 20, 2025',
        endDate: 'February 22, 2025',
        location: 'Hyderabad',
        seatsLeft: 8,
        totalSeats: 12
      }
    ],
    instructor: {
      name: 'Manoj Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Senior Drone Technician',
      experience: '8+ Years in Drone Hardware',
      description: 'Electronics engineer with extensive experience in drone assembly, repair, and technical training.',
      credentials: ['Electronics Engineer', 'Drone Technician', 'Technical Trainer', 'Hardware Specialist']
    },
    faq: [
      {
        question: 'Do I need electronics background?',
        answer: 'No prior electronics experience required. We start with basics and build up to practical skills.'
      },
      {
        question: 'What tools and equipment are provided?',
        answer: 'All tools, components, and equipment are provided during training. We also provide a recommended tools list for purchase.'
      }
    ],
    highlights: [
      'Hands-on technical training',
      'Build complete drone systems',
      'Practical troubleshooting skills',
      'Foundation for advanced courses'
    ]
  },
  'drone-assembly-advanced': {
    id: 'drone-assembly-advanced',
    title: 'Drone Assembly, Troubleshooting & Repair (Advanced)',
    subtitle: 'Professional Drone Service and Repair Expertise',
    description: 'Advanced drone assembly, complex troubleshooting, and professional repair services training for technical specialists.',
    heroImage: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Advanced Technical',
    badgeColor: 'bg-red-600',
    price: '₹45,000',
    gst: '+ 18% GST',
    duration: '5 Days',
    mode: 'Professional Workshop',
    certificate: 'Advanced Drone Technician',
    language: 'English / Hindi',
    locations: ['Hyderabad', 'Bangalore'],
    level: 'Advanced',
    learningOutcomes: [
      'Advanced assembly techniques',
      'Complex system troubleshooting',
      'Professional repair services',
      'Custom drone building',
      'Performance optimization',
      'Business setup guidance',
      'Customer service skills',
      'Technical documentation'
    ],
    courseFeatures: [
      {
        icon: 'Wrench',
        title: 'Advanced Assembly',
        description: 'Professional-level assembly and customization'
      },
      {
        icon: 'Settings',
        title: 'Complex Repairs',
        description: 'Handle advanced technical issues'
      },
      {
        icon: 'Users',
        title: 'Professional Training',
        description: 'Industry-standard techniques and practices'
      },
      {
        icon: 'Briefcase',
        title: 'Business Setup',
        description: 'Start your own repair service'
      }
    ],
    batchDates: [
      {
        startDate: 'March 1, 2025',
        endDate: 'March 5, 2025',
        location: 'Hyderabad',
        seatsLeft: 6,
        totalSeats: 10
      }
    ],
    instructor: {
      name: 'Manoj Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Senior Drone Technician',
      experience: '8+ Years in Drone Hardware',
      description: 'Electronics engineer with extensive experience in drone assembly, repair, and technical training.',
      credentials: ['Electronics Engineer', 'Drone Technician', 'Technical Trainer', 'Hardware Specialist']
    },
    faq: [
      {
        question: 'What is the prerequisite for this course?',
        answer: 'Basic electronics knowledge or completion of our Basic Drone Assembly course is recommended.'
      },
      {
        question: 'Can I start a repair business after this course?',
        answer: 'Yes, we provide business setup guidance, pricing strategies, and ongoing technical support for starting your repair service.'
      }
    ],
    highlights: [
      'Professional-level training',
      'Business setup guidance',
      'Advanced technical skills',
      'Ongoing support included'
    ]
  },
  'fpv-basic': {
    id: 'fpv-basic',
    title: 'FPV Drone Training (Basic)',
    subtitle: 'First Person View Racing and Maneuvering',
    description: 'Learn First Person View drone racing and basic maneuvering techniques for recreational and competitive flying.',
    heroImage: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Racing',
    badgeColor: 'bg-red-500',
    price: '₹25,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Practical + Simulator',
    certificate: 'FPV Pilot Basic',
    language: 'English / Hindi',
    locations: ['Hyderabad', 'Bangalore'],
    level: 'Beginner',
    learningOutcomes: [
      'FPV system setup and operation',
      'Basic racing maneuvers',
      'Safety protocols for FPV flying',
      'Equipment selection and maintenance',
      'Racing line optimization',
      'Crash recovery techniques',
      'Competition preparation basics',
      'Community engagement'
    ],
    courseFeatures: [
      {
        icon: 'Zap',
        title: 'FPV Flying',
        description: 'Master first-person view flying techniques'
      },
      {
        icon: 'Target',
        title: 'Racing Skills',
        description: 'Learn basic racing and maneuvering'
      },
      {
        icon: 'Users',
        title: 'Expert Coaching',
        description: 'Training from experienced FPV pilots'
      },
      {
        icon: 'Briefcase',
        title: 'Competition Ready',
        description: 'Prepare for racing competitions'
      }
    ],
    batchDates: [
      {
        startDate: 'February 25, 2025',
        endDate: 'February 27, 2025',
        location: 'Hyderabad',
        seatsLeft: 10,
        totalSeats: 12
      }
    ],
    instructor: {
      name: 'Karthik Reddy',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'FPV Racing Champion',
      experience: '6+ Years in FPV Racing',
      description: 'National FPV racing champion with extensive experience in competitive flying and training.',
      credentials: ['FPV Racing Champion', 'Competition Judge', 'Technical Expert', 'Community Leader']
    },
    faq: [
      {
        question: 'Do I need prior drone experience?',
        answer: 'Basic drone flying experience is helpful but not required. We start with fundamentals and build up skills progressively.'
      },
      {
        question: 'What equipment is needed?',
        answer: 'Training equipment is provided. We also provide guidance on purchasing your own FPV setup.'
      }
    ],
    highlights: [
      'Exciting FPV flying experience',
      'Racing techniques training',
      'Competition preparation',
      'Champion instructor'
    ]
  },
  'fpv-advanced': {
    id: 'fpv-advanced',
    title: 'FPV Drone Training (Advanced)',
    subtitle: 'Professional Racing and Competition Preparation',
    description: 'Advanced FPV racing techniques and competition preparation for serious racers and professional pilots.',
    heroImage: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Professional Racing',
    badgeColor: 'bg-red-600',
    price: '₹45,000',
    gst: '+ 18% GST',
    duration: '5 Days',
    mode: 'Intensive Training + Competition',
    certificate: 'FPV Pilot Advanced',
    language: 'English / Hindi',
    locations: ['Hyderabad', 'Bangalore'],
    level: 'Advanced',
    learningOutcomes: [
      'Advanced racing techniques',
      'Competition strategy and tactics',
      'Performance optimization',
      'Advanced maneuvers and tricks',
      'Equipment tuning and setup',
      'Mental preparation for competition',
      'Sponsorship and career development',
      'Teaching and coaching skills'
    ],
    courseFeatures: [
      {
        icon: 'Zap',
        title: 'Advanced Racing',
        description: 'Master professional racing techniques'
      },
      {
        icon: 'Target',
        title: 'Competition Prep',
        description: 'Prepare for national and international competitions'
      },
      {
        icon: 'Users',
        title: 'Professional Coaching',
        description: 'Training from championship-level pilots'
      },
      {
        icon: 'Briefcase',
        title: 'Career Development',
        description: 'Professional racing career guidance'
      }
    ],
    batchDates: [
      {
        startDate: 'March 10, 2025',
        endDate: 'March 14, 2025',
        location: 'Hyderabad',
        seatsLeft: 6,
        totalSeats: 8
      }
    ],
    instructor: {
      name: 'Karthik Reddy',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'FPV Racing Champion',
      experience: '6+ Years in FPV Racing',
      description: 'National FPV racing champion with extensive experience in competitive flying and training.',
      credentials: ['FPV Racing Champion', 'Competition Judge', 'Technical Expert', 'Community Leader']
    },
    faq: [
      {
        question: 'What is the prerequisite for this course?',
        answer: 'Completion of FPV Basic course or equivalent experience in FPV flying is required.'
      },
      {
        question: 'Will I be ready for competitions?',
        answer: 'Yes, this course prepares you for national and international FPV racing competitions.'
      }
    ],
    highlights: [
      'Championship-level training',
      'Competition preparation',
      'Professional racing techniques',
      'Career development guidance'
    ]
  },
  'women-bootcamp': {
    id: 'women-bootcamp',
    title: 'Women Drone Pilot Bootcamp',
    subtitle: 'Empowering Women in Aviation Technology',
    description: 'A comprehensive training program designed specifically for women with mentorship, peer networking, and career guidance.',
    heroImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Women Only',
    badgeColor: 'bg-pink-600',
    price: '₹42,000',
    gst: '+ 18% GST',
    originalPrice: '₹50,000',
    duration: '5 Days',
    mode: 'Women-Only Batches + Mentorship',
    certificate: 'DGCA Small + Medium Category License',
    language: 'English / Hindi',
    locations: ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad'],
    level: 'All Levels',
    learningOutcomes: [
      'Complete drone pilot certification',
      'Confidence building in technology',
      'Career guidance and planning',
      'Network building with industry professionals',
      'Leadership skills in aviation',
      'Entrepreneurship opportunities',
      'Safety and regulatory compliance',
      'Advanced flight techniques'
    ],
    courseFeatures: [
      {
        icon: 'Users',
        title: 'Women-Only Batches',
        description: 'Comfortable learning environment with female instructors'
      },
      {
        icon: 'Heart',
        title: 'Mentorship Program',
        description: 'Ongoing support from successful women pilots'
      },
      {
        icon: 'Award',
        title: 'Special Pricing',
        description: 'Discounted rates to encourage women participation'
      },
      {
        icon: 'Network',
        title: 'Alumni Network',
        description: 'Join 2000+ women pilots in our exclusive network'
      }
    ],
    batchDates: [
      {
        startDate: 'March 8, 2025',
        endDate: 'March 12, 2025',
        location: 'Bangalore',
        seatsLeft: 5,
        totalSeats: 15
      }
    ],
    instructor: {
      name: 'Captain Meera Patel',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Women Aviation Pioneer',
      experience: '10+ Years Breaking Barriers',
      description: 'First woman DGCA-certified drone instructor in South India, passionate about empowering women in aviation.',
      credentials: ['DGCA Chief Instructor', 'Women Aviation Award Winner', '1500+ Flight Hours', 'Motivational Speaker']
    },
    faq: [
      {
        question: 'Why a separate program for women?',
        answer: 'We provide a comfortable, supportive environment where women can learn confidently, build networks, and receive mentorship from successful female pilots.'
      },
      {
        question: 'Is the certification same as regular DGCA course?',
        answer: 'Yes, you receive the same DGCA certification. The only difference is the supportive learning environment and additional mentorship.'
      }
    ],
    highlights: [
      '2000+ women pilots trained',
      'Female instructor-led training',
      'Exclusive networking opportunities',
      'Career mentorship included'
    ]
  },
  'drone-didi-agri': {
    id: 'drone-didi-agri',
    title: 'Drone-Didi Agri Empowerment Program',
    subtitle: 'Rural and Urban Women in Agriculture Technology',
    description: 'Specialized agriculture program for rural and urban women focusing on precision farming and agri-entrepreneurship.',
    heroImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Women Empowerment',
    badgeColor: 'bg-green-500',
    price: '₹22,000',
    gst: '+ 18% GST',
    originalPrice: '₹28,000',
    duration: '3 Days',
    mode: 'Field Training + Empowerment',
    certificate: 'Drone-Didi Agriculture Specialist',
    language: 'Hindi / Regional Languages',
    locations: ['Pune', 'Hyderabad', 'Bangalore'],
    level: 'Beginner Friendly',
    learningOutcomes: [
      'Agricultural drone operations',
      'Crop monitoring techniques',
      'Precision farming methods',
      'Business development skills',
      'Financial planning and management',
      'Government scheme awareness',
      'Community leadership',
      'Sustainable farming practices'
    ],
    courseFeatures: [
      {
        icon: 'Wheat',
        title: 'Agriculture Focus',
        description: 'Specialized training for farming applications'
      },
      {
        icon: 'Users',
        title: 'Women Empowerment',
        description: 'Focus on rural and urban women development'
      },
      {
        icon: 'TrendingUp',
        title: 'Business Skills',
        description: 'Entrepreneurship and business development'
      },
      {
        icon: 'Heart',
        title: 'Community Support',
        description: 'Ongoing community and mentorship support'
      }
    ],
    batchDates: [
      {
        startDate: 'March 15, 2025',
        endDate: 'March 17, 2025',
        location: 'Pune',
        seatsLeft: 12,
        totalSeats: 20
      }
    ],
    instructor: {
      name: 'Dr. Sunita Devi',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Rural Development Expert',
      experience: '15+ Years in Rural Empowerment',
      description: 'Rural development specialist with extensive experience in women empowerment and agricultural technology adoption.',
      credentials: ['Rural Development Expert', 'Women Empowerment Leader', 'Agriculture Specialist', 'Community Organizer']
    },
    faq: [
      {
        question: 'Is this program suitable for rural women?',
        answer: 'Yes, this program is specifically designed for rural and urban women with focus on practical skills and business development.'
      },
      {
        question: 'What support is provided after training?',
        answer: 'Ongoing mentorship, business development support, access to government schemes, and community network connections.'
      }
    ],
    highlights: [
      'Women-focused agriculture training',
      'Business development support',
      'Community empowerment',
      'Government scheme integration'
    ]
  },
  'simulator-refresher': {
    id: 'simulator-refresher',
    title: 'Simulator Refresher (50 hrs)',
    subtitle: 'Enhance Your Skills with Advanced Simulator Practice',
    description: 'Comprehensive 50-hour simulator training program to enhance flying skills and practice emergency scenarios.',
    heroImage: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Skill Enhancement',
    badgeColor: 'bg-blue-500',
    price: '₹15,000',
    gst: '+ 18% GST',
    duration: '50 Hours',
    mode: 'Simulator + Flexible Schedule',
    certificate: 'Simulator Proficiency Certificate',
    language: 'English / Hindi',
    locations: ['Online + Center Access'],
    level: 'All Levels',
    learningOutcomes: [
      'Advanced flight scenarios',
      'Emergency procedure practice',
      'Weather condition simulation',
      'Navigation skill enhancement',
      'Equipment failure scenarios',
      'Precision flying techniques',
      'Confidence building',
      'Skill assessment and improvement'
    ],
    courseFeatures: [
      {
        icon: 'Monitor',
        title: '50 Hours Practice',
        description: 'Extensive simulator flying time'
      },
      {
        icon: 'Target',
        title: 'Skill Enhancement',
        description: 'Focus on improving specific skills'
      },
      {
        icon: 'Clock',
        title: 'Flexible Schedule',
        description: 'Practice at your own pace and timing'
      },
      {
        icon: 'Users',
        title: 'Expert Guidance',
        description: 'Instructor support and feedback'
      }
    ],
    batchDates: [
      {
        startDate: 'Ongoing',
        endDate: 'Flexible',
        location: 'Multiple Centers',
        seatsLeft: 20,
        totalSeats: 25
      }
    ],
    instructor: {
      name: 'Simulator Training Team',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Certified Simulator Instructors',
      experience: 'Collective 50+ Years Experience',
      description: 'Team of certified instructors specializing in simulator training and skill development.',
      credentials: ['DGCA Certified', 'Simulator Specialists', 'Training Experts', 'Skill Assessors']
    },
    faq: [
      {
        question: 'Can I schedule sessions flexibly?',
        answer: 'Yes, you can book simulator sessions based on your availability within the validity period.'
      },
      {
        question: 'What scenarios are covered?',
        answer: 'Emergency procedures, weather conditions, equipment failures, navigation challenges, and precision flying exercises.'
      }
    ],
    highlights: [
      'Flexible scheduling',
      '50 hours of practice',
      'Emergency scenario training',
      'Skill improvement focus'
    ]
  },
  'online-theory': {
    id: 'online-theory',
    title: 'Online Drone Pilot Theory Crash Course',
    subtitle: 'Complete Theory Foundation for Drone Pilots',
    description: 'Comprehensive online theory course covering all aspects of drone piloting with interactive sessions and assessments.',
    heroImage: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Online Learning',
    badgeColor: 'bg-green-500',
    price: '₹7,500',
    gst: '+ 18% GST',
    duration: 'Self-Paced',
    mode: 'Online + Interactive Sessions',
    certificate: 'Theory Completion Certificate',
    language: 'English / Hindi',
    locations: ['Online'],
    level: 'Beginner',
    learningOutcomes: [
      'DGCA regulations and compliance',
      'Drone systems and components',
      'Flight planning and navigation',
      'Weather and safety considerations',
      'Emergency procedures',
      'Airspace and communication',
      'Maintenance and inspection',
      'Commercial operations basics'
    ],
    courseFeatures: [
      {
        icon: 'Monitor',
        title: 'Online Learning',
        description: 'Study from anywhere at your own pace'
      },
      {
        icon: 'Users',
        title: 'Interactive Sessions',
        description: 'Live Q&A sessions with instructors'
      },
      {
        icon: 'Clock',
        title: 'Self-Paced',
        description: 'Complete at your own speed'
      },
      {
        icon: 'Award',
        title: 'Theory Foundation',
        description: 'Strong theoretical foundation for practical training'
      }
    ],
    batchDates: [
      {
        startDate: 'Immediate Access',
        endDate: 'Self-Paced',
        location: 'Online',
        seatsLeft: 50,
        totalSeats: 100
      }
    ],
    instructor: {
      name: 'Online Training Team',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Certified Online Instructors',
      experience: 'Collective 30+ Years Experience',
      description: 'Team of certified instructors specializing in online drone education and theory training.',
      credentials: ['DGCA Certified', 'Online Education Specialists', 'Curriculum Developers', 'Assessment Experts']
    },
    faq: [
      {
        question: 'How long do I have access to the course?',
        answer: 'You have 6 months access to all course materials and can complete at your own pace.'
      },
      {
        question: 'Are there live sessions?',
        answer: 'Yes, we conduct weekly live Q&A sessions and doubt clearing sessions with instructors.'
      }
    ],
    highlights: [
      'Affordable online learning',
      'Self-paced completion',
      'Interactive live sessions',
      'Strong theory foundation'
    ]
  },
  'corporate': {
    id: 'corporate',
    title: 'Custom Training/Workshop for Institutions',
    subtitle: 'Customized Training Programs for Organizations',
    description: 'Tailored drone training solutions for companies, educational institutions, and government organizations.',
    heroImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'For Organizations',
    badgeColor: 'bg-gray-700',
    price: '₹25,000',
    gst: '+ 18% GST',
    duration: 'Flexible',
    mode: 'On-site / Remote / Hybrid',
    certificate: 'Corporate Training Certificate',
    language: 'English / Hindi / Regional',
    locations: ['Pan India', 'On-site Available'],
    level: 'Customized',
    learningOutcomes: [
      'Industry-specific drone applications',
      'Custom operational procedures',
      'Team-based training modules',
      'Compliance and safety protocols',
      'Equipment selection guidance',
      'ROI optimization strategies',
      'Maintenance and support training',
      'Ongoing consultation services'
    ],
    courseFeatures: [
      {
        icon: 'Building',
        title: 'Custom Curriculum',
        description: 'Training designed for your specific needs'
      },
      {
        icon: 'MapPin',
        title: 'On-site Training',
        description: 'We come to your location for convenience'
      },
      {
        icon: 'Users',
        title: 'Bulk Pricing',
        description: 'Cost-effective rates for multiple participants'
      },
      {
        icon: 'Award',
        title: 'Certification',
        description: 'Industry-recognized certificates for your team'
      }
    ],
    batchDates: [
      {
        startDate: 'On Request',
        endDate: 'Flexible',
        location: 'Your Location',
        seatsLeft: 50,
        totalSeats: 50
      }
    ],
    instructor: {
      name: 'Corporate Training Team',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Enterprise Solutions Specialists',
      experience: '10+ Years Corporate Training',
      description: 'Experienced team specializing in corporate drone training with expertise across multiple industries.',
      credentials: ['DGCA Certified Trainers', 'Corporate Training Experts', 'Industry Specialists', 'Consultation Services']
    },
    faq: [
      {
        question: 'What industries do you serve?',
        answer: 'We provide training for construction, agriculture, surveying, security, media, logistics, and many other industries.'
      },
      {
        question: 'Can you customize the training content?',
        answer: 'Yes, we develop custom curriculum based on your specific industry requirements and operational needs.'
      }
    ],
    highlights: [
      'Custom training solutions',
      'On-site delivery available',
      'Industry-specific content',
      'Ongoing support included'
    ]
  }
};