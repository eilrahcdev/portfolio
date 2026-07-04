import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

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
    <div className={`min-h-screen py-4 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      darkMode ? 'bg-[#1a0f2e]' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto w-full">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <About darkMode={darkMode} />
            <TechStack darkMode={darkMode} />
            <Certifications darkMode={darkMode} />
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Banner */}
            <div className={`rounded-xl sm:rounded-2xl overflow-hidden shadow-sm ${
              darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
            }`}>
              <img 
                src="src/assets/pix choso.png" 
                alt="Banner"
                className="w-full h-24 sm:h-25 object-cover"
              />
            </div>
            <Experience darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <SocialLinks darkMode={darkMode} />
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-8 sm:mt-12 text-xs sm:text-sm transition-colors ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          © 2025 Charlie Martinez. All rights reserved.
        </div>
      </div>
    </div>
  );
}