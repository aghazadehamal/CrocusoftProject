"use client";

import { useState } from "react";
import { technologies } from "./techData";

export default function TechnologiesDesktop() {
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

  const isFirst = startIndex === 0;

  return (
    <div className="text-center py-10 pr-32 pl-32">
      <div className="pl-12">
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
        <button
          onClick={handlePrev}
          className={`px-4 py-2 rounded-md ${isFirst ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-customPurple text-white"}`}
          disabled={isFirst}
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="bg-customPurple text-white px-4 py-2 rounded-md"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
