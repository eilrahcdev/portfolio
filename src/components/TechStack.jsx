import { Code } from "lucide-react";
import { 
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function TechStack({ darkMode }) {
  const techStack = [
    { label: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
    { label: "Kotlin", Icon: SiKotlin, color: "#7F52FF" },
    { label: "Python", Icon: SiPython, color: "#3776AB" },
    { label: "HTML", Icon: FaHtml5, color: "#E34F26" },
    { label: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
    { label: "React", Icon: FaReact, color: "#61DAFB" },
    { label: "Next.js", Icon: SiNextdotjs, color: darkMode ? "#FFFFFF" : "#111111" },
    { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { label: "Express", Icon: SiExpress, color: darkMode ? "#F3F4F6" : "#111111" },
    { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { label: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { label: "Git", Icon: FaGitAlt, color: "#F05032" },
    { label: "GitHub", Icon: FaGithub, color: darkMode ? "#F3F4F6" : "#181717" },
    { label: "VS Code", Icon: VscVscode, color: "#007ACC" },
    { label: "Vercel", Icon: SiVercel, color: darkMode ? "#F3F4F6" : "#111111" },
  ];

  return (
    <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-colors ${
      darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
    }`}>
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <Code className={`w-5 h-5 transition-colors ${
          darkMode ? 'text-purple-400' : 'text-purple-600'
        }`} />
        <h2 className={`text-lg sm:text-xl font-bold transition-colors ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2.5 sm:gap-3">
        {techStack.map(({ label, Icon, color }) => (
          <div
            key={label}
            title={label}
            aria-label={label}
            className={`group flex aspect-square items-center justify-center rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
              darkMode
                ? 'bg-purple-900/25 hover:bg-purple-900/35'
                : 'bg-gray-50 hover:bg-white'
            }`}
          >
            <Icon
              className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 group-hover:scale-110"
              style={{ color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}