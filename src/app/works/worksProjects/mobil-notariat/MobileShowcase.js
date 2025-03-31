"use client";

import { useState } from "react";
import Image from "next/image";

const mobileScreens = [
  { src: "/mobilNotariat/mobil1.png", alt: "Məlumat" },
  { src: "/mobilNotariat/mobil2.png", alt: "Etibarnamələr" },
  { src: "/mobilNotariat/mobil3.png", alt: "Qeydiyyat" },
  { src: "/mobilNotariat/mobil4.png", alt: "Sənədlərim" },
  { src: "/mobilNotariat/mobil5.png", alt: "Menyu" },
  { src: "/mobilNotariat/mobil1.png", alt: "Məlumat" },
  { src: "/mobilNotariat/mobil2.png", alt: "Etibarnamələr" },
  { src: "/mobilNotariat/mobil3.png", alt: "Qeydiyyat" },
  { src: "/mobilNotariat/mobil4.png", alt: "Sənədlərim" },
  { src: "/mobilNotariat/mobil5.png", alt: "Menyu" },
];

const visibleCount = 5;

export default function MobileSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const totalSlides = mobileScreens.length;

  const handleNext = () => {
    const nextIndex = (startIndex + 1) % totalSlides;
    setStartIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (startIndex - 1 + totalSlides) % totalSlides;
    setStartIndex(prevIndex);
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % totalSlides;
      slides.push(mobileScreens[index]);
    }
    return slides;
  };

  return (
    <div className="relative py-20 px-4 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Mobil Tətbiq Ekranları
      </h2>

      <div className="relative">
   
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center">
          {getVisibleSlides().map((screen, index) => (
            <div
              key={index}
              className="w-[200px] md:w-[240px] shadow-lg rounded-xl overflow-hidden mx-auto"
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                width={240}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

      
<button
  onClick={handlePrev}
  className="absolute left-96 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 shadow-md rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-gray-100 transition"
>
  &lt;
</button>


<button
  onClick={handleNext}
  className="absolute right-96 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 shadow-md rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-gray-100 transition"
>
  &gt;
</button>

      </div>
    </div>
  );
}
