import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const navItems = ['Home', 'About', 'Skills', 'Highlights', 'Process', 'Projects', 'Insights', 'Contact'];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.toLowerCase());

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      const scrollPosition = window.scrollY + 120;
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed inset-x-0 top-4 z-[1202] px-4"
      >
        <div
          className={`relative mx-auto hidden max-w-[880px] items-center justify-center gap-3 rounded-full px-3 py-2.5 transition-all duration-500 lg:flex ${
            scrolled
              ? 'shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_45px_-18px_rgba(0,0,0,0.35)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_45px_-18px_rgba(0,0,0,0.7)]'
              : 'shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_30px_-18px_rgba(0,0,0,0.25)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_-18px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* matte glass layer */}
          <div
            className={`pointer-events-none absolute inset-0 -z-10 rounded-full border backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 ${
              scrolled
                ? 'border-black/10 bg-white/60 dark:border-white/10 dark:bg-white/[0.06]'
                : 'border-black/[0.08] bg-white/40 dark:border-white/[0.08] dark:bg-white/[0.04]'
            }`}
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 45%)',
            }}
          />

          {/* <a
            href="#home"
            className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-sm font-black text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] dark:bg-white dark:text-black lg:absolute lg:left-3"
          >
            V
          </a> */}

          <ul className="flex items-center gap-0.5">
            {navItems.map((item, index) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 + 0.15, duration: 0.5 }}
                >
                  <a
                    href={`#${id}`}
                    className={`relative block rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                      isActive
                        ? 'text-white dark:text-black'
                        : 'text-wine-900/50 hover:text-black dark:text-white/50 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_4px_14px_-4px_rgba(0,0,0,0.5)] dark:bg-white"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    {item}
                  </a>
                </motion.li>
              );
            })}
          </ul>

          {/* <div className="relative z-10 flex items-center gap-2 lg:absolute lg:right-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black transition-all duration-300 hover:border-black/30 hover:bg-white/50 dark:border-white/10 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/10"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex"
                >
                  {theme === 'dark' ? <Moon size={15} /> : <Sun size={15} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div> */}
        </div>

        {/* Mobile: hamburger only, no full-width bar */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`ml-auto flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 lg:hidden ${
            scrolled
              ? 'border-black/10 bg-white/60 text-black shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-white/[0.08] dark:text-white'
              : 'border-black/[0.08] bg-white/40 text-black shadow-[0_8px_24px_-15px_rgba(0,0,0,0.25)] dark:border-white/[0.08] dark:bg-white/[0.06] dark:text-white'
          }`}
        >
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.span>
        </button>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[1200] flex flex-col bg-white/90 backdrop-blur-2xl backdrop-saturate-150 dark:bg-black/90 lg:hidden"
            initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="flex flex-1 flex-col justify-center px-8">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const id = item.toLowerCase();
                  const isActive = activeSection === id;
                  return (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.15, duration: 0.4 }}
                    >
                      <a
                        href={`#${id}`}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-4xl font-black tracking-tight transition-colors duration-300 ${
                          isActive
                            ? 'text-black dark:text-white'
                            : 'text-black/25 hover:text-black dark:text-white/25 dark:hover:text-white'
                        }`}
                      >
                        {item}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
