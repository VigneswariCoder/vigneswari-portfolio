import { useState } from 'react';
import { ArrowUpRight, Github, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image?: string;
  link: string;
  githubLink: string;
  techStack: string[];
  category: 'App' | 'Website';
}

const projects: Project[] = [
  {
    title: 'Lurn',
    description:
      'A personal AI-tutoring platform that builds personalized learning content through an OpenRouter LLM integration with RESTful APIs for onboarding and progress tracking, and backend proxying and caching for fast, context-aware lesson delivery.',
    image: '/images/projects/lurn.png',
    link: 'https://lurn.onrender.com',
    githubLink: 'https://github.com/itsvicky-dev/lurn',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'OpenRouter'],
    category: 'App',
  },
  {
    title: 'Nuvue',
    description:
      'A full-featured social media platform inspired by Instagram real-time interactions over WebSocket, JWT auth, and Redux-driven state powering posts, comments, reels, and stories.',
    image: '/images/projects/nuvue.png',
    link: 'https://nuvue.onrender.com',
    githubLink: 'https://github.com/itsvicky-dev/nuvue',
    techStack: ['Next.js', 'TypeScript', 'Redux', 'Node.js', 'Express', 'MongoDB', 'WebSocket'],
    category: 'App',
  },
  // {
  //   title: 'Chatio',
  //   description:
  //     'A real-time messaging app with one-to-one and group conversations, media sharing, and live presence built on a WebSocket messaging layer with JWT auth and MongoDB persistence.',
  //   link: 'https://chatio.onrender.com',
  //   githubLink: 'https://github.com/itsvicky-dev/chatio',
  //   techStack: ['React', 'TypeScript', 'Redux', 'Node.js', 'Express', 'MongoDB', 'WebSocket'],
  //   category: 'App',
  // },
  {
    title: 'Meal Memoirs',
    description:
      'A polished marketing landing page for a food-focused brand Material-UI theming with custom scroll-triggered animations for a fast, conversion-focused experience.',
    image: '/images/projects/meal-memoirs.png',
    link: 'https://meal-memoirs.onrender.com',
    githubLink: 'https://github.com/itsvicky-dev/meal-memoirs',
    techStack: ['React', 'Framer Motion', 'TypeScript', 'Material-UI'],
    category: 'Website',
  },
  {
    title: 'Lumo Craft',
    description:
      'A landing page for a game development studio, built for near-instant load times with a component-driven architecture designed for scalability and easy content updates.',
    image: '/images/projects/lumocraft.png',
    link: 'https://lumocraft.onrender.com',
    githubLink: 'https://github.com/itsvicky-dev/lumo-craft',
    techStack: ['React', 'Material-UI', 'CSS3', 'JavaScript'],
    category: 'Website',
  },
];

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 gap-6 pb-10 pt-1 sm:grid-cols-12 sm:gap-8 sm:pb-12 sm:pl-9">
      <div className="relative h-48 overflow-hidden rounded-xl sm:col-span-5 sm:h-full sm:min-h-[240px]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-neutral-100 dark:bg-neutral-900">
            <span className="font-display select-none text-7xl leading-none text-black/10 dark:text-white/10">
              {project.title[0]}
            </span>
          </div>
        )}
      </div>

      <div className="sm:col-span-7">
        <p className="max-w-xl text-sm leading-relaxed text-wine-900/65 dark:text-stone-400 sm:text-base">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-black/15 bg-black/5 px-2.5 py-1 text-[10px] font-medium text-wine-900/80 dark:border-white/20 dark:bg-white/10 dark:text-stone-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-6 border-t border-black/10 pt-6 dark:border-white/10">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-opacity hover:opacity-70 dark:text-white"
          >
            <ArrowUpRight size={13} />
            Live Site
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-wine-900/60 transition-opacity hover:opacity-70 dark:text-stone-400"
          >
            <Github size={13} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectRow({
  project,
  index,
  isOpen,
  onToggle,
}: {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-black/10 dark:border-white/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-7 text-left sm:py-8"
      >
        <span className="flex min-w-0 items-baseline gap-4 sm:gap-5">
          <span
            className={`shrink-0 text-xs font-bold tracking-[0.2em] transition-colors duration-300 ${isOpen ? 'text-black dark:text-white' : 'text-black/25 dark:text-white/25'
              }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3
            className={`truncate text-2xl font-black tracking-tight transition-all duration-500 ease-out sm:text-4xl ${isOpen ? 'translate-x-2 text-black dark:text-white' : 'text-black/55 dark:text-white/50'
              }`}
          >
            {project.title}
          </h3>
        </span>

        <span className="flex shrink-0 items-center gap-3 sm:gap-4">
          <span className="hidden text-xs uppercase tracking-[0.15em] text-wine-900/40 dark:text-stone-500 md:inline">
            {project.techStack.slice(0, 3).join(' · ')}
          </span>
          <span className="chip-outline hidden sm:inline-flex">{project.category}</span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${isOpen
                ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                : 'border-black/20 text-black/50 dark:border-white/20 dark:text-white/50'
              }`}
          >
            <Plus size={15} />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.3 } }}
            className="overflow-hidden"
          >
            <ProjectDetail project={project} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative bg-white py-24 dark:bg-black sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl px-6 text-center md:px-8"
      >
        <p className="section-eyebrow mb-4 justify-center">Selected Work</p>
        <h2 className="font-sans text-4xl font-black text-black dark:text-white sm:text-5xl">Featured Projects</h2>
        <p className="mx-auto mt-5 max-w-xl text-wine-900/60 dark:text-stone-400">
          AI-powered apps and marketing sites I designed, built, and shipped end-to-end tap a project to see it in
          full
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mx-auto mt-16 max-w-4xl px-6 md:px-8"
      >
        <div className="border-t border-black/10 dark:border-white/10">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
