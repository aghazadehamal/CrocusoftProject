'use client';

import Image from 'next/image';
import { useState } from 'react';

const projects = [
  { id: 1, title: 'Mobil Notariat', category: 'ELEKTRON HÖKUMƏT, HƏYAT TƏRZİ', image: '/projectsimages/project1.jpg' },
  { id: 2, title: 'Smart Customs', category: 'ELEKTRON HÖKUMƏT, LOGISTIKA, HƏYAT TƏRZİ', image: '/projectsimages/project2.jpg' },
  { id: 3, title: 'E-Library', category: 'TƏHSİL, RƏQƏMSAL KİTABXANA', image: '/projectsimages/project3.jpg' },
  { id: 4, title: 'Trade App', category: 'BİZNES, TİCARƏT', image: '/projectsimages/project4.jpg' },
  { id: 5, title: 'E-Market', category: 'E-TİCARƏT, ONLAYN SATIŞ', image: '/projectsimages/project5.jpg' },
  { id: 6, title: 'Banking App', category: 'FİNANS, BANKÇILIQ', image: '/projectsimages/project6.jpg' },
  { id: 7, title: 'HR System', category: 'İNSAN RESURSLARI, HR İDARƏETMƏ', image: '/projectsimages/project7.jpg' },
  { id: 8, title: 'Logistic Platform', category: 'NƏQLİYYAT, LOGİSTİKA', image: '/projectsimages/project8.jpg' }
];

export default function Projects() {
  return (
    <div className="text-center py-10">
      <div className='pl-44'>
      <h2 className="text-3xl mb-6 text-left">Layihələrimiz</h2>
      </div>
      <div className="grid grid-cols-2 gap-32 justify-center items-center mx-auto w-fit">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-lg  cursor-pointer w-[500px] mx-auto"
          >
            <div className="overflow-hidden w-full h-[350px]">
              <Image
                src={project.image}
                alt={project.title}
                width={280}
                height={180}
                className="transition-transform duration-300 group-hover:scale-110 w-full h-full object-cover"
              />
            </div>
            <div className="p-3 text-left">
              <p className="text-gray-500 text-xs tracking-widest">{project.category}</p>
              <h3 className="text-2xl font-semibold text-black">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button className=" text-[#6643c2]  font-extralight shadow-md pt-4 text-xl pb-4 pl-4 pr-4 transition duration-300 tracking-wide">
         İşlərimizin davamı &gt;
        </button>
      </div>
    </div>
  );
}
