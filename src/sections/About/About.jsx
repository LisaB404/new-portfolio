import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiWordpress,
} from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import "./About.css";

export default function About() {
  const skillsData = [
    {
      title: "Code",
      items: [
        { icon: <SiHtml5 />, label: "HTML" },
        { icon: <SiCss3 />, label: "CSS" },
        { icon: <SiJavascript />, label: "JavaScript" },
        { icon: <SiTypescript />, label: "TypeScript" },
        { icon: <SiReact />, label: "React.js" },
        { icon: <SiNodedotjs />, label: "Node.js" },
        { icon: <SiExpress />, label: "Express.js" },
        { icon: <SiBootstrap />, label: "Bootstrap" },
        { icon: <SiTailwindcss />, label: "Tailwind" },
      ],
    },
    {
      title: "Tools",
      items: [
        { icon: <SiMongodb />, label: "MongoDB" },
        { icon: <SiGit />, label: "Git" },
        { icon: <SiGithub />, label: "GitHub" },
        { icon: <SiWordpress />, label: "Wordpress" },
      ],
    },
    {
      title: "Others",
      items: [
        { icon: <RiFileExcel2Line />, label: "Excel & Office" },
        { icon: <IoLanguage />, label: "English" },
        { icon: <IoLanguage />, label: "Spanish" },
      ],
    },
  ];

  return (
    <div className="about-container">
      <div className="about-presentation">
        <h2 className="page-title">About Me</h2>
        <p className="about-text">
          Hi! I’m Lisa Bortoli, a Junior Web Developer based in Italy with a
          passion for coding, books, and animals (not necessarily in that
          order).
          <p className="about-text">
            I earned a Master in Full Stack Development from Start2Impact, where
            I dove deep into HTML, CSS, JavaScript, React, and Node.js—and yes,
            I even enjoyed it. I love transforming ideas into clean,
            interactive, and user-friendly applications.
          </p>
          <p className="about-text">
            Before tech stole my heart, I studied languages and tourism
            economics, then worked in back-office roles where I mastered the
            noble arts of staying organized, solving problems, and emailing like
            a pro. These skills still come in handy—especially when wrangling
            stubborn bugs or tight deadlines.
          </p>
          <p className="about-text">
            I’m detail-oriented, prioritize effectively, and always focus on the
            end-user. I bring curiosity, commitment, and a collaborative mindset
            to every project. I’m always looking for exciting challenges and
            meaningful collaborations. Got something in mind? Let’s build it
            together!
          </p>
        </p>
      </div>
      <h3 className="page-title">Skills</h3>
      <div className="skills-container">
        {skillsData.map((group) => (
          <div key={group.title} className="skills-box">
            <h4 className="skills-title">{group.title}:</h4>
            <ul className="skills-list">
              {group.items.map((skill) => (
                <li key={skill.label}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
