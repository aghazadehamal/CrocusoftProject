'use client';

import { useState } from 'react';
import Image from 'next/image';



const categories = [
  "Hamısı", "Bank & Maliyyə", "Elektron hökumət", "Satış & E-Ticarət", "Startup",
  "Logistika", "Pərakəndə Satış", "Turizm", "Əyləncə", "Təhsil",
  "Avtomatlaşdırma", "İnsan Resursları", "Korporativ Portfolio", "Loyallıq", "İcma İdarəçiliyi", "Həyat tərzi"
];

const projects = [
  { id: 1, name: "Mobil Notariat", category: "Elektron hökumət, Həyat tərzi", image: "/project3.webp" },
  { id: 2, name: "Smart Customs", category: "Elektron hökumət, Logistika, Həyat tərzi", image: "/project3.webp" },
  { id: 3, name: "Pasha Hub", category: "Təhsil, Korporativ Portfolio", image: "/project3.webp" },
  { id: 4, name: "Banking System", category: "Bank & Maliyyə", image: "/project3.webp" },
  { id: 5, name: "E-Ticarət Platforması", category: "Satış & E-Ticarət", image: "/project3.webp" },
  { id: 6, name: "Startup Manager", category: "Startup", image: "/project3.webp" },
  { id: 7, name: "Logistika Şəbəkəsi", category: "Logistika", image: "/project3.webp" },
  { id: 8, name: "Turizm Rezervasiya", category: "Turizm", image: "/project3.webp" },
  { id: 9, name: "Əyləncə Platforması", category: "Əyləncə", image: "/project3.webp" },
  { id: 10, name: "Onlayn Təhsil", category: "Təhsil", image: "/project3.webp" },
  { id: 11, name: "Avtomatlaşdırma Sistemi", category: "Avtomatlaşdırma", image: "/project3.webp" },
  { id: 12, name: "İnsan Resursları", category: "İnsan Resursları", image: "/project3.webp" },
  { id: 13, name: "Korporativ Portfolio", category: "Korporativ Portfolio", image: "/project3.webp" },
  { id: 14, name: "Loyallıq Proqramı", category: "Loyallıq", image: "/project3.webp" },
  { id: 15, name: "İcma İdarəçiliyi", category: "İcma İdarəçiliyi", image: "/project3.webp" },
  { id: 16, name: "Sağlamlıq Platforması", category: "Həyat tərzi", image: "/project3.webp" },
  { id: 17, name: "AI Chatbot", category: "Avtomatlaşdırma", image: "/project3.webp" },
  { id: 18, name: "Sığorta Sistemi", category: "Bank & Maliyyə", image: "/project3.webp" },
  { id: 19, name: "ERP Platforması", category: "Korporativ Portfolio", image: "/project3.webp" },
  { id: 20, name: "HRMS Platforması", category: "İnsan Resursları", image: "/project3.webp" }
];

export default function WorksHero() {
  const [activeCategory, setActiveCategory] = useState("Hamısı");

  const filteredProjects = activeCategory === "Hamısı" 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));

  return (
   
    <div>
      <div className="text-center py-10 px-5 pl-44 pr-44">
     
      <h2 className="text-4xl font-bold mb-6 mt-14">Layihələrimiz</h2>
      
      <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm mb-8">
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="p-4 rounded-lg ">
            <div className="relative w-full max-w-3xl mx-auto">
            <Image 
  src={project.image} 
  alt={project.name} 
  width={400} 
  height={400} 
  priority={true} 
  unoptimized={true}
  layout="intrinsic"
  className="w-full h-[400px] rounded-lg transform transition duration-300 hover:scale-105 object-cover project-image"
  style={{ minHeight: "400px", display: "block" }} 
/>

            </div>
            <p className="text-xs text-gray-400 mt-3">{project.category}</p>
            <h3 className="text-lg font-semibold mt-1">{project.name}</h3>
          </div>
        ))}
      </div>
    
    </div>
   
    </div>
  );
}
