"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from './testimonialsData';

export default function TestimonialsDesktop() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-12 flex flex-col items-center w-full max-w-5xl mx-auto mt-10">
      <div className="relative flex items-center justify-center w-full py-8">
        <button onClick={handlePrev} className="absolute left-0 text-purple-600 text-3xl p-3">
          <FaChevronLeft />
        </button>

        <div className="flex flex-col items-center text-center max-w-3xl transition-transform duration-500">
          <Image
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            width={100}
            height={100}
            className="rounded-full mb-6"
          />
          <p className="text-purple-700 font-semibold text-xl">
            {testimonials[currentIndex].name}
          </p>
          <p className="font-medium text-xl mt-1">
            {testimonials[currentIndex].position}
          </p>
          <p className="text-gray-700 text-lg mt-4">
            {testimonials[currentIndex].testimonial}
          </p>
        </div>

        <button onClick={handleNext} className="absolute right-0 text-purple-600 text-3xl p-3">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
