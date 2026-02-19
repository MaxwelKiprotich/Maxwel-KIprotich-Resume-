import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Figma,
  ExternalLink,
  Calendar,
  Clock,
  User,
  Sparkles,
  Shield,
  Zap,
  Mailbox,
  X
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'web'
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
    success: false
  });

  const [activeContact, setActiveContact] = useState('email');
  const [typingText, setTypingText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [timezone, setTimezone] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projectTypes = [
    { value: 'web', label: 'Web Development', icon: '🌐' },
    { value: 'mobile', label: 'Mobile App', icon: '📱' },
    { value: 'design', label: 'UI/UX Design', icon: '🎨' },
    { value: 'seo', label: 'SEO & Marketing', icon: '📈' },
    { value: 'consulting', label: 'Consultation', icon: '💼' },
    { value: 'other', label: 'Other', icon: '✨' }
  ];

  const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com', icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:text-gray-300' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:text-blue-500' },
    { platform: 'Twitter', url: 'https://twitter.com', icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:text-sky-400' },
    { platform: 'Dribbble', url: 'https://dribbble.com', icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:text-pink-500' },
    { platform: 'Behance', url: 'https://behance.net', icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:text-blue-600' },
    { platform: 'Figma', url: 'https://figma.com', icon: <Figma className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:text-purple-500' }
  ];

  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      value: 'kiprotichmaxwel5@gmail.com',
      description: 'For project inquiries and collaboration',
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-cyan-500 to-blue-500',
      action: 'mailto:kiprotichmaxwel5@gmail.com'
    },
    {
      id: 'phone',
      title: 'Phone',
      value: '+254 113 320 238',
      description: 'Available for calls and WhatsApp',
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-emerald-500 to-green-500',
      action: 'tel:+254113320238'
    },
    {
      id: 'location',
      title: 'Location',
      value: 'Nairobi, Kenya',
      description: 'Open to remote work worldwide',
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-purple-500 to-pink-500',
      action: 'https://maps.google.com/?q=Nairobi+Kenya'
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Available for emergencies' }
  ];

  // Typewriter effect
  useEffect(() => {
    const texts = [
      "Let's build something amazing together.",
      "Ready to bring your ideas to life.",
      "Transforming concepts into digital reality.",
      "Your vision, my expertise."
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeWriter = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        setTypingText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypingText(currentText.substring(0, charIndex + 1));
        charIndex++;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
        setTimeout(typeWriter, 100);
        return;
      }
      
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, 500);
        return;
      }
      
      const speed = isDeleting ? 50 : 100;
      setTimeout(typeWriter, speed);
    };
    
    const timer = setTimeout(typeWriter, 100);
    
    // Cursor blink
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    
    return () => {
      clearTimeout(timer);
      clearInterval(cursorInterval);
    };
  }, []);

  // Get user timezone
  useEffect(() => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimezone(timezone);
    } catch (error) {
      setTimezone('GMT+3');
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        loading: false,
        error: 'Please fill in all required fields',
        success: false
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus({
        submitted: true,
        loading: false,
        error: 'Please enter a valid email address',
        success: false
      });
      return;
    }

    setFormStatus({
      submitted: true,
      loading: true,
      error: null,
      success: false
    });

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus({
        submitted: true,
        loading: false,
        error: null,
        success: true
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: 'web'
      });
      
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      setFormStatus({
        submitted: true,
        loading: false,
        error: 'Something went wrong. Please try again.',
        success: false
      });
    }
  };

  const handleSocialClick = (platform, url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleContactClick = (method) => {
    setActiveContact(method.id);
    if (method.action) {
      window.open(method.action, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-gray-900 to-transparent"></div>
        
        {/* Responsive background orbs */}
        <div className="absolute top-20 right-5 sm:right-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-5 sm:left-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: windowWidth < 640 ? '30px 30px' : '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
            <span className="text-cyan-300 text-xs sm:text-sm font-mono tracking-widest">
              GET IN TOUCH
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-chakra mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <div className="h-8 sm:h-10 md:h-12 flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-mono px-4">
              {typingText}
              <span className={`inline-block w-0.5 h-4 sm:h-5 md:h-6 lg:h-8 ml-1 bg-cyan-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
            </p>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Have a project in mind? Let's discuss how we can work together to bring 
            your vision to life. I'm always open to new opportunities and collaborations.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            {/* Contact Methods */}
            <div className="space-y-3 sm:space-y-4">
              {contactMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handleContactClick(method)}
                  className={`w-full text-left p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 hover:scale-[1.01] sm:hover:scale-[1.02] group ${
                    activeContact === method.id
                      ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-2 border-cyan-500/30'
                      : 'bg-gray-900/30 border border-gray-800 hover:border-cyan-500/30'
                  }`}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${method.color} p-2 sm:p-2.5 md:p-3 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <div className="text-white">
                        {method.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1">{method.title}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base font-medium mb-1 sm:mb-2 truncate">{method.value}</p>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 line-clamp-2">{method.description}</p>
                    </div>
                    <ExternalLink className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0 group-hover:text-cyan-400 transition-colors ${
                      activeContact === method.id ? 'text-cyan-400' : ''
                    }`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-5 md:mb-6 flex items-center">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-cyan-400" />
                Connect on Social
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-3">
                {socialLinks.map((social) => (
                  <button
                    key={social.platform}
                    onClick={() => handleSocialClick(social.platform, social.url)}
                    className={`p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-gray-800/50 border border-gray-700 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 ${social.color}`}
                  >
                    {social.icon}
                    <span className="text-[8px] sm:text-[10px] md:text-xs mt-1 sm:mt-2 text-gray-400">{social.platform}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-5 md:mb-6 flex items-center">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-emerald-400" />
                Working Hours
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {workingHours.map((schedule, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-800/50 last:border-0 gap-1 sm:gap-0">
                    <span className="text-xs sm:text-sm text-gray-300">{schedule.day}</span>
                    <span className="text-xs sm:text-sm text-cyan-300 font-medium">{schedule.hours}</span>
                  </div>
                ))}
                <div className="pt-3 sm:pt-4 mt-2 sm:mt-3 border-t border-gray-800">
                  <div className="text-xs sm:text-sm text-gray-500 flex items-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span className="truncate">Timezone: {timezone || 'GMT+3'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="relative p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              {/* Form Header */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">Send me a message</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </div>

              {/* Status Messages */}
              {formStatus.error && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-red-500/10 border border-red-500/30">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-red-300">{formStatus.error}</span>
                  </div>
                </div>
              )}

              {formStatus.success && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-emerald-300">
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div className="group">
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      <span className="flex items-center">
                        <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Your Name *
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all text-sm sm:text-base"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      <span className="flex items-center">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Email Address *
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all text-sm sm:text-base"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="group">
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all text-sm sm:text-base"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, projectType: type.value }))}
                        className={`p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border transition-all duration-300 flex flex-col items-center justify-center ${
                          formData.projectType === type.value
                            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/30 text-cyan-300'
                            : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:text-white hover:border-cyan-500/30'
                        }`}
                      >
                        <span className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{type.icon}</span>
                        <span className="text-[10px] sm:text-xs md:text-sm font-medium text-center">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    <span className="flex items-center">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Your Message *
                    </span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={windowWidth < 640 ? 4 : 5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 resize-none transition-all text-sm sm:text-base"
                      placeholder="Tell me about your project, timeline, and budget..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Form Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-4 sm:pt-5 md:pt-6 border-t border-gray-800 gap-3 sm:gap-4">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span className="text-center sm:text-left">Your information is secure and private</span>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="relative w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg sm:rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                      {formStatus.loading ? (
                        <>
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>

              {/* Quick Response Info */}
              <div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/30 border border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-white">Quick Response</div>
                      <div className="text-[10px] sm:text-xs text-gray-400">Typically replies within 4 hours</div>
                    </div>
                  </div>
                  <div className="text-cyan-400 font-bold text-sm sm:text-base ml-6 sm:ml-0">24h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map & Location Section */}
        <div className="mb-16 sm:mb-20">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-5 md:mb-6 flex items-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-emerald-400" />
                Based in Nairobi, Kenya
              </h3>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-white">Remote Work</h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Available for remote collaborations worldwide
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-white">Time Zone</h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      East Africa Time (GMT+3) • Flexible schedule
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Mailbox className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-white">Response Time</h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      24-hour response guarantee for all inquiries
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-sm sm:text-base">
                  Schedule a Call
                </button>
                <button className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-300 transition-all text-sm sm:text-base">
                  View Full Profile
                </button>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800 min-h-[250px] sm:min-h-[300px] md:min-h-[350px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
              
              {/* Interactive Map Toggle for Mobile */}
              {windowWidth < 768 ? (
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center p-4 sm:p-6 md:p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">Nairobi, Kenya</h4>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Available for projects worldwide</p>
                    <button 
                      onClick={() => setShowMap(!showMap)}
                      className="px-4 sm:px-5 py-2 sm:py-2.5 border border-gray-700 rounded-lg text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm"
                    >
                      {showMap ? 'Hide Map' : 'View on Map'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center p-6 sm:p-8">
                    <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <MapPin className="w-6 sm:w-7 md:w-10 h-6 sm:h-7 md:h-10 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Nairobi, Kenya</h4>
                    <p className="text-sm sm:text-base text-gray-400 mb-4">Available for projects worldwide</p>
                    <button className="px-5 sm:px-6 py-2 sm:py-2.5 border border-gray-700 rounded-lg text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                      View on Map
                    </button>
                  </div>
                </div>
              )}
              
              {/* Map dots animation */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-cyan-500/20 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-purple-500/20 animate-pulse delay-500"></div>
              <div className="absolute top-1/2 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500/20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* FAQ / Quick Info */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8">Frequently Asked Questions</h3>
            
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 text-left">
              <div className="p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl bg-gray-800/30 border border-gray-700">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 sm:mb-2 md:mb-3">What's your typical response time?</h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  I respond to all inquiries within 24 hours, and usually within 4 hours during business days.
                </p>
              </div>
              
              <div className="p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl bg-gray-800/30 border border-gray-700">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 sm:mb-2 md:mb-3">Do you work with international clients?</h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Yes! I work with clients worldwide and accommodate different time zones with flexible scheduling.
                </p>
              </div>
              
              <div className="p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl bg-gray-800/30 border border-gray-700">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 sm:mb-2 md:mb-3">What should I include in my project brief?</h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Include your goals, target audience, timeline, budget, and any existing materials or references.
                </p>
              </div>
              
              <div className="p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl bg-gray-800/30 border border-gray-700">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 sm:mb-2 md:mb-3">What's your preferred communication method?</h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Email for initial contact, then video calls via Zoom or Google Meet for detailed discussions.
                </p>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 pt-4 sm:pt-5 md:pt-6 lg:pt-8 border-t border-gray-800">
              <p className="text-xs sm:text-sm text-gray-400 px-2">
                Have more questions? Don't hesitate to reach out directly via email or phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;