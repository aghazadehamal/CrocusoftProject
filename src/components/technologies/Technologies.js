'use client';

import { useState } from 'react';
import { FaJava, FaReact, FaNodeJs, FaJs, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { SiDotnet, SiKotlin, SiSass, SiRedis, SiXcode, SiFirebase, SiKubernetes, SiAndroidstudio, SiGo, SiSwift, SiMongodb, SiPostgresql, SiTypescript, SiMysql, SiSpringboot, SiJquery, SiOracle, SiHtml5, SiDocker, SiGit } from 'react-icons/si';
import { FaAndroid } from 'react-icons/fa';


const technologies = [
  { id: 1, name: 'MySQL', icon: <SiMysql size={50} color='#6B46C1' /> },
  { id: 2, name: 'Android JetPack', icon: <FaAndroid size={50} color='#6B46C1' /> },
  { id: 3, name: 'Spring Boot', icon: <SiSpringboot size={50} color='#6B46C1' /> },
  { id: 4, name: 'ReactJS', icon: <FaReact size={50} color='#6B46C1' /> },
  { id: 5, name: 'ASP.NET', icon: <SiDotnet size={50} color='#6B46C1' /> },
  { id: 6, name: 'jQuery', icon: <SiJquery size={50} color='#6B46C1' /> },
  { id: 7, name: 'Oracle', icon: <SiOracle size={50} color='#6B46C1' /> },
  { id: 8, name: 'Firebase', icon: <SiFirebase size={50} color='#6B46C1' /> },
  { id: 9, name: 'NodeJS', icon: <FaNodeJs size={50} color='#6B46C1' /> },
  { id: 10, name: 'Kotlin', icon: <SiKotlin size={50} color='#6B46C1' /> },
  { id: 11, name: 'JavaScript', icon: <FaJs size={50} color='#6B46C1' /> },

  { id: 13, name: 'Redux', icon: <SiKubernetes size={50} color='#6B46C1' /> },
  { id: 14, name: 'Bootstrap', icon: <FaBootstrap size={50} color='#6B46C1' /> },
  { id: 15, name: 'HTML5', icon: <SiHtml5 size={50} color='#6B46C1' /> },
  { id: 16, name: 'SASS', icon: <SiSass size={50} color='#6B46C1' /> },
  { id: 17, name: 'Kubernetes', icon: <SiKubernetes size={50} color='#6B46C1' /> },
  { id: 18, name: 'MongoDB', icon: <SiMongodb size={50} color='#6B46C1' /> },
  { id: 19, name: 'Redis', icon: <SiRedis size={50} color='#6B46C1' /> },
  { id: 20, name: 'iOS-SDK', icon: <SiXcode size={50} color='#6B46C1' /> },
  { id: 21, name: 'Swift UI Kit', icon: <SiSwift size={50} color='#6B46C1' /> },
  { id: 22, name: 'Xcode', icon: <SiXcode size={50} color='#6B46C1' /> },
  { id: 23, name: 'Android SDK', icon: <SiAndroidstudio size={50} color='#6B46C1' /> },
  { id: 24, name: 'SQL', icon: <FaDatabase size={50} color='#6B46C1' /> },
  { id: 25, name: 'Git', icon: <SiGit size={50} color='#6B46C1' /> },
  { id: 26, name: 'Java', icon: <FaJava size={50} color='#6B46C1' /> },
  { id: 27, name: 'CSS', icon: <SiSass size={50} color='#6B46C1' /> },
  { id: 28, name: 'Docker', icon: <SiDocker size={50} color='#6B46C1' /> },

];

export default function Technologies() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 1 < technologies.length - 9) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="text-center py-10 pr-32 pl-32">
      <div className='pl-12'>
      <h2 className="text-3xl mb-6 text-left">Layihənizə uyğun texnologiyalardan istifadə edirik</h2>
      </div>
      
      <div className="grid grid-cols-5 gap-6 justify-center items-center">
        {technologies.slice(startIndex, startIndex + 10).map((tech) => (
          <div key={tech.id} className="flex flex-col items-center transition-transform duration-300">
            {tech.icon}
            <span className="mt-2 text-lg">{tech.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <button onClick={handlePrev} className="bg-purple-300 px-4 py-2 rounded-lg">⬅</button>
        <button onClick={handleNext} className="bg-purple-600 text-white px-4 py-2 rounded-lg">➡</button>
      </div>
    </div>
  );
}