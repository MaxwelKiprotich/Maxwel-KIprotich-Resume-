import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Palette, 
  BarChart3, 
  Smartphone, 
  Cloud,
  Layers,
  Server,
  Sparkles,
  ChevronRight
} from 'lucide-react';

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [percentage, setPercentage] = useState(0);

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: <Layers className="w-5 h-5" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code2 className="w-5 h-5" /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-5 h-5" /> },
    { id: 'design', label: 'Design', icon: <Palette className="w-5 h-5" /> },
    { id: 'devops', label: 'DevOps', icon: <Cloud className="w-5 h-5" /> },
  ];

  const skillsData = [
    // Frontend Skills
    {
      id: 1,
      name: 'React.js',
      category: 'frontend',
      level: 95,
      icon: '⚛️',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      description: 'Building dynamic and responsive user interfaces',
      projects: 25,
      years: 3
    },
    {
      id: 2,
      name: 'Next.js',
      category: 'frontend',
      level: 90,
      icon: 'Δ',
      color: 'text-gray-300',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/30',
      description: 'Server-side rendering and static site generation',
      projects: 15,
      years: 2
    },
    {
      id: 3,
      name: 'TypeScript',
      category: 'frontend',
      level: 88,
      icon: 'TS',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      description: 'Type-safe JavaScript development',
      projects: 20,
      years: 2
    },
    {
      id: 4,
      name: 'Tailwind CSS',
      category: 'frontend',
      level: 92,
      icon: '🌀',
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      description: 'Utility-first CSS framework',
      projects: 30,
      years: 3
    },

    // Mobile Skills
    {
      id: 5,
      name: 'React Native',
      category: 'mobile',
      level: 90,
      icon: '📱',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      description: 'Cross-platform mobile applications',
      projects: 12,
      years: 2
    },
    {
      id: 6,
      name: 'Expo',
      category: 'mobile',
      level: 85,
      icon: '⚡',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      description: 'React Native development platform',
      projects: 8,
      years: 2
    },

    // Backend Skills
    {
      id: 7,
      name: 'Node.js',
      category: 'backend',
      level: 88,
      icon: '🟢',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      description: 'JavaScript runtime environment',
      projects: 18,
      years: 3
    },
    {
      id: 8,
      name: 'Firebase',
      category: 'backend',
      level: 85,
      icon: '🔥',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      description: 'Backend-as-a-Service platform',
      projects: 10,
      years: 2
    },
    {
      id: 9,
      name: 'MongoDB',
      category: 'backend',
      level: 82,
      icon: '🍃',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      description: 'NoSQL database',
      projects: 12,
      years: 2
    },

    // Design Skills
    {
      id: 10,
      name: 'Figma',
      category: 'design',
      level: 85,
      icon: '🎨',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      description: 'UI/UX design and prototyping',
      projects: 25,
      years: 2
    },
    {
      id: 11,
      name: 'Adobe Suite',
      category: 'design',
      level: 80,
      icon: '✏️',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      description: 'Graphic design and editing',
      projects: 15,
      years: 3
    },

    // DevOps Skills
    {
      id: 12,
      name: 'Git/GitHub',
      category: 'devops',
      level: 90,
      icon: '🐙',
      color: 'text-gray-300',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/30',
      description: 'Version control and collaboration',
      projects: 40,
      years: 3
    },
    {
      id: 13,
      name: 'Docker',
      category: 'devops',
      level: 78,
      icon: '🐳',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      description: 'Containerization platform',
      projects: 8,
      years: 1
    },
    {
      id: 14,
      name: 'AWS',
      category: 'devops',
      level: 75,
      icon: '☁️',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      description: 'Cloud services and deployment',
      projects: 6,
      years: 1
    },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  // Animated percentage counter
  useEffect(() => {
    const timer = setTimeout(() => {
      if (percentage < 100) {
        setPercentage(prev => prev + 1);
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [percentage]);

  const skillOrbs = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Frontend Development",
      description: "Modern web interfaces with React, Next.js & TypeScript",
      gradient: "from-cyan-500 to-blue-500",
      skills: ["React", "Next.js", "TypeScript", "Tailwind"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Development",
      description: "Cross-platform apps with React Native & Expo",
      gradient: "from-purple-500 to-pink-500",
      skills: ["React Native", "Expo", "iOS/Android"]
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Backend Development",
      description: "Scalable server-side solutions",
      gradient: "from-emerald-500 to-green-500",
      skills: ["Node.js", "Firebase", "MongoDB"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "User-centered design and prototyping",
      gradient: "from-violet-500 to-purple-500",
      skills: ["Figma", "Adobe", "Wireframing"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "SEO & Analytics",
      description: "Data-driven optimization strategies",
      gradient: "from-orange-500 to-red-500",
      skills: ["SEO", "Google Analytics", "Performance"]
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "DevOps & Cloud",
      description: "Deployment and infrastructure management",
      gradient: "from-blue-500 to-cyan-500",
      skills: ["Git", "Docker", "AWS", "CI/CD"]
    },
  ];

  return (
    <section id="skills" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
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
              TECHNICAL EXPERTISE
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-chakra mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Capabilities
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            A multidisciplinary approach to digital creation, combining technical expertise 
            with strategic thinking to deliver exceptional results.
          </p>
        </div>

        {/* Skill Orbs Visualization */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillOrbs.map((orb, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 hover:scale-[1.02]">
                  {/* Animated Orb Background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${orb.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${orb.gradient} p-4 mb-6 flex items-center justify-center`}>
                      <div className="text-white">
                        {orb.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{orb.title}</h3>
                    <p className="text-gray-400 mb-4">{orb.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {orb.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-mono rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-800">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Proficiency</span>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              className={`w-2 h-2 rounded-full ${star <= 4 ? 'bg-cyan-500' : 'bg-gray-700'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-500/50 transition-all duration-500"></div>
                </div>
                
                {/* Connection lines (for desktop) */}
                {index < skillOrbs.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Filter & Grid */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="group relative p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg ${skill.bgColor} ${skill.borderColor} border flex items-center justify-center`}>
                      <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${skill.color}`}>{skill.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="text-xs text-gray-500 font-mono">
                          {skill.projects} projects
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-700"></div>
                        <div className="text-xs text-gray-500 font-mono">
                          {skill.years} years
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Proficiency</span>
                    <span className={`font-bold ${skill.color}`}>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${skill.bgColor} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4">{skill.description}</p>

                {/* Hover Details */}
                <div className={`absolute inset-0 rounded-xl p-6 bg-gray-900/95 backdrop-blur-sm flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  hoveredSkill === skill.id ? 'block' : 'hidden'
                }`}>
                  <div className="text-center">
                    <div className={`text-4xl mb-4 ${skill.color}`}>{skill.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-2">{skill.name}</h4>
                    <p className="text-gray-300 mb-4">{skill.description}</p>
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <div className="text-center">
                        <div className="text-cyan-300 font-bold">{skill.projects}</div>
                        <div className="text-gray-500">Projects</div>
                      </div>
                      <div className="w-px h-6 bg-gray-700"></div>
                      <div className="text-center">
                        <div className="text-cyan-300 font-bold">{skill.years} yrs</div>
                        <div className="text-gray-500">Experience</div>
                      </div>
                      <div className="w-px h-6 bg-gray-700"></div>
                      <div className="text-center">
                        <div className="text-cyan-300 font-bold">{skill.level}%</div>
                        <div className="text-gray-500">Mastery</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 sm:p-10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-300 mb-2">3+</div>
              <div className="text-gray-400">Years Experience</div>
              <div className="text-sm text-gray-500 mt-2">Building digital solutions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-300 mb-2">50+</div>
              <div className="text-gray-400">Projects Completed</div>
              <div className="text-sm text-gray-500 mt-2">From concept to deployment</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-300 mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
              <div className="text-sm text-gray-500 mt-2">Delivering exceptional results</div>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Development Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Discovery", desc: "Understanding requirements and goals", icon: "🔍" },
              { step: 2, title: "Design", desc: "Wireframing and prototyping", icon: "🎨" },
              { step: 3, title: "Development", desc: "Agile development process", icon: "⚡" },
              { step: 4, title: "Deployment", desc: "Testing and launch", icon: "🚀" },
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-xl mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
                {step.step < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform translate-x-1/2 -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;