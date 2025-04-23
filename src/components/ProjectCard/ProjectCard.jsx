import React from 'react'
import './ProjectCard.css'

function ProjectCard(props) {
  return (
    <div className="card h-100">
              <img
                src={props.url}
                className="card-img-top"
                alt={props.name}
                title={props.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a
                  href={props.link}
                  target="_blank"
                  className="project-btn"
                >
                  See project
                </a>
              </div>
            </div>
  )
}

export default ProjectCard