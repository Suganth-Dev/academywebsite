import React, { useState } from 'react';
import { BookOpen, Clock, Users, Award, ChevronRight, PlayCircle, CheckCircle } from 'lucide-react';

interface CurriculumModule {
  id: string;
  title: string;
  duration: string;
  description: string;
  topics: string[];
  projects: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const InstitutionalCurriculumSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string>('foundation');

  const curriculumModules: CurriculumModule[] = [
    {
      id: 'foundation',
      title: 'Foundation & Fundamentals',
      duration: '4 weeks',
      description: 'Build a solid foundation with core concepts, industry standards, and essential tools.',
      topics: ['Industry Overview', 'Core Principles', 'Professional Tools', 'Best Practices', 'Project Setup'],
      projects: 2,
      difficulty: 'Beginner'
    },
    {
      id: 'intermediate',
      title: 'Intermediate Development',
      duration: '6 weeks',
      description: 'Advance your skills with complex concepts, frameworks, and real-world applications.',
      topics: ['Advanced Frameworks', 'Database Integration', 'API Development', 'Testing Methods', 'Performance Optimization'],
      projects: 4,
      difficulty: 'Intermediate'
    },
    {
      id: 'advanced',
      title: 'Advanced Specialization',
      duration: '8 weeks',
      description: 'Master advanced techniques, system design, and enterprise-level solutions.',
      topics: ['System Architecture', 'Security Implementation', 'Scalability Solutions', 'DevOps Integration', 'Team Leadership'],
      projects: 6,
      difficulty: 'Advanced'
    },
    {
      id: 'capstone',
      title: 'Capstone Project',
      duration: '4 weeks',
      description: 'Apply everything you\'ve learned in a comprehensive, industry-standard project.',
      topics: ['Project Planning', 'Full-Stack Implementation', 'Code Review', 'Deployment', 'Presentation'],
      projects: 1,
      difficulty: 'Advanced'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const activeModuleData = curriculumModules.find(module => module.id === activeModule);

//   return (
// <section className="pt-0 pb-10 bg-gradient-to-br from-slate-50 to-blue-50">

//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     {/* Header */}
//     <div className="text-center mb-10">
//       <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
//         <BookOpen className="w-6 h-6 text-blue-600" />
//       </div>
//       <h2 className="text-2xl font-bold text-gray-900 mb-2">
//         Institutional Curriculum
//       </h2>
//       <p className="text-sm text-gray-600 max-w-2xl mx-auto">
//         Industry-aligned curriculum covering practical drone skills and theoretical knowledge for professional success.
//       </p>
//     </div>

//     {/* Stats Bar */}
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
//       {[
//         { value: '22', label: 'Total Weeks', color: 'blue' },
//         { value: '13', label: 'Hands-on Projects', color: 'green' },
//         { value: '24/7', label: 'Mentor Support', color: 'purple' },
//         { value: '100%', label: 'Job Assistance', color: 'orange' },
//       ].map((stat, i) => (
//         <div key={i} className="text-center p-4 bg-white rounded-lg shadow-sm border">
//           <div className={`text-xl font-bold text-${stat.color}-600 mb-1`}>{stat.value}</div>
//           <div className="text-xs text-gray-600">{stat.label}</div>
//         </div>
//       ))}
//     </div>

//     {/* Interactive Curriculum */}
//     <div className="bg-white rounded-xl shadow-md overflow-hidden">
//       <div className="grid lg:grid-cols-3">
//         {/* Module Navigation */}
//         <div className="bg-gray-50 p-4">
//           <h3 className="text-base font-semibold text-gray-900 mb-4">Course Modules</h3>
//           <div className="space-y-2">
//             {curriculumModules.map((module, index) => (
//               <button
//                 key={module.id}
//                 onClick={() => setActiveModule(module.id)}
//                 className={`w-full text-left text-xs p-3 rounded-md transition ${
//                   activeModule === module.id
//                     ? 'bg-blue-600 text-white shadow'
//                     : 'bg-white text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 <div className="flex justify-between">
//                   <div>
//                     <div className="flex items-center space-x-2 mb-1">
//                       <span className="font-medium">Module {index + 1}</span>
//                       <span className={`px-2 py-0.5 rounded-full text-[10px] ${
//                         activeModule === module.id
//                           ? 'bg-blue-500 text-white'
//                           : getDifficultyColor(module.difficulty)
//                       }`}>
//                         {module.difficulty}
//                       </span>
//                     </div>
//                     <div className="font-semibold">{module.title}</div>
//                     <div className="flex space-x-3 mt-1 text-[10px] opacity-80">
//                       <span className="flex items-center">
//                         <Clock className="w-3 h-3 mr-1" /> {module.duration}
//                       </span>
//                       <span className="flex items-center">
//                         <Award className="w-3 h-3 mr-1" /> {module.projects} Projects
//                       </span>
//                     </div>
//                   </div>
//                   <ChevronRight className={`w-4 h-4 ${activeModule === module.id ? 'rotate-90' : ''}`} />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Module Details */}
//         <div className="lg:col-span-2 p-4">
//           {activeModuleData && (
//             <div>
//               <div className="mb-4">
//                 <div className="flex justify-between mb-2">
//                   <h3 className="text-lg font-bold text-gray-900">{activeModuleData.title}</h3>
//                   <div className="flex gap-3 text-xs text-gray-600">
//                     <span className="flex items-center">
//                       <Clock className="w-4 h-4 mr-1" /> {activeModuleData.duration}
//                     </span>
//                     <span className="flex items-center">
//                       <Users className="w-4 h-4 mr-1" /> Interactive
//                     </span>
//                   </div>
//                 </div>
//                 <p className="text-sm text-gray-600">{activeModuleData.description}</p>
//               </div>

//               <div className="grid md:grid-cols-2 gap-4 text-sm">
//                 <div>
//                   <h4 className="font-semibold mb-2">Topics Covered</h4>
//                   <ul className="space-y-1">
//                     {activeModuleData.topics.map((topic, i) => (
//                       <li key={i} className="flex items-center space-x-2">
//                         <CheckCircle className="w-4 h-4 text-green-500" />
//                         <span>{topic}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2">Learning Outcomes</h4>
//                   <div className="space-y-3">
//                     <div className="p-3 bg-blue-50 rounded-md">
//                       <div className="flex items-center space-x-2 mb-1">
//                         <PlayCircle className="w-4 h-4 text-blue-600" />
//                         <span className="font-medium">Hands-on Projects</span>
//                       </div>
//                       <p className="text-xs text-blue-700">
//                         {activeModuleData.projects} real-world projects
//                       </p>
//                     </div>
//                     <div className="p-3 bg-green-50 rounded-md">
//                       <div className="flex items-center space-x-2 mb-1">
//                         <Award className="w-4 h-4 text-green-600" />
//                         <span className="font-medium">Industry Recognition</span>
//                       </div>
//                       <p className="text-xs text-green-700">
//                         Skills aligned with industry standards
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* CTA */}
//               <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//                 <div className="mb-3 sm:mb-0">
//                   <h5 className="font-medium text-gray-900">Ready to start?</h5>
//                   <p className="text-xs text-gray-600">Join thousands of learners</p>
//                 </div>
//                 <div className="flex gap-2">
//                   <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
//                     Enroll Now
//                   </button>
//                   <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-100">
//                     Download Syllabus
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>

//     {/* Additional Features */}
//     <div className="grid md:grid-cols-3 gap-4 mt-10 text-sm">
//       {[
//         {
//           icon: BookOpen,
//           title: 'Comprehensive Materials',
//           desc: 'Access learning resources and references.'
//         },
//         {
//           icon: Users,
//           title: 'Expert Mentorship',
//           desc: 'One-on-one guidance from professionals.'
//         },
//         {
//           icon: Award,
//           title: 'Industry Certification',
//           desc: 'Earn credentials to validate your skills.'
//         }
//       ].map((item, i) => (
//         <div key={i} className="text-center p-4 bg-white rounded-lg shadow-sm border">
//           <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mx-auto mb-3">
//             <item.icon className="w-5 h-5 text-blue-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
//           <p className="text-gray-600 text-xs">{item.desc}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//   );
};

export default InstitutionalCurriculumSection;