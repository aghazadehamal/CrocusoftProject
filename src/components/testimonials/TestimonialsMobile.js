"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "./testimonialsData";

export default function TestimonialsMobile() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 py-8 text-center">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">Rəylər</h2>

      <div className="bg-white rounded-xl shadow-lg p-4">
        <Image
          src={testimonials[index].image}
          alt={testimonials[index].name}
          width={80}
          height={80}
          className="rounded-full mx-auto mb-4"
        />
        <p className="text-lg font-semibold text-black">{testimonials[index].name}</p>
        <p className="text-sm text-gray-600 mb-3">{testimonials[index].position}</p>
        <p className="text-sm text-gray-700">{testimonials[index].testimonial}</p>
      </div>
    </div>
  );
}
