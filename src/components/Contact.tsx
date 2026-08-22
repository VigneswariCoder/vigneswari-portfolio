import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Github,
  Linkedin,
  Send,
  MapPin,
  Loader2,
  ArrowUpRight,
  Copy,
  Check,
  ChevronDown,
  PenLine,
} from 'lucide-react';
import { toast } from 'react-toastify';
import { useTheme } from '../context/ThemeContext';

const EMAIL = 'vigneswari.sp@gmail.com';

const fieldBase =
  'peer w-full border-0 border-b-2 bg-transparent px-0 py-3 text-base text-wine-900 outline-none transition-colors duration-300 placeholder:text-transparent focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 dark:text-parchment';

const socialLinks = [
  { icon: Github, href: 'https://github.com/itsvicky-dev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vigneswaris', label: 'LinkedIn' },
];

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { theme } = useTheme();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const openingRef = useRef(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success('Email copied to clipboard!', {
        position: 'top-right',
        autoClose: 2000,
        theme: theme === 'dark' ? 'dark' : 'light',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validateForm()) return;

    setIsSubmitting(true);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);

    const toastTheme = theme === 'dark' ? 'dark' : 'light';

    try {
      const response = await fetch('https://formspree.io/f/mzzpzely', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: form,
      });

      if (response.status !== 200) throw new Error('Network response was not ok');

      toast.success('Message sent successfully!', { position: 'top-right', autoClose: 3000, theme: toastTheme });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
        theme: toastTheme,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 dark:bg-black sm:py-40">

      <div className="relative mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="section-eyebrow mb-4 justify-center">Get In Touch</p>
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">
            <span className="gradient-text">Got A Project In Mind?</span>
          </h2>
        </motion.div>

        {/* Giant CTA — click to email, or copy the address */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-4"
        >
          <motion.a
            href={`mailto:${EMAIL}`}
            whileHover={{ scale: 1.012 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group inline-flex items-center gap-4 sm:gap-5"
          >
            <span
              className="relative inline-block whitespace-nowrap font-display leading-none tracking-tight text-black dark:text-white"
              style={{ fontSize: 'clamp(1.35rem, 5.2vw, 3.75rem)' }}
            >
              {EMAIL}
              <span className="absolute -bottom-1.5 left-0 h-[3px] w-0 bg-black transition-all duration-500 ease-out group-hover:w-full dark:bg-white sm:-bottom-2" />
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black text-black transition-all duration-300 ease-out group-hover:rotate-45 group-hover:bg-black group-hover:text-white dark:border-white dark:text-white dark:group-hover:bg-white dark:group-hover:text-black sm:h-14 sm:w-14">
              <ArrowUpRight size={20} className="sm:hidden" />
              <ArrowUpRight size={26} className="hidden sm:block" />
            </span>
          </motion.a>

          {/* <motion.button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-wine-900/40 transition-colors duration-300 hover:text-black focus:outline-none focus-visible:outline-none dark:text-stone-500 dark:hover:text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-1.5"
                >
                  <Check size={14} />
                  Copied
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-1.5"
                >
                  <Copy size={14} />
                  Copy
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button> */}
        </motion.div>

        {/* Status badge */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 border border-wine-900/15 px-4 py-2 dark:border-white/15">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-wine-900/60 dark:text-stone-400">
              Currently available — happy to chat
            </span>
          </div>
        </motion.div> */}

        {/* Minimal contact meta — location + socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 flex flex-col items-center justify-center gap-4 text-sm text-wine-900/50 dark:text-stone-500 sm:flex-row sm:gap-4"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} />
            Tamil Nadu, India
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-wine-900/20 dark:bg-white/20 sm:inline-block" />

          <div className="flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-wine-900/50 transition-colors duration-300 hover:text-black dark:text-stone-500 dark:hover:text-white"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Reveal-on-demand form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <motion.button
            type="button"
            onClick={() =>
              setFormOpen((prev) => {
                const next = !prev;
                openingRef.current = next;
                return next;
              })
            }
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2.5 border border-wine-900/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-wine-900/60 transition-colors duration-300 hover:border-black hover:text-black focus:outline-none focus-visible:outline-none dark:border-white/15 dark:text-stone-400 dark:hover:border-white dark:hover:text-white"
          >
            <PenLine size={14} />
            {formOpen ? 'Hide the form' : 'Prefer writing a message instead?'}
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${formOpen ? 'rotate-180' : ''}`}
            />
          </motion.button>
        </motion.div>

        <AnimatePresence initial={false}>
          {formOpen && (
            <motion.div
              variants={{
                hidden: { opacity: 0, height: 0 },
                visible: { opacity: 1, height: 'auto' },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onUpdate={() => {
                if (openingRef.current) {
                  formRef.current?.scrollIntoView({ behavior: 'auto', block: 'end' });
                }
              }}
              className="overflow-hidden"
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="mx-auto mt-10 max-w-xl scroll-mt-28 space-y-7 pb-10"
              >
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${fieldBase} ${errors.name ? 'border-red-400' : 'border-wine-900/10 dark:border-white/15'}`}
                  />
                  <label
                    htmlFor="name"
                    className="pointer-events-none absolute -top-4 left-0 text-xs font-medium text-wine-900/40 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-wine-900/40 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-600 dark:text-stone-500 dark:peer-placeholder-shown:text-stone-500"
                  >
                    Your Name
                  </label>
                  {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${fieldBase} ${errors.email ? 'border-red-400' : 'border-wine-900/10 dark:border-white/15'}`}
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute -top-4 left-0 text-xs font-medium text-wine-900/40 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-wine-900/40 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-600 dark:text-stone-500 dark:peer-placeholder-shown:text-stone-500"
                  >
                    Your Email
                  </label>
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${fieldBase} resize-none ${errors.message ? 'border-red-400' : 'border-wine-900/10 dark:border-white/15'}`}
                  />
                  <label
                    htmlFor="message"
                    className="pointer-events-none absolute -top-4 left-0 text-xs font-medium text-wine-900/40 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-wine-900/40 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-600 dark:text-stone-500 dark:peer-placeholder-shown:text-stone-500"
                  >
                    Your Message
                  </label>
                  {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
