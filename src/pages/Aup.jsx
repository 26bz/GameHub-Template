import { useEffect, useState } from "react";
import LegalPage from "./LegalPage";
import policiesData from "../components/policies.json";
import { Helmet } from 'react-helmet';

const AUP = () => {
  const [aup, setAup] = useState({});

  useEffect(() => {
    setAup(policiesData.acceptableUsePolicy);
  }, []);

  return (
    <>
      <Helmet>
        <title>Acceptable Use Policy | GameHub</title>
        <meta
          name="description"
          content="Deploy a Minecraft server in seconds with MyApp's enterprise-grade hosting."
        />
      </Helmet>

      <LegalPage
        title="Acceptable Use Policy"
        lastUpdated={aup.lastUpdated}
        sections={
          aup.sections || [
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

export default AUP;
