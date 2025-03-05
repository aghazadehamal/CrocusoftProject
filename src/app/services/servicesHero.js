'use client';


import Image from 'next/image';

export default function ServicesHero() {
  return (
    <div>
     
         <section className="relative bg-gray-50 py-20 px-6 text-center overflow-hidden mt-14">
      <div className="absolute top-10 left-10 w-12 h-12 bg-purple-400 opacity-30 transform rotate-45"></div>
      <div className="absolute bottom-10 left-20 w-20 h-20 bg-gray-200 opacity-50 transform rotate-12"></div>
      <div className="absolute top-5 right-10 w-10 h-10 bg-purple-400 opacity-40 transform rotate-45"></div>
      <div className="absolute bottom-5 right-20 w-24 h-24 bg-gray-200 opacity-50 transform rotate-12"></div>
      
      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        <span className="text-black">Layihələriniz üçün </span>
          <br />
          <span className="text-black"></span>
          <span className="text-purple-600">xüsusi ayrılmış komanda</span> 
        </h1>
        <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
        İnnovativ mühəndislərimiz fərqli proqramlaşdırma xidmətlərini şirkətinizin komanda üzvü kimi, operativ və professional şəkildə icra edəcək.
        </p>
      </div>
    </section>
    </div>
 
  );
}
