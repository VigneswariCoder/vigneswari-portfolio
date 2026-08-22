import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, ArrowRight, ArrowDown } from 'lucide-react';
import heroImg from '../assets/images/hero-img.png';

const stats = [
  { value: '3+', label: 'Years Exp.' },
  { value: '20+', label: 'Projects' },
  { value: '10+', label: 'Clients' },
];

const socials = [
  { Icon: Github, href: 'https://github.com/itsvicky-dev', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com/in/vigneswaris', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://instagram.com/im_vi.ki', label: 'Instagram' },
  { Icon: Mail, href: 'mailto:vigneswari.coder@gmail.com', label: 'Email' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pb-20 pt-32 dark:bg-black"
    >
      {/* Ambient background blobs */}
      {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-stone-200/60 to-transparent blur-3xl dark:from-white/5" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-stone-100/80 to-transparent blur-3xl dark:from-white/3" />
      </div> */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 md:px-8">
        <motion.h1
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans text-4xl font-black leading-[1.05] tracking-tight text-black dark:text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="flex flex-wrap items-center gap-4 sm:gap-6">
            Vigneswari
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="shrink-0"
            >
              <div>
                <img
                  src={heroImg}
                  alt="Vigneswari"
                  className="aspect-square w-24 object-cover grayscale sm:w-32 md:w-40"
                />
              </div>
              <p className="mt-2 text-center text-[9px] font-semibold uppercase tracking-[0.15em] text-black/40 dark:text-white/40">
                That&apos;s me
              </p>
            </motion.div>
          </span>
          <span className="block text-black/25 dark:text-white/25">Full Stack Developer</span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 max-w-lg text-base leading-relaxed text-wine-900/60 dark:text-stone-400 sm:text-lg"
        >
          I build full-stack and AI-powered web applications <strong className="font-semibold text-black dark:text-white">3+ years</strong> shipping
          production software with React, Node.js, and cloud-native architectures.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary group">
            Resume
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost group"
          >
            View Work
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4 pt-8 dark:border-white/10"
        >
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white dark:border-white/15 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Stats row */}
        {/* <motion.div
          {...fadeUp}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex items-center gap-8 border-t border-black/10 pt-8 dark:border-white/10"
        >
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-black tracking-tight text-black dark:text-white">{value}</p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.2em] text-black/40 dark:text-white/40">{label}</p>
            </div>
          ))}
        </motion.div> */}
      </div>

      {/* <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-wine-900/40 transition-colors hover:text-black dark:text-white/40 dark:hover:text-white sm:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.button> */}
    </section>
  );
};

export default Hero;
