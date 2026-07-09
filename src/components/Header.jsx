import { MapPin, Moon, Sun } from 'lucide-react';

export default function Header({ darkMode, toggleDarkMode }) {

  return (
    <div className={`portfolio-header ui-micro-lift shadow-sm transition-colors min-w-0 ${
      darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
    }`}>
      <div className="flex h-full items-center justify-between gap-[clamp(0.75rem,2vw,2rem)] min-w-0">

        {/* Header Info */}
        <div className="flex-1 min-w-0">
          <div className="text-left">
              <h1 className={`text-[clamp(1.35rem,3vw,1.875rem)] font-bold mb-[clamp(0.35rem,0.8vw,0.5rem)] leading-tight transition-colors ${
                darkMode ? 'text-white' : 'text-black'
              }`}>
                Charlie Martinez
              </h1>
              <div className={`flex items-center mb-1 transition-colors text-[clamp(0.72rem,1.2vw,0.95rem)] min-w-0 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <MapPin className="ui-micro-icon h-[clamp(0.85rem,1.3vw,1rem)] w-[clamp(0.85rem,1.3vw,1rem)] mr-1 shrink-0" />
                <span className="min-w-0 truncate">Pangasinan, Philippines</span>
              </div>
              <p className={`text-[clamp(0.78rem,1.45vw,1.125rem)] font-semibold leading-snug transition-colors ${
                darkMode ? 'text-gray-300' : 'text-neutral-700'
              }`}>
                Software Developer / Aspiring Data Analyst
              </p>
            </div>
        </div>

        <button
          onClick={toggleDarkMode}
          className={`ui-micro-button inline-flex h-[clamp(2.75rem,5vw,3.5rem)] w-[clamp(2.75rem,5vw,3.5rem)] shrink-0 items-center justify-center rounded-xl transition-colors ${
            darkMode
              ? 'bg-purple-900/50 hover:bg-purple-900/70 text-yellow-300'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="ui-micro-icon h-[clamp(1.05rem,1.8vw,1.25rem)] w-[clamp(1.05rem,1.8vw,1.25rem)]" />
          ) : (
            <Moon className="ui-micro-icon h-[clamp(1.05rem,1.8vw,1.25rem)] w-[clamp(1.05rem,1.8vw,1.25rem)]" />
          )}
        </button>
      </div>
    </div>
  );
}
