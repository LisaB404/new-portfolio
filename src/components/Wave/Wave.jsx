import React from 'react'
import './Wave.css'

function Wave(props) {
  return (
    <svg
    {...props}
        className="section-wave"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,176C672,171,768,117,864,112C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
  )
}

export default Wave