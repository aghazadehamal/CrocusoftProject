"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, projects } from "./servicesData";

export default function ServicesProjectsMobile() {
  const [expanded, setExpanded] = useState({});
  const [activeCategory, setActiveCategory] = useState("Hamısı");

  const filteredProjects = activeCategory === "Hamısı"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const toggleDescription = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="py-10 px-4">
      <div className="flex flex-wrap justify-start gap-3 text-gray-500 text-sm mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`hover:text-purple-600 transition ${activeCategory === cat ? "text-purple-600 font-bold" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="p-2 rounded-lg">
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
            <h3 className="text-base font-semibold mt-3">{project.name}</h3>
            <p className="text-gray-600 mt-2">
              {expanded[project.id] ? project.fullDescription : project.description}
            </p>
            <button
              className="mt-2 text-white bg-customPurple px-4 py-1 rounded-lg text-sm"
              onClick={() => toggleDescription(project.id)}
            >
              {expanded[project.id] ? "Show less" : "Show more"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
