import { useEffect, useState } from 'react';
import LegalPage from './LegalPage';
import policiesData from '../components/policies.json';
import { Helmet } from 'react-helmet';
const PrivacyPolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState({});

  useEffect(() => {
    setPrivacyPolicy(policiesData.privacyPolicy || {});
  }, []);

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
  );
};

export default PrivacyPolicy;
