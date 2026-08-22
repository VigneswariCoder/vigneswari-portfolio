import React from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Target, Award, TrendingUp, Layers } from 'lucide-react';

interface TimelineEntry {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  duration: string;
  achievements: string[];
  skills: string[];
  current?: boolean;
}

const timelineData: TimelineEntry[] = [
  {
    icon: <Trophy size={20} className="text-gold-600 dark:text-gold-400" />,
    title: 'Software Developer',
    subtitle: 'Wele Intellitech AI-Powered Learning Platform',
    duration: 'Nov 2025 – Present',
    current: true,
    achievements: [
      'Build AI-powered features including intelligent content assistance and personalized recommendations for a next-generation learning management system (LMS) used by learners and instructors.',
      'Design and develop responsive React/Next.js dashboards for learner and admin portals, turning complex LMS workflows (course delivery, quizzes, progress tracking) into clean, intuitive interfaces.',
      'Architect and maintain RESTful APIs and backend services in Node.js/Express, integrating AI models and third-party services to power real-time platform functionality.',
      'Deploy and manage application infrastructure on cloud platforms, collaborating cross-functionally with product and design teams in an agile environment to ship features end-to-end.',
    ],
    skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'REST APIs', 'AI Integration', 'MongoDB', 'Cloud Deployment'],
  },
  {
    icon: <Code size={20} className="text-wine-800 dark:text-parchment" />,
    title: 'Jr Software Engineer',
    subtitle: 'HEPL Hemas Enterprise Private Limited',
    duration: '2.5 Years',
    achievements: [
      'Developed and maintained enterprise-grade web applications on the MERN stack and Java Spring Boot, supporting systems used across cross-functional business units.',
      'Partnered with product managers and designers to translate business requirements into scalable full-stack features, improving reliability and overall user experience.',
      'Built responsive, accessible UI components and integrated backend APIs, strengthening end-to-end ownership from database design through deployment.',
      'Contributed to code reviews and Agile ceremonies, helping raise team-wide standards for code quality and delivery velocity.',
    ],
    skills: ['MERN Stack', 'UI/UX Design', 'Agile', 'Team Collaboration'],
  },
  {
    icon: <Award size={20} className="text-gold-600 dark:text-gold-400" />,
    title: 'Professional Certifications',
    subtitle: 'Meta • IBM • CK-Edge',
    duration: 'Completed',
    achievements: [
      'IBM Full-Stack JavaScript Developer Coursera · https://coursera.org/share/59e93b393901649a62f2e0a886c662a2',
      'Meta Front-End Developer Coursera · https://coursera.org/share/ee02158f80fd5c1b0b4dcf932660eb3e',
      'CK-Edge Full-Stack Development Industry certification covering modern full-stack practices.',
    ],
    skills: ['Meta Front-End', 'IBM Full-Stack JavaScript', 'CK-Edge Full-Stack', 'Continuous Learning'],
  },
  // {
  //   icon: <Target size={20} className="text-wine-800 dark:text-parchment" />,
  //   title: 'Independent Projects',
  //   subtitle: 'Personal Engineering Work',
  //   duration: '10+ Projects',
  //   achievements: [
  //     'Designed and shipped 10+ independent full-stack applications from social platforms to e-commerce systems to sharpen production-grade engineering skills outside of work.',
  //     'Applied performance optimization, clean architecture, and modern UI/UX principles to deliver polished, real-world-ready products end-to-end.',
  //   ],
  //   skills: ['MERN Stack', 'API Design', 'UI/UX Design', 'Performance Optimization', 'Client Relations'],
  // },
];

const stats = [
  { label: 'Years of Experience', value: '3+', icon: <TrendingUp size={16} /> },
  { label: 'Projects Delivered', value: '10+', icon: <Target size={16} /> },
  { label: 'Stacks & Tools', value: 'MERN', icon: <Layers size={16} /> },
  { label: 'Professional Certifications', value: '3', icon: <Award size={16} /> },
];

function StatsPanel() {
  return (
    <div className="mb-20 grid grid-cols-2 border-y border-black/10 dark:border-white/10 sm:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={`group relative border-black/10 px-4 py-8 text-center transition-colors duration-300 ${
            index % 2 === 1 ? '' : 'border-r'
          } ${index >= 2 ? 'border-t sm:border-t-0' : ''} sm:border-r sm:last:border-r-0`}
        >
          {/* <div className="mb-2 flex justify-center text-black/40 transition-colors duration-300 group-hover:text-white dark:text-white/40 dark:group-hover:text-black">
            {item.icon}
          </div> */}
          <div className="text-4xl font-black leading-none text-black dark:text-white dark:group-hover:text-black sm:text-5xl">
            {item.value}
          </div>
          <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-wine-900/50/70 dark:text-stone-500 dark:group-hover:text-black/60">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TimelineItem({ entry, index, isLast }: { entry: TimelineEntry; index: number; isLast: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="relative flex gap-5 pb-14 last:pb-0 sm:gap-6"
    >
      {!isLast && (
        <div className="absolute left-6 top-14 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-gold-500/40 to-transparent sm:left-7" />
      )}

      <motion.div
        whileHover={{ scale: 1.08 }}
        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/20 bg-white sm:h-14 sm:w-14 dark:border-white/20 dark:bg-neutral-900"
      >
        {entry.icon}
      </motion.div>

      <div className="flex-1 pt-1">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-wine-900 dark:text-parchment sm:text-xl">{entry.title}</h3>
          <span className="chip-outline">{entry.duration}</span>
          {entry.current && <span className="chip-solid">Current Role</span>}
        </div>

        <p className="mb-3 font-serif text-gold-700 dark:text-gold-400">{entry.subtitle}</p>

        <ul className="mb-4 space-y-1.5 pl-5">
          {entry.achievements.map((point, idx) => {
            const urlMatch = point.match(/https?:\/\/\S+/);
            const label = urlMatch ? point.replace(/\s*·\s*https?:\/\/\S+/, '') : point;
            return (
              <li key={idx} className="list-disc text-sm leading-relaxed text-wine-900/60 marker:text-gold-500 dark:text-stone-400 sm:text-base">
                {label}
                {urlMatch && (
                  <a
                    href={urlMatch[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 inline-flex items-center gap-1 text-gold-600 underline underline-offset-2 hover:opacity-75 dark:text-gold-400"
                  >
                    View Certificate ↗
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex flex-wrap gap-2">
          {entry.skills.map((skill) => (
            <motion.span key={skill} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="chip-outline">
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const About: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 dark:bg-black sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-blob left-1/4 top-1/4 h-[380px] w-[380px] bg-wine-400/10 dark:bg-wine-600/10" />
        <div className="glow-blob right-1/4 bottom-1/4 h-[320px] w-[320px] bg-gold-300/10 dark:bg-gold-500/5" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="section-eyebrow mb-4 justify-center">Professional Profile</p>
          <h2 className="font-serif text-4xl text-wine-900 dark:text-parchment sm:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-wine-900/60 dark:text-stone-400 sm:text-lg">
            Software Developer with 3+ years of experience building full-stack and AI-powered web applications from
            enterprise systems to a modern learning management platform using React, Node.js, and cloud-integrated
            architectures.
          </p>
        </motion.div>

        <StatsPanel />

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center font-serif text-3xl font-bold text-wine-900 dark:text-parchment sm:text-4xl"
        >
          How I Got Here
        </motion.h3>

        <div className="mx-auto max-w-3xl">
          {timelineData.map((entry, index) => (
            <TimelineItem key={entry.title} entry={entry} index={index} isLast={index === timelineData.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
