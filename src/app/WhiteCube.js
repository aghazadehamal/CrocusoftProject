"use client";

import React from "react";
import RotatingCubeBase from "./RotatingCubeBase";

const WhiteCube = (props) => {
  const colors = {
    frontBack: "#ebebf2",
    leftRight: "#dcdde6",
    topBottom: "#fff",
  };

  return <RotatingCubeBase {...props} colors={colors} />;
};

export default WhiteCube;
