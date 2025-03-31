"use client";

import Image from "next/image";
import Link from "next/link";
import { blogs } from "./blogsData";

export default function BlogsDesktop() {
  return (
    <div className="text-center py-10">
      <div className="pl-44">
        <h2 className="text-3xl mb-6 text-left">Bloqlar</h2>
      </div>
      <div className="grid grid-cols-3 gap-8 px-44">
      {blogs.map((blog) => (
        
  <Link
    key={blog.id}
    href={`/blogs/allBlogs/${blog.slug}`}
    className="flex flex-col items-start text-left"
  >
    <div className="w-full overflow-hidden rounded-lg">
      <Image
        src={blog.image}
        alt={blog.title}
        width={300}
        height={200}
        className="w-[320px] h-[220px] transition-transform duration-300 hover:scale-105"
      />
    </div>
    <h3 className="text-lg font-bold text-black mt-2">{blog.title}</h3>
    <p className="text-gray-500 text-sm mt-1">{blog.readTime}</p>
  </Link>
))}

      </div>
      <div className="mt-10">
        <Link
          href="/blogs"
          className="text-[#6643c2] font-extralight shadow-md text-xl px-4 py-2 transition duration-300 tracking-wide"
        >
          Bloqlarımızın davamı &gt;
        </Link>
      </div>
    </div>
  );
}
