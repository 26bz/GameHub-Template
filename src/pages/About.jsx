import { Server, Users, Trophy, Target, Cpu, Heart, Shield, Globe } from 'lucide-react'
import { Helmet } from 'react-helmet'

const TeamMember = ({ name, role, image, description }) => (
  <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
    <div className="relative mb-3 sm:mb-4">
      <img src={image} alt={name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-2 border-blue-500/50" />
    </div>
    <div className="text-center">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-blue-400 text-xs sm:text-sm mb-2 sm:mb-3">{role}</p>
      <p className="text-gray-400 text-xs sm:text-sm">{description}</p>
    </div>
  </div>
)

const Achievement = ({ icon: Icon, title, value }) => (
  <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center">
    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-3 sm:mb-4 mx-auto" />
    <div className="text-xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-1 sm:mb-2">{value}</div>
    <p className="text-gray-400 text-xs sm:text-sm">{title}</p>
  </div>
)

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-3 sm:mb-4" />
    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </div>
)

export default function AboutPage() {
  const teamMembers = [
    {
      name: '26BZ',
      role: 'Founder & CEO',
      image: 'https://placehold.co/150',
      description: '10+ years in gaming infrastructure and cloud solutions',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-16 sm:py-24 relative overflow-hidden" role="main">
      <Helmet>
        <title>About Us | GameHub</title>
        <meta name="description" content="Deploy a Minecraft server in seconds with MyApp's enterprise-grade hosting." />
      </Helmet>

      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6 bg-gray-800/50 rounded-full p-1 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2">
              <Heart size={16} className="text-blue-400" />
              <span className="text-gray-300 font-medium text-sm sm:text-base">Our Story</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 py-2 sm:py-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Powering Gaming Dreams
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto font-medium px-4">
            Since 2018, we've been revolutionizing game hosting with cutting-edge technology and passionate support
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 mb-12 sm:mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-3 sm:mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Mission</h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              To empower gamers and communities by providing reliable, high-performance hosting solutions that bring people together through seamless gaming experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          <Achievement icon={Server} title="Active Servers" value="5000+" />
          <Achievement icon={Users} title="Happy Customers" value="50k+" />
          <Achievement icon={Trophy} title="Industry Awards" value="15+" />
          <Achievement icon={Globe} title="Data Centers" value="20+" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Our Values</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <ValueCard icon={Shield} title="Reliability First" description="We prioritize uptime and performance above all else, ensuring your games stay online 24/7." />
          <ValueCard icon={Heart} title="Community Focused" description="Built by gamers for gamers, we understand and support our community's needs." />
          <ValueCard icon={Cpu} title="Technical Excellence" description="Cutting-edge infrastructure and continuous innovation drive our services." />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {teamMembers.map(member => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
