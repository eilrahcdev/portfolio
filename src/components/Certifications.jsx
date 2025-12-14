import { FileBadge } from "lucide-react";

export default function Certifications({ darkMode }) {
  const certifications = [
    { title: 'Kotlin Developer', issuer: 'Jetbrains' },
    { title: 'Prompt Engineer', issuer: 'ChatGPT' }
  ];

  return (
    <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-colors ${
      darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
    }`}>
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <FileBadge className={`w-5 h-5 transition-colors ${
          darkMode ? 'text-purple-400' : 'text-purple-600'
        }`} />
        <h2 className={`text-lg sm:text-xl font-bold transition-colors ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Certifications
        </h2>
      </div>

      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className={`p-4 border rounded-lg transition-colors ${
              darkMode 
                ? 'border-purple-800 hover:border-purple-600 bg-purple-900/20' 
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            <h3 className={`font-semibold mb-1 text-sm sm:text-base transition-colors ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {cert.title}
            </h3>
            <p className={`text-xs sm:text-sm transition-colors ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}