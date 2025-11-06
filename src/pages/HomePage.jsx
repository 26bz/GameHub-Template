import { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet'

import HeroSection from '../components/HeroSection'

const InfrastructureSection = lazy(() => import('../components/Infrastructure'))
const GameSolutions = lazy(() => import('../components/GameSolutions'))
const GlobalLocations = lazy(() => import('../components/GlobalLocations'))
const EnterpriseSupport = lazy(() => import('../components/EnterpriseSupport'))

const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
)

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home | GameHub</title>
        <meta name="description" content="Deploy a Minecraft server in seconds with GameHub's enterprise-grade hosting." />
      </Helmet>
      <HeroSection />
      <Suspense fallback={<LoadingFallback />}>
        <InfrastructureSection />
        <GameSolutions />
        <GlobalLocations />
        <EnterpriseSupport />
      </Suspense>
    </>
  )
}

export default HomePage
