"use client";

import React from "react";
import RotatingCubeBase from "./RotatingCubeBase";

const PurpleCube = (props) => {
  const colors = {
    frontBack: "#bfafe9",
    leftRight: "#ad9bdd",
    topBottom: "#9784cc",
  };

  return <RotatingCubeBase {...props} colors={colors} />;
};

export default PurpleCube;
