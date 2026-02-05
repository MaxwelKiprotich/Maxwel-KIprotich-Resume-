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
  Mailbox
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

  const projectTypes = [
    { value: 'web', label: 'Web Development', icon: '🌐' },
    { value: 'mobile', label: 'Mobile App', icon: '📱' },
    { value: 'design', label: 'UI/UX Design', icon: '🎨' },
    { value: 'seo', label: 'SEO & Marketing', icon: '📈' },
    { value: 'consulting', label: 'Consultation', icon: '💼' },
    { value: 'other', label: 'Other', icon: '✨' }
  ];

  const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-300' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-500' },
    { platform: 'Twitter', url: 'https://twitter.com', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-sky-400' },
    { platform: 'Dribbble', url: 'https://dribbble.com', icon: <Globe className="w-5 h-5" />, color: 'hover:text-pink-500' },
    { platform: 'Behance', url: 'https://behance.net', icon: <Globe className="w-5 h-5" />, color: 'hover:text-blue-600' },
    { platform: 'Figma', url: 'https://figma.com', icon: <Figma className="w-5 h-5" />, color: 'hover:text-purple-500' }
  ];

  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      value: 'kiprotichmaxwel5@gmail.com',
      description: 'For project inquiries and collaboration',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
      action: 'mailto:kiprotichmaxwel5@gmail.com'
    },
    {
      id: 'phone',
      title: 'Phone',
      value: '+254 113 320 238',
      description: 'Available for calls and WhatsApp',
      icon: <Phone className="w-6 h-6" />,
      color: 'from-emerald-500 to-green-500',
      action: 'tel:+254113320238'
    },
    {
      id: 'location',
      title: 'Location',
      value: 'Nairobi, Kenya',
      description: 'Open to remote work worldwide',
      icon: <MapPin className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      action: 'https://maps.google.com/?q=Nairobi+Kenya'
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Available for emergencies' }
  ];

  // Typewriter effect for hero text
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
        return setTimeout(typeWriter, 100);
      }
      
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        return setTimeout(typeWriter, 500);
      }
      
      const speed = isDeleting ? 50 : 100;
      setTimeout(typeWriter, speed);
    };
    
    typeWriter();
    
    // Cursor blink
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Get user timezone
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(timezone);
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
      
      // Success
      setFormStatus({
        submitted: true,
        loading: false,
        error: null,
        success: true
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: 'web'
      });
      
      // Reset success message after 5 seconds
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
    console.log(`Opening ${platform}: ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleContactClick = (method) => {
    setActiveContact(method.id);
    if (method.action) {
      window.open(method.action, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-mono tracking-widest">
              GET IN TOUCH
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-chakra mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <div className="h-12 flex items-center justify-center mb-8">
            <p className="text-xl sm:text-2xl text-gray-400 font-mono">
              {typingText}
              <span className={`inline-block w-0.5 h-8 ml-1 bg-cyan-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
            </p>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring 
            your vision to life. I'm always open to new opportunities and collaborations.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handleContactClick(method)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] group ${
                    activeContact === method.id
                      ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-2 border-cyan-500/30'
                      : 'bg-gray-900/30 border border-gray-800 hover:border-cyan-500/30'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} p-3 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <div className="text-white">
                        {method.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
                      <p className="text-gray-300 font-medium mb-2">{method.value}</p>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                    <ExternalLink className={`w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors ${
                      activeContact === method.id ? 'text-cyan-400' : ''
                    }`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-cyan-400" />
                Connect on Social
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <button
                    key={social.platform}
                    onClick={() => handleSocialClick(social.platform, social.url)}
                    className={`p-4 rounded-xl bg-gray-800/50 border border-gray-700 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 ${social.color}`}
                  >
                    {social.icon}
                    <span className="text-xs mt-2 text-gray-400">{social.platform}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-emerald-400" />
                Working Hours
              </h3>
              <div className="space-y-4">
                {workingHours.map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-800/50 last:border-0">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="text-cyan-300 font-medium">{schedule.hours}</span>
                  </div>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-800">
                  <div className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Timezone: {timezone}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
                <p className="text-gray-400">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </div>

              {/* Status Messages */}
              {formStatus.error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-300">{formStatus.error}</span>
                  </div>
                </div>
              )}

              {formStatus.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-300">
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Your Name *
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all"
                        placeholder="John Doe"
                        required
                      />
                      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-cyan-500/30 transition-all pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <span className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Address *
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all"
                        placeholder="john@example.com"
                        required
                      />
                      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-cyan-500/30 transition-all pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all"
                      placeholder="Project Inquiry"
                    />
                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-cyan-500/30 transition-all pointer-events-none"></div>
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, projectType: type.value }))}
                        className={`p-4 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center ${
                          formData.projectType === type.value
                            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/30 text-cyan-300'
                            : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:text-white hover:border-cyan-500/30'
                        }`}
                      >
                        <span className="text-2xl mb-2">{type.icon}</span>
                        <span className="text-sm font-medium">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <span className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Your Message *
                    </span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 resize-none transition-all"
                      placeholder="Tell me about your project, timeline, and budget..."
                      required
                    ></textarea>
                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-cyan-500/30 transition-all pointer-events-none"></div>
                  </div>
                </div>

                {/* Form Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-800">
                  <div className="flex items-center text-sm text-gray-500 mb-4 sm:mb-0">
                    <Shield className="w-4 h-4 mr-2" />
                    Your information is secure and private
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      {formStatus.loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>

              {/* Quick Response Info */}
              <div className="mt-8 p-4 rounded-xl bg-gray-800/30 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-sm font-medium text-white">Quick Response</div>
                      <div className="text-xs text-gray-400">Typically replies within 4 hours</div>
                    </div>
                  </div>
                  <div className="text-cyan-400 font-bold">24h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map & Location Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-emerald-400" />
                Based in Nairobi, Kenya
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Remote Work</h4>
                    <p className="text-gray-400 text-sm">
                      Available for remote collaborations worldwide
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Time Zone</h4>
                    <p className="text-gray-400 text-sm">
                      East Africa Time (GMT+3) • Flexible schedule for international clients
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Mailbox className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Response Time</h4>
                    <p className="text-gray-400 text-sm">
                      24-hour response guarantee for all inquiries
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                  Schedule a Call
                </button>
                <button className="px-6 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-300 transition-all">
                  View Full Profile
                </button>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
              <div className="relative h-full min-h-[300px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Nairobi, Kenya</h4>
                  <p className="text-gray-400 mb-4">Available for projects worldwide</p>
                  <button className="px-6 py-2 border border-gray-700 rounded-lg text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition-colors">
                    View on Map
                  </button>
                </div>
              </div>
              {/* Map dots animation */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-cyan-500/20 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-purple-500/20 animate-pulse delay-500"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-emerald-500/20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* FAQ / Quick Info */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-10">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-3">What's your typical response time?</h4>
                <p className="text-gray-400">
                  I respond to all inquiries within 24 hours, and usually within 4 hours during business days.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-3">Do you work with international clients?</h4>
                <p className="text-gray-400">
                  Yes! I work with clients worldwide and accommodate different time zones with flexible scheduling.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-3">What information should I include in my project brief?</h4>
                <p className="text-gray-400">
                  Include your goals, target audience, timeline, budget, and any existing materials or references.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-3">What's your preferred method of communication?</h4>
                <p className="text-gray-400">
                  Email for initial contact, then we can schedule a video call via Zoom or Google Meet for detailed discussions.
                </p>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-800">
              <p className="text-gray-400">
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