import { useEffect, useState } from 'react'
import LegalPage from './LegalPage'
import policiesData from '../components/policies.json'
import { Helmet } from 'react-helmet'
const GDPRCompliance = () => {
  const [gdprData, setGdprData] = useState({})

  useEffect(() => {
    let isMounted = true

    const loadGdprData = async () => {
      try {
        const gdprComplianceData = policiesData.gdprCompliance || {}

        if (isMounted) {
          setGdprData(gdprComplianceData)
        }
      } catch (error) {
        console.error('Error loading GDPR compliance data:', error)
        if (isMounted) {
          setGdprData({
            lastUpdated: 'Error loading content',
            sections: [
              {
                title: 'Error',
                content: 'Failed to load the GDPR Compliance information. Please try again later.',
              },
            ],
          })
        }
      }
    }

    loadGdprData()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>GDPR Compliance | GameHub</title>
        <meta name="description" content="Deploy a Minecraft server in seconds with MyApp's enterprise-grade hosting." />
      </Helmet>
      <LegalPage
        title="General Data Protection Regulation (GDPR) Compliance"
        lastUpdated={gdprData.lastUpdated}
        sections={
          gdprData.sections || [
            {
              title: 'Content Unavailable',
              content: 'Content is not available.',
            },
          ]
        }
      />
    </>
  )
}

export default GDPRCompliance
