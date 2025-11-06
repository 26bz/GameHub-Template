import { Users, Server, Shield, Star, Globe, Database, HardDrive, Cpu, Network, Archive } from 'lucide-react'
import { Helmet } from 'react-helmet'

const MINECRAFT_PLANS = [
  {
    id: 1,
    title: 'Creeper',
    image: 'https://placehold.co/400x320',
    price: 7.99,
    specs: {
      cpu: 'Ryzen 7 5700G (2 vCores)',
      ram: '4 GB DDR4 RAM',
      storage: '40 GB NVMe SSD',
      network: '1 GBit/s Connection',
      database: '1 Database',
      allocations: '3 Allocations',
      backups: '1 Included Backup',
      extraServers: 'Create 0 Additional Servers',
    },
    rating: 4.5,
    badge: '',
    promoTag: 'STARTER',
    purchaseUrl: '/minecraft/deploy/creeper',
  },
  {
    id: 2,
    title: 'Zombie',
    image: 'https://placehold.co/400x320',
    price: 14.99,
    specs: {
      cpu: 'Ryzen 7 5700G (3 vCores)',
      ram: '6 GB DDR4 RAM',
      storage: '60 GB NVMe SSD',
      network: '1 GBit/s Connection',
      database: '2 Databases',
      allocations: '4 Allocations',
      backups: '2 Included Backups',
      extraServers: 'Create 1 Additional Server',
    },
    rating: 4.6,
    badge: '',
    promoTag: 'POPULAR',
    purchaseUrl: '/minecraft/deploy/zombie',
  },
  {
    id: 3,
    title: 'Enderman',
    image: 'https://placehold.co/400x320',
    price: 19.99,
    specs: {
      cpu: 'Ryzen 7 5700G (4 vCores)',
      ram: '8 GB DDR4 RAM',
      storage: '80 GB NVMe SSD',
      network: '1 GBit/s Connection',
      database: '3 Databases',
      allocations: '5 Allocations',
      backups: '3 Included Backups',
      extraServers: 'Create 2 Additional Servers',
    },
    rating: 4.8,
    badge: 'MOST POPULAR',
    promoTag: 'BEST VALUE',
    purchaseUrl: '/minecraft/deploy/enderman',
  },
  {
    id: 4,
    title: 'Wither',
    image: 'https://placehold.co/400x320',
    price: 29.99,
    specs: {
      cpu: 'Ryzen 9 5900X (4 vCores)',
      ram: '12 GB DDR4 RAM',
      storage: '120 GB NVMe SSD',
      network: '1 GBit/s Connection',
      database: '4 Databases',
      allocations: '6 Allocations',
      backups: '4 Included Backups',
      extraServers: 'Create 3 Additional Servers',
    },
    rating: 4.9,
    badge: 'PREMIUM',
    promoTag: 'HIGH PERFORMANCE',
    purchaseUrl: '/minecraft/deploy/wither',
  },
  {
    id: 5,
    title: 'Dragon',
    image: 'https://placehold.co/400x320',
    price: 39.99,
    specs: {
      cpu: 'Ryzen 9 5900X (5 vCores)',
      ram: '16 GB DDR4 RAM',
      storage: '160 GB NVMe SSD',
      network: '1 GBit/s Connection',
      database: '5 Databases',
      allocations: '8 Allocations',
      backups: '5 Included Backups',
      extraServers: 'Create 4 Additional Servers',
    },
    rating: 5.0,
    badge: 'ENTERPRISE',
    promoTag: 'ULTIMATE',
    purchaseUrl: '/minecraft/deploy/dragon',
  },
]

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
    <div className="flex items-center text-blue-400 mb-1">
      <Icon size={14} className="mr-2" />
      <span className="text-xs sm:text-sm">{label}</span>
    </div>
    <div className="text-white font-bold text-sm sm:text-base">{value}</div>
  </div>
)

const SpecItem = ({ icon: Icon, spec }) => (
  <div className="text-gray-300 flex items-center py-1 sm:py-1.5 text-sm sm:text-base">
    <Icon size={14} className="text-blue-400 mr-2 flex-shrink-0" />
    {spec}
  </div>
)

const GameCard = ({ plan }) => (
  <div className="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
    <div className="relative">
      <img src={plan.image} alt={plan.title} className="w-full h-28 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
      {plan.badge && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium animate-pulse">
          {plan.badge}
        </div>
      )}
      {plan.promoTag && <div className="absolute top-4 left-4 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium">{plan.promoTag}</div>}
    </div>

    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white">{plan.title}</h3>
        <div className="flex items-center bg-gray-800 rounded-full px-2 sm:px-3 py-1">
          <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-white font-medium text-sm">{plan.rating}</span>
        </div>
      </div>

      <div className="space-y-1 mb-4 sm:mb-6 border-t border-b border-gray-700/50 py-3 sm:py-4">
        <SpecItem icon={Cpu} spec={plan.specs.cpu} />
        <SpecItem icon={Server} spec={plan.specs.ram} />
        <SpecItem icon={HardDrive} spec={plan.specs.storage} />
        <SpecItem icon={Network} spec={plan.specs.network} />
        <SpecItem icon={Database} spec={plan.specs.database} />
        <SpecItem icon={Globe} spec={plan.specs.allocations} />
        <SpecItem icon={Archive} spec={plan.specs.backups} />
        <SpecItem icon={Server} spec={plan.specs.extraServers} />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 pt-2 border-t border-gray-700/50">
        <div>
          <div className="text-gray-400 text-xs sm:text-sm">Starting at</div>
          <div className="text-xl sm:text-2xl font-bold text-white">
            ${plan.price}
            <span className="text-gray-400 text-xs sm:text-sm font-normal">/month</span>
          </div>
        </div>
        <a
          href={plan.purchaseUrl}
          className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-medium flex items-center justify-center text-sm sm:text-base"
        >
          <Server size={16} className="mr-2" />
          Deploy Server
        </a>
      </div>
    </div>
  </div>
)

export default function MinecraftPage() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-16 sm:py-24 relative overflow-hidden">
      <Helmet>
        <title>Minecraft Hosting | GameHub</title>
        <meta name="description" content="Deploy a Minecraft server in seconds with MyApp's enterprise-grade hosting." />
      </Helmet>
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold py-2 sm:py-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4 sm:mb-6">
            Minecraft Server Hosting
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            High-performance dedicated Minecraft servers with NVMe storage
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto px-4 sm:px-0">
            <StatCard icon={Shield} label="DDoS Protection" value="Included" />
            <StatCard icon={Server} label="Setup Time" value="Instant" />
            <StatCard icon={Globe} label="Global Locations" value="15+ Regions" />
            <StatCard icon={Users} label="Support" value="24/7" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {MINECRAFT_PLANS.map(plan => (
            <GameCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
