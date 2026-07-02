import { Blocks, ExternalLink, X } from "lucide-react";
import { useState } from "react";

export default function Projects({ darkMode }) {
  const [showModal, setShowModal] = useState(false);

  const projects = [
    { name: 'CJs Piggybank', desc: 'Simple Python Piggybank Application', url: 'https://github.com/eilrahcdev/CJ-s-Piggybank' },
    { name: 'Outfique', desc: 'Simple Outfit Ideas Website', url: 'https://github.com/eilrahcdev/outfique' },
    { name: 'Resumaker', desc: 'Android Resume Builder Application', url: 'https://github.com/eilrahcdev/Resumaker' },
    { name: 'EZ Mart', desc: 'Cross Platform Android E-commerce Application', url: 'https://github.com/eilrahcdev/EZ-Mart' },
  ];

  // Show only first 4 projects in main view
  const displayedProjects = projects.slice(0, 4);

  const handleViewAll = () => {
    setShowModal(true);
  };

  const handleProjectClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-colors ${
        darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
      }`}>
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <Blocks className={`w-5 h-5 transition-colors ${
              darkMode ? 'text-purple-400' : 'text-purple-600'
            }`} />
            <h2 className={`text-lg sm:text-xl font-bold transition-colors ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Projects
            </h2>
          </div>
          <button
            onClick={handleViewAll}
            className={`text-sm font-medium transition-colors hover:underline ${
              darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'
            }`}
          >
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {displayedProjects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => handleProjectClick(project.url)}
              className={`p-4 border rounded-lg transition-all cursor-pointer group ${
                darkMode 
                  ? 'border-purple-800 hover:border-purple-600 bg-purple-900/20 hover:bg-purple-900/30' 
                  : 'border-gray-200 hover:border-purple-400 hover:shadow-md'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className={`font-semibold text-sm transition-colors ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.name}
                </h3>
                <ExternalLink 
                  className={`w-4 h-4 transition-all opacity-0 group-hover:opacity-100 ${
                    darkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}
                />
              </div>
              <p className={`text-xs transition-colors ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 backdrop-blur-lg bg-black/5 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className={`rounded-xl sm:rounded-2xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto transition-colors ${
              darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Blocks className={`w-6 h-6 transition-colors ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`} />
                <h2 className={`text-xl sm:text-2xl font-bold transition-colors ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  All Projects
                </h2>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'hover:bg-purple-900/30 text-gray-400 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  onClick={() => handleProjectClick(project.url)}
                  className={`p-4 border rounded-lg transition-all cursor-pointer group ${
                    darkMode 
                      ? 'border-purple-800 hover:border-purple-600 bg-purple-900/20 hover:bg-purple-900/30' 
                      : 'border-gray-200 hover:border-purple-400 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={`font-semibold text-sm transition-colors ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.name}
                    </h3>
                    <ExternalLink 
                      className={`w-4 h-4 transition-all opacity-0 group-hover:opacity-100 flex-shrink-0 ${
                        darkMode ? 'text-purple-400' : 'text-purple-600'
                      }`}
                    />
                  </div>
                  <p className={`text-xs transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  darkMode
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}