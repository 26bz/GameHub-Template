import { useState, useEffect } from 'react';
import { Star, Server, Globe, Gamepad, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const games = [
  {
    id: 1,
    name: 'ARK: Survival Evolved',
    description: 'Dominate the world of dinosaurs with our high-performance ARK servers. Experience seamless gameplay with automatic mod updates and premium hardware.',
    image: '/images/ark-se.avif',
    features: ['Auto Mod Updates', 'Premium Hardware', 'DDoS Protection', '99.9% Uptime'],
    startingPrice: 14.99,
    activeServers: '1,200+',
    rating: 4.8,
    badge: 'MOST POPULAR',
    promoTag: 'Save 20% - Limited Time',
    deployLink: '/ark-se',
  },
  {
    id: 2,
    name: 'CS:GO',
    description: 'Professional CS:GO servers with 128-tick rate and premium anti-cheat. Perfect for tournaments and competitive play.',
    image: '/images/csgo.png',
    features: ['128-Tick Rate', 'Anti-Cheat', 'Tournament Ready', 'Custom Plugins'],
    startingPrice: 12.99,
    activeServers: '2,500+',
    rating: 4.9,
    promoTag: 'Tournament Ready',
    deployLink: '/csgo',
  },
  {
    id: 3,
    name: 'Minecraft',
    description: 'Launch your Minecraft server instantly with our one-click modpack installer and automated backup system.',
    image: '/images/minecraft.jpg',
    features: ['1-Click Modpacks', 'Instant Setup', 'Free Subdomain', 'Automatic Backups'],
    startingPrice: 8.99,
    activeServers: '5,000+',
    rating: 4.7,
    badge: 'NEW',
    promoTag: 'Free Domain Included',
    deployLink: '/minecraft',
  },
];

const StatCard = ({ icon: Icon, label, value, className = '' }) => (
  <div className={`bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 ${className}`}>
    <div className="flex items-center text-blue-400 mb-2">
      <Icon size={18} className="mr-2" />
      <span className="text-sm">{label}</span>
    </div>
    <div className="text-white font-bold text-lg">{value}</div>
  </div>
);

const FeatureItem = ({ feature }) => (
  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-gray-300 flex items-center">
    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
    {feature}
  </motion.li>
);

const NavButton = ({ direction, onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? '-left-4' : '-right-4'} 
    bg-gray-800/90 p-2 rounded-full border border-gray-700/50 hover:border-blue-500/50 
    hover:bg-gray-700/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
    hover:scale-110 z-10`}
  >
    {direction === 'left' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
  </button>
);

export default function GameHostingShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % games.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % games.length);
    setAutoplay(false);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + games.length) % games.length);
    setAutoplay(false);
  };

  return (
    <section className="bg-gradient-to-b min-h-screen from-transparent via-gray-900 to-black py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text py-3 text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">Our Top Premium Game Servers</h2>
          <p className="text-xl md:text-2xl font-semibold text-gray-300 mb-8 max-w-3xl mx-auto">Discover our top games ready to deploy in seconds with enterprise-grade hardware</p>
        </motion.div>

        <div className="relative px-4">
          <NavButton direction="left" onClick={handlePrev} disabled={currentIndex === 0} />
          <NavButton direction="right" onClick={handleNext} disabled={currentIndex === games.length - 1} />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-2xl p-4 sm:p-8 backdrop-blur-sm border border-gray-700/50"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group h-[250px] sm:h-[400px]">
                  {' '}
                  <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors rounded-xl" />
                  <img src={games[currentIndex].image} alt={games[currentIndex].name} className="w-full h-full object-cover rounded-xl shadow-2xl" />
                  {games[currentIndex].badge && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium animate-pulse">
                      {games[currentIndex].badge}
                    </div>
                  )}
                  {games[currentIndex].promoTag && <div className="absolute top-4 left-4 bg-green-500 text-black px-3 py-1 rounded-lg text-sm font-semibold">{games[currentIndex].promoTag}</div>}
                </div>

                <div className="flex flex-col h-[400px]">
                  {' '}
                  <div className="flex-1 overflow-y-auto" style={{ minHeight: '0' }}>
                    {' '}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-start justify-between mb-4">
                      <h3 className="text-3xl font-bold text-white">{games[currentIndex].name}</h3>
                      <div className="flex items-center bg-gray-800 rounded-full px-3 py-1">
                        <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="text-white font-medium">{games[currentIndex].rating}</span>
                      </div>
                    </motion.div>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-300 mb-6 text-lg font-semibold">
                      {games[currentIndex].description}
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <StatCard icon={Server} label="Active Servers" value={games[currentIndex].activeServers} />
                      <StatCard icon={Globe} label="Global Locations" value="15+ Regions" />
                    </div>
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <Gamepad size={18} className="mr-2 text-blue-500" />
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {games[currentIndex].features.map((feature) => (
                          <FeatureItem key={feature} feature={feature} />
                        ))}
                      </ul>
                    </div>
                  </div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-6 border-t border-gray-700/50 mt-auto">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-gray-400 text-sm">Starting at</div>
                        <div className="text-3xl font-bold text-white">
                          ${games[currentIndex].startingPrice}
                          <span className="text-gray-400 text-sm font-normal">/month</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => (window.location.href = games[currentIndex].deployLink)}
                        className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-medium flex items-center justify-center"
                      >
                        <Server size={18} className="mr-2" />
                        Deploy Server
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 space-x-2">
            {games.map((game, index) => (
              <button
                key={game.id}
                type="button"
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setAutoplay(false);
                }}
                className={`h-1 rounded-full transition-all duration-500 cursor-pointer hover:bg-blue-400 ${
                  index === currentIndex ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' : 'w-2 bg-gray-700'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
