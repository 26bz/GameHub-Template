import Navbar from './Navbar';
import Footer from './Footer';
import { BackToTop } from './shared-components';
import { memo } from 'react';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-6">{children}</main>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default memo(Layout);
