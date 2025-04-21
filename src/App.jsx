import { useEffect, useState } from 'react';
import './index.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Menu from './components/Menu/Menu';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contacts from './sections/Contacts/Contacts';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className='progress-container'>
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
    </div>

      <Menu />

      <main className="sections">
      <>
        <div id="section1"> <Hero /> </div>
        <div id="section2"> <About /> </div>
        <div id="section3"> <Projects /> </div>
        <div id="section4"> <Contacts /> </div>
        </>
      </main>

      <footer>
      <p className='footer-text'>
        &copy; 2025 Lisa Bortoli. All rights reserved.
        </p>
        <div className='social-icons'>
        <a className='social' href='https://github.com/LisaB404' target="_blank"> <FaGithub /></a>
        <a className='social' href='https://www.linkedin.com/in/lisabortoli' target="_blank"> <FaLinkedin /> </a>
        </div>
      </footer>
    </>
  );
}

export default App;
