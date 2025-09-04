import { Server, Network, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const locations = [
  {
    icon: Server,
    region: 'North America',
    description: 'Strategic presence across major US tech hubs',
    locations: ['Chicago', 'Dallas', 'Los Angeles', 'New York'],
    stats: '12+ Servers',
    gradient: 'from-blue-500 to-blue-600',
    bgGlow: 'group-hover:bg-blue-500/20',
    progress: 95,
  },
  {
    icon: Network,
    region: 'Europe',
    description: 'Coverage across key European gaming markets',
    locations: ['Frankfurt', 'Paris'],
    stats: '6+ Servers',
    gradient: 'from-purple-500 to-purple-600',
    bgGlow: 'group-hover:bg-purple-500/20',
    progress: 75,
  },
  {
    icon: Globe,
    region: 'Asia Pacific',
    description: 'Serving the fastest-growing gaming region',
    locations: ['Singapore'],
    stats: '2+ Servers',
    gradient: 'from-pink-500 to-pink-600',
    bgGlow: 'group-hover:bg-pink-500/20',
    progress: 60,
  },
];

const LocationCard = ({ region }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -5 }} className="group relative">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 transition-all duration-500 group-hover:border-gray-600/50" />

    <div className={`absolute inset-0 rounded-2xl transition-colors duration-500 ${region.bgGlow} blur opacity-0 group-hover:opacity-100`} />

    <div className="relative p-4 sm:p-8">
      {/* Icon & Region */}
      <div
        className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-r ${region.gradient} p-2 sm:p-2.5 mb-4 sm:mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
      >
        <region.icon className="w-full h-full text-white" />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-blue-500 group-hover:to-purple-500 transition-colors duration-300">
        {region.region}
      </h3>

      <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">{region.description}</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="bg-gray-900/50 rounded-xl p-3 sm:p-4 border border-gray-700/50 group-hover:border-blue-500/20 transition-all duration-300">
          <div className="text-sm text-gray-400 mb-1">Servers</div>
          <div className="font-bold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">{region.stats}</div>
        </div>
      </div>

      {/* Locations List */}
      <div className="space-y-2 sm:space-y-3">
        {region.locations.map((location) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            key={location}
            className="flex items-center text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2" />
            {location}
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6 sm:mt-8 h-1.5 sm:h-2 w-full bg-gray-800 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${region.progress}%` }} transition={{ duration: 1, delay: 0.5 }} className={`h-full bg-gradient-to-r ${region.gradient}`} />
      </div>
    </div>
  </motion.div>
);

export function GlobalLocations() {
  return (
    <section className="bg-gradient-to-b from-transparent via-gray-900 to-black py-16 sm:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text py-2 sm:py-3 text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-3 sm:mb-4">
            Global Network Presence
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">Strategic locations worldwide ensuring low latency for your players</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {locations.map((region) => (
            <LocationCard key={region.region} region={region} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlobalLocations;
