
import { motion } from 'framer-motion';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaNpm,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiGithubactions,
  SiBabel,
} from "react-icons/si";

const SKILLS = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300 text-2xl" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-2xl" /> },

  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-white text-2xl" /> },

  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-2xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400 text-2xl" /> },

  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-2xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-2xl" /> },

  { name: "REST APIs", icon: <SiPostman className="text-orange-500 text-2xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 text-2xl" /> },

  { name: "CI/CD", icon: <SiGithubactions className="text-blue-400 text-2xl" /> },

  { name: "Babel", icon: <SiBabel className="text-yellow-300 text-2xl" /> },
  { name: "NPM", icon: <FaNpm className="text-red-500 text-2xl" /> },
];

export default function Skill() {
  return (
    <section className="py-20 bg-slate-950 overflow-hidden w-full min-h-[300px]">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 mb-4">
          Technical Expertise
        </h2>
        <p className="text-slate-400">Technologies I use to build scalable, modern applications.</p>
      </div>

      <div 
        className="relative flex w-full py-4 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-4"
        >
          {[...SKILLS, ...SKILLS].map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-4 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-xl hover:border-indigo-500/50 transition-colors cursor-default whitespace-nowrap shrink-0"
            >
              <span className="text-xl flex items-center justify-center">{skill.icon}</span>
              <span className="text-white font-semibold tracking-wide text-sm">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}