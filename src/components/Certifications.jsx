import { useState } from "react";
import { ChevronLeft, ChevronRight, FileBadge, X } from "lucide-react";
import introToPythonCert from "../assets/intro to python cert.png";
import intermediatePythonCert from "../assets/intermediate python cert.png";

export default function Certifications({ darkMode }) {
  const certifications = [
    {
      title: "Introduction to Python",
      issuer: "DataCamp",
      file: introToPythonCert,
    },
    {
      title: "Intermediate Python",
      issuer: "DataCamp",
      file: intermediatePythonCert,
    },
  ];

  const [activeCertificate, setActiveCertificate] = useState(null);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className={`rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center shadow-sm border transition-all duration-200 hover:-translate-y-0.5 ${
              darkMode 
                ? 'bg-[#2d1b4e] border-white/5 hover:border-purple-400' 
                : 'bg-white border-gray-200 hover:border-purple-400'
            }`}
          >
            <div className="space-y-1.5 w-full">
              <h3 className={`font-semibold text-sm sm:text-base leading-tight transition-colors ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {cert.title}
              </h3>
              <p className={`text-[11px] sm:text-xs uppercase tracking-[0.2em] transition-colors ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {cert.issuer}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveCertificate(cert)}
              className={`inline-flex items-center justify-center gap-1 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                darkMode
                  ? 'text-gray-100 hover:bg-purple-100/10'
                  : 'text-gray-700 hover:bg-purple-100'
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
              <span>VIEW</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      {activeCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close certificate preview"
            className="absolute inset-0 bg-black/70"
            onClick={() => setActiveCertificate(null)}
          />

          <div className={`relative z-10 flex w-full max-w-5xl max-h-[90vh] flex-col overflow-hidden rounded-2xl shadow-2xl ${
            darkMode ? 'bg-[#120b20]' : 'bg-white'
          }`}>
            <div className={`flex items-center justify-between gap-4 border-b px-4 py-3 sm:px-5 ${
              darkMode ? 'border-white/10' : 'border-gray-200'
            }`}>
              <div>
                <h3 className={`text-sm sm:text-base font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {activeCertificate.title}
                </h3>
                <p className={`text-xs sm:text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {activeCertificate.issuer}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                  darkMode ? 'text-gray-200 hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className={`flex flex-1 items-center justify-center p-4 sm:p-6 ${
              darkMode ? 'bg-[#0f0a1a]' : 'bg-gray-50'
            }`}>
              <img
                src={activeCertificate.file}
                alt={activeCertificate.title}
                className="max-h-[78vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}