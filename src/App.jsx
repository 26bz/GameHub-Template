import React, { lazy, useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { registerSW } from "virtual:pwa-register";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./components/Layout";
import NotFound from "./pages/404";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./utils/ScrollToTop";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("App ready to work offline");
  },
});

const Games = lazy(() => import("./pages/Games"));
const MinecraftPage = lazy(() => import("./pages/Minecraft"));
const VPSHostingShowcase = lazy(() => import("./pages/VPS"));
const WebHosting = lazy(() => import("./pages/WebHosting"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const GDPR = lazy(() => import("./pages/GDPR"));
const AUP = lazy(() => import("./pages/Aup"));
const AboutPage = lazy(() => import("./pages/About"));
const PartnersPage = lazy(() => import("./pages/Partners"));

function LoadingSpinner() {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: 1,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(8px)",
      }}
      exit={{
        opacity: 0,
        backgroundColor: "rgba(0, 0, 0, 0)",
        backdropFilter: "blur(0px)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center dark:bg-black/20"
    >
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 animate-spin">
          <img
            src="https://placehold.co/50"
            alt="Loading..."
            className="w-24 h-24 object-contain"
          />
        </div>
        <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600 dark:text-gray-300">
          Loading...
        </p>
      </div>
    </motion.div>
  );
}

function LoadingSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex items-center justify-center p-4"
    >
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    return () => setIsLoading(false);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingSpinner />}
      </AnimatePresence>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onAnimationComplete={() => setIsLoading(false)}
        >
          <React.Suspense fallback={<LoadingSkeleton />}>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/games" element={<Games />} />
                <Route path="/minecraft" element={<MinecraftPage />} />
                <Route path="/vps" element={<VPSHostingShowcase />} />
                <Route path="/webhosting" element={<WebHosting />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/gdpr" element={<GDPR />} />
                <Route path="/aup" element={<AUP />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </React.Suspense>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <Helmet>
        <title>GameHub</title>
        {/* Add other meta tags as needed */}
      </Helmet>
      <AppContent />
    </Router>
  );
}

export default App;
