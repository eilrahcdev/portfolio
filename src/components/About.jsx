import { Info } from "lucide-react";

export default function About({ darkMode }) {
  return (
    <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-colors ${
      darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
    }`}>
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <Info className={`w-5 h-5 transition-colors ${
          darkMode ? 'text-purple-400' : 'text-purple-600'
        }`} />
        <h2 className={`text-lg sm:text-xl font-bold transition-colors ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          About
        </h2>
      </div>

      <div className={`space-y-4 leading-relaxed text-sm sm:text-base transition-colors ${
        darkMode ? 'text-gray-300' : 'text-gray-700'
      }`}>
        <p>
          I'm a software developer focused on building dynamic, responsive, and user-friendly applications.
          I work with modern tools and frameworks to create reliable solutions across web, mobile, and
          backend systems, ensuring smooth performance and thoughtful user experiences.
        </p>
        <p>
          I also design intuitive interfaces—from initial wireframes to polished prototypes—combining
          creativity and functionality to produce designs that look great and feel effortless to use. 
          Whether it's a website or a mobile app, I aim to create experiences that truly connect with users.
        </p>
        <p>
          Recently, I've been expanding my work by taking on more project management responsibilities, helping
          teams stay aligned and ensuring projects are delivered efficiently. I prioritize clear communication, 
          collaboration, and creating solutions that support real business goals.
        </p>
      </div>
    </div>
  );
}
  