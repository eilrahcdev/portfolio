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
          I'm a software developer who enjoys building clean, reliable, and user-focused applications.
          I work with modern tools and frameworks to create solutions that feel polished, perform well,
          and solve real problems across the web.
        </p>
        <p>
          Alongside development, I’m growing my skills in data analytics and data visualization so I can
          turn raw data into actionable insights that support better decisions.
        </p>
        <p>
          I’m currently learning system development, data analytics, and data visualization, and I’m open to
          freelance projects, internships, and collaborative opportunities where I can keep building.
        </p>
        <p>
          My strengths include full-stack development, API integration, problem solving, and data analysis,
          with a goal of building solutions that are both technically solid and data-informed.
        </p>
      </div>
    </div>
  );
}
  
