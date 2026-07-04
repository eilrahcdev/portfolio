import { Mail, MapPin, Sun, Moon } from 'lucide-react';

export default function Header({ darkMode, toggleDarkMode }) {
  const handleEmailClick = () => {
    window.location.href = 'mailto:csmartinez0802@gmail.com';
  };

  return (
    <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 shadow-sm transition-colors ${
      darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
    }`}>
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8">

        {/* Header Info */}
        <div className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
            <div className="text-center sm:text-left">
              <h1 className={`text-2xl sm:text-3xl font-bold mb-2 transition-colors ${
                darkMode ? 'text-white' : 'text-black'
              }`}>
                Charlie Martinez
              </h1>
              <div className={`flex items-center justify-center sm:justify-start mb-1 transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">Pangasinan, Philippines</span>
              </div>
              <p className={`text-base sm:text-lg font-semibold transition-colors ${
                darkMode ? 'text-gray-300' : 'text-neutral-700'
              }`}>
                Software Developer / Aspiring Data Analyst
              </p>
            </div>
            
            {/* Dark Mode Toggle Button */}
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors mx-auto sm:mx-0 ${
                darkMode 
                  ? 'bg-purple-900/50 hover:bg-purple-900/70 text-yellow-300' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
          
          <div className="flex justify-center sm:justify-start">
            
          </div>
        </div>
      </div>
    </div>
  );
}