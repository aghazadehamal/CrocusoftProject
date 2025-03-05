"use client";

import { useState } from "react";
import Image from "next/image";



const projects = [
  { 
    id: 1, 
    name: "İşə Qəbul Portalı", 
    description: "Ənənəvi işçi axtarışı metodlarını unutun! Vakansiyaları sosial şəbəkələrdə paylaşmağı, e-mail vasitəsilə CV-ləri qəbul etməyi, namizədlərin...", 
    fullDescription: "Ənənəvi işçi axtarışı metodlarını unutun! Vakansiyaları sosial şəbəkələrdə paylaşmağı, e-mail vasitəsilə CV-ləri qəbul etməyi, namizədlərin seçilməsini avtomatlaşdırın.", 
    image: "/services.jpg"
  },
  { 
    id: 2, 
    name: "Monitorları İdarəetmə Sistemi", 
    description: "Müəssisə və təşkilatlara biznesi daha məhsuldar idarə etmək üçün təqdim etdiyimiz növbəti möhtəşəm məhsul Ağıllı Rəqəmsal Tablo layihəsidir...", 
    fullDescription: "Müəssisə və təşkilatlara biznesi daha məhsuldar idarə etmək üçün təqdim etdiyimiz növbəti möhtəşəm məhsul Ağıllı Rəqəmsal Tablo layihəsidir. Bir çox otellər, restoranlar və iş mərkəzləri üçün ideal həll yoludur.", 
   image: "/services.jpg"
  },
  { 
    id: 3, 
    name: "İşə Qəbul Portalı", 
    description: "Ənənəvi işçi axtarışı metodlarını unutun! Vakansiyaları sosial şəbəkələrdə paylaşmağı, e-mail vasitəsilə CV-ləri qəbul etməyi, namizədlərin...", 
    fullDescription: "Ənənəvi işçi axtarışı metodlarını unutun! Vakansiyaları sosial şəbəkələrdə paylaşmağı, e-mail vasitəsilə CV-ləri qəbul etməyi, namizədlərin seçilməsini avtomatlaşdırın.", 
  image: "/services.jpg"
  },
  { 
    id: 4, 
    name: "Monitorları İdarəetmə Sistemi", 
    description: "Müəssisə və təşkilatlara biznesi daha məhsuldar idarə etmək üçün təqdim etdiyimiz növbəti möhtəşəm məhsul Ağıllı Rəqəmsal Tablo layihəsidir...", 
    fullDescription: "Müəssisə və təşkilatlara biznesi daha məhsuldar idarə etmək üçün təqdim etdiyimiz növbəti möhtəşəm məhsul Ağıllı Rəqəmsal Tablo layihəsidir. Bir çox otellər, restoranlar və iş mərkəzləri üçün ideal həll yoludur.", 
   image: "/services.jpg"
  },
  { 
    id: 5, 
    name: "İşə Qəbul Portalı", 
    description: "Ənənəvi işçi axtarışı metodlarını unutun! Vakansiyaları sosial şəbəkələrdə paylaşmağı, e-mail vasitəsilə CV-ləri qəbul etməyi, namizədlərin...", 
    fullDescription: "Ənənəvi işçi axtarışı metodlarını unutun! Vakansiyaları sosial şəbəkələrdə paylaşmağı, e-mail vasitəsilə CV-ləri qəbul etməyi, namizədlərin seçilməsini avtomatlaşdırın.", 
  image: "/services.jpg"
  },
  { 
    id: 6, 
    name: "Monitorları İdarəetmə Sistemi", 
    description: "Müəssisə və təşkilatlara biznesi daha məhsuldar idarə etmək üçün təqdim etdiyimiz növbəti möhtəşəm məhsul Ağıllı Rəqəmsal Tablo layihəsidir...", 
    fullDescription: "Müəssisə və təşkilatlara biznesi daha məhsuldar idarə etmək üçün təqdim etdiyimiz növbəti möhtəşəm məhsul Ağıllı Rəqəmsal Tablo layihəsidir. Bir çox otellər, restoranlar və iş mərkəzləri üçün ideal həll yoludur.", 
   image: "/services.jpg"
  },
  { 
    id: 7, 
    name: "İşə Qəbul Portalı", 
    description: "Ənənəvi işçi axtarışı metodlarını unutun! Vakansiyaları sosial şəbəkələrdə paylaşmağı, e-mail vasitəsilə CV-ləri qəbul etməyi, namizədlərin...", 
    fullDescription: "Ənənəvi işçi axtarışı metodlarını unutun! Vakansiyaları sosial şəbəkələrdə paylaşmağı, e-mail vasitəsilə CV-ləri qəbul etməyi, namizədlərin seçilməsini avtomatlaşdırın.", 
  image: "/services.jpg"
  },
  { 
    id: 8, 
    name: "Monitorları İdarəetmə Sistemi", 
    description: "Müəssisə və təşkilatlara biznesi daha məhsuldar idarə etmək üçün təqdim etdiyimiz növbəti möhtəşəm məhsul Ağıllı Rəqəmsal Tablo layihəsidir...", 
    fullDescription: "Müəssisə və təşkilatlara biznesi daha məhsuldar idarə etmək üçün təqdim etdiyimiz növbəti möhtəşəm məhsul Ağıllı Rəqəmsal Tablo layihəsidir. Bir çox otellər, restoranlar və iş mərkəzləri üçün ideal həll yoludur.", 
   image: "/services.jpg"
  },
  { 
    id: 9, 
    name: "İşə Qəbul Portalı", 
    description: "Ənənəvi işçi axtarışı metodlarını unutun! Vakansiyaları sosial şəbəkələrdə paylaşmağı, e-mail vasitəsilə CV-ləri qəbul etməyi, namizədlərin...", 
    fullDescription: "Ənənəvi işçi axtarışı metodlarını unutun! Vakansiyaları sosial şəbəkələrdə paylaşmağı, e-mail vasitəsilə CV-ləri qəbul etməyi, namizədlərin seçilməsini avtomatlaşdırın.", 
  image: "/services.jpg"
  },
  { 
    id: 10, 
    name: "Monitorları İdarəetmə Sistemi", 
    description: "Müəssisə və təşkilatlara biznesi daha məhsuldar idarə etmək üçün təqdim etdiyimiz növbəti möhtəşəm məhsul Ağıllı Rəqəmsal Tablo layihəsidir...", 
    fullDescription: "Müəssisə və təşkilatlara biznesi daha məhsuldar idarə etmək üçün təqdim etdiyimiz növbəti möhtəşəm məhsul Ağıllı Rəqəmsal Tablo layihəsidir. Bir çox otellər, restoranlar və iş mərkəzləri üçün ideal həll yoludur.", 
   image: "/services.jpg"
  },
];

export default function ServicesProjects() {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div>
   
      <div className="text-center py-10 px-5">
    
      <h2 className="text-4xl font-bold mb-6">Layihələrimiz</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="p-4 rounded-lg ">
            <div className="relative overflow-hidden rounded-lg">
              <Image 
                src={project.image} 
                alt={project.name} 
                width={500} 
                height={300} 
                className="w-full h-auto rounded-lg transform transition duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold mt-3">{project.name}</h3>
            <p className="text-gray-600 mt-2">
              {expanded[project.id] ? project.fullDescription : project.description}
            </p>
            <button 
              className="mt-2 text-purple-600 font-semibold hover:underline"
              onClick={() => toggleDescription(project.id)}
            >
              {expanded[project.id] ? "Show less" : "Show more"}
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
