import { motion } from 'framer-motion';

interface ContributionProject {
  title: string;
  tagline: string;
  techStack: string[];
  highlights: string[];
}

interface Employer {
  company: string;
  role: string;
  tenure: string;
  current?: boolean;
  projects: ContributionProject[];
}

const employers: Employer[] = [
  {
    company: 'Wele Intellitech',
    role: 'Software Developer',
    tenure: 'Nov 2025 Present',
    current: true,
    projects: [
      {
        title: 'Wele',
        tagline: 'AI-Powered EdTech Platform',
        techStack: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API', 'WebSockets'],
        highlights: [
          "Built the Career Compass module's frontend and backend, giving learners career-guidance functionality within the platform.",
          'Developed a real-time Group Chat feature over WebSockets for live peer-to-peer discussion between learners.',
          'Designed and implemented the AI Chat feature end-to-end, integrating the OpenAI API for conversational, context-aware interactions.',
          'Built the course-creation feature, letting users publish AI-assisted courses into a browsable, channel-style catalog for others to discover and enroll in.',
        ],
      },
    ],
  },
  {
    company: 'Hemas Enterprises',
    role: 'Jr. Software Engineer',
    tenure: 'Apr 2023 Oct 2025',
    projects: [
      {
        title: 'GoalSync',
        tagline: 'Team Goal Alignment & Performance Tracker',
        techStack: ['Next.js', 'Redux', 'Node.js', 'MongoDB', 'Material UI'],
        highlights: [
          'Built an OKR tracking dashboard giving teams visibility into performance against their goals.',
          'Developed a notification system covering OKR creation, updates, comments, and status changes.',
          'Managed global state with Redux and secured routes with JWT authentication.',
        ],
      },
      {
        title: 'Trove',
        tagline: 'Knowledge Management & Collaboration Platform',
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Zustand', 'Tailwind CSS', 'WebSockets'],
        highlights: [
          'Implemented real-time chat and WebRTC audio/video calling for peer-to-peer team discussions.',
          'Used WebSockets for instant messaging, typing indicators, and live presence tracking.',
          'Designed a scalable backend with Node.js, Express.js, and MongoDB, using Zustand for state management.',
        ],
      },
      {
        title: 'Budgie',
        tagline: 'Human Resource Management System',
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        highlights: [
          'Owned the frontend for an HRMS covering employee records, workflows, and approvals.',
          'Wrote clean, reusable, optimized code as part of a broader effort that improved page load time by ~30% and API performance by ~20% across Hemas products.',
          'Collaborated closely with product managers and UI/UX designers to refine product features and frontend architecture.',
        ],
      },
      {
        title: 'Cavinspro',
        tagline: 'Supply Chain Management & Bidding Portal',
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        highlights: [
          'Owned frontend architecture for a supply chain platform with an integrated product bidding portal for vendors and procurement.',
          'Debugged, maintained, and continuously improved the application to strengthen reliability and scalability.',
          'Followed Agile/Scrum sprint cycles for planning, estimation, and progress tracking.',
        ],
      },
    ],
  },
];

function HighlightList({
  highlights,
  dotClassName,
  textClassName,
}: {
  highlights: string[];
  dotClassName: string;
  textClassName: string;
}) {
  return (
    <ul className="space-y-2.5">
      {highlights.map((highlight) => (
        <li key={highlight} className={`flex gap-3 text-sm leading-relaxed ${textClassName}`}>
          <span className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${dotClassName}`} />
          {highlight}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project, index }: { project: ContributionProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07 }}
      className="group relative flex flex-col overflow-hidden border border-black/10 p-6 transition-colors duration-500 hover:border-black dark:border-white/10 dark:hover:border-white sm:p-7"
    >
      {/* <span className="pointer-events-none absolute -right-2 -top-4 font-display text-6xl leading-none text-black/[0.04] transition-colors duration-500 group-hover:text-black/[0.07] dark:text-white/[0.04] dark:group-hover:text-white/[0.08]">
        {String(index + 1).padStart(2, '0')}
      </span> */}

      <h4 className="text-xl font-black leading-tight text-black dark:text-white">{project.title}</h4>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-wine-900/40 dark:text-stone-500">
        {project.tagline}
      </p>

      <div className="relative mt-4 max-w-2xl">
        <HighlightList
          highlights={project.highlights}
          dotClassName="bg-black/30 dark:bg-white/30"
          textClassName="text-wine-900/65 dark:text-stone-400"
        />
      </div>

      {project.techStack.length > 0 && (
        <div className="relative mt-5 flex flex-wrap gap-1.5 border-t border-black/10 pt-5 dark:border-white/10">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-black/15 bg-black/5 px-2.5 py-1 text-[10px] font-medium text-wine-900/80 dark:border-white/20 dark:bg-white/10 dark:text-stone-200"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function EmployerGroup({ employer }: { employer: Employer }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b border-black/10 pb-4 dark:border-white/10"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
            {employer.role}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-3">
            <h3 className="font-display text-xl text-black dark:text-white sm:text-2xl">{employer.company}</h3>
            {employer.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-black/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-black/60 dark:border-white/20 dark:bg-white/10 dark:text-white/60">
                Current
              </span>
            )}
          </div>
        </div>
        <span className="text-xs uppercase tracking-[0.15em] text-wine-900/40 dark:text-stone-500">
          {employer.tenure}
        </span>
      </motion.div>

      <div className={`grid grid-cols-1 gap-5 ${employer.projects.length > 1 ? 'sm:grid-cols-2' : ''}`}>
        {employer.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function Contributions() {
  return (
    <section id="contributions" className="relative bg-neutral-50 py-24 dark:bg-black sm:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="section-eyebrow mb-4 justify-center">Team Projects</p>
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">
            <span className="gradient-text">Products I've Contributed To</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-wine-900/60 dark:text-stone-400">
            Production platforms built alongside cross-functional engineering teams, from frontend architecture
            through backend and database design
          </p>
        </motion.div>

        <div className="space-y-16">
          {employers.map((employer) => (
            <EmployerGroup key={employer.company} employer={employer} />
          ))}
        </div>
      </div>
    </section>
  );
}
