import React, { useState } from 'react';
import { profile } from './data/profile';
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub, FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt, FaFigma, FaAngular, FaJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiMicrosoftazure, SiJirasoftware, SiVisualstudiocode, SiTailwindcss, SiNextdotjs, SiExpress, SiMui, SiPostman } from 'react-icons/si';
import VantaBg from './ui/VantaBg';

const techIcons: Record<string, JSX.Element> = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  C: <span className="font-bold text-blue-800">C</span>,
  'C#': <span className="font-bold text-purple-700">C#</span>,
  ReactJS: <FaReact className="text-cyan-400" />,
  NextJS: <SiNextdotjs className="text-black dark:text-white" />,
  ExpressJS: <SiExpress className="text-green-700" />,
  NestJS: <FaNodeJs className="text-green-600" />,
  Emotion: <span className="font-bold text-pink-400">EM</span>,
  MUI: <SiMui className="text-blue-700" />,
  TailwindCSS: <SiTailwindcss className="text-cyan-500" />,
  Angular: <FaAngular className="text-red-600" />,
  NextAuth: <span className="font-bold text-gray-700">NA</span>,
  OIDC: <span className="font-bold text-gray-700">OIDC</span>,
  MongoDB: <SiMongodb className="text-green-500" />,
  MSSQL: <FaDatabase className="text-blue-900" />,
  Vercel: <span className="font-bold text-black dark:text-white">▲</span>,
  'VS Code': <SiVisualstudiocode className="text-blue-500" />,
  'Visual Studio': <SiVisualstudiocode className="text-purple-500" />,
  Postman: <SiPostman className="text-orange-600" />,
  Docker: <FaDocker className="text-blue-400" />,
  Figma: <FaFigma className="text-pink-600" />,
  Jira: <SiJirasoftware className="text-blue-700" />,
  'Azure DevOps': <SiMicrosoftazure className="text-blue-600" />,
  Git: <FaGitAlt className="text-orange-500" />,
  GitHub: <FaGithub className="text-black dark:text-white" />,
};

const themes = ["light", "dark"] as const;

type Theme = typeof themes[number];

const fontSizes = ["text-base", "text-lg", "text-xl"];

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [fontSize, setFontSize] = useState(0);

  React.useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className={`min-h-screen relative ${theme} ${fontSizes[fontSize]} transition-all duration-300`}>      
      <VantaBg />
      <div className="relative z-10 max-w-4xl mx-auto p-6 bg-white/90 dark:bg-gray-900/80 rounded-lg shadow-xl mt-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{profile.name}</h1>
            <div className="flex items-center gap-3 mt-2 text-gray-700 dark:text-gray-300">
              <a href={`mailto:${profile.email}`} className="hover:text-blue-500"><FaEnvelope /></a>
              <span>{profile.email}</span>
              <FaPhone /> <span>{profile.phone}</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-1">
              Theme:
              <select value={theme} onChange={e => setTheme(e.target.value as Theme)} className="rounded px-1 py-0.5">
                {themes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </label>
            <label className="flex items-center gap-1">
              Font Size:
              <select value={fontSize} onChange={e => setFontSize(Number(e.target.value))} className="rounded px-1 py-0.5">
                <option value={0}>Normal</option>
                <option value={1}>Large</option>
                <option value={2}>X-Large</option>
              </select>
            </label>
          </div>
        </header>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Education</h2>
          <ul>
            {profile.education.map((edu, i) => (
              <li key={i} className="mb-1">
                <span className="font-bold">{edu.degree}</span> — {edu.college} <span className="text-xs text-gray-500">({edu.year})</span><br />
                <span className="italic">{edu.secondary}</span> <span className="text-xs text-gray-500">({edu.secondaryYear})</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Technical Skills</h2>
          <div className="flex flex-wrap gap-4">
            {Object.entries(profile.techSkills).map(([section, items]) => (
              <div key={section}>
                <div className="font-bold capitalize">{section}</div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {(items as string[]).map((item) => (
                    <span key={item} className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">
                      {techIcons[item] || null}
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Experience</h2>
          {profile.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="font-bold text-lg">{exp.title} <span className="font-normal">@ {exp.company}</span></div>
              <div className="text-sm text-gray-500">{exp.location} | {exp.period}</div>
              <ul className="list-disc ml-6 mt-1 text-gray-700 dark:text-gray-300">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* Awards & Achievements */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Awards & Achievements</h2>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
            {profile.awards.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </section>

        {/* Contact */}
        <footer className="mt-8 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} {profile.name} | Portfolio
        </footer>
      </div>
    </div>
  );
};

export default App;
