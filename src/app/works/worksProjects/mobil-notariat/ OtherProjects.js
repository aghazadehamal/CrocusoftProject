"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const projects = [
 
];

export default function OtherProjects() {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const element = scrollRef.current;
    if (element) {
      const max = element.scrollWidth - element.clientWidth;
      setMaxScroll(max);
      setScrollLeft(element.scrollLeft);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="px-4 sm:px-8 md:px-20 lg:px-32 xl:px-44 py-10 sm:py-16 lg:py-20 bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 sm:mb-12">Digər Layihələr</h2>

      <div
        ref={scrollRef}
        className="flex gap-6 sm:gap-10 md:gap-16 lg:gap-28 overflow-x-auto pb-4 scroll-smooth scroll-hidden"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] bg-[#f5f3fc] rounded-lg p-4 sm:p-6 flex-shrink-0"
          >
            <div className="w-full aspect-[3/2] mb-4 sm:mb-6 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain rounded-md"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
              {project.category}
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-[#0f0f2c]">
              {project.title}
            </h3>
          </div>
        ))}
      </div>

   
      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden relative">
        <div
          className="absolute top-0 left-0 h-full bg-purple-600 rounded-full transition-transform duration-200"
          style={{
            width: "80px",
            transform: `translateX(${(scrollLeft / maxScroll) * (scrollRef.current?.clientWidth - 80)}px)`,
          }}
        />
      </div>
    </section>
  );
}
