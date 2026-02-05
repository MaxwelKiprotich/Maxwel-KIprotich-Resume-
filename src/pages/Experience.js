import React, { useState, useEffect } from 'react';
import { 
  Calendar,
  Building,
  MapPin,
  Award,
  ChevronRight,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Users,
  Rocket,
  Code2,
  Lightbulb,
  TrendingUp,
  Sparkles,
  Clock
} from 'lucide-react';

const ExperiencePage = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  const experiences = [
    {
      id: 1,
      title: "Founder & Lead Developer",
      company: "Makazi Yangu",
      period: "2024 - Present",
      duration: "1+ year",
      location: "Nairobi, Kenya",
      type: "Full-time",
      icon: <Building className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      description: "Architected and developed a full-scale real estate platform integrating web and mobile experiences.",
      achievements: [
        "Built platform from ground up using React.js and React Native",
        "Implemented advanced property search and filtering system",
        "Integrated secure payment processing",
        "Achieved 100+ active users in first 3 months"
      ],
      technologies: ["React.js", "React Native", "Firebase", "Node.js", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 2,
      title: "Chief Technology Officer",
      company: "Civic Tech Startup",
      period: "2024",
      duration: "1 year",
      location: "Remote",
      type: "Contract",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "Led technical strategy and architecture for a civic technology platform.",
      achievements: [
        "Oversaw development team of 5 engineers",
        "Implemented scalable cloud infrastructure",
        "Reduced system latency by 40%",
        "Led product roadmap planning"
      ],
      technologies: ["AWS", "Docker", "PostgreSQL", "React", "Python"],
      link: "#"
    },
    {
      id: 3,
      title: "Founder & Developer",
      company: "Maxt3ch",
      period: "2025 - Present",
      duration: "Current",
      location: "Kenya",
      type: "Full-time",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-emerald-500 to-green-500",
      description: "Developing bespoke web and mobile solutions for diverse clients.",
      achievements: [
        "Delivered 15+ client projects successfully",
        "Specialized in React and React Native applications",
        "Implemented SEO strategies improving client traffic by 300%",
        "Maintained 100% client satisfaction rate"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Firebase", "Figma"],
      link: "#"
    },
    {
      id: 4,
      title: "Freelance Web Developer",
      company: "Various Clients",
      period: "2023 - 2024",
      duration: "1.5 years",
      location: "Remote",
      type: "Freelance",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      description: "Provided web development services to small businesses and startups.",
      achievements: [
        "Built 20+ responsive websites",
        "Improved client site performance by 60%",
        "Implemented SEO best practices",
        "Maintained 95% client retention rate"
      ],
      technologies: ["HTML/CSS", "JavaScript", "WordPress", "SEO", "Analytics"],
      link: "#"
    },
    {
      id: 5,
      title: "Digital Marketing Specialist",
      company: "E-commerce Platform",
      period: "2022 - 2023",
      duration: "1 year",
      location: "Nairobi, Kenya",
      type: "Full-time",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-violet-500 to-purple-500",
      description: "Managed digital marketing campaigns and analyzed performance metrics.",
      achievements: [
        "Increased website traffic by 150%",
        "Reduced customer acquisition cost by 30%",
        "Implemented data-driven marketing strategies",
        "Managed $50k+ monthly ad spend"
      ],
      technologies: ["Google Analytics", "Facebook Ads", "SEO", "Content Marketing"],
      link: "#"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Software Engineering",
      institution: "Moringa School",
      period: "2023",
      duration: "6 months",
      location: "Nairobi, Kenya",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "Intensive software development bootcamp focusing on modern web technologies.",
      achievements: ["Full-Stack Web Development", "Agile Methodology", "Team Projects"]
    },
    {
      id: 2,
      degree: "Digital Marketing Certification",
      institution: "Google Digital Garage",
      period: "2022",
      duration: "3 months",
      location: "Online",
      icon: <Award className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      description: "Comprehensive digital marketing certification covering SEO, analytics, and strategy.",
      achievements: ["SEO Fundamentals", "Analytics Certification", "Digital Strategy"]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      icon: "⚛️",
      color: "bg-cyan-500/20",
      link: "#"
    },
    {
      id: 2,
      name: "Google Analytics Certification",
      issuer: "Google",
      date: "2023",
      icon: "📊",
      color: "bg-blue-500/20",
      link: "#"
    },
    {
      id: 3,
      name: "AWS Cloud Practitioner",
      issuer: "Amazon",
      date: "2024",
      icon: "☁️",
      color: "bg-orange-500/20",
      link: "#"
    },
    {
      id: 4,
      name: "Figma UI/UX Design",
      issuer: "Figma",
      date: "2023",
      icon: "🎨",
      color: "bg-purple-500/20",
      link: "#"
    }
  ];

  // Calculate years of experience
  useEffect(() => {
    const startYear = 2022;
    const years = currentYear - startYear;
    setYearsOfExperience(years);
    
    // Animate counter
    let count = 0;
    const interval = setInterval(() => {
      if (count < years) {
        count++;
        setYearsOfExperience(count);
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [currentYear]);

  const stats = [
    { label: "Years Experience", value: yearsOfExperience, suffix: "+", color: "text-cyan-400" },
    { label: "Projects Completed", value: 50, suffix: "+", color: "text-purple-400" },
    { label: "Technologies", value: 15, suffix: "+", color: "text-emerald-400" },
    { label: "Happy Clients", value: 30, suffix: "+", color: "text-pink-400" }
  ];

  const timelineItems = [
    { year: "2022", event: "Started Digital Marketing Career", type: "career" },
    { year: "2023", event: "Software Engineering Bootcamp", type: "education" },
    { year: "2023", event: "First Freelance Projects", type: "career" },
    { year: "2024", event: "Founded Makazi Yangu", type: "entrepreneurship" },
    { year: "2024", event: "CTO Role at Civic Tech", type: "career" },
    { year: "2025", event: "Launched Maxt3ch", type: "entrepreneurship" },
    { year: "Present", event: "Full-Stack Development", type: "current" }
  ];

  return (
    <section id="experience" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-32 bottom-32 w-0.5 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-transparent hidden lg:block"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-mono tracking-widest">
              PROFESSIONAL JOURNEY
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-chakra mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience & Timeline
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Building digital solutions and leading technical innovation across startups and 
            established organizations. From concept to deployment.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 hover:scale-[1.02]">
                <div className="flex flex-col items-center text-center">
                  <div className={`text-4xl sm:text-5xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                </div>
                {/* Animated background on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Navigation */}
        <div className="mb-12">
          <div className="flex overflow-x-auto scrollbar-hide pb-4">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(index)}
                className={`flex-shrink-0 mx-2 px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                  activeExperience === index
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                  <div className="text-white">
                    {exp.icon}
                  </div>
                </div>
                <div className="text-left">
                  <div className="font-semibold">{exp.company}</div>
                  <div className="text-sm opacity-80">{exp.period}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Experience Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Left Column - Experience Details */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                {/* Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${experiences[activeExperience].color} flex items-center justify-center`}>
                        <div className="text-white">
                          {experiences[activeExperience].icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{experiences[activeExperience].title}</h3>
                        <div className="flex items-center space-x-4 text-gray-400">
                          <span className="flex items-center">
                            <Building className="w-4 h-4 mr-2" />
                            {experiences[activeExperience].company}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {experiences[activeExperience].location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-2">
                      {experiences[activeExperience].period}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {experiences[activeExperience].duration}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-8">
                  {experiences[activeExperience].description}
                </p>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-cyan-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {experiences[activeExperience].achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Code2 className="w-5 h-5 mr-2 text-purple-400" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {experiences[activeExperience].technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 font-mono text-sm hover:border-cyan-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-500/30 transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline Visualization */}
          <div className="space-y-8">
            {/* Mini Timeline */}
            <div className="p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-emerald-400" />
                Career Timeline
              </h4>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-transparent"></div>
                <div className="space-y-6">
                  {timelineItems.map((item, index) => (
                    <div key={index} className="relative pl-10">
                      <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full ${
                        item.type === 'current' ? 'bg-cyan-500 animate-pulse' :
                        item.type === 'entrepreneurship' ? 'bg-purple-500' :
                        item.type === 'education' ? 'bg-emerald-500' :
                        'bg-gray-600'
                      }`}></div>
                      <div>
                        <div className="font-bold text-white">{item.year}</div>
                        <div className="text-sm text-gray-400">{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-400" />
                Certifications
              </h4>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg ${cert.color} flex items-center justify-center text-xl`}>
                        {cert.icon}
                      </div>
                      <div>
                        <div className="font-medium text-white">{cert.name}</div>
                        <div className="text-sm text-gray-400">{cert.issuer} • {cert.date}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Education & Training
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <div key={edu.id} className="relative group">
                <div className="p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-emerald-500/30 transition-all duration-500 hover:scale-[1.02]">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center`}>
                        <div className="text-white">
                          {edu.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                        <div className="text-gray-400">{edu.institution}</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-sm">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{edu.description}</p>
                  
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-800 flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                    <div className="text-sm text-gray-500">{edu.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Philosophy */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-10">
          <div className="text-center max-w-3xl mx-auto">
            <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">Career Philosophy</h3>
            <p className="text-xl text-gray-300 mb-8">
              "I believe in creating technology that not only solves problems but also 
              enhances human experiences. Every line of code should serve a purpose, 
              every design should tell a story, and every solution should make life 
              better for its users."
            </p>
            <div className="flex items-center justify-center space-x-6 text-gray-400">
              <span className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Problem Solver
              </span>
              <span className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Team Player
              </span>
              <span className="flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Innovator
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;