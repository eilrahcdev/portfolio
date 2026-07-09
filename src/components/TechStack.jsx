import { Code } from "lucide-react";
import { 
  FaCss3Alt,
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
    { label: "GitHub", Icon: FaGithub, color: darkMode ? "#F3F4F6" : "#181717" },
    { label: "VS Code", Icon: VscVscode, color: "#007ACC" },
    { label: "Vercel", Icon: SiVercel, color: darkMode ? "#F3F4F6" : "#111111" },
  ];

  return (
    <div className={`portfolio-card ui-micro-lift rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-colors min-w-0 ${
      darkMode ? 'bg-[#2d1b4e]' : 'bg-white'
    }`}>
      <div className="portfolio-section-heading flex items-center gap-2 mb-4 sm:mb-6">
        <Code className={`portfolio-section-icon ui-micro-icon w-5 h-5 transition-colors ${
          darkMode ? 'text-purple-400' : 'text-purple-600'
        }`} />
        <h2 className={`portfolio-section-title text-lg sm:text-xl font-bold transition-colors ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Tech Stack
        </h2>
      </div>

      <div className="portfolio-tech-grid grid grid-cols-5 sm:grid-cols-6 gap-2 sm:gap-3">
        {techStack.map((tech) => {
          const TechIcon = tech.Icon;

          return (
            <div
              key={tech.label}
              className="tech-stack-drift aspect-square min-w-0"
            >
              <div
                title={tech.label}
                aria-label={tech.label}
                className={`ui-micro-lift group flex h-full w-full items-center justify-center rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm min-w-0 ${
                  darkMode
                    ? 'bg-purple-900/25 hover:bg-purple-900/35'
                    : 'bg-gray-50 hover:bg-white'
                }`}
              >
                <TechIcon
                  className="portfolio-tech-icon ui-micro-icon h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-200 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
