import { Info } from "lucide-react";

export default function About({ darkMode }) {
  return (
    <div className={`portfolio-card ui-micro-lift rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-colors min-w-0 ${
      darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
    }`}>
      <div className="portfolio-section-heading flex items-center gap-2 mb-4 sm:mb-6">
        <Info className={`portfolio-section-icon ui-micro-icon w-5 h-5 transition-colors ${
          darkMode ? 'text-purple-400' : 'text-purple-600'
        }`} />
        <h2 className={`portfolio-section-title text-lg sm:text-xl font-bold transition-colors ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          About
        </h2>
      </div>

      <div className={`portfolio-copy space-y-3 sm:space-y-4 leading-relaxed text-sm sm:text-base transition-colors min-w-0 ${
        darkMode ? 'text-gray-300' : 'text-gray-700'
      }`}>
        <p>
          I'm a software developer passionate about building clean, reliable, and user-focused applications that deliver meaningful experiences. I enjoy transforming ideas into functional solutions using modern technologies, with a strong focus on performance, usability, and maintainable code.
        </p>
        <p>
          Alongside software development, I'm expanding my skills in data analysis to turn data into meaningful insights that support better decision-making. I'm continuously learning and exploring new technologies while seeking opportunities to grow through internships, freelance projects, and collaborative work.
        </p>
        <p>
          I'm open to internships, freelance opportunities, and collaborative projects where I can contribute, learn from experienced professionals, and create software that is both technically robust and driven by real user needs.
        </p>
      </div>
    </div>
  );
}
  
