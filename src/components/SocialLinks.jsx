import { Linkedin, Mail, Github, Instagram, Facebook, Link } from 'lucide-react';

export default function SocialLinks({ darkMode }) {
  const links = [
    { 
      icon: Mail, 
      label: 'Email', 
      sublabel: 'csmartinez0802@gmail.com',
      url: 'mailto:csmartinez0802@gmail.com'
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
    <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-colors ${
      darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
    }`}>
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <Link className={`w-5 h-5 transition-colors ${
          darkMode ? 'text-purple-400' : 'text-purple-600'
        }`} />
        <h2 className={`text-lg sm:text-xl font-bold transition-colors ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Social Links
        </h2>
      </div>

      <div className="space-y-3">
        {links.map((link, index) => (
          <button
            key={index}
            onClick={() => handleLinkClick(link.url)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
              darkMode 
                ? 'hover:bg-purple-900/30' 
                : 'hover:bg-gray-50'
            }`}
          >
            <link.icon className={`w-5 h-5 shrink-0 transition-colors ${
              darkMode ? 'text-purple-400' : 'text-gray-600'
            }`} />
            <div className="flex-1 min-w-0 text-left">
              <p className={`text-sm font-medium transition-colors ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {link.label}
              </p>
              {link.sublabel && (
                <p className={`text-xs truncate transition-colors ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {link.sublabel}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}