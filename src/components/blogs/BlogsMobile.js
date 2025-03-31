"use client";

import Image from "next/image";
import Link from "next/link";
import { blogs } from "./blogsData";

export default function BlogsMobile() {
  return (
    <div className="text-center py-6 px-4">
      <h2 className="text-2xl mb-6 text-left">Bloqlar</h2>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="rounded-lg shadow-md overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              width={360}
              height={200}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-3 text-left">
              <h3 className="text-lg font-semibold text-black">{blog.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{blog.readTime}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/blogs"
          className="text-[#6643c2] font-light shadow-md text-lg px-4 py-2 inline-block"
        >
          Bloqlarımızın davamı &gt;
        </Link>
      </div>
    </div>
  );
}
