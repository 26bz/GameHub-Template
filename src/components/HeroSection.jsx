import { useState, useEffect } from 'react';
import { Server, Shield, Users, Database, Globe, Cpu, ArrowRight, Gamepad } from 'lucide-react';

const AnimatedValue = ({ value, duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = 50;
    const increment = value / steps;
    const interval = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [value, duration]);

  return decimals === 0 ? Math.floor(count).toLocaleString() : count.toFixed(decimals);
};

const StatsCard = ({ icon: Icon, value, label, suffix = '+', decimals = 0 }) => (
  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
    {/* Hover Gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />

    {/* Glow Effect */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

    <div className="relative">
      <div className="flex items-center text-blue-400 mb-3 group-hover:scale-105 transform transition-all duration-200">
        <Icon className="mr-2" size={24} />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
        <AnimatedValue value={value} decimals={decimals} />
        {suffix}
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
    {/* Hover Effects */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 blur-xl transition-all duration-300" />

    <div className="relative">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-2.5 mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="w-full h-full text-blue-400 group-hover:text-blue-300 transition-colors" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-16 sm:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gray-900">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(25,33,52,0.8),transparent)]" />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Animated Glows */}
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-full p-1 pr-4 backdrop-blur-sm border border-gray-700/50 group hover:border-blue-500/50 transition-all duration-300">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-3 py-1 text-sm font-medium text-white mr-2">New</span>
            <div className="flex items-center space-x-2">
              <Gamepad size={16} className="text-blue-400" />
              <span className="text-gray-300 text-sm">Next-Gen Game Hosting Platform</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent py-2 md:py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 leading-tight">
            Level Up Your Gaming Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
            Deploy high-performance game servers with enterprise-grade hardware and instant setup in just a few clicks
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 md:mb-16 px-4 sm:px-0">
            <a
              href="/games"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all hover:scale-105 duration-300 font-medium flex items-center shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <Gamepad size={20} className="mr-2" />
              Deploy Game Server
              <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="example.com"
              className="group bg-gray-800/50 hover:bg-gray-800 text-white px-8 py-4 rounded-xl transition-all hover:scale-105 duration-300 font-medium backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 flex items-center"
            >
              Contact Us
              <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 px-4 sm:px-0">
          <StatsCard icon={Server} value={500} label="Active Servers" />
          <StatsCard icon={Globe} value={15} label="Global Locations" />
          <StatsCard icon={Shield} value={2.5} label="Tbps Protection" decimals={1} />
          <StatsCard icon={Database} value={99.9} label="Uptime %" decimals={1} suffix="%" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 px-4 sm:px-0">
          <FeatureCard icon={Cpu} title="Instant Deployment" description="Get your server running in under 60 seconds with our automated setup system and intuitive control panel." />
          <FeatureCard icon={Shield} title="Enterprise Security" description="Stay protected with multi-layered DDoS protection and automated threat mitigation systems." />
          <FeatureCard icon={Users} title="24/7 Expert Support" description="Our team of gaming specialists is available around the clock to ensure your servers run smoothly." />
        </div>
      </div>
    </section>
  );
}
