import React from 'react';
import { ArrowRight, CheckCircle, Users, BookOpen, Award, Zap, Target, Globe } from 'lucide-react';

const CurriculumPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
           

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-green-500/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Transform Your Institution with 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Drone Education</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Partner with India's premier drone academy to integrate cutting-edge UAV curriculum, 
                                state-of-the-art lab infrastructure, and industry-ready training programs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Start Partnership
                                </button>
                                <button className="border-2 border-gray-300 text-gray-300 font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                                    View Curriculum
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-r from-orange-500/20 to-green-500/20 rounded-2xl p-8 backdrop-blur-sm">
                                <img
                                    src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Advanced Drone Technology"
                                    className="w-full h-80 object-cover rounded-xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                            <div className="text-gray-600">Students Trained</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-500 mb-2">50+</div>
                            <div className="text-gray-600">Partner Institutions</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-500 mb-2">25+</div>
                            <div className="text-gray-600">Lab Setups</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-500 mb-2">95%</div>
                            <div className="text-gray-600">Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Drone Education Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We provide end-to-end support to transform your institution into a center of drone excellence
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <BookOpen className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Curriculum Design</h3>
                            <p className="text-gray-600 mb-6">
                                Industry-aligned curriculum designed by experts, covering theory, practical applications, and emerging technologies in UAV systems.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    DGCA-compliant modules
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Hands-on project integration
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Assessment frameworks
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lab Infrastructure</h3>
                            <p className="text-gray-600 mb-6">
                                Complete lab setup with cutting-edge equipment, simulators, and safety protocols for comprehensive practical learning.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Professional drone kits
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Flight simulators
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Safety equipment
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Users className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Faculty Training</h3>
                            <p className="text-gray-600 mb-6">
                                Comprehensive training programs for educators to deliver world-class drone education with confidence and expertise.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Expert-led workshops
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Certification programs
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Ongoing support
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partnership Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A structured approach to implementing drone education at your institution
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center relative">
                            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment</h3>
                            <p className="text-gray-600">We evaluate your current infrastructure and academic requirements</p>
                        </div>
                        <div className="text-center relative">
                            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Design</h3>
                            <p className="text-gray-600">Custom curriculum and lab design tailored to your needs</p>
                        </div>
                        <div className="text-center relative">
                            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation</h3>
                            <p className="text-gray-600">Setup labs, train faculty, and launch the program</p>
                        </div>
                        <div className="text-center relative">
                            <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3>
                            <p className="text-gray-600">Ongoing support and program optimization</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-12">
                        <div className="mb-8">
                            <img
                                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
                                alt="Dr. Sarah Johnson"
                                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                            />
                            <p className="text-2xl text-gray-800 font-medium italic mb-6">
                                "India Drone Academy transformed our engineering department. Their comprehensive approach to drone education has prepared our students for the future of aerospace technology."
                            </p>
                            <div className="text-gray-600">
                                <div className="font-bold">Dr. Sarah Johnson</div>
                                <div>Head of Aerospace Engineering, MIT Institute</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Award className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold mb-6">Ready to Lead in Drone Education?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join the ranks of forward-thinking institutions preparing students for the drone revolution. 
                        Let's build the future of aerospace education together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
                            Schedule Consultation
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                        <button className="border-2 border-gray-300 text-gray-300 font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </section>

           
        </div>
    );
};

export default CurriculumPage;