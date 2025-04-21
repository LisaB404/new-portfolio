import React from "react";
import "./Hero.css";
import Wave from "../../components/Wave/Wave";
import Typewriter from "../../components/Typewriter/Typewriter";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="presentation">
          <h1>
            Hi! My name is <span className="name">Lisa</span>
          </h1>
          <h2>Junior Full Stack Developer</h2>
          <p className="typewriter-container">
            <Typewriter />
          </p>
          <div className="hero-btns">
            <a href="#section4" className="btn">
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/lisabortoli/"
              className="btn"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div className="hero-pic">
          <img
            class="mypic"
            src="assets/img/lisa.png"
            alt="avatar"
            title="Lisa's avatar"
          />
        </div>
      </div>
      <Wave />
    </>
  );
}
