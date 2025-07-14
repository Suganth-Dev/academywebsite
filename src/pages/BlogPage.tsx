import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Filter, 
  Search,
  BookOpen,
  TrendingUp,
  Users,
  Award,
  Plane,
  Wheat,
  Target,
  MessageSquare,
  Share2,
  Eye,
  Heart,
  ChevronRight,
  Tag,
  Star,
  Download,
  Play,
  ExternalLink
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(9);
  const navigate = useNavigate();

  const filters = [
    { id: 'All', label: 'All Posts', count: 24 },
    { id: 'Career Tips', label: 'Career Tips', count: 8 },
    { id: 'Training', label: 'Training', count: 6 },
    { id: 'Industry News', label: 'Industry News', count: 5 },
    { id: 'Success Stories', label: 'Success Stories', count: 5 }
  ];

  const featuredPost = {
    id: 1,
    title: 'Drone Pilot Career Guide: Complete Roadmap to Success',
    excerpt: 'Everything you need to know about starting and advancing your career as a professional drone pilot in India.',
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Career Tips',
    author: 'Captain Rajesh Kumar',
    authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    date: '2024-12-15',
    readTime: '8 min read',
    views: '2.5K',
    featured: true,
    tags: ['Career', 'DGCA', 'Professional Development'],
    slug: 'drone-pilot-career-guide'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Simulator vs Real Flying: Which Training Method is Better?',
      excerpt: 'Comparing the benefits of simulator training versus real-world flying experience for drone pilots.',
      image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Training',
      author: 'Priya Sharma',
      authorImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-12-12',
      readTime: '6 min read',
      views: '1.8K',
      tags: ['Simulator', 'Training', 'Skills'],
      slug: 'simulator-vs-real-flying'
    },
    {
      id: 3,
      title: 'Top 5 Drone Use Cases in India: Industry Applications',
      excerpt: 'Exploring the most promising applications of drone technology across various Indian industries.',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Industry News',
      author: 'Amit Patel',
      authorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-12-10',
      readTime: '7 min read',
      views: '2.2K',
      tags: ['Industry', 'Applications', 'Technology'],
      slug: 'top-5-drone-use-cases-india'
    },
    {
      id: 4,
      title: 'Women in Drone Technology: Breaking Barriers in Aviation',
      excerpt: 'Celebrating the achievements of women in the drone industry and exploring opportunities for female pilots.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Success Stories',
      author: 'Meera Reddy',
      authorImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-12-08',
      readTime: '9 min read',
      views: '1.9K',
      tags: ['Women Empowerment', 'Aviation', 'Diversity'],
      slug: 'women-in-drone-technology'
    },
    {
      id: 5,
      title: 'DGCA Regulations Update: What Every Pilot Must Know',
      excerpt: 'Latest updates to DGCA drone regulations and their impact on commercial operations.',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Industry News',
      author: 'Captain Rajesh Kumar',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-12-05',
      readTime: '5 min read',
      views: '3.1K',
      tags: ['DGCA', 'Regulations', 'Compliance'],
      slug: 'dgca-regulations-update'
    },
    {
      id: 6,
      title: 'Drone Photography Business: Complete Startup Guide',
      excerpt: 'Everything you need to know about starting a profitable drone photography business in India.',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Career Tips',
      author: 'Sneha Joshi',
      authorImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-12-03',
      readTime: '10 min read',
      views: '2.7K',
      tags: ['Photography', 'Business', 'Entrepreneurship'],
      slug: 'drone-photography-business-guide'
    },
    {
      id: 7,
      title: 'Safety First: Essential Pre-Flight Checklist for Drone Pilots',
      excerpt: 'Master the critical safety protocols every professional drone pilot must follow before takeoff.',
      image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Training',
      author: 'Captain Rajesh Kumar',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-12-01',
      readTime: '6 min read',
      views: '1.7K',
      tags: ['Safety', 'Checklist', 'Best Practices'],
      slug: 'safety-pre-flight-checklist'
    },
    {
      id: 8,
      title: 'Agriculture Drones: Revolutionizing Indian Farming',
      excerpt: 'How precision agriculture with drones is transforming farming practices across India.',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Industry News',
      author: 'Dr. Kiran Singh',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-11-28',
      readTime: '8 min read',
      views: '2.4K',
      tags: ['Agriculture', 'Precision Farming', 'Technology'],
      slug: 'agriculture-drones-revolutionizing-farming'
    },
    {
      id: 9,
      title: 'From Zero to Hero: Student Success Story',
      excerpt: 'Follow Rajesh\'s journey from complete beginner to certified commercial drone pilot.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Success Stories',
      author: 'IDA Team',
      authorImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2024-11-25',
      readTime: '7 min read',
      views: '1.6K',
      tags: ['Success Story', 'Student Journey', 'Inspiration'],
      slug: 'zero-to-hero-student-success'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = activeFilter === 'All' || post.category === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const handleFeaturedPostClick = () => {
    navigate(`/blog/${featuredPost.slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}
     

      {/* Hero Section */}
    <section className="pt-4 pb-16 lg:pt-6 lg:pb-20 relative overflow-hidden mt-8">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-20 left-10 w-28 h-28 bg-[#F15A24] rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-36 h-36 bg-[#26A65B] rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
        Drone Industry Insights &{' '}
        <span className="text-[#F15A24]">Career Tips</span>
      </h1>
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
        Stay ahead with expert tips, student success stories, industry news, and comprehensive guides 
        to accelerate your drone career journey.
      </p>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles, guides, and stories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200 text-base"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Featured Post */}
    <section className="py-8 -mt-6 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-8">
      <div className="flex items-center mb-3">
        <Star className="w-5 h-5 text-[#F15A24] mr-2" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Featured Article</h2>
      </div>

      <article
        className="bg-gradient-to-r from-[#F15A24] to-[#D64A1A] rounded-xl overflow-hidden shadow-xl cursor-pointer group"
        onClick={handleFeaturedPostClick}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-56 lg:h-auto">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 bg-white bg-opacity-90 text-[#F15A24] px-2 py-0.5 rounded-full text-xs font-bold">
              Featured
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 lg:p-8 text-white">
            <div className="mb-3">
              <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-medium">
                {featuredPost.category}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold mb-3 leading-snug group-hover:text-orange-100 transition-colors duration-200">
              {featuredPost.title}
            </h3>

            <p className="text-orange-100 mb-4 leading-relaxed text-sm">
              {featuredPost.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={featuredPost.authorImage}
                  alt={featuredPost.author}
                  className="w-8 h-8 rounded-full mr-2"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium">{featuredPost.author}</p>
                  <p className="text-orange-200 text-xs">{formatDate(featuredPost.date)}</p>
                </div>
              </div>
              <div className="text-right text-orange-200 text-xs">
                <p>{featuredPost.readTime}</p>
                <p>{featuredPost.views} views</p>
              </div>
            </div>

            <div className="bg-white text-[#F15A24] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center justify-center group-hover:shadow-md">
              Read Full Article
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>


      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center mb-4 lg:mb-0">
              <Filter className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-gray-700 font-medium mr-4">Filter by Category:</span>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center ${
                    activeFilter === filter.id
                      ? 'bg-[#F15A24] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {filter.label}
                  <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                    activeFilter === filter.id
                      ? 'bg-white bg-opacity-20 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            Showing {Math.min(visiblePosts, filteredPosts.length)} of {filteredPosts.length} articles
            {activeFilter !== 'All' && ` in ${activeFilter}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('All');
                  setSearchTerm('');
                }}
                className="bg-[#F15A24] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#D64A1A] transition-colors duration-200"
              >
                Show All Articles
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(0, visiblePosts).map((post, index) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => handlePostClick(post.slug)}
                  >
                    {/* Post Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-[#F15A24] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </div>
                      
                      {/* Views */}
                      <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {post.views}
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#F15A24] transition-colors duration-200">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs flex items-center"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-gray-500 text-xs">
                            +{post.tags.length - 2} more
                          </span>
                        )}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-6 h-6 rounded-full mr-2"
                            loading="lazy"
                          />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        
                        <div className="text-[#F15A24] font-bold hover:text-[#D64A1A] transition-colors duration-200 flex items-center group">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              {visiblePosts < filteredPosts.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMorePosts}
                    className="bg-[#F15A24] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
    <section className="py-8 bg-gray-50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-md text-center">
      <div className="w-14 h-14 bg-[#F15A24] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
        <MessageSquare className="w-6 h-6 text-[#F15A24]" />
      </div>

      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
        Stay Updated with Drone Insights
      </h3>

      <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
        Get the latest articles, industry updates, and exclusive content delivered to your inbox. 
        Join 5,000+ drone enthusiasts who never miss an update.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200 text-sm"
        />
        <button className="bg-[#F15A24] text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#D64A1A] transition-all duration-200 flex items-center justify-center">
          Subscribe
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-3">
        No spam, unsubscribe anytime. We respect your privacy.
      </p>
    </div>
  </div>
