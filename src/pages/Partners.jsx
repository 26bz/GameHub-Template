import { Gamepad2, Server, Globe, Users, Shield, Award, Youtube, Network, Database, Crown, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet';

const PARTNERS = [
  {
    id: 1,
    name: 'Path.Net',
    logo: '/api/placeholder/50/50',
    category: 'Network Infrastructure',
    badge: 'PREMIUM PARTNER',
    description: 'Leading DDoS-protected network infrastructure provider powering our game servers with ultra-low latency connections worldwide.',
    features: ['Enterprise DDoS Protection', 'Global Low-Latency Network', '24/7 NOC Support', 'Auto-scaling Infrastructure'],
    stats: {
      protection: '2Tbps+',
      latency: '<20ms',
      uptime: '99.99%',
    },
    icon: Network,
  },
  {
    id: 2,
    name: 'GamersHub',
    logo: '/api/placeholder/50/50',
    category: 'Content Creators',
    badge: 'VERIFIED',
    description: 'Top gaming content creators and streamers who trust our infrastructure for their communities and server hosting needs.',
    features: ['1M+ Combined Followers', 'Daily Gaming Content', 'Community Events', 'Exclusive Server Features'],
    stats: {
      creators: '50+',
      reach: '1M+',
      servers: '100+',
    },
    icon: Youtube,
  },
  {
    id: 3,
    name: 'DataCenter Alliance',
    logo: '/api/placeholder/50/50',
    category: 'Infrastructure Provider',
    badge: 'ENTERPRISE',
    description: 'Strategic datacenter partnerships ensuring optimal performance and reliability for game servers across multiple regions.',
    features: ['Global Server Locations', 'Enterprise Hardware', 'Redundant Power', '24/7 Physical Security'],
    stats: {
      locations: '15+',
      cores: '100K+',
      storage: '5PB+',
    },
    icon: Database,
  },
  {
    id: 4,
    name: 'ServerKings',
    logo: '/api/placeholder/50/50',
    category: 'Game Server Operators',
    badge: 'CERTIFIED',
    description: 'Professional game server operators managing some of the largest gaming communities worldwide.',
    features: ['Custom Server Mods', 'Community Management', 'Anti-Cheat Systems', 'Tournament Hosting'],
    stats: {
      players: '50K+',
      servers: '1000+',
      uptime: '99.9%',
    },
    icon: Crown,
  },
];

const PartnerCard = ({ partner }) => (
  <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
    <div className="relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-4 sm:mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-2 sm:p-2.5">
            <partner.icon className="w-full h-full text-blue-400" />
          </div>
          <div>
            <div className="text-xs sm:text-sm text-blue-400 font-medium mb-0.5 sm:mb-1">{partner.category}</div>
            <h3 className="text-lg sm:text-xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">{partner.name}</h3>
          </div>
        </div>
        {partner.badge && (
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-blue-500/20 self-start sm:self-center">
            {partner.badge}
          </div>
        )}
      </div>

      <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{partner.description}</p>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
        {Object.entries(partner.stats).map(([key, value]) => (
          <div
            key={key}
            className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="text-base sm:text-lg font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">{value}</div>
            <div className="text-xs sm:text-sm text-gray-400 capitalize">{key}</div>
          </div>
        ))}
      </div>

      <div className="space-y-2 sm:space-y-3">
        {partner.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center text-gray-300 bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
          >
            <Sparkles size={14} className="text-blue-400 mr-2 flex-shrink-0" />
            <span className="text-sm sm:text-base">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StatsCard = ({ icon: Icon, value, label }) => (
  <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
    <div className="relative">
      <Icon className="text-blue-400 mb-3 sm:mb-4" size={20} />
      <div className="text-xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">{value}</div>
      <div className="text-gray-400 font-medium text-sm sm:text-base">{label}</div>
    </div>
  </div>
);

export default function PartnersPage() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-16 sm:py-24 relative overflow-hidden" role="main">
      <Helmet>
        <title>Partners | GameHub</title>
        <meta name="description" content="High-performance VPS hosting solutions with dedicated resources and full root access." />
      </Helmet>

      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />

      {/* Hero Section */}
      <div className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-800/50 border border-gray-700/50 mb-6 sm:mb-8">
            <Gamepad2 size={18} className="text-blue-400" />
            <span className="text-gray-300 font-medium text-sm sm:text-base">Powering Gaming Communities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Our Gaming Partners</span>
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Join forces with industry leaders in gaming infrastructure, content creation, and server hosting to deliver exceptional gaming experiences worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="bg-gray-800/50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center space-x-2">
              <Shield size={16} className="text-blue-400" />
              <span className="text-gray-300 text-sm sm:text-base">DDoS Protected</span>
            </div>
            <div className="bg-gray-800/50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center space-x-2">
              <Globe size={16} className="text-blue-400" />
              <span className="text-gray-300 text-sm sm:text-base">Global Network</span>
            </div>
            <div className="bg-gray-800/50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center space-x-2">
              <Award size={16} className="text-blue-400" />
              <span className="text-gray-300 text-sm sm:text-base">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto px-4 mb-12 sm:mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
          <StatsCard icon={Network} value="15+" label="Global Locations" />
          <StatsCard icon={Shield} value="2 Tbps+" label="DDoS Protection" />
          <StatsCard icon={Users} value="100K+" label="Active Players" />
          <StatsCard icon={Server} value="10K+" label="Game Servers" />
        </div>
      </div>

      {/* Partners Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {PARTNERS.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
