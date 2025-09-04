import { useEffect, useState } from 'react';
import LegalPage from './LegalPage';
import policiesData from '../components/policies.json';
import { Helmet } from 'react-helmet';
const GDPRCompliance = () => {
  const [gdprData, setGdprData] = useState({});

  useEffect(() => {
    setGdprData(policiesData.gdprCompliance || {});
  }, []);

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
  );
};

export default GDPRCompliance;
