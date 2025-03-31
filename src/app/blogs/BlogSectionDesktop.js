"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { blogs, categories } from "./blogData";

export default function BlogSectionDesktop() {
  const [activeCategory, setActiveCategory] = useState("Hamısı");

  const filteredBlogs = activeCategory === "Hamısı"
    ? blogs
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <div className="py-10 px-36 mt-14">
      <h2 className="text-7xl font-semibold mb-6">Bloq yazıları</h2>

      <div className="flex flex-wrap justify-start gap-4 text-gray-500 text-lg mb-8">
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

      <div className="grid grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="p-4 rounded-lg">
            <Link
    key={blog.id}
    href={`/blogs/allBlogs/${blog.slug}`}
    className="flex flex-col items-start text-left"
  >
            <div className="relative w-full h-60 overflow-hidden rounded-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transform transition duration-300 hover:scale-105"
              />
            </div>
            </Link>
            <p className="text-xs text-gray-400 mt-3 uppercase">{blog.category}</p>
            <h3 className="text-lg font-semibold mt-1">{blog.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{blog.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
