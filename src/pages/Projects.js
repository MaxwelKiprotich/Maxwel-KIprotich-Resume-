import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Code2,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Sparkles,
  ChevronRight,
  Play,
  Star,
  Heart,
  Calendar,
  ArrowUpRight,
  MoveUpRight,
  Rocket,
  TrendingUp,
  Layers,
  Cpu,
  Database,
  X
} from 'lucide-react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeDetails, setActiveDetails] = useState(null);
  const [is3DMode, setIs3DMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowWidth(window.innerWidth);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projectFilters = [
    { id: 'all', label: 'All Projects', icon: <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />, count: 9 },
    { id: 'web', label: 'Web Apps', icon: <Globe className="w-3 h-3 sm:w-4 sm:h-4" />, count: 4 },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />, count: 3 },
    { id: 'design', label: 'UI/UX Design', icon: <Palette className="w-3 h-3 sm:w-4 sm:h-4" />, count: 1 },
    { id: 'seo', label: 'SEO & Analytics', icon: <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />, count: 1 },
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
      features: ['Advanced Property Search', 'Virtual Tours', 'Secure Payments', 'Agent Dashboard', 'Mobile App'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent',
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      stats: { users: '500+', rating: 4.9, completed: '95%' },
      complexity: 'High',
      duration: '6 months'
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
      features: ['AR Product Preview', 'Secure Checkout', 'Push Notifications', 'Wishlist', 'Order Tracking'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent',
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      stats: { downloads: '10K+', rating: 4.8, completed: '100%' },
      complexity: 'Medium',
      duration: '4 months'
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
      bgColor: 'bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-transparent',
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      stats: { clients: '50+', accuracy: '99%', completed: '90%' },
      complexity: 'Medium',
      duration: '3 months'
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
      bgColor: 'bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent',
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      stats: { users: 'Beta', rating: 4.7, completed: '80%' },
      complexity: 'High',
      duration: '5 months'
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
      bgColor: 'bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent',
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      stats: { components: '50+', downloads: '5K+', completed: '100%' },
      complexity: 'Medium',
      duration: '3 months'
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
      bgColor: 'bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent',
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      stats: { aiModels: '3', efficiency: '40%↑', completed: '60%' },
      complexity: 'High',
      duration: '6 months'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const StatusBadge = ({ status }) => {
    const statusConfig = {
      'live': { 
        color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', 
        label: 'Live',
        icon: '●'
      },
      'in-progress': { 
        color: 'bg-blue-500/20 text-blue-400 border-blue-500/30', 
        label: 'In Progress',
        icon: '↻'
      },
      'coming-soon': { 
        color: 'bg-purple-500/20 text-purple-400 border-purple-500/30', 
        label: 'Coming Soon',
        icon: '⟳'
      }
    };
    
    const config = statusConfig[status] || statusConfig.live;
    
    return (
      <span className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium border flex items-center gap-1 sm:gap-1.5 ${config.color}`}>
        <span className="text-[10px] sm:text-xs">{config.icon}</span>
        <span className="hidden xs:inline">{config.label}</span>
      </span>
    );
  };

  // 3D effect for desktop only
  useEffect(() => {
    if (!is3DMode || isMobile) return;
    
    const cards = document.querySelectorAll('.project-card-3d');
    
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateY = ((x - centerX) / centerX) * 10;
      const rotateX = ((centerY - y) / centerY) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = (card) => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });
    
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, [filteredProjects, is3DMode, isMobile]);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-gray-900 to-transparent"></div>
        
        {/* Responsive background orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-transparent rounded-full"></div>
        
        {/* Floating Grid */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 243, 255, 0.2) 1px, transparent 0)`,
            backgroundSize: windowWidth < 640 ? '20px 20px' : '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
            <span className="text-cyan-300 text-xs sm:text-sm font-mono tracking-widest">
              PORTFOLIO SHOWCASE
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-chakra mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Creations
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
            Innovative projects that blend cutting-edge technology with exceptional user experiences.
            Each creation tells a story of problem-solving, creativity, and technical excellence.
          </p>
          
          {/* Interactive Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-4">
            {[
              { value: projects.length, label: 'Projects', icon: <Layers className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, color: 'text-cyan-400' },
              { value: projects.filter(p => p.status === 'live').length, label: 'Live', icon: <Rocket className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, color: 'text-emerald-400' },
              { value: '100%', label: 'Satisfaction', icon: <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, color: 'text-yellow-400' },
              { value: '3+', label: 'Years Exp', icon: <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, color: 'text-purple-400' },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/30 transition-all duration-500">
                  <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${stat.color.replace('text', 'bg')}/20 mx-auto mb-1 sm:mb-2 md:mb-3`}>
                    <div className={stat.color}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${stat.color} mb-0.5 sm:mb-1`}>{stat.value}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Filter Bar */}
        <div className="sticky top-16 sm:top-20 md:top-24 z-20 mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 shadow-xl">
            <div className="w-full lg:flex-1">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 px-1">Filter Projects</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {projectFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`group relative px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border transition-all duration-300 flex items-center space-x-1 sm:space-x-2 ${
                      activeFilter === filter.id
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                        : 'bg-gray-800/30 text-gray-400 hover:text-white hover:bg-gray-800 border-gray-700'
                    }`}
                  >
                    <div className={`${activeFilter === filter.id ? 'text-cyan-400' : 'text-gray-500'}`}>
                      {filter.icon}
                    </div>
                    <span className="font-medium text-xs sm:text-sm">{filter.label}</span>
                    <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs ${
                      activeFilter === filter.id 
                        ? 'bg-cyan-500/20 text-cyan-300' 
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* 3D Toggle - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">3D Effect</span>
                <button
                  onClick={() => setIs3DMode(!is3DMode)}
                  className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                    is3DMode ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : 'bg-gray-700'
                  }`}
                >
                  <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                    is3DMode ? 'transform translate-x-6' : ''
                  }`}></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="relative group"
              >
                {/* Main Card */}
                <div 
                  className={`project-card-3d relative overflow-hidden rounded-xl sm:rounded-2xl border transition-all duration-300 sm:duration-500 ${
                    hoveredProject === project.id 
                      ? 'border-cyan-500/50 shadow-lg sm:shadow-2xl shadow-cyan-500/20 scale-[1.02]' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => windowWidth < 768 && setActiveDetails(activeDetails === project.id ? null : project.id)}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 ${project.bgColor} opacity-30 sm:opacity-50`}></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-10 -right-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-4 sm:p-5 md:p-6 lg:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        <div className="text-white">
                          {project.icon}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1 sm:gap-2">
                        <StatusBadge status={project.status} />
                        <span className="text-[10px] sm:text-xs text-gray-500 font-mono">{project.year}</span>
                      </div>
                    </div>
                    
                    {/* Title & Description */}
                    <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-cyan-300 text-xs sm:text-sm font-medium mb-2">{project.tagline}</p>
                      <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">{project.description}</p>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 backdrop-blur-sm hover:border-cyan-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-lg bg-gray-800/30 text-gray-500">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Stats Bar */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 py-2 sm:py-3 md:py-4 border-t border-gray-800">
                      {Object.entries(project.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mb-0.5 sm:mb-1">{value}</div>
                          <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-2 sm:pt-3 md:pt-4 lg:pt-6 border-t border-gray-800">
                      <button className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-cyan-300 transition-colors group">
                        <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                        <span className="text-[10px] sm:text-xs md:text-sm">Preview</span>
                        <MoveUpRight className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                      <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                        <button className="p-1.5 sm:p-2 md:p-2.5 rounded-lg bg-gray-800 hover:bg-cyan-600 transition-all duration-300 hover:scale-110">
                          <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                        </button>
                        <button className="p-1.5 sm:p-2 md:p-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                          <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Details Panel (Expandable) - Mobile Version */}
                {activeDetails === project.id && isMobile && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-gray-900 border border-cyan-500/30 p-6">
                      <button 
                        onClick={() => setActiveDetails(null)}
                        className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-400" />
                      </button>
                      
                      <h4 className="text-xl font-bold text-white mb-4 pr-8">Project Details</h4>
                      
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-sm font-semibold text-gray-300 mb-2">Project Info</h5>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                            <span className="flex items-center gap-2">
                              <Database className="w-4 h-4" />
                              {project.complexity}
                            </span>
                            <span className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {project.duration}
                            </span>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Key Features
                          </h5>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></div>
                                <span className="text-sm text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                            <Code2 className="w-4 h-4" />
                            Tech Stack
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-3 pt-4 border-t border-gray-800">
                          <button className="px-4 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium rounded-lg text-sm flex items-center justify-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Visit Live Project
                          </button>
                          <button className="px-4 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg text-sm flex items-center justify-center gap-2">
                            <Github className="w-4 h-4" />
                            View Source Code
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Project Details Panel (Expandable) - Desktop Version */}
                {activeDetails === project.id && !isMobile && (
                  <div className="absolute left-0 right-0 top-full mt-4 rounded-xl sm:rounded-2xl bg-gray-900/95 backdrop-blur-xl border border-cyan-500/30 p-4 sm:p-5 md:p-6 z-50 animate-slideDown">
                    <div className="flex justify-between items-start mb-4 sm:mb-5 md:mb-6">
                      <div>
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">Project Details</h4>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                          <span className="flex items-center gap-1 sm:gap-2">
                            <Database className="w-3 h-3 sm:w-4 sm:h-4" />
                            Complexity: {project.complexity}
                          </span>
                          <span className="flex items-center gap-1 sm:gap-2">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            Duration: {project.duration}
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDetails(null);
                        }}
                        className="p-1.5 sm:p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 rotate-45" />
                      </button>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                      <div>
                        <h5 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3 md:mb-4 flex items-center gap-1 sm:gap-2">
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                          Key Features
                        </h5>
                        <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3"></div>
                              <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                            </li>
                          ))}
                          {project.features.length > 3 && (
                            <li className="text-xs sm:text-sm text-gray-500">
                              +{project.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3 md:mb-4 flex items-center gap-1 sm:gap-2">
                          <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          Tech Stack
                        </h5>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.technologies.slice(0, 4).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 text-[10px] sm:text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 md:pt-5 border-t border-gray-800">
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                        <button className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium rounded-lg text-xs sm:text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-1 sm:gap-2 justify-center">
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          Visit Live Project
                        </button>
                        <button className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 border border-gray-700 text-gray-300 font-medium rounded-lg text-xs sm:text-sm hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 flex items-center gap-1 sm:gap-2 justify-center">
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                          View Source Code
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-transparent border border-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 mb-12 sm:mb-16">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-cyan-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4 sm:mb-6 md:mb-8 mx-auto">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10 text-cyan-400" />
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-2">
              Ready to Launch Your Next{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block sm:inline">
                Digital Venture?
              </span>
            </h3>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4">
              Let's collaborate to transform your vision into a cutting-edge digital solution 
              that exceeds expectations and delivers measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="group relative px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white font-semibold rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg sm:hover:shadow-2xl hover:shadow-cyan-500/25 text-sm sm:text-base">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                  <span>Start a Project</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 border border-gray-700 text-gray-300 font-semibold rounded-lg sm:rounded-xl hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm sm:text-base">
                <span className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>View Case Studies</span>
                </span>
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-4 sm:pt-6 md:pt-8 border-t border-gray-800 max-w-2xl mx-auto px-4">
              {[
                { label: 'Avg. Delivery Time', value: '2-4 Weeks' },
                { label: 'Success Rate', value: '100%' },
                { label: 'Support', value: 'Lifetime' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xs sm:text-sm md:text-base lg:text-2xl font-bold text-cyan-300 mb-0.5 sm:mb-1">{stat.value}</div>
                  <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        /* Extra small screen breakpoint */
        @media (min-width: 380px) {
          .xs\\:inline {
            display: inline;
          }
        }
        
        /* Mobile touch optimizations */
        @media (max-width: 768px) {
          .project-card-3d {
            transform: none !important;
            transition: all 0.3s ease;
          }
          
          button, 
          [role="button"] {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsPage;