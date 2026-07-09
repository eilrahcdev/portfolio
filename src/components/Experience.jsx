import { Briefcase } from "lucide-react";

export default function Experience({ darkMode }) {
  const experiences = [
    {
      title: "BS Information Technology",
      company: "PHINMA - University of Pangasinan",
      year: "Present",
      active: true,
    },
    {
      title: "Freelance Software Developer",
      year: "2025 - Present",
      active: false,
    },
    {
      title: "Hello World!",
      company: "Wrote my first line of code",
      year: "2023",
      active: false,
    },
  ];

  return (
    <div className={`portfolio-card ui-micro-lift rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-colors min-w-0 ${
      darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
    }`}>
      <div className="portfolio-section-heading flex items-center gap-2 mb-4 sm:mb-6">
        <Briefcase className={`portfolio-section-icon ui-micro-icon w-5 h-5 transition-colors ${
          darkMode ? 'text-purple-400' : 'text-purple-600'
        }`} />
        <h2 className={`portfolio-section-title text-lg sm:text-xl font-bold transition-colors ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Experience
        </h2>
      </div>

      <div className="portfolio-list space-y-3 sm:space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-3 min-w-0">
            <div
              className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                exp.active 
                  ? darkMode ? 'bg-purple-400' : 'bg-purple-600'
                  : darkMode ? 'bg-gray-600' : 'bg-gray-300'
              }`}
            ></div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1 gap-2 min-w-0">
                <h3 className={`font-semibold text-[clamp(0.75rem,1.1vw,1rem)] leading-snug transition-colors ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {exp.title}
                </h3>
                <span className={`text-[clamp(0.68rem,0.95vw,0.875rem)] shrink-0 transition-colors ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {exp.year}
                </span>
              </div>

              {exp.company && (
                <p className={`text-[clamp(0.68rem,0.95vw,0.875rem)] transition-colors ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {exp.company}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
