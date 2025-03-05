"use client";

import React from "react";
import "./styles/RotatingCube.css";

const RotatingCubeBase = ({ size = "normal", colors, style = {} }) => {
  let scaleSize = 1;

  if (size === "small") scaleSize = 0.55;
  if (size === "normal") scaleSize = 1;
  if (size === "big") scaleSize = 1;
  if (size === "tiny") scaleSize = 0.3;
  if (size === "huge") scaleSize = 1.6;

  return (
    <div 
      className="scene" 
      style={{ 
        transform: `scale(${scaleSize}) ${style.transform ? style.transform : ""}`
      }}
    >
      <div className="cube">
        <div className="face front" style={{ background: colors.frontBack, opacity: 0.8 }}></div>
        <div className="face back" style={{ background: colors.frontBack, opacity: 0.8 }}></div>
        <div className="face left" style={{ background: colors.leftRight, opacity: 0.8 }}></div>
        <div className="face right" style={{ background: colors.leftRight, opacity: 0.8 }}></div>
        <div className="face top" style={{ background: colors.topBottom, opacity: 0.8 }}></div>
        <div className="face bottom" style={{ background: colors.topBottom, opacity: 0.8 }}></div>
      </div>
    </div>
  );
};

export default RotatingCubeBase;
