import { useEffect, useState } from 'react'
import LegalPage from './LegalPage'
import policiesData from '../components/policies.json'
import { Helmet } from 'react-helmet'
const PrivacyPolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState({})

  useEffect(() => {
    let isMounted = true

    const loadPrivacyPolicy = async () => {
      try {
        const privacyPolicyData = policiesData.privacyPolicy || {}

        if (isMounted) {
          setPrivacyPolicy(privacyPolicyData)
        }
      } catch (error) {
        console.error('Error loading privacy policy:', error)
        if (isMounted) {
          setPrivacyPolicy({
            lastUpdated: 'Error loading content',
            sections: [
              {
                title: 'Error',
                content: 'Failed to load the Privacy Policy. Please try again later.',
              },
            ],
          })
        }
      }
    }

    loadPrivacyPolicy()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Privacy Policy | GameHub</title>
        <meta name="description" content="Deploy a Minecraft server in seconds with MyApp's enterprise-grade hosting." />
      </Helmet>
      <LegalPage
        title="Privacy Policy"
        lastUpdated={privacyPolicy.lastUpdated}
        sections={
          privacyPolicy.sections || [
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

export default PrivacyPolicy
