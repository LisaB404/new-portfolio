import { useEffect, useState } from 'react';
import './index.css';
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
        &copy; 2025 Lisa Bortoli. All rights reserved. + social icons
      </footer>
    </>
  );
}

export default App;