</section>


      {/* CTA Section */}
    <section className="py-8 lg:py-14 bg-gradient-to-r from-[#F15A24] to-[#26A65B] text-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
      Ready to Start Your Drone Journey?
    </h2>
    <p className="text-base sm:text-lg text-orange-100 mb-6 max-w-2xl mx-auto">
      Transform your career with our DGCA-certified training programs. 
      Join thousands of successful pilots who started with us.
    </p>

    {/* Key Benefits */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white bg-opacity-10 rounded-lg p-3">
        <Award className="w-6 h-6 text-white mx-auto mb-1" />
        <p className="text-sm font-medium">DGCA Certified Training</p>
      </div>
      <div className="bg-white bg-opacity-10 rounded-lg p-3">
        <Users className="w-6 h-6 text-white mx-auto mb-1" />
        <p className="text-sm font-medium">Expert Instructors</p>
      </div>
      <div className="bg-white bg-opacity-10 rounded-lg p-3">
        <TrendingUp className="w-6 h-6 text-white mx-auto mb-1" />
        <p className="text-sm font-medium">Career Support</p>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <button
        onClick={() => navigate('/apply')}
        className="bg-white text-[#F15A24] font-semibold text-sm px-6 py-3 rounded-lg hover:bg-gray-100 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
      >
        Apply Now
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
      <a
        href="https://wa.me/919188883344?text=Hi, I need information about drone courses"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border-2 border-white text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-white hover:text-[#F15A24] transition-all duration-200 flex items-center justify-center"
      >
        <MessageSquare className="w-4 h-4 mr-2" />
        Talk to Our Team
      </a>
    </div>
  </div>
</section>

    </div>
  );
};

export default BlogPage;