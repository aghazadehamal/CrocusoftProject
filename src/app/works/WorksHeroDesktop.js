"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { categories, projects } from "./worksData";

export default function WorksHeroDesktop() {
  const [activeCategory, setActiveCategory] = useState("Hamısı");

  const filteredProjects =
    activeCategory === "Hamısı"
      ? projects
      : projects.filter((project) =>
          project.category.includes(activeCategory)
        );

  return (
    <div className="text-center py-10 px-20">
      <h2 className="text-4xl font-bold mb-6 mt-14">Layihələrimiz</h2>

      <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`hover:text-purple-600 transition ${
              activeCategory === cat ? "text-purple-600 font-bold" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
  <Link href={`/works/worksProjects/${project.slug}`} key={project.id}>
    <div className="p-4 rounded-lg cursor-pointer hover:shadow-md transition">
      <Image
        src={project.image}
        alt={project.name}
        width={400}
        height={400}
        priority
        unoptimized
        className="w-full h-[400px] rounded-lg object-cover transform transition duration-300 hover:scale-105"
      />
      <p className="text-xs text-gray-400 mt-3">{project.category}</p>
      <h3 className="text-lg font-semibold mt-1">{project.name}</h3>
    </div>
  </Link>
))}
      </div>
    </div>
  );
}
