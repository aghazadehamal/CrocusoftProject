"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, projects } from "./worksData";

export default function WorksHeroMobile() {
  const [activeCategory, setActiveCategory] = useState("Hamısı");

  const filteredProjects =
    activeCategory === "Hamısı"
      ? projects
      : projects.filter((project) =>
          project.category.includes(activeCategory)
        );

  return (
    <div className="text-center py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Layihələrimiz</h2>

      <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500 mb-6">
        {categories.slice(0, 6).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-2 py-1 rounded ${
              activeCategory === cat
                ? "text-purple-600 font-semibold"
                : "hover:text-purple-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={300}
              className="w-full h-[250px] object-cover"
            />
            <p className="text-xs text-gray-400 mt-2">{project.category}</p>
            <h3 className="text-base font-semibold">{project.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
