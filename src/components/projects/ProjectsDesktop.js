"use client";

import Link from 'next/link';
import Image from 'next/image';
import { projects } from './projectsData';

export default function ProjectsDesktop() {
  return (
    <div className="text-center py-10">
      <div className="pl-44">
        <h2 className="text-3xl mb-6 text-left">Layihələrimiz</h2>
      </div>
      <div className="grid grid-cols-2 gap-32 justify-center items-center mx-auto w-fit">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer w-[500px] mx-auto"
          >
            <Link href={`/works/worksProjects/${project.slug}`} key={project.id}>
            <div className="overflow-hidden w-full h-[350px]">
              <Image
                src={project.image}
                alt={project.title}
                width={280}
                height={180}
                className="transition-transform duration-300 group-hover:scale-110 w-full h-full object-cover"
              />
            </div>
            </Link>
            <div className="p-3 text-left">
              <p className="text-gray-500 text-xs tracking-widest">{project.category}</p>
              <h3 className="text-2xl font-semibold text-black">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link 
          href="/works"
          className="text-[#6643c2] font-extralight shadow-md pt-4 text-xl pb-4 pl-4 pr-4 transition duration-300 tracking-wide"
        >
          İşlərimizin davamı &gt;
        </Link>
      </div>
    </div>
  );
}
