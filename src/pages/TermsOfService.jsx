import LegalPage from './LegalPage'
import policiesData from '../components/policies.json'
import { Helmet } from 'react-helmet'

const TermsOfService = () => {
  const termsOfService = policiesData.termsOfService || {}
  const fallbackSections = [
    {
      title: 'Content Unavailable',
      content: 'Content is not available.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Terms Of Service | GameHub</title>
        <meta name="description" content="GameHub's terms of service and usage policies." />
      </Helmet>
      <LegalPage title="Terms of Service" lastUpdated={termsOfService.lastUpdated} sections={termsOfService.sections || fallbackSections} />
    </>
  )
}

export default TermsOfService
