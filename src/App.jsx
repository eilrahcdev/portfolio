import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import bannerImage from './assets/pix choso.png';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`theme-transition min-h-screen py-[clamp(0.75rem,2.4vw,3rem)] px-[clamp(0.75rem,2vw,2rem)] transition-colors duration-300 overflow-x-hidden ${
      darkMode ? 'bg-[#1a0f2e]' : 'bg-gray-50'
    }`}>
      <div className="ambient-background" aria-hidden="true">
        <div
          className="ambient-layer"
          style={{
            backgroundImage: darkMode
              ? 'radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.26), transparent 38%), radial-gradient(circle at 80% 30%, rgba(59, 130, 246, 0.16), transparent 34%), radial-gradient(circle at 50% 80%, rgba(244, 114, 182, 0.12), transparent 30%)'
              : 'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.14), transparent 38%), radial-gradient(circle at 80% 30%, rgba(236, 72, 153, 0.1), transparent 34%), radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.08), transparent 30%)'
          }}
        >
          <div
            className="ambient-mesh"
            style={{
              backgroundImage: darkMode
                ? 'radial-gradient(circle at 18% 28%, rgba(168, 85, 247, 0.20), transparent 0 30%), radial-gradient(circle at 72% 18%, rgba(59, 130, 246, 0.12), transparent 0 28%), radial-gradient(circle at 55% 78%, rgba(244, 114, 182, 0.08), transparent 0 26%)'
                : 'radial-gradient(circle at 18% 28%, rgba(99, 102, 241, 0.10), transparent 0 30%), radial-gradient(circle at 72% 18%, rgba(236, 72, 153, 0.08), transparent 0 28%), radial-gradient(circle at 55% 78%, rgba(59, 130, 246, 0.06), transparent 0 26%)'
            }}
          />
          <div
            className="ambient-mesh ambient-mesh-2"
            style={{
              backgroundImage: darkMode
                ? 'linear-gradient(120deg, rgba(147, 51, 234, 0.08), transparent 40%, rgba(59, 130, 246, 0.08) 70%, transparent 100%)'
                : 'linear-gradient(120deg, rgba(99, 102, 241, 0.05), transparent 40%, rgba(236, 72, 153, 0.05) 70%, transparent 100%)'
            }}
          />
          <div
            className="ambient-orb ambient-orb-1"
            style={{
              top: '8%',
              left: '6%',
              width: '18rem',
              height: '18rem',
              background: darkMode
                ? 'radial-gradient(circle, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.02) 70%)'
                : 'radial-gradient(circle, rgba(99, 102, 241, 0.18), rgba(99, 102, 241, 0.02) 70%)'
            }}
          />
          <div
            className="ambient-orb ambient-orb-2"
            style={{
              top: '20%',
              right: '4%',
              width: '22rem',
              height: '22rem',
              background: darkMode
                ? 'radial-gradient(circle, rgba(59, 130, 246, 0.24), rgba(59, 130, 246, 0.02) 70%)'
                : 'radial-gradient(circle, rgba(236, 72, 153, 0.12), rgba(236, 72, 153, 0.02) 70%)'
            }}
          />
          <div
            className="ambient-orb ambient-orb-3"
            style={{
              bottom: '4%',
              left: '28%',
              width: '26rem',
              height: '26rem',
              background: darkMode
                ? 'radial-gradient(circle, rgba(244, 114, 182, 0.14), rgba(244, 114, 182, 0.02) 70%)'
                : 'radial-gradient(circle, rgba(168, 85, 247, 0.10), rgba(168, 85, 247, 0.02) 70%)'
            }}
          />
          {[
            { top: '14%', left: '18%', delay: '0s' },
            { top: '26%', left: '68%', delay: '-3s' },
            { top: '44%', left: '12%', delay: '-6s' },
            { top: '62%', left: '82%', delay: '-2s' },
            { top: '78%', left: '38%', delay: '-5s' },
            { top: '84%', left: '72%', delay: '-8s' },
          ].map((particle, index) => (
            <span
              key={index}
              className="ambient-particle"
              style={{
                top: particle.top,
                left: particle.left,
                animationDelay: particle.delay,
                backgroundColor: darkMode ? 'rgba(232, 121, 249, 0.75)' : 'rgba(99, 102, 241, 0.55)',
                boxShadow: darkMode
                  ? '0 0 16px rgba(232, 121, 249, 0.55)'
                  : '0 0 14px rgba(99, 102, 241, 0.35)'
              }}
            />
          ))}
        </div>
      </div>

      <div className="portfolio-shell relative z-10 mx-auto w-full min-w-0">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="portfolio-main grid grid-cols-1 md:grid-cols-3">
          {/* Left Column */}
          <div className="portfolio-column md:col-span-2 flex flex-col min-w-0">
            <div className="portfolio-section portfolio-about">
              <About darkMode={darkMode} />
            </div>
            <div className="portfolio-section portfolio-tech">
              <TechStack darkMode={darkMode} />
            </div>
            <div className="portfolio-section portfolio-certifications">
              <Certifications darkMode={darkMode} />
            </div>
          </div>

          {/* Right Column */}
          <div className="portfolio-column flex flex-col min-w-0">
            {/* Banner */}
            <div className={`portfolio-section portfolio-banner ui-micro-lift overflow-hidden shadow-sm ${
              darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
            }`}>
              <img 
                src={bannerImage} 
                alt="Banner"
                className="portfolio-banner-image ui-micro-image w-full object-cover"
              />
            </div>
            <div className="portfolio-section portfolio-experience">
              <Experience darkMode={darkMode} />
            </div>
            <div className="portfolio-section portfolio-projects">
              <Projects darkMode={darkMode} />
            </div>
            <div className="portfolio-section portfolio-social">
              <SocialLinks darkMode={darkMode} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`portfolio-footer text-center transition-colors ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          © 2025 Charlie Martinez. All rights reserved.
        </div>
      </div>
    </div>
  );
}
