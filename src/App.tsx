import React, { useState } from "react";
import { profile } from "./data/profile";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaAngular,
  FaJs,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiMicrosoftazure,
  SiJirasoftware,
  SiVisualstudiocode,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMui,
  SiPostman,
} from "react-icons/si";
import { motion } from "framer-motion";
import VantaBg, { VantaEffectType } from "./ui/VantaBg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

const techIcons: Record<string, JSX.Element> = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  C: <span className="font-bold text-blue-800">C</span>,
  "C#": <span className="font-bold text-purple-700">C#</span>,
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
  "VS Code": <SiVisualstudiocode className="text-blue-500" />,
  "Visual Studio": <SiVisualstudiocode className="text-purple-500" />,
  Postman: <SiPostman className="text-orange-600" />,
  Docker: <FaDocker className="text-blue-400" />,
  Figma: <FaFigma className="text-pink-600" />,
  Jira: <SiJirasoftware className="text-blue-700" />,
  "Azure DevOps": <SiMicrosoftazure className="text-blue-600" />,
  Git: <FaGitAlt className="text-orange-500" />,
  GitHub: <FaGithub className="text-black dark:text-white" />,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const fontSizes = [
  "text-base", // 0
  "text-lg",   // 1
  "text-xl",   // 2
  "text-2xl",  // 3
  "text-3xl",  // 4
];

const App: React.FC = () => {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>("light");
  // Font size state
  const [fontSizeIdx, setFontSizeIdx] = useState(0);
  // Vanta effect state
  const [vantaEffect, setVantaEffect] = useState<VantaEffectType>('waves');

  // Update theme class on html
  React.useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className={`relative min-h-screen font-sans bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800 ${fontSizes[fontSizeIdx]}`}>
      {/* Controls Bar */}
      <div className="fixed top-3 right-3 z-30 flex gap-3 items-center bg-white/80 dark:bg-gray-900/80 rounded-xl shadow px-4 py-2 backdrop-blur-md">
        {/* Theme Switch */}
        <label className="flex items-center gap-1 cursor-pointer">
          <span className="text-xs">Theme</span>
          <select
            className="rounded px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            value={theme}
            onChange={e => setTheme(e.target.value as 'light' | 'dark')}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        {/* Font Size Switch */}
        <label className="flex items-center gap-1 cursor-pointer">
          <span className="text-xs">Font</span>
          <select
            className="rounded px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            value={fontSizeIdx}
            onChange={e => setFontSizeIdx(Number(e.target.value))}
          >
            <option value={0}>Normal</option>
            <option value={1}>Large</option>
            <option value={2}>XL</option>
            <option value={3}>2XL</option>
            <option value={4}>3XL</option>
          </select>
        </label>
        {/* Vanta Effect Switch */}
        <label className="flex items-center gap-1 cursor-pointer">
          <span className="text-xs">Background</span>
          <select
            className="rounded px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            value={vantaEffect}
            onChange={e => setVantaEffect(e.target.value as VantaEffectType)}
          >
            <option value="waves">Waves</option>
            <option value="fog">Fog</option>
            <option value="net">Net</option>
          </select>
        </label>
      </div>
      <VantaBg effect={vantaEffect} />
      {/* Navigation Bar */}
      <motion.nav initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="fixed w-full top-0 left-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm flex justify-center">
        <ul className="flex gap-8 py-3 text-lg font-medium text-gray-700 dark:text-gray-200">
          {navLinks.map(link => (
            <motion.li key={link.href} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.97 }}>
              <a href={link.href} className="hover:text-blue-500 transition-colors duration-200">
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
      {/* Hero Section */}
      <section id="about" className="flex flex-col items-center justify-center min-h-[90vh] pt-24 pb-12 text-center">
        <motion.img
          src="https://ui-avatars.com/api/?name=Siva+Chandra+M&background=0D8ABC&color=fff&size=128"
          alt="avatar"
          className="rounded-full shadow-lg mb-6 border-4 border-blue-100"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-2 text-gray-900 dark:text-white drop-shadow-lg"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-blue-700 dark:text-blue-300 font-semibold mb-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          Full Stack Developer | MERN & Cloud Enthusiast
        </motion.p>
        <motion.div className="flex gap-5 justify-center text-2xl text-gray-600 dark:text-gray-300 mb-6" variants={stagger} initial="hidden" animate="visible">
          <motion.a href={`mailto:${profile.email}`} title="Email" className="hover:text-blue-600" variants={fadeInUp}><FaEnvelope /></motion.a>
          <motion.a href={profile.linkedin} title="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700" variants={fadeInUp}><FaLinkedin /></motion.a>
          <motion.a href="https://github.com/siva-mirrapalli" title="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white" variants={fadeInUp}><FaGithub /></motion.a>
          <motion.span title="Phone" className="select-all" variants={fadeInUp}><FaPhone className="inline mr-1" />{profile.phone}</motion.span>
        </motion.div>
        <motion.p
          className="max-w-xl text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 mx-auto font-medium leading-relaxed bg-white/60 dark:bg-gray-900/60 rounded-xl shadow p-6 border border-blue-100 dark:border-gray-800 backdrop-blur-md"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          I am a passionate Full Stack Developer specializing in building scalable web applications and cloud solutions. With a strong foundation in MERN stack and cloud technologies, I thrive on solving real-world problems and collaborating with dynamic teams. My commitment to clean code, continuous learning, and mentoring new talent drives me to deliver impactful solutions and elevate every project I work on.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Me
        </motion.a>
      </section>
      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-300">Technical Skills</h2>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {Object.entries(profile.techSkills).map(([section, items]) => (
            <motion.div key={section} className="bg-white/70 dark:bg-gray-800/80 rounded-xl shadow-lg p-4 flex flex-col items-center" variants={fadeInUp} whileHover={{ scale: 1.04 }}>
              <div className="font-bold capitalize mb-2 text-blue-700 dark:text-blue-300">{section}</div>
              <div className="flex flex-wrap gap-2 justify-center">
                {(items as string[]).map((item) => (
                  <span key={item} className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm shadow">
                    {techIcons[item] || null}
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-300">Experience</h2>
        <motion.div className="space-y-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {profile.experience.map((exp, i) => (
            <motion.div key={i} className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
              <div className="font-bold text-lg text-blue-900 dark:text-blue-200 mb-1">{exp.title} <span className="font-normal">@ {exp.company}</span></div>
              <div className="text-sm text-gray-500 mb-2">{exp.location} | {exp.period}</div>
              <ul className="list-disc ml-6 mt-1 text-gray-700 dark:text-gray-300">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* Awards Section */}
      <section id="awards" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-300">Awards & Achievements</h2>
        <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {profile.awards.map((a, i) => (
            <motion.li key={i} className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md p-6 text-gray-700 dark:text-gray-300" variants={fadeInUp} whileHover={{ scale: 1.03 }}>
              {a}
            </motion.li>
          ))}
        </motion.ul>
      </section>
      {/* Contact Section */}
      <section id="contact" className="max-w-xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">Let's Connect</h2>
        <motion.p className="mb-6 text-lg text-gray-700 dark:text-gray-300" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Want to collaborate, hire, or just say hello? Drop me a message!
        </motion.p>
        <motion.a
          href={`mailto:${profile.email}`}
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.98 }}
        >
          Email Me
        </motion.a>
      </section>
      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-xs bg-white/70 dark:bg-gray-900/80 mt-10">
        &copy; {new Date().getFullYear()} {profile.name} | Portfolio
      </footer>
    </div>
  );
};

export default App;
