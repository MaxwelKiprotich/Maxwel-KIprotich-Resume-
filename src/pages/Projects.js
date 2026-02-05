import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Code2,
  Smartphone,
  Globe,
  ShoppingCart,
  BarChart3,
  Users,
  Cloud,
  Palette,
  Sparkles,
  ChevronRight,
  Play,
  Zap,
  Award,
  Star,
  Heart,
  Calendar,
  Tag,
  ArrowUpRight
} from 'lucide-react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projectFilters = [
    { id: 'all', label: 'All Projects', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'web', label: 'Web Apps', icon: <Globe className="w-4 h-4" /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'design', label: 'UI/UX Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'seo', label: 'SEO & Analytics', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  const projects = [
    {
      id: 1,
      title: 'Makazi Yangu',
      tagline: 'Real Estate Platform',
      description: 'Full-scale real estate platform with advanced property search, virtual tours, and secure transaction system.',
      category: 'web',
      status: 'live',
      year: 2024,
      technologies: ['React.js', 'Firebase', 'Node.js', 'Tailwind CSS', 'Google Maps API'],
      features: ['Property Search', 'Virtual Tours', 'Secure Payments', 'Agent Dashboard', 'Mobile App'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-cyan-500 to-blue-500',
      icon: '🏠',
      stats: { users: '500+', rating: 4.9, completed: '95%' }
    },
    {
      id: 2,
      title: 'ShopSwift Mobile',
      tagline: 'E-commerce Mobile App',
      description: 'React Native mobile shopping app with AR product preview, secure payments, and real-time inventory.',
      category: 'mobile',
      status: 'live',
      year: 2024,
      technologies: ['React Native', 'Expo', 'Firebase', 'Stripe', 'Redux'],
      features: ['AR Preview', 'Secure Checkout', 'Push Notifications', 'Wishlist', 'Order Tracking'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-purple-500 to-pink-500',
      icon: '🛒',
      stats: { downloads: '10K+', rating: 4.8, completed: '100%' }
    },
    {
      id: 3,
      title: 'SEO Analytics Dashboard',
      tagline: 'Performance Tracking Tool',
      description: 'Comprehensive SEO dashboard with real-time analytics, competitor tracking, and automated reporting.',
      category: 'seo',
      status: 'live',
      year: 2023,
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js', 'Google APIs'],
      features: ['Real-time Analytics', 'Competitor Tracking', 'Automated Reports', 'Keyword Research', 'Rank Tracking'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-emerald-500 to-green-500',
      icon: '📈',
      stats: { clients: '50+', accuracy: '99%', completed: '90%' }
    },
    {
      id: 4,
      title: 'HealthTrack Pro',
      tagline: 'Fitness & Wellness App',
      description: 'Comprehensive health tracking application with workout plans, nutrition tracking, and progress analytics.',
      category: 'mobile',
      status: 'in-progress',
      year: 2024,
      technologies: ['React Native', 'GraphQL', 'MongoDB', 'AWS', 'HealthKit API'],
      features: ['Workout Plans', 'Nutrition Tracking', 'Progress Analytics', 'Community Features', 'Wearable Integration'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-orange-500 to-red-500',
      icon: '💪',
      stats: { users: 'Beta', rating: 4.7, completed: '80%' }
    },
    {
      id: 5,
      title: 'Design System Pro',
      tagline: 'UI Component Library',
      description: 'Complete design system with reusable components, design tokens, and comprehensive documentation.',
      category: 'design',
      status: 'live',
      year: 2023,
      technologies: ['Figma', 'Storybook', 'React', 'TypeScript', 'Tailwind CSS'],
      features: ['Component Library', 'Design Tokens', 'Accessibility', 'Theming', 'Documentation'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-violet-500 to-purple-500',
      icon: '🎨',
      stats: { components: '50+', downloads: '5K+', completed: '100%' }
    },
    {
      id: 6,
      title: 'TaskFlow AI',
      tagline: 'Smart Project Management',
      description: 'AI-powered project management tool with smart task allocation, time tracking, and predictive analytics.',
      category: 'web',
      status: 'coming-soon',
      year: 2025,
      technologies: ['Next.js 14', 'OpenAI API', 'Supabase', 'Prisma', 'WebSockets'],
      features: ['AI Task Allocation', 'Time Tracking', 'Predictive Analytics', 'Team Collaboration', 'Integration APIs'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-blue-500 to-cyan-500',
      icon: '🤖',
      stats: { aiModels: '3', efficiency: '40%↑', completed: '60%' }
    },
    {
      id: 7,
      title: 'EduTech Platform',
      tagline: 'Online Learning System',
      description: 'Interactive e-learning platform with video courses, quizzes, progress tracking, and certificate issuance.',
      category: 'web',
      status: 'live',
      year: 2023,
      technologies: ['React', 'Node.js', 'MongoDB', 'Video.js', 'Stripe'],
      features: ['Video Courses', 'Interactive Quizzes', 'Progress Tracking', 'Certificates', 'Discussion Forums'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-yellow-500 to-orange-500',
      icon: '🎓',
      stats: { students: '2K+', courses: '50+', completed: '100%' }
    },
    {
      id: 8,
      title: 'Social Media Dashboard',
      tagline: 'Multi-platform Manager',
      description: 'Unified dashboard for managing multiple social media accounts with scheduling, analytics, and engagement tools.',
      category: 'web',
      status: 'live',
      year: 2023,
      technologies: ['Vue.js', 'Express.js', 'Redis', 'Social APIs', 'D3.js'],
      features: ['Multi-platform', 'Scheduling', 'Analytics', 'Engagement Tools', 'Team Collaboration'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-pink-500 to-rose-500',
      icon: '📱',
      stats: { platforms: '6', posts: '10K+', completed: '100%' }
    },
    {
      id: 9,
      title: 'Crypto Tracker Pro',
      tagline: 'Real-time Crypto Analytics',
      description: 'Advanced cryptocurrency tracking platform with real-time data, portfolio management, and trading signals.',
      category: 'mobile',
      status: 'live',
      year: 2024,
      technologies: ['React Native', 'WebSocket', 'Firebase', 'Recharts', 'CoinGecko API'],
      features: ['Real-time Data', 'Portfolio Management', 'Trading Signals', 'Price Alerts', 'Market Analysis'],
      image: 'https://images.unsplash.com/photo-1620336655055-bd87c5d1d73f?auto=format&fit=crop&w=800',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-green-500 to-emerald-500',
      icon: '₿',
      stats: { coins: '1000+', users: '20K+', completed: '95%' }
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  // Status badge component
  const StatusBadge = ({ status }) => {
    const statusConfig = {
      'live': { color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', label: 'Live' },
      'in-progress': { color: 'bg-blue-500/20 text-blue-400 border-blue-500/30', label: 'In Progress' },
      'coming-soon': { color: 'bg-purple-500/20 text-purple-400 border-purple-500/30', label: 'Coming Soon' }
    };
    
    const config = statusConfig[status] || statusConfig.live;
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}>
        {config.label}
      </span>
    );
  };

  // Project Card Component
  const ProjectCard = ({ project }) => (
    <div 
      key={project.id}
      className="group relative"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 transition-all duration-500 hover:scale-[1.02] hover:border-cyan-500/30">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <StatusBadge status={project.status} />
          </div>
          
          {/* Project Icon */}
          <div className="absolute top-4 left-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl`}>
              {project.icon}
            </div>
          </div>
          
          {/* Year */}
          <div className="absolute bottom-4 left-4 flex items-center text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            {project.year}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-cyan-400 font-medium">{project.tagline}</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-400">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between border-t border-gray-800 pt-4">
            {Object.entries(project.stats).map(([key, value], idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg font-bold text-white">{value}</div>
                <div className="text-xs text-gray-500 capitalize">{key}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex items-center justify-between">
            <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-300 transition-colors">
              <Eye className="w-4 h-4" />
              <span className="text-sm">Preview</span>
            </button>
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <Github className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        {hoveredProject === project.id && (
          <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <div className={`text-4xl mb-4 ${project.color.includes('cyan') ? 'text-cyan-400' : ''}`}>
                {project.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="space-y-3 mb-6">
                <h5 className="text-sm font-semibold text-gray-400">Key Features:</h5>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                  <span className="flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live
                  </span>
                </button>
                <button className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-300 transition-colors">
                  <span className="flex items-center">
                    <Code2 className="w-4 h-4 mr-2" />
                    View Code
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Hexagonal Grid Component
  const HexagonalGrid = () => (
    <div className="relative mb-20">
      <div className="hexagon-grid">
        {currentProjects.map((project, index) => (
          <div
            key={project.id}
            className={`hexagon-item ${index % 3 === 1 ? 'md:mt-12' : ''}`}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="hexagon-content">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl mb-6`}>
                {project.icon}
              </div>
              
              <StatusBadge status={project.status} />
              
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.tagline}</p>
              
              <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                {project.technologies.slice(0, 2).map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs rounded bg-gray-800/50 text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-center space-x-4 mt-6">
                <button className="p-2 rounded-lg bg-gray-800 hover:bg-cyan-600 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Github className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-mono tracking-widest">
              DIGITAL PORTFOLIO
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-chakra mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            A curated collection of innovative digital solutions, from web applications 
            to mobile platforms, showcasing technical expertise and creative problem-solving.
          </p>
          
          {/* Project Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{projects.length}+</div>
              <div className="text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{projects.filter(p => p.status === 'live').length}</div>
              <div className="text-gray-400">Live Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setCurrentPage(1);
                }}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700'
                }`}
              >
                {filter.icon}
                <span className="font-medium">{filter.label}</span>
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 p-1.5 rounded-xl bg-gray-900/50 border border-gray-800">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-300' : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="grid grid-cols-2 gap-1 w-5 h-5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-current rounded-sm"></div>
                ))}
              </div>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-300' : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="space-y-1 w-5 h-5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-current h-0.5 rounded-full"></div>
                ))}
              </div>
            </button>
          </div>
        </div>

        {/* Hexagonal Grid View */}
        {viewMode === 'grid' && <HexagonalGrid />}

        {/* Grid/List View */}
        <div className={`mb-12 ${viewMode === 'list' ? 'space-y-6' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mb-16">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:border-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Previous
            </button>
            
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(page => 
                  page === 1 || 
                  page === totalPages || 
                  (page >= currentPage - 1 && page <= currentPage + 1)
                )
                .map((page, index, array) => (
                  <React.Fragment key={page}>
                    {index > 0 && page - array[index - 1] > 1 && (
                      <span className="text-gray-600">...</span>
                    )}
                    <button
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                          : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      {page}
                    </button>
                  </React.Fragment>
                ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:border-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-10">
            <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">Have a Project in Mind?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to transform your ideas into exceptional digital experiences. 
              From concept to deployment, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1">
                <span className="flex items-center justify-center space-x-3">
                  <ExternalLink className="w-5 h-5" />
                  <span>Start a Project</span>
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-gray-700 text-gray-300 font-semibold rounded-xl hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300">
                <span className="flex items-center justify-center space-x-3">
                  <Play className="w-5 h-5" />
                  <span>View All Projects</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;