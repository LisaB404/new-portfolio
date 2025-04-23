import React, { useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(prev => !prev);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <nav>
      <div className="logo"><span className="gradient-text">Lisa B.</span></div>

      <div className={`menu${menuActive ? ' active' : ''}`}>
        <a href="/Hero" onClick={closeMenu}>Home</a>
        <a href="#section2" onClick={closeMenu}>About Me</a>
        <a href="#section3" onClick={closeMenu}>Projects</a>
        <a href="#section4" onClick={closeMenu}>Contacts</a>
      </div>

      <div
        className={`hamburger${menuActive ? ' active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

