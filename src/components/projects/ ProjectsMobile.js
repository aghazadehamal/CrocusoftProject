"use client";

import Link from 'next/link';
import Image from 'next/image';
import { projects } from './projectsData';

export default function ProjectsMobile() {
  return (
    <div className="text-center py-6 px-4">
      <h2 className="text-2xl mb-4 text-left">Layihələrimiz</h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-3 text-left">
              <p className="text-gray-500 text-xs tracking-wide">{project.category}</p>
              <h3 className="text-xl font-semibold text-black">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link 
          href="/works"
          className="text-[#6643c2] font-light shadow-md text-lg px-4 py-2 inline-block"
        >
          İşlərimizin davamı &gt;
        </Link>
      </div>
    </div>
  );
}
