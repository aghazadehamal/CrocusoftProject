"use client";

import { useState } from "react";
import Image from "next/image";
import { blogs, categories } from "./blogData";

export default function BlogSectionMobile() {
  const [activeCategory, setActiveCategory] = useState("Hamısı");

  const filteredBlogs = activeCategory === "Hamısı"
    ? blogs
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <div className="py-10 px-4 mt-8">
      <h2 className="text-4xl font-bold mb-6">Bloq yazıları</h2>

      <div className="flex flex-wrap gap-3 text-gray-500 text-sm mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`hover:text-purple-600 transition ${activeCategory === cat ? 'text-purple-600 font-bold' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="rounded-lg">
            <div className="relative w-full h-52 overflow-hidden rounded-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 uppercase">{blog.category}</p>
            <h3 className="text-base font-semibold">{blog.title}</h3>
            <p className="text-xs text-gray-500">{blog.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
