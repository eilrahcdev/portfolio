import { Blocks } from "lucide-react";

export default function Projects({ darkMode }) {
  const projects = [
    { name: ' CJs Piggybank', desc: 'Simple Python Piggybank Application', url: 'github.com/eilrahcdev/CJ-s-Piggybank' },
    { name: 'Outfique', desc: 'Simple Outfit Ideas Website', url: 'github.com/eilrahcdev/outfique' },
    { name: 'Resumaker', desc: 'Android Resume Builder Application', url: 'github.com/eilrahcdev/Resumaker' },
    { name: 'EZ Mart', desc: 'Cross Platform Android E-commerce Application', url: 'github.com/eilrahcdev/EZ-Mart' }
  ];

  return (
    <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-colors ${
      darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
    }`}>
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <Blocks className={`w-5 h-5 transition-colors ${
          darkMode ? 'text-purple-400' : 'text-purple-600'
        }`} />
        <h2 className={`text-lg sm:text-xl font-bold transition-colors ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`p-4 border rounded-lg transition-colors ${
              darkMode 
                ? 'border-purple-800 hover:border-purple-600 bg-purple-900/20' 
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            <h3 className={`font-semibold mb-2 text-sm transition-colors ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {project.name}
            </h3>
            <p className={`text-xs mb-2 transition-colors ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {project.desc}
            </p>
            <p className={`text-xs break-all transition-colors ${
              darkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              {project.url}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
