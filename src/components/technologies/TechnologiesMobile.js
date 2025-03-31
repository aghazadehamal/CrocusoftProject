"use client";

import { technologies } from "./techData";

export default function TechnologiesMobile() {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl mb-6 text-center font-semibold">Texnologiyalar</h2>

      <div className="grid grid-cols-3 gap-6">
        {technologies.map((tech) => (
          <div key={tech.id} className="flex flex-col items-center">
            {tech.icon}
            <span className="mt-2 text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
