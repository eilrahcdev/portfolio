import { NotebookText } from "lucide-react";

export default function BeyondCoding({ darkMode }) {
  return (
    <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-colors ${
      darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
    }`}>
      <div className="flex items-center gap-2 mb-4 sm:mb-8">
        <NotebookText className={`w-5 h-5 transition-colors ${
          darkMode ? 'text-purple-400' : 'text-purple-600'
        }`} />
        <h2 className={`text-lg sm:text-xl font-bold transition-colors ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Beyond Coding
        </h2>
      </div>
      <p className={`leading-relaxed text-sm sm:text-base transition-colors ${
        darkMode ? 'text-gray-300' : 'text-gray-700'
      }`}>
        When not writing code, I focus on learning about emerging technologies, minimalism, and 
        startup culture. I do read some documentations and share my knowledge to my tech friends 
        and classmates. By staying curious and open-minded, I aim to continuously grow both personally 
        and professionally.
      </p>
    </div>
  );
}