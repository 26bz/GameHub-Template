import { useState, useEffect } from 'react';
import { Star, Server, CheckCircle, Cpu, CirclePower, HardDrive, Network, Globe, Database, Mail } from 'lucide-react';

export const StatCard = ({ icon: Icon, label, value }) => (
  <div className="bg-gray-800/50 p-3 sm:p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
    <div className="flex items-center text-blue-400 mb-1.5 sm:mb-2">
      <Icon size={16} sm:size={18} className="mr-2" />
      <span className="text-xs sm:text-sm">{label}</span>
    </div>
    <div className="text-white font-bold text-sm sm:text-base">{value}</div>
  </div>
);

export const SpecItem = ({ icon: Icon, spec }) => (
  <div className="text-gray-300 flex items-center py-1.5 text-sm sm:text-base">
    <Icon size={14} sm:size={16} className="text-blue-400 mr-2 flex-shrink-0" />
    {spec}
  </div>
);

export const BackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return showBackToTop ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-200 z-50"
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  ) : null;
};

export const PlanCard = ({ plan, type }) => (
  <div className="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          {plan.promoTag && <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium mb-2">{plan.promoTag}</div>}
          <h3 className="text-xl sm:text-2xl font-bold text-white">{plan.title}</h3>
        </div>
        <div className="flex items-center bg-gray-800 rounded-full px-3 py-1">
          <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-white font-medium">{plan.rating}</span>
        </div>
      </div>
      {plan.badge && <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium animate-pulse">{plan.badge}</div>}

      <div className="space-y-1 mb-4 sm:mb-6 border-t border-b border-gray-700/50 py-3 sm:py-4">
        <SpecItem icon={Cpu} spec={plan.specs.cpu} />
        <SpecItem icon={CirclePower} spec={plan.specs.ram} />
        <SpecItem icon={HardDrive} spec={plan.specs.storage} />
        <SpecItem icon={Network} spec={plan.specs.bandwidth} />
        {type === 'web' && (
          <>
            <SpecItem icon={Globe} spec={plan.specs.domains} />
            <SpecItem icon={Database} spec={plan.specs.databases} />
            <SpecItem icon={Mail} spec={plan.specs.email} />
          </>
        )}
        <SpecItem icon={Server} spec={plan.specs.backups} />
      </div>

      <div className="space-y-2 mb-6">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center text-gray-300">
            <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2">
        <div>
          <div className="text-gray-400 text-sm">Starting at</div>
          <div className="text-xl sm:text-2xl font-bold text-white">
            ${plan.price}
            <span className="text-gray-400 text-xs sm:text-sm font-normal">/month</span>
          </div>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-medium flex items-center text-sm sm:text-base">
          <Server size={18} className="mr-2" />
          Deploy Now
        </button>
      </div>
    </div>
  </div>
);
