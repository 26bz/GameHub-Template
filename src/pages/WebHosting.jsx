import { Shield, Server, Globe, Users, Star, Database, HardDrive, Cpu, Network, Mail, Clock } from 'lucide-react'
import { StatCard } from '../components/shared-components'
import { Helmet } from 'react-helmet'

const IconTextItem = ({ icon: Icon, text, iconColor = 'text-blue-400' }) => (
  <div className="text-gray-300 flex items-center py-1 sm:py-1.5 text-sm sm:text-base">
    <Icon size={14} className={`${iconColor} mr-2 flex-shrink-0`} />
    {text}
  </div>
)

const SpecItem = ({ icon, spec }) => <IconTextItem icon={icon} text={spec} />

const FeatureItem = ({ feature }) => <IconTextItem icon={Shield} text={feature} iconColor="text-green-400" />

const WebHostingCard = ({ plan }) => (
  <div className="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white">{plan.title}</h3>
        <div className="flex items-center bg-gray-800 rounded-full px-2 sm:px-3 py-1">
          <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-white font-medium text-sm">{plan.rating}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
        {plan.badge && (
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium animate-pulse">
            {plan.badge}
          </div>
        )}
        {plan.promoTag && <div className="inline-block bg-green-500 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium">{plan.promoTag}</div>}
      </div>

      <div className="space-y-1 mb-4 sm:mb-6 border-t border-b border-gray-700/50 py-3 sm:py-4">
        <SpecItem icon={HardDrive} spec={plan.specs.storage} />
        <SpecItem icon={Network} spec={plan.specs.bandwidth} />
        <SpecItem icon={Cpu} spec={plan.specs.cpu} />
        <SpecItem icon={Server} spec={plan.specs.ram} />
        <SpecItem icon={Globe} spec={plan.specs.domains} />
        <SpecItem icon={Database} spec={plan.specs.databases} />
        <SpecItem icon={Mail} spec={plan.specs.email} />
        <SpecItem icon={Clock} spec={plan.specs.backups} />
      </div>

      <div className="space-y-1 mb-4 sm:mb-6">
        {plan.features.map(feature => (
          <FeatureItem key={feature} feature={feature} />
        ))}
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
          Deploy Now
        </a>
      </div>
    </div>
  </div>
)

const WEB_HOSTING_PLANS = [
  {
    id: 1,
    title: 'Starter',
    price: 4.99,
    rating: 4.5,
    specs: {
      storage: '10 GB NVMe SSD',
      bandwidth: '100 GB',
      cpu: '1 vCPU Core',
      ram: '1 GB RAM',
      domains: '1 Domain',
      databases: '2 MySQL',
      email: '5 Email Accounts',
      backups: 'Weekly Backups',
    },
    features: ['cPanel Control Panel', 'WordPress Ready', 'PHP 8.x Support', 'Basic DDoS Protection', '99.9% Uptime', '24/7 Support'],
    badge: '',
    promoTag: 'STARTER',
    purchaseUrl: '#',
  },
  {
    id: 2,
    title: 'Professional',
    price: 9.99,
    rating: 4.7,
    specs: {
      storage: '25 GB NVMe SSD',
      bandwidth: '250 GB',
      cpu: '2 vCPU Cores',
      ram: '2 GB RAM',
      domains: '3 Domains',
      databases: '5 MySQL',
      email: '20 Email Accounts',
      backups: 'Daily Backups',
    },
    features: ['Everything in Starter', 'Priority Support', 'Advanced DDoS Protection', 'Staging Environment', 'Redis Cache', 'SSH Access'],
    badge: 'MOST POPULAR',
    promoTag: 'BEST VALUE',
    purchaseUrl: '#',
  },
  {
    id: 3,
    title: 'Business',
    price: 19.99,
    rating: 4.9,
    specs: {
      storage: '50 GB NVMe SSD',
      bandwidth: '500 GB',
      cpu: '4 vCPU Cores',
      ram: '4 GB RAM',
      domains: 'Unlimited',
      databases: 'Unlimited MySQL',
      email: 'Unlimited',
      backups: 'Daily + On-Demand',
    },
    features: ['Everything in Professional', 'Enterprise DDoS Protection', 'White Label Support', 'Priority Database', 'Business SSL', 'Custom Configuration'],
    badge: 'ENTERPRISE',
    promoTag: 'UNLIMITED',
    purchaseUrl: '#',
  },
]

export default function WebHostingPage() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-16 sm:py-24 relative overflow-hidden">
      <Helmet>
        <title>Web Hosting | GameHub</title>
        <meta name="description" content="Fast and reliable web hosting solutions with enterprise-grade infrastructure." />
      </Helmet>

      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold py-2 sm:py-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4 sm:mb-6">
            Web Hosting Solutions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">Fast and reliable hosting for your websites</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto px-4 sm:px-0">
            <StatCard icon={Shield} label="DDoS Protection" value="Included" />
            <StatCard icon={Server} label="Setup Time" value="Instant" />
            <StatCard icon={Globe} label="Global Locations" value="15+ Regions" />
            <StatCard icon={Users} label="Support" value="24/7" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {WEB_HOSTING_PLANS.map(plan => (
            <WebHostingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
