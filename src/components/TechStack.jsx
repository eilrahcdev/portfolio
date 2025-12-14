import { Code } from "lucide-react";

export default function TechStack({ darkMode }) {
  const techStacks = {
    Frontend: ['JavaScript', 'HTML', 'CSS', 'Kotlin', 'React', 'Flutter'],
    Backend: ['Node.js', 'PHP', 'Laravel', 'MySQL', 'MongoDB'],
    'UI / UX Design': ['Figma', 'Canva']
  };

  return (
    <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-colors ${
      darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
    }`}>
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <Code className={`w-5 h-5 transition-colors ${
          darkMode ? 'text-purple-400' : 'text-purple-600'
        }`} />
        <h2 className={`text-lg sm:text-xl font-bold transition-colors ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Tech Stack
        </h2>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {Object.entries(techStacks).map(([category, technologies]) => (
          <div key={category}>
            <h3 className={`font-semibold mb-3 text-sm sm:text-base transition-colors ${
              darkMode ? 'text-gray-200' : 'text-gray-900'
            }`}>
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map(tech => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    darkMode 
                      ? 'bg-purple-900/40 text-purple-200' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}