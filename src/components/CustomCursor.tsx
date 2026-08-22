import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

// "hand-pointer" glyph, Font Awesome Free 5.2.0 (CC BY 4.0) — https://fontawesome.com/icons/hand-pointer
function HandCursorIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-30 -30 508 572"
      className={`overflow-visible ${className ?? ''}`}
    >
      <path
        d="M448 240v96c0 3.084-.356 6.159-1.063 9.162l-32 136C410.686 499.23 394.562 512 376 512H168a40.004 40.004 0 0 1-32.35-16.473l-127.997-176c-12.993-17.866-9.043-42.883 8.822-55.876 17.867-12.994 42.884-9.043 55.877 8.823L104 315.992V40c0-22.091 17.908-40 40-40s40 17.909 40 40v200h8v-40c0-22.091 17.908-40 40-40s40 17.909 40 40v40h8v-24c0-22.091 17.908-40 40-40s40 17.909 40 40v24h8c0-22.091 17.908-40 40-40s40 17.909 40 40zm-256 80h-8v96h8v-96zm88 0h-8v96h8v-96zm88 0h-8v96h8v-96z"
        stroke="white"
        strokeWidth="48"
        strokeLinejoin="round"
        paintOrder="stroke"
      />
    </svg>
  );
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isCoarsePointer || prefersReduced) return;

    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, label, summary, .cursor-pointer, [onclick]';

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest(interactiveSelector));
    };

    window.addEventListener('mousemove', updateCursor);
    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed left-0 top-0 z-[9999]"
        style={{ pointerEvents: 'none' }}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'tween', duration: 0 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!isPointer && (
            <motion.div
              key="arrow"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.12 }}
            >
              <MousePointer2
                size={24}
                strokeWidth={1}
                className="fill-black text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] dark:fill-white dark:text-black"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
