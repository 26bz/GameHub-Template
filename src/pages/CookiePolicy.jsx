import { useState, useEffect } from 'react'
import LegalPage from './LegalPage'
import policiesData from '../components/policies.json'
import { Helmet } from 'react-helmet'

const CookiePolicy = () => {
  const [gdprData, setGdprData] = useState({})

  useEffect(() => {
    let isMounted = true

    const loadGdprData = async () => {
      try {
        const policyData = policiesData.cookiePolicy || {}

        if (isMounted) {
          setGdprData(policyData)
        }
      } catch (error) {
        console.error('Error loading cookie policy:', error)
        if (isMounted) {
          setGdprData({
            lastUpdated: 'Error loading content',
            content: 'Failed to load the Cookie Policy. Please try again later.',
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
        <title>Cookie Policy | GameHub</title>
        <meta name="description" content="Deploy a Minecraft server in seconds with MyApp's enterprise-grade hosting." />
      </Helmet>

      <LegalPage
        title="Cookie Policy"
        lastUpdated={gdprData.lastUpdated || '[Insert Date]'}
        sections={[
          {
            title: 'What Are Cookies?',
            content: gdprData.content || 'Content is not available.',
          },
          {
            title: 'Contact Us',
            content: gdprData.contactUs ? (
              <>
                <p className="mb-2">If you have any questions, please contact us:</p>
                <ul className="list-disc list-inside">
                  <li>
                    Email:{' '}
                    <a href={`mailto:${gdprData.contactUs.email}`} className="text-blue-400 hover:underline">
                      {gdprData.contactUs.email}
                    </a>
                  </li>
                  <li>
                    Website:{' '}
                    <a href={gdprData.contactUs.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      {gdprData.contactUs.website}
                    </a>
                  </li>
                </ul>
              </>
            ) : (
              'Contact information is not available.'
            ),
          },
        ]}
      />
    </>
  )
}

export default CookiePolicy
