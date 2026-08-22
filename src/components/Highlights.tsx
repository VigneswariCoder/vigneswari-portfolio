import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Layers, Rocket, Users, LucideIcon } from 'lucide-react';

interface Highlight {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: Bot,
    tag: 'AI Engineering',
    title: 'AI-Powered Engineering',
    description:
      'Building AI-driven features content assistance, recommendations, and conversational tools into a production learning management platform, bridging modern LLM capabilities with real-world product needs.',
  },
  {
    icon: Layers,
    tag: 'Full-Stack',
    title: 'Full-Stack Ownership',
    description:
      '3+ years shipping complete features end-to-end from React/Next.js interfaces to Node.js APIs across enterprise systems, an LMS platform, and 10+ independent projects.',
  },
  {
    icon: Users,
    tag: 'Collaboration',
    title: 'Cross-Functional Collaboration',
    description:
      'Partner closely with product, design, and engineering teams in Agile environments, translating business requirements into scalable, maintainable software delivered on schedule.',
  },
  {
    icon: Rocket,
    tag: 'Performance',
    title: 'Performance & Reliability',
    description:
      'Focused on clean architecture, API design, and cloud deployment practices that keep applications fast, reliable, and easy to extend as products grow.',
  },
];

function AccordionPanel({
  highlight,
  index,
  isActive,
  onActivate,
}: {
  highlight: Highlight;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) {
  const Icon = highlight.icon;

  return (
    <motion.div
      onMouseEnter={onActivate}
      onClick={onActivate}
      animate={{ flexGrow: isActive ? 3.4 : 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex min-w-0 cursor-pointer flex-col justify-between overflow-hidden border-r border-black/10 p-7 transition-colors duration-500 last:border-r-0 dark:border-white/10 ${
        isActive ? 'bg-black dark:bg-white' : 'bg-white hover:bg-neutral-50 dark:bg-black dark:hover:bg-neutral-950'
      }`}
      style={{ flexBasis: 0 }}
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-bold tracking-[0.2em] transition-colors duration-500 ${
            isActive ? 'text-white/40 dark:text-black/40' : 'text-black/25 dark:text-white/25'
          }`}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <Icon
          size={22}
          className={`shrink-0 transition-colors duration-500 ${isActive ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}
        />
      </div>

      <div
        className="relative mt-4 flex-1 overflow-hidden"
        style={
          isActive
            ? undefined
            : {
                maskImage: 'linear-gradient(to bottom, transparent 0, black 12%, black 88%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, transparent 0, black 12%, black 88%, transparent 100%)',
              }
        }
      >
        <AnimatePresence initial={false}>
          {isActive ? (
            <motion.div
              key="active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }}
              className="absolute inset-x-0 bottom-0"
            >
              <p className="mb-3.5 text-sm leading-relaxed text-white/70 dark:text-black/70">
                {highlight.description}
              </p>
              <h3 className="text-2xl font-bold leading-tight text-white dark:text-black">{highlight.title}</h3>
            </motion.div>
          ) : (
            <motion.h3
              key="inactive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-2xl font-black uppercase leading-none tracking-[0.15em] text-black/25 transition-colors duration-500 group-hover:text-black/40 dark:text-white/25 dark:group-hover:text-white/40 sm:text-3xl"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              {highlight.tag}
            </motion.h3>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function HighlightCard({ highlight, index }: { highlight: Highlight; index: number }) {
  const Icon = highlight.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border border-black/10 p-6 dark:border-white/10"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.2em] text-black/30 dark:text-white/30">
          {String(index + 1).padStart(2, '0')}
        </span>
        <Icon size={20} className="text-black dark:text-white" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-black dark:text-white">{highlight.title}</h3>
      <p className="text-sm leading-relaxed text-wine-900/60 dark:text-stone-400">{highlight.description}</p>
    </motion.div>
  );
}

export default function Highlights() {
  const [active, setActive] = useState(0);

  return (
    <section id="highlights" className="relative overflow-hidden bg-white py-24 dark:bg-black sm:py-32">
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="section-eyebrow mb-4 justify-center">Why Work With Me</p>
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">
            <span className="gradient-text">Career Highlights</span>
          </h2>
          <p className="mt-5 text-wine-900/60 dark:text-stone-400">
            What sets my engineering approach apart, from AI integration to production-grade delivery
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden h-[440px] border border-black/10 lg:flex dark:border-white/10"
        >
          {highlights.map((highlight, index) => (
            <AccordionPanel
              key={highlight.title}
              highlight={highlight}
              index={index}
              isActive={active === index}
              onActivate={() => setActive(index)}
            />
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {highlights.map((highlight, index) => (
            <HighlightCard key={highlight.title} highlight={highlight} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
