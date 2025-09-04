import { Twitter, Headset, Mail, Phone, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { useCallback, useMemo } from 'react';

export default function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const footerLinks = useMemo(
    () => ({
      products: [
        { name: 'Game Hosting', href: '/games' },
        { name: 'VPS Services', href: '/vps' },
        { name: 'Web Hosting', href: '/webhosting' },
      ],
      company: [
        { name: 'About Us', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Partners', href: '/partners' },
      ],
      support: [
        { name: 'Help Center', href: '/help' },
        { name: 'Server Status', href: '/status' },
        { name: 'Knowledge Base', href: '/kb' },
        { name: 'Contact Support', href: '/support' },
      ],
      legal: [
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Cookie Policy', href: '/cookie-policy' },
        { name: 'GDPR', href: '/gdpr' },
        { name: 'Acceptable Use', href: '/aup' },
      ],
    }),
    []
  );

  const socialLinks = useMemo(
    () => [
      { icon: Headset, href: '/discord', label: 'Discord' },
      { icon: Twitter, href: '/twitter', label: 'Twitter' },
      { icon: Instagram, href: '/instagram', label: 'Instagram' },
      { icon: Youtube, href: '/youtube', label: 'YouTube' },
    ],
    []
  );

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-6">
              <img src="https://placehold.co/50" alt="Logo" className="w-8 h-auto" />
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r py-2 sm:py-3 from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">GameHub</span>
            </a>
            <p className="text-gray-300 mb-4 sm:mb-6 font-semibold text-sm sm:text-base">Premium game hosting, serving gamers worldwide since 2023.</p>
            <div className="flex items-center space-x-4 max-w-fit">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all" aria-label={social.label}>
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 capitalize bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all rounded-lg py-1 px-2 -ml-2 inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-gray-300 font-bold text-sm sm:text-base">
              <a href="mailto:contact@gamehub.com" className="flex items-center hover:text-white hover:bg-gray-800/50 rounded-lg px-3 py-2 transition-all">
                <Mail size={16} className="mr-2" />
                contact@gamehub.com
              </a>
              <a href="tel:+1234567890" className="flex items-center hover:text-white hover:bg-gray-800/50 rounded-lg px-3 py-2 transition-all">
                <Phone size={16} className="mr-2" />
                +1 (234) 567-890
              </a>
            </div>
            <button type="button" onClick={scrollToTop} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all hover:scale-105" aria-label="Scroll to top">
              <ArrowUp size={22} />
            </button>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">© {new Date().getFullYear()} GameHub. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['Report'].map((item) => (
              <a key={item} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg px-3 py-1 transition-all">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
