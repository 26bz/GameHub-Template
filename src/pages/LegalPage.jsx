import { useState } from "react";
import { ChevronDown } from "lucide-react";

const LegalPage = ({ title, lastUpdated, sections }) => {
  const [isTocOpen, setIsTocOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsTocOpen(false);
    }
  };

  return (
    <main
      className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-16 sm:py-24 relative overflow-hidden"
      role="main"
    >
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-[90rem] mx-auto px-4 relative z-10">
        {/* Mobile Table of Contents Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsTocOpen(!isTocOpen)}
            className="w-full bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 flex items-center justify-between text-gray-200"
          >
            <span className="font-semibold">Table of Contents</span>
            <ChevronDown
              className={`transform transition-transform duration-200 ${isTocOpen ? "rotate-180" : ""
                }`}
              size={20}
            />
          </button>
          {isTocOpen && (
            <nav className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-xl mt-2 p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <ul className="space-y-2">
                {sections.map((section, index) => (
                  <li key={`toc-mobile-${index}`}>
                    <button
                      onClick={() => scrollToSection(`section-${index}`)}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left w-full text-sm py-1"
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-4 sm:gap-6">
          {/* Desktop Table of Contents */}
          <nav
            className="hidden lg:block bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-fit sticky top-6"
            aria-label="Table of contents"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">
              Table of Contents
            </h2>
            <ul className="space-y-2">
              {sections.map((section, index) => (
                <li key={`toc-${index}`}>
                  <button
                    onClick={() => scrollToSection(`section-${index}`)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left w-full text-sm sm:text-base"
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Content */}
          <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <h1
              className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 py-2 sm:py-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              id="top"
            >
              {title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
              Last updated: {lastUpdated}
            </p>

            {/* Sections */}
            <article className="prose prose-invert max-w-none">
              {sections.map((section, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  className="mb-8 sm:mb-12"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-3 sm:mb-4">
                    {section.title}
                  </h2>
                  <div className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {section.content}
                  </div>
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LegalPage;
