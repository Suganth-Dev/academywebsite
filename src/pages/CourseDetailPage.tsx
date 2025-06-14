import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Award, 
  Users, 
  Calendar,
  ChevronDown,
  ChevronUp,
  Star,
  Plane,
  Wheat,
  Heart,
  Network,
  BarChart,
  Droplets,
  TrendingUp,
  Briefcase,
  DollarSign
} from 'lucide-react';
import { coursesData, CourseData } from '../data/coursesData';

// Icon mapping for dynamic rendering
const iconMap = {
  Award,
  Users,
  Plane,
  Briefcase,
  Wheat,
  BarChart,
  Droplets,
  TrendingUp,
  Heart,
  Network,
  Clock,
  Calendar,
  DollarSign
};

const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Get course data based on slug
  const courseData: CourseData | undefined = slug ? coursesData[slug] : undefined;

  // Redirect if course not found
  if (!courseData) {
    return <Navigate to="/courses" replace />;
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleDownloadBrochure = () => {
    // In a real app, this would trigger a file download or open a form
    console.log('Download brochure for:', courseData.title);
    // You could integrate with your backend or trigger a PDF download
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F15A24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#26A65B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className={`inline-flex items-center ${courseData.badgeColor} text-white px-4 py-2 rounded-full text-sm font-medium mb-6`}>
                <Award className="w-4 h-4 mr-2" />
                {courseData.badge}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {courseData.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-600 mb-6">
                {courseData.subtitle}
              </p>

              {/* Description */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {courseData.description}
              </p>

              {/* Price */}
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <div className="text-4xl font-bold text-[#F15A24] mr-4">
                  {courseData.price}
                </div>
                {courseData.originalPrice && (
                  <div className="text-xl text-gray-500 line-through">
                    {courseData.originalPrice}
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/apply"
                  className="bg-[#F15A24] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center"
                >
                  Apply Now
                </a>
                <button
                  onClick={handleDownloadBrochure}
                  className="bg-white text-[#F15A24] font-bold px-8 py-4 rounded-lg border-2 border-[#F15A24] hover:bg-[#F15A24] hover:text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#F15A24] to-[#D64A1A] rounded-2xl p-8 shadow-2xl">
                <img
                  src={courseData.heroImage}
                  alt={courseData.title}
                  className="w-full h-80 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-2xl font-bold text-[#26A65B]">{courseData.duration}</div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-2xl font-bold text-[#F15A24]">{courseData.level}</div>
                <div className="text-sm text-gray-600">Level</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <Clock className="w-8 h-8 text-[#F15A24] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">{courseData.duration}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <Users className="w-8 h-8 text-[#F15A24] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Mode</h3>
              <p className="text-gray-600">{courseData.mode}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <Award className="w-8 h-8 text-[#F15A24] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Certificate</h3>
              <p className="text-gray-600">{courseData.certificate}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <MapPin className="w-8 h-8 text-[#F15A24] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Locations</h3>
              <p className="text-gray-600">{courseData.locations.slice(0, 2).join(', ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive curriculum designed to make you industry-ready from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData.learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-[#26A65B] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose This Program?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseData.courseFeatures.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Award;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#F15A24] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#F15A24]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Batch Information */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Upcoming Batches
            </h2>
            <p className="text-xl text-gray-600">
              Choose your preferred batch and secure your spot today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseData.batchDates.map((batch, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F15A24] to-[#D64A1A] text-white rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{batch.location}</h3>
                    <div className="flex items-center text-orange-100 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{batch.startDate}</span>
                    </div>
                    {batch.endDate !== batch.startDate && (
                      <div className="text-sm text-orange-100">
                        to {batch.endDate}
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{courseData.price}</div>
                  </div>
                </div>

                {/* Seats Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Seats Available</span>
                    <span>{batch.seatsLeft}/{batch.totalSeats}</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((batch.totalSeats - batch.seatsLeft) / batch.totalSeats) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full bg-white text-[#F15A24] font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  Reserve Your Spot
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      {courseData.instructor && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Meet Your Instructor
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Instructor Image */}
                  <div className="text-center lg:text-left">
                    <img
                      src={courseData.instructor.image}
                      alt={courseData.instructor.name}
                      className="w-48 h-48 rounded-full object-cover mx-auto lg:mx-0 mb-4"
                      loading="lazy"
                    />
                    <div className="flex justify-center lg:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Instructor Info */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {courseData.instructor.name}
                    </h3>
                    <p className="text-[#F15A24] font-medium mb-2">
                      {courseData.instructor.title}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {courseData.instructor.experience}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {courseData.instructor.description}
                    </p>

                    {/* Credentials */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {courseData.instructor.credentials.map((credential, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#26A65B] mr-2" />
                          <span className="text-gray-700 text-sm">{credential}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about this course.
            </p>
          </div>

          <div className="space-y-4">
            {courseData.faq.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#F15A24] to-[#D64A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Join {courseData.title}?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your drone career. Limited seats available in upcoming batches.
          </p>
          
          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {courseData.highlights.map((highlight, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-white mx-auto mb-2" />
                <p className="text-sm">{highlight}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="bg-white text-[#F15A24] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#F15A24] transition-all duration-200"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;