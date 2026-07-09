import { Linkedin, Mail, Github, Instagram, Facebook, Link } from 'lucide-react';

export default function SocialLinks({ darkMode }) {
  const getGmailComposeUrl = (email) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  const links = [
    { 
      icon: Mail, 
      label: 'Email', 
      sublabel: 'csmartinez0802@gmail.com',
      url: getGmailComposeUrl('csmartinez0802@gmail.com')
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/charlie-martinez-78a481358/'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      url: 'https://github.com/eilrahcdev' 
    },
    { 
      icon: Facebook, 
      label: 'Facebook', 
      url: 'https://www.facebook.com/eilrahc.mrtnz' 
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      url: 'https://www.instagram.com/rahc.mrtnz'
    }
  ];

  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`portfolio-card ui-micro-lift rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-colors min-w-0 ${
      darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
    }`}>
      <div className="portfolio-section-heading flex items-center gap-2 mb-4 sm:mb-6">
        <Link className={`portfolio-section-icon ui-micro-icon w-5 h-5 transition-colors ${
          darkMode ? 'text-purple-400' : 'text-purple-600'
        }`} />
        <h2 className={`portfolio-section-title text-lg sm:text-xl font-bold transition-colors ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Social Links
        </h2>
      </div>

      <div className="portfolio-list space-y-2.5 sm:space-y-3">
        {links.map((link, index) => {
          const LinkIcon = link.icon;
          const isEmail = link.label === 'Email';

          if (isEmail) {
            return (
              <a
                key={index}
                href={link.url}
                className={`portfolio-social-link ui-micro-button group w-full flex items-center gap-3 p-3 rounded-lg transition-colors min-w-0 ${
                  darkMode
                    ? 'hover:bg-purple-900/30'
                    : 'hover:bg-gray-50'
                }`}
                aria-label={`Send email to ${link.sublabel}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon className={`ui-micro-icon w-5 h-5 shrink-0 transition-colors ${
                  darkMode ? 'text-purple-400' : 'text-gray-600'
                }`} />
                <div className="flex-1 min-w-0 text-left">
                  <p className={`text-[clamp(0.72rem,1vw,0.875rem)] font-medium transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {link.label}
                  </p>
                  {link.sublabel && (
                    <p className={`text-[clamp(0.62rem,0.85vw,0.75rem)] truncate transition-colors ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {link.sublabel}
                    </p>
                  )}
                </div>
                <span
                  className={`portfolio-email-chip inline-flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                    darkMode
                      ? 'bg-purple-900/45 text-purple-100 group-hover:bg-purple-900/65'
                      : 'bg-purple-50 text-purple-700 group-hover:bg-purple-100'
                  }`}
                >
                  <Mail className="ui-micro-icon h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Send Email</span>
                  <span className="sm:hidden">Send</span>
                </span>
              </a>
            );
          }

          return (
            <button
              key={index}
              onClick={() => handleLinkClick(link.url)}
              className={`portfolio-social-link ui-micro-button w-full flex items-center gap-3 p-3 rounded-lg transition-colors min-w-0 ${
                darkMode
                  ? 'hover:bg-purple-900/30'
                  : 'hover:bg-gray-50'
              }`}
            >
              <LinkIcon className={`ui-micro-icon w-5 h-5 shrink-0 transition-colors ${
                darkMode ? 'text-purple-400' : 'text-gray-600'
              }`} />
              <div className="flex-1 min-w-0 text-left">
                <p className={`text-[clamp(0.72rem,1vw,0.875rem)] font-medium transition-colors ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {link.label}
                </p>
                {link.sublabel && (
                  <p className={`text-[clamp(0.62rem,0.85vw,0.75rem)] truncate transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {link.sublabel}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
