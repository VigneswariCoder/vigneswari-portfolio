import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Contributions from '../components/Contributions';
import Highlights from '../components/Highlights';
import Process from '../components/Process';
import Insights from '../components/Insights';

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
    }
  }, [hash]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Highlights />
        <Process />
        <Projects />
        <Contributions />
        <Insights />
        <Contact />
      </main>
    </>
  );
}

export default Home;
