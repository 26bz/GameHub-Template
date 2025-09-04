import { Shield, Server, Globe, Users, Star, Terminal, Network, Cpu, Clock, HardDrive, Settings } from 'lucide-react';
import { StatCard } from '../components/shared-components';
import { Helmet } from 'react-helmet';

const SpecItem = ({ icon: Icon, spec }) => (
  <div className="text-gray-300 flex items-center py-1 sm:py-1.5 text-sm sm:text-base">
    <Icon size={14} className="text-blue-400 mr-2 flex-shrink-0" />
    {spec}
  </div>
);

const FeatureItem = ({ feature }) => (
  <div className="text-gray-300 flex items-center py-1 text-sm sm:text-base">
    <Shield size={14} className="text-green-400 mr-2 flex-shrink-0" />
    {feature}
  </div>
);

const VPSHostingCard = ({ plan }) => (
  <div className="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
    <div className="p-6 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-4">
      <div className="md:col-span-2 md:border-r border-gray-700/50 md:pr-3">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.title}</h3>
            <div className="flex items-center bg-gray-800 rounded-full px-3 py-1 w-fit mb-2">
              <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1.5" />
              <span className="text-white font-medium text-base">{plan.rating}</span>
            </div>
            <div className="flex flex-wrap gap-2 md:flex-col md:gap-1.5">
              {plan.badge && <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse w-fit">{plan.badge}</div>}
              {plan.promoTag && <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium w-fit">{plan.promoTag}</div>}
            </div>
          </div>
          <div className="mt-3">
            <div className="text-gray-400 text-sm">Starting at</div>
            <div className="flex items-baseline text-2xl font-bold text-white">
              ${plan.price}
              <span className="text-gray-400 text-sm font-normal ml-1">/month</span>
            </div>
            <a
              href={plan.purchaseUrl}
              className="mt-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-medium flex items-center justify-center text-sm"
            >
              <Server size={16} className="mr-2" />
              Deploy Now
            </a>
          </div>
        </div>
      </div>

      <div className="md:col-span-6 md:border-r md:pr-3 border-t border-gray-700/50 py-6 md:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
          <SpecItem icon={Cpu} spec={plan.specs.cpu} />
          <SpecItem icon={Server} spec={plan.specs.ram} />
          <SpecItem icon={HardDrive} spec={plan.specs.storage} />
          <SpecItem icon={Network} spec={plan.specs.bandwidth} />
          <SpecItem icon={Globe} spec={plan.specs.location} />
          <SpecItem icon={Terminal} spec={plan.specs.os} />
          <SpecItem icon={Settings} spec={plan.specs.management} />
          <SpecItem icon={Clock} spec={plan.specs.uptime} />
        </div>
      </div>

      <div className="md:col-span-4 md:pl-1 border-t border-gray-700/50 pt-6 md:pt-0">
        <div className="grid grid-cols-1 gap-y-1.5">
          {plan.features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const VPS_HOSTING_PLANS = [
  {
    id: 1,
    title: 'Basic VPS',
    price: 9.99,
    rating: 4.5,
    specs: {
      cpu: '2 vCPU Cores',
      ram: '2 GB RAM',
      storage: '40 GB NVMe SSD',
      bandwidth: '2 TB',
      location: 'Multiple Regions',
      os: 'Linux/Windows',
      management: 'Self-Managed',
      uptime: '99.9% Guaranteed',
    },
    features: ['Full Root Access', 'IPv4 & IPv6', 'DDoS Protection', 'Automated Backups', 'Instant Deployment', '24/7 Support'],
    badge: '',
    promoTag: 'STARTER',
    purchaseUrl: '/vps/deploy/basic',
  },
  {
    id: 2,
    title: 'Premium VPS',
    price: 19.99,
    rating: 4.7,
    specs: {
      cpu: '4 vCPU Cores',
      ram: '4 GB RAM',
      storage: '80 GB NVMe SSD',
      bandwidth: '4 TB',
      location: 'Custom Region',
      os: 'Linux/Windows',
      management: 'Basic Management',
      uptime: '99.95% Guaranteed',
    },
    features: ['Everything in Basic', 'Priority Support', 'Advanced Firewall', 'Load Balancer Ready', 'Private Networking', 'Dedicated IP'],
    badge: 'MOST POPULAR',
    promoTag: 'BEST VALUE',
    purchaseUrl: '/vps/deploy/premium',
  },
  {
    id: 3,
    title: 'Enterprise VPS',
    price: 39.99,
    rating: 4.9,
    specs: {
      cpu: '8 vCPU Cores',
      ram: '8 GB RAM',
      storage: '160 GB NVMe SSD',
      bandwidth: '8 TB',
      location: 'Multi-Region',
      os: 'Custom OS Support',
      management: 'Fully Managed',
      uptime: '99.99% Guaranteed',
    },
    features: ['Everything in Premium', 'Enterprise Support', 'Auto-Scaling Ready', 'Dedicated Resources', 'Custom Control Panel', 'Advanced Monitoring'],
    badge: 'ENTERPRISE',
    promoTag: 'PREMIUM',
    purchaseUrl: '/vps/deploy/enterprise',
  },
];

export default function VPSHostingPage() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-16 sm:py-24 relative overflow-hidden">
      <Helmet>
        <title>VPS Hosting | GameHub</title>
        <meta name="description" content="High-performance VPS hosting solutions with dedicated resources and full root access." />
      </Helmet>

      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold py-2 sm:py-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4 sm:mb-6">
            Virtual Private Servers
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">High-performance VPS hosting with dedicated resources and full control</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto px-4 sm:px-0">
            <StatCard icon={Terminal} label="Root Access" value="Full" />
            <StatCard icon={Server} label="Deployment" value="Instant" />
            <StatCard icon={Globe} label="Data Centers" value="15+ Locations" />
            <StatCard icon={Users} label="Support" value="24/7" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {VPS_HOSTING_PLANS.map((plan) => (
            <VPSHostingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
