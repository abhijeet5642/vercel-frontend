
import React, { useState, useEffect } from 'react';
import { Calendar, Users, Trophy, Sparkles, Mail, Lock, User, X, Zap, Star, TrendingUp, Award, Menu, ChevronRight, Code, Music, Dumbbell, ArrowRight } from 'lucide-react';

export const HomePage = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const roles = [
    {
      title: "Explore & Register",
      description: "For Students: Browse events, register with ease, and never miss out on campus life.",
      icon: <Users className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Manage Events",
      description: "For Admins: Create, promote, and manage events effortlessly with powerful tools.",
      icon: <Calendar className="w-12 h-12" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Control & Settings",
      description: "For Super Admins: Oversee colleges, manage roles, and customize platform settings.",
      icon: <Trophy className="w-12 h-12" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const upcomingEvents = [
    {
      title: "InnovateFest 2024 Hackathon",
      date: "October 28, 2024",
      description: "Join the brightest minds on campus for a 24-hour coding challenge.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5v0PGG-8roIMqp8RhXZCj-MbQGBC58Cffg&s",
      icon: <Code className="w-5 h-5" />,
      category: "Hackathon"
    },
    {
      title: "Annual Cultural Fest: Spectrum",
      date: "November 15, 2024",
      description: "Experience a vibrant celebration of diversity with music, dance, and food.",
      image: "https://i.pinimg.com/736x/61/92/5d/61925d7680f2aa1a5bc9d55db2d80a3e.jpg",
      icon: <Music className="w-5 h-5" />,
      category: "Cultural"
    },
    {
      title: "Inter-College Sports Meet",
      date: "November 22, 2024",
      description: "Cheer for your college or compete in a week-long sports extravaganza.",
      image: "https://img.freepik.com/premium-vector/athletes-running-track-field-competition_120816-610.jpg",
      icon: <Dumbbell className="w-5 h-5" />,
      category: "Sports"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${authMode === 'login' ? 'Login' : 'Sign up'} successful!`);
    setShowAuth(false);
  };

  const AuthModal = () => (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={() => setShowAuth(false)}
    >
      <div 
        className="bg-white rounded-3xl p-8 max-w-md w-full relative animate-scaleIn shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={() => setShowAuth(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-transform duration-300"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 animate-bounce">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {authMode === 'login' ? 'Welcome Back!' : 'Join CampusEventHub!'}
          </h2>
          <p className="text-gray-600">
            {authMode === 'login' ? 'Login to explore amazing events' : 'Create your account in seconds'}
          </p>
        </div>

        <div className="space-y-4">
          {authMode === 'signup' && (
            <div className="animate-slideIn">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <div className="relative group">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-10 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>
          )}

          <div className="animate-slideIn" style={{animationDelay: '0.1s'}}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <div className="relative group">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="email"
                placeholder="student@college.edu"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-10 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="animate-slideIn" style={{animationDelay: '0.2s'}}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative group">
              <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-10 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          {authMode === 'signup' && (
            <div className="animate-slideIn" style={{animationDelay: '0.3s'}}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">College Name</label>
              <input
                type="text"
                placeholder="Your College"
                value={formData.college}
                onChange={(e) => setFormData({...formData, college: e.target.value})}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl mt-6"
          >
            {authMode === 'login' ? 'Login Now' : 'Create Account'} 🚀
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
              className="text-blue-600 font-bold hover:text-purple-600 underline decoration-2 underline-offset-2"
            >
              {authMode === 'login' ? 'Sign Up Free' : 'Login Here'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white bg-opacity-90 backdrop-blur-md shadow-sm'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CampusEventHub
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-base font-semibold text-gray-600 hover:text-blue-600 transition-colors relative group" href="#">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a className="text-base font-semibold text-gray-600 hover:text-blue-600 transition-colors relative group" href="#">
                Events
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a className="text-base font-semibold text-gray-600 hover:text-blue-600 transition-colors relative group" href="#">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a className="text-base font-semibold text-gray-600 hover:text-blue-600 transition-colors relative group" href="#">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
            
            <div className="flex items-center gap-4">
              <button
                // onClick={() => {
                //   setShowAuth(true);
                //   setAuthMode('login');
                // }}
                className="hidden md:block text-base font-semibold text-gray-600 hover:text-blue-600 transition-colors"
              >
        
              </button>
              <button
                // onClick={() => {
                //   // setShowAuth(true);
                //   // setAuthMode('signup');
                // }}
                className="px-6 py-3 font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <a href='/register'>signup </a>
              </button>
              <button 
                className="md:hidden text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 animate-slideDown">
              <nav className="flex flex-col gap-4">
                <a className="text-base font-semibold text-gray-600 hover:text-blue-600" href="#">Home</a>
                <a className="text-base font-semibold text-gray-600 hover:text-blue-600" href="#">Events</a>
                <a className="text-base font-semibold text-gray-600 hover:text-blue-600" href="#">About</a>
                <a className="text-base font-semibold text-gray-600 hover:text-blue-600" href="#">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow relative z-10">
        {/* Hero */}
        <section className="bg-gradient-to-br from-white to-blue-50 py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left animate-fadeInLeft">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full animate-pulse shadow-lg">
                  🎉 500+ Active Events
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                The Heartbeat of Your Campus.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient">
                  All in One Place.
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From hackathons to cultural fests, discover, manage, and engage
                with every event happening on your campus. Join thousands of students today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  // onClick={() => {
                  //   setShowAuth(true);
                  //   setAuthMode('signup');
                  // }}
                  className="group px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <a href='/register' >Get started</a>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 text-lg font-bold text-blue-600 bg-white border-2 border-blue-500 rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fadeInRight">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-2xl opacity-60 animate-pulse animation-delay-2000"></div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcTgcZ0tUCs1hhE6yZSOuHMRpucKp4MeaAJi57DJ0MTYrfLcD9bS8BPnZWjaIcMEn2wCzVre7iTc1NtWQUZAPsAEze5UErz212NNUcj5zD6sg8E6BMQAzlXjFUKkSJkwda65QQ3cDnV2twCnCrB8t7dDZ6q2OrEBPbftBpIqlZqyu3BaHroy8qzsifmcprAQTvjzLgaS_KvIe9SvpJPJG6r49hpVzH-2utV1RR4VlyNfe27jEJJrhcQ4teYUJ3pYZm919gNqvEyZs"
                  alt="Students collaborating"
                  className="rounded-2xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                One Platform, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Many Roles</span>
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Tailored experiences for everyone on campus.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 border-transparent hover:border-blue-200 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className={`inline-block p-4 bg-gradient-to-br ${role.color} rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {role.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{role.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {role.description}
                    </p>
                    <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Upcoming</span> Events
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Don't miss out on what's next. Here's a peek at our featured events.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white bg-opacity-90 backdrop-blur-sm text-blue-600 text-sm font-bold rounded-full flex items-center gap-1">
                        {event.icon}
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-blue-600 font-semibold mb-2">{event.date}</p>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    <button className="w-full px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      Register Now →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white opacity-20 rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white opacity-20 rounded-full animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-6xl font-black text-white mb-2">500+</div>
                <div className="text-white text-lg font-semibold opacity-90">Active Events</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-6xl font-black text-white mb-2">100+</div>
                <div className="text-white text-lg font-semibold opacity-90">Partner Colleges</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-6xl font-black text-white mb-2">10K+</div>
                <div className="text-white text-lg font-semibold opacity-90">Student Participants</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 relative z-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">CampusEventHub</h3>
            </div>
            <p className="leading-relaxed">Connecting campuses, one event at a time.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">About Us</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Events</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contact</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">For Partners</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Host an Event</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Sponsorships</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">College Admins</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
            <p className="mb-2">123 University Ave, Innovation City, 12345</p>
            <p className="mb-2">Email: info@campuseventhub.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">© 2024 CampusEventHub. All rights reserved.</p>
        </div>
      </footer>

      {/* Auth Modal */}
      {showAuth && <AuthModal />}

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

                @keyframes gradient {
          0%, 100% { 
            background-position: 0% 50%;
          }
          50% { 
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};
