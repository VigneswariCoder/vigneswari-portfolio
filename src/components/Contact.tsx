import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Send, MapPin, Loader2, ArrowUpRight } from 'lucide-react';
import { toast } from 'react-toastify';
import { useTheme } from '../context/ThemeContext';

const fieldBase =
  'peer w-full border-0 border-b-2 bg-transparent px-0 py-3 text-base text-wine-900 outline-none transition-colors duration-300 placeholder:text-transparent focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 dark:text-parchment';

const socialLinks = [
  { icon: Github, href: 'https://github.com/itsvicky-dev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vigneswaris', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:vigneswari.coder@gmail.com', label: 'Email' },
];

const contactMethods = [
  { icon: Mail, label: 'Email', value: 'vigneswari.coder@gmail.com', href: 'mailto:vigneswari.coder@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Tamil Nadu, India', href: undefined },
];

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { theme } = useTheme();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
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
    <section id="contact" className="relative overflow-hidden bg-white py-24 dark:bg-black sm:py-32">
      <div className="glow-blob left-1/2 top-0 h-[380px] w-[600px] -translate-x-1/2 bg-wine-300/10 dark:bg-wine-700/10" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="section-eyebrow mb-4 justify-center">Get In Touch</p>
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">
            <span className="gradient-text">Let&apos;s Create Something Amazing</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-wine-900/60 dark:text-stone-400">
            Ready to bring your ideas to life? Let&apos;s discuss your next project and create digital experiences
            that make an impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pr-14"
          >
            <div className="space-y-1">
              {contactMethods.map(({ icon: Icon, label, value, href }) => {
                const Tag = href ? motion.a : motion.div;
                return (
                  <Tag
                    key={label}
                    {...(href ? { href } : {})}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="group flex items-center gap-4 border-b border-wine-900/10 py-5 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 dark:border-white/10"
                  >
                    <Icon size={18} className="shrink-0 text-wine-900/40 transition-colors duration-300 group-hover:text-gold-600 dark:text-stone-500 dark:group-hover:text-gold-400" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-wine-900/40 dark:text-stone-500">{label}</p>
                      <p className="relative w-fit font-semibold text-wine-900 dark:text-parchment">
                        {value}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                      </p>
                    </div>
                    {href && (
                      <ArrowUpRight
                        size={18}
                        className="ml-auto -translate-x-1 text-wine-900/30 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-gold-600 group-hover:opacity-100 dark:text-stone-600 dark:group-hover:text-gold-400"
                      />
                    )}
                  </Tag>
                );
              })}
            </div>

            <h4 className="mb-4 mt-10 text-xs font-semibold uppercase tracking-[0.15em] text-wine-900/40 dark:text-stone-500">
              Connect With Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-wine-900/25 text-wine-800 transition-colors duration-300 hover:border-gold-500 hover:bg-gold-500 hover:text-noir focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 dark:border-white/15 dark:text-stone-300 dark:hover:border-gold-400 dark:hover:bg-gold-400 dark:hover:text-noir"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="border-t border-wine-900/10 pt-10 dark:border-white/10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-7">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
