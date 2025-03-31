"use client";

import React from "react";
import RotatingCubeBase from "./RotatingCubeBase";

const GreenCube = (props) => {
  const colors = {
    frontBack: "#32ad8a",
    leftRight: "#5fc1a4bf",
    topBottom: "#32ad8a",
  };

  return <RotatingCubeBase {...props} colors={colors} />;
};

export default GreenCube;
