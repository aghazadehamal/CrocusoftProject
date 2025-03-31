"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const RotatingCube = ({ position, color, opacity = 1 }) => {
  const cubeRef = useRef();

  const finalColor = opacity > 0.1 ? "#6643c2" : color;

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x -= 0.01;
      cubeRef.current.rotation.y -= 0.01;
      cubeRef.current.rotation.z -= 0.01;
    }
  });

  return (
    <mesh ref={cubeRef} position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={finalColor} opacity={opacity} transparent={opacity < 1} />
    </mesh>
  );
};

const Scene = ({ position, color, opacity = 1 }) => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RotatingCube position={position} color={color} opacity={opacity} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default Scene;
