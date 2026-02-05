import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Code2, 
  Sparkles, 
  ArrowRight, 
  Eye, 
  Smartphone, 
  Globe, 
  Shield, 
  Zap,
  ChevronRight,
  Play,
  Terminal,
  Coffee
} from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [activeTech, setActiveTech] = useState(0);
  const codeRef = useRef(null);
  
  const fullText = "Digital Architect & Full-Stack Developer";
  const typingSpeed = 100;
  const cursorBlinkSpeed = 530;

  const technologies = [
    { name: "React.js", icon: "⚛️", color: "text-cyan-400" },
    { name: "React Native", icon: "📱", color: "text-blue-400" },
    { name: "Firebase", icon: "🔥", color: "text-yellow-400" },
    { name: "Node.js", icon: "🟢", color: "text-emerald-400" },
    { name: "Figma", icon: "🎨", color: "text-purple-400" },
    { name: "SEO", icon: "📈", color: "text-orange-400" },
  ];

  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Responsive applications that work seamlessly across all devices",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern web applications with cutting-edge technologies",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Solutions",
      description: "Enterprise-grade security and best practices",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description: "Optimized for speed and scalability",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    let charIndex = 0;
    const typeWriter = () => {
      if (charIndex < fullText.length) {
        setTypedText(fullText.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
      }
    };

    // Start typing animation after a brief delay
    const typingTimer = setTimeout(typeWriter, 1000);

    return () => {
      clearTimeout(typingTimer);
    };
  }, []);

  useEffect(() => {
    // Cursor blink animation
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, cursorBlinkSpeed);

    // Technology carousel
    const techInterval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 3000);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(techInterval);
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleWorkClick = () => {
    navigate('/projects');
  };

  const codeSnippet = `const developer = {
  name: "Maxwell Kiprotich",
  role: "Digital Architect",
  specialization: [
    "Frontend Development",
    "Mobile Applications", 
    "SEO Strategy",
    "Digital Design"
  ],
  getProjectQuote: () => "Let's build something amazing!"
};`;

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-mono tracking-widest">
                  FULL-STACK DEVELOPER & DIGITAL EXPERT
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-chakra tracking-tight">
                <span className="block text-gray-300">MAXWELL</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
                  KIPROTICH
                </span>
              </h1>

              {/* Typing Animation */}
              <div className="h-12 flex items-center">
                <p className="text-xl sm:text-2xl text-gray-400 font-mono">
                  {typedText}
                  <span className={`inline-block w-0.5 h-8 ml-1 bg-cyan-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                </p>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
                I architect <span className="text-cyan-300 font-semibold">digital experiences</span> that blend cutting-edge technology with intuitive design. Specializing in React.js, React Native, and digital solutions that drive measurable results.
              </p>

              {/* Technology Stack Carousel */}
              <div className="relative py-6">
                <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide py-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={tech.name}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-500 ${
                        activeTech === index
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                          : 'bg-gray-800/50 border border-gray-700'
                      }`}
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className={`font-mono font-medium ${tech.color} whitespace-nowrap`}>
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleContactClick}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center space-x-3 text-white font-semibold text-lg">
                    <span>Connect With Me</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button
                  onClick={handleWorkClick}
                  className="group px-8 py-4 border-2 border-cyan-500/30 rounded-xl hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <span className="flex items-center justify-center space-x-3 text-cyan-300 font-semibold text-lg group-hover:text-white">
                    <Eye className="w-5 h-5" />
                    <span>View My Work</span>
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {[
                  { value: "50+", label: "Projects" },
                  { value: "100%", label: "Satisfaction" },
                  { value: "3+", label: "Years Exp" },
                  { value: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-cyan-300">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Code Window */}
            <div className="relative lg:pl-12">
              <div className="relative group">
                {/* Floating card effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-xl border border-cyan-500/20 overflow-hidden transform perspective-1000 rotate-y-[-5deg] rotate-x-[2deg] group-hover:rotate-y-0 group-hover:rotate-x-0 transition-transform duration-500">
                  {/* Window Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/50">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Terminal className="w-4 h-4" />
                      <span className="font-mono text-sm">portfolio.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-1 bg-gray-700 rounded"></div>
                      <div className="w-4 h-1 bg-gray-700 rounded"></div>
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm">
                    <pre className="overflow-x-auto">
                      <code>
                        <span className="text-[#569CD6]">const</span>{' '}
                        <span className="text-[#4EC9B0]">developer</span>{' '}
                        <span className="text-[#D4D4D4]">=</span>{' '}
                        <span className="text-[#D4D4D4]">{'{'}</span>
                        {'\n  '}
                        <span className="text-[#9CDCFE]">name</span>
                        <span className="text-[#D4D4D4]">:</span>{' '}
                        <span className="text-[#CE9178]">"Maxwell Kiprotich"</span>
                        <span className="text-[#D4D4D4]">,</span>
                        {'\n  '}
                        <span className="text-[#9CDCFE]">role</span>
                        <span className="text-[#D4D4D4]">:</span>{' '}
                        <span className="text-[#CE9178]">"Digital Architect"</span>
                        <span className="text-[#D4D4D4]">,</span>
                        {'\n  '}
                        <span className="text-[#9CDCFE]">specialization</span>
                        <span className="text-[#D4D4D4]">:</span>{' '}
                        <span className="text-[#D4D4D4]">[</span>
                        {'\n    '}
                        <span className="text-[#CE9178]">"Frontend Development"</span>
                        <span className="text-[#D4D4D4]">,</span>
                        {'\n    '}
                        <span className="text-[#CE9178]">"Mobile Applications"</span>
                        <span className="text-[#D4D4D4]">,</span>{' '}
                        {'\n    '}
                        <span className="text-[#CE9178]">"SEO Strategy"</span>
                        <span className="text-[#D4D4D4]">,</span>
                        {'\n    '}
                        <span className="text-[#CE9178]">"Digital Design"</span>
                        {'\n  '}
                        <span className="text-[#D4D4D4]">],</span>
                        {'\n  '}
                        <span className="text-[#DCDCAA]">getProjectQuote</span>
                        <span className="text-[#D4D4D4]">:</span>{' '}
                        <span className="text-[#D4D4D4]">()</span>{' '}
                        <span className="text-[#569CD6]">=&gt;</span>{' '}
                        <span className="text-[#CE9178]">"Let's build something amazing!"</span>
                        {'\n'}
                        <span className="text-[#D4D4D4]">{'}'}</span>
                        <span className="text-[#D4D4D4]">;</span>
                      </code>
                    </pre>
                    
                    {/* Animated cursor */}
                    <div className="flex items-center mt-6 pt-4 border-t border-gray-800">
                      <div className="text-emerald-400">$</div>
                      <div className="ml-2 text-cyan-300 animate-pulse">_</div>
                    </div>
                  </div>

                  {/* Window Footer */}
                  <div className="px-6 py-3 border-t border-gray-800 bg-gray-900/50 flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Coffee className="w-3 h-3" />
                      <span>Ready for your next project</span>
                    </div>
                    <div className="font-mono">JS • v1.0</div>
                  </div>
                </div>

                {/* Floating Elements Around Card */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-purple-500/20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-cyan-500/20 animate-pulse delay-500"></div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-2.5 mb-3 group-hover:scale-110 transition-transform`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-32 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current text-gray-900"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current text-gray-900"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-gray-900"
          ></path>
        </svg>
      </div>

      {/* Call to Action Section */}
      <div className="relative bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-300"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-700"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-cyan-300">transform</span> your digital presence?
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let's collaborate to build something extraordinary that drives real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactClick}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center space-x-3">
                <span>Start a Project</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 border-2 border-gray-700 rounded-xl font-semibold text-lg hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300">
              <span className="flex items-center justify-center space-x-3">
                <Play className="w-5 h-5" />
                <span>Watch Showcase</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;