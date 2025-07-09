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

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Institutional Curriculum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum is designed by industry experts to ensure you gain 
            practical skills and theoretical knowledge needed for professional success.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">22</div>
            <div className="text-sm text-gray-600">Total Weeks</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">13</div>
            <div className="text-sm text-gray-600">Hands-on Projects</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Mentor Support</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Job Assistance</div>
          </div>
        </div>

        {/* Interactive Curriculum */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-3">
            {/* Module Navigation */}
            <div className="lg:col-span-1 bg-gray-50 p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Course Modules</h3>
              <div className="space-y-2">
                {curriculumModules.map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                      activeModule === module.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-medium">Module {index + 1}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            activeModule === module.id
                              ? 'bg-blue-500 text-white'
                              : getDifficultyColor(module.difficulty)
                          }`}>
                            {module.difficulty}
                          </span>
                        </div>
                        <div className="font-medium text-sm">{module.title}</div>
                        <div className="flex items-center space-x-4 mt-2 text-xs opacity-80">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {module.duration}
                          </span>
                          <span className="flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            {module.projects} Projects
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        activeModule === module.id ? 'rotate-90' : ''
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Module Details */}
            <div className="lg:col-span-2 p-6 lg:p-8">
              {activeModuleData && (
                <div className="h-full">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {activeModuleData.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {activeModuleData.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          Interactive Learning
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {activeModuleData.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Topics Covered */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Topics Covered</h4>
                      <div className="space-y-2">
                        {activeModuleData.topics.map((topic, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Learning Outcomes</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <PlayCircle className="w-5 h-5 text-blue-600" />
                            <span className="font-medium text-blue-900">Hands-on Projects</span>
                          </div>
                          <p className="text-sm text-blue-700">
                            {activeModuleData.projects} real-world projects to build your portfolio
                          </p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Award className="w-5 h-5 text-green-600" />
                            <span className="font-medium text-green-900">Industry Recognition</span>
                          </div>
                          <p className="text-sm text-green-700">
                            Skills aligned with current industry standards and demands
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="mb-4 sm:mb-0">
                        <h5 className="font-semibold text-gray-900">Ready to start learning?</h5>
                        <p className="text-sm text-gray-600">Join thousands of successful graduates</p>
                      </div>
                      <div className="flex space-x-3">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                          Enroll Now
                        </button>
                        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                          Download Syllabus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Materials</h4>
            <p className="text-sm text-gray-600">
              Access to extensive learning resources, documentation, and reference materials
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Expert Mentorship</h4>
            <p className="text-sm text-gray-600">
              One-on-one guidance from industry professionals and experienced instructors
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Industry Certification</h4>
            <p className="text-sm text-gray-600">
              Earn recognized certifications that validate your skills and expertise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalCurriculumSection;