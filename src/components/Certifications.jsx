import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, FileBadge, X, ChevronRight as ChevronForward } from "lucide-react";
import introToPythonCert from "../assets/intro to python cert.png";
import intermediatePythonCert from "../assets/intermediate python cert.png";
import introToSQL from "../assets/intro to sql.png";

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
    {
      title: "Introduction to SQL",
      issuer: "DataCamp",
      file: introToSQL,
    },
  ];

  const [activeCertificate, setActiveCertificate] = useState(null);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const hasOpenModal = showAllCertificates || activeCertificate;

  const handleViewAll = () => {
    setShowAllCertificates(true);
  };

  const closeCertificationModals = () => {
    setActiveCertificate(null);
    setShowAllCertificates(false);
  };

  useEffect(() => {
    if (!hasOpenModal) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeCertificationModals();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasOpenModal]);

  return (
    <>
      <div className={`portfolio-card ui-micro-lift rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-colors min-w-0 ${
        darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
      }`}>
        <div className="portfolio-section-heading flex items-center justify-between gap-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <FileBadge className={`portfolio-section-icon ui-micro-icon w-5 h-5 transition-colors ${
              darkMode ? 'text-purple-400' : 'text-purple-600'
            }`} />
            <h2 className={`portfolio-section-title text-lg sm:text-xl font-bold transition-colors ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Certifications
            </h2>
          </div>

          <button
            onClick={handleViewAll}
            className={`ui-micro-button text-[clamp(0.68rem,1vw,0.875rem)] font-medium transition-colors hover:underline ${
              darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'
            }`}
          >
            <span className="inline-flex items-center gap-1">
              See All
              <ChevronForward className="h-4 w-4" />
            </span>
          </button>
        </div>

        <div className="portfolio-cert-grid grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 items-stretch">
          {certifications.slice(0, 3).map((cert, index) => (
            <div 
              key={index} 
              className={`portfolio-cert-card ui-micro-lift rounded-2xl p-4 sm:p-5 lg:p-6 flex h-full min-h-[164px] sm:min-h-[176px] lg:min-h-[188px] flex-col items-center justify-between gap-4 sm:gap-5 text-center shadow-sm border transition-all duration-200 hover:-translate-y-0.5 min-w-0 ${
                darkMode 
                  ? 'bg-[#2d1b4e] border-white/5 hover:border-purple-400' 
                  : 'bg-white border-gray-200 hover:border-purple-400'
              }`}
            >
              <div className="w-full space-y-1.5 sm:space-y-2">
                <h3 className={`font-semibold text-[clamp(0.68rem,1vw,1rem)] leading-tight transition-colors ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {cert.title}
                </h3>
                <p className={`text-[clamp(0.56rem,0.8vw,0.75rem)] uppercase tracking-[0.2em] transition-colors ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {cert.issuer}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveCertificate(cert)}
                className={`cert-view-button inline-flex items-center justify-center gap-1 rounded-full px-3 py-1.5 text-[clamp(0.6rem,0.9vw,0.875rem)] font-medium self-center ${
                  darkMode ? 'text-gray-100' : 'text-gray-700'
                }`}
              >
                <ChevronLeft className="cert-view-button__chevron cert-view-button__chevron--left h-5 w-5" />
                <span className="cert-view-button__label">VIEW</span>
                <ChevronRight className="cert-view-button__chevron cert-view-button__chevron--right h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {showAllCertificates && (
        <div 
          className="fixed inset-0 backdrop-blur-lg bg-black/5 flex items-center justify-center z-50 p-4"
          onClick={() => setShowAllCertificates(false)}
        >
          <div 
            className={`ui-micro-lift rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto transition-colors min-w-0 ${
              darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certifications-modal-title"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6 gap-3 min-w-0">
              <div className="flex items-center gap-2">
                <FileBadge className={`ui-micro-icon w-6 h-6 transition-colors ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`} />
                <h2 id="certifications-modal-title" className={`text-xl sm:text-2xl font-bold transition-colors ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  All Certifications
                </h2>
              </div>
              <button
                onClick={() => setShowAllCertificates(false)}
                aria-label="Close certifications modal"
                className={`ui-micro-button p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'hover:bg-purple-900/30 text-gray-400 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`ui-micro-lift rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center shadow-sm border transition-all duration-200 hover:-translate-y-0.5 ${
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
                    onClick={() => {
                      setActiveCertificate(cert);
                      setShowAllCertificates(false);
                    }}
                    className={`cert-view-button mt-4 inline-flex items-center justify-center gap-1 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium ${
                      darkMode ? 'text-gray-100' : 'text-gray-700'
                    }`}
                  >
                    <ChevronLeft className="cert-view-button__chevron cert-view-button__chevron--left h-5 w-5" />
                    <span className="cert-view-button__label">VIEW</span>
                    <ChevronRight className="cert-view-button__chevron cert-view-button__chevron--right h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-5 sm:mt-6 flex justify-end">
              <button
                onClick={() => setShowAllCertificates(false)}
                className={`ui-micro-button px-4 py-2 rounded-lg font-medium transition-colors ${
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

      {activeCertificate && (
        <div
          className="fixed inset-0 backdrop-blur-lg bg-black/5 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveCertificate(null)}
        >
          <div
            className={`ui-micro-lift flex w-full max-w-5xl max-h-[90vh] flex-col overflow-hidden rounded-2xl shadow-2xl min-w-0 ${
            darkMode ? 'bg-[#120b20]' : 'bg-white'
          }`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-preview-title"
          >
            <div className={`flex items-center justify-between gap-3 border-b px-4 py-3 sm:px-5 min-w-0 ${
              darkMode ? 'border-white/10' : 'border-gray-200'
            }`}>
              <div>
                <h3 id="certificate-preview-title" className={`text-sm sm:text-base font-semibold ${
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
                aria-label="Close certificate preview"
                className={`ui-micro-button inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
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
                className="ui-micro-image max-h-[78vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
