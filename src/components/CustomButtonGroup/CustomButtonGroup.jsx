import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './CustomButtonGroup.css';

export default function CustomButtonGroup({ next, previous }) {
  return (
    <div className="custom-button-group">
      <button className="btn-arrow left" onClick={previous}>
        <FaArrowLeft />
      </button>
      <button className="btn-arrow right" onClick={next}>
      <FaArrowRight />
      </button>
    </div>
  );
}