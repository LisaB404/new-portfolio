import React from "react";
import "./Projects.css";
import Wave from "../../components/Wave/Wave";

export default function Projects() {
  return (
    <>
      <Wave style={{ transform: "rotate(0deg)" }} />
      <div className="projects-container">
      <h2 className="page-title">Projects</h2>
      </div>
      <Wave />
    </>
  );
}
