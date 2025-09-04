import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import NotFound from './pages/404';
import HomePage from './pages/HomePage';
import ScrollToTop from './utils/ScrollToTop';

const Games = lazy(() => import('./pages/Games'));
const MinecraftPage = lazy(() => import('./pages/Minecraft'));
const VPSHostingShowcase = lazy(() => import('./pages/VPS'));
const WebHosting = lazy(() => import('./pages/WebHosting'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const GDPR = lazy(() => import('./pages/GDPR'));
const AUP = lazy(() => import('./pages/Aup'));
const AboutPage = lazy(() => import('./pages/About'));
const PartnersPage = lazy(() => import('./pages/Partners'));

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
          <React.Suspense fallback={<div></div>}>
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
      </Helmet>
      <AppContent />
    </Router>
  );
}

export default App;
