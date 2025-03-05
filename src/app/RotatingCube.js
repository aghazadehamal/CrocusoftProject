"use client";

import React from "react";
import "./styles/RotatingCube.css";

const RotatingCube = ({ size = "normal", color = "rgba(163, 133, 247, 0.8)", style = {} }) => {
  let scaleSize = 1; 

  if (size === "small") scaleSize = 0.55;
  if (size === "normal") scaleSize = 1;
  if (size === "big") scaleSize = 1;
  if (size === "huge") scaleSize = 2;

  return (
    <div 
      className="scene" 
      style={{ 
        transform: `scale(${scaleSize}) ${style.transform ? style.transform : ""}`
      }}
    >
      <div className="cube">
        <div className="face front" style={{ background: color }}></div>
        <div className="face back" style={{ background: color }}></div>
        <div className="face left" style={{ background: color }}></div>
        <div className="face right" style={{ background: color }}></div>
        <div className="face top" style={{ background: color }}></div>
        <div className="face bottom" style={{ background: color }}></div>
      </div>
    </div>
  );
};

export default RotatingCube;
