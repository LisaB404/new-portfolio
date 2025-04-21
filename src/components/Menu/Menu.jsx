import React, { useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(prev => !prev);
  };

  return (
    <nav>
      <div className="logo"><span className="gradient-text">Lisa B.</span></div>

      <div className={`menu${menuActive ? ' active' : ''}`}>
        <a href="/Hero">Home</a>
        <a href="#section2">About Me</a>
        <a href="#section3">Projects</a>
        <a href="#section4">Contacts</a>
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

