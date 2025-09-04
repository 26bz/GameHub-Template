import { useEffect, useState } from "react";
import LegalPage from "./LegalPage";
import policiesData from "../components/policies.json";
import { Helmet } from 'react-helmet';
const TermsOfService = () => {
  const [termsOfService, setTermsOfService] = useState({});

  useEffect(() => {
    setTermsOfService(policiesData.termsOfService || {});
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms Of Service | GameHub</title>
        <meta
          name="description"
          content="Deploy a Minecraft server in seconds with MyApp's enterprise-grade hosting."
        />
      </Helmet>
      <LegalPage
        title="Terms of Service"
        lastUpdated={termsOfService.lastUpdated}
        sections={
          termsOfService.sections || [
            {
              title: "Content Unavailable",
              content: "Content is not available.",
            },
          ]
        }
      />
    </>
  );
};

export default TermsOfService;
