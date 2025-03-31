"use client";

import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Veb proqramlaşdırmanın mərhələləri: 7 əsas addım",
    time: "4 dəqiqə oxuma vaxtı",
    image: "/blogs/blog1.png",
  },
  {
    id: 2,
    title: "Vebsaytınız biznesiniz haqqında nə deyir?",
    time: "5 dəqiqə oxuma vaxtı",
    image: "/blogs/blog2.png",
  },
  {
    id: 3,
    title: "UI və UX dizayn - Fərqlər və eyniliklər.",
    time: "3 dəqiqə oxuma vaxtı",
    image: "/blogs/blog3.png",
  },
];

export default function SimilarBlogs() {
  return (
    <section className="px-4 md:px-20 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Oxşar bloqlar</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col">
            <div className="w-full h-[300px] mb-4 rounded-lg overflow-hidden bg-[#f5f3fc] flex items-center justify-center">
              <Image
                src={blog.image}
                alt={blog.title}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#0f0f2c] mb-1">{blog.title}</h3>
            <p className="text-sm text-gray-500">{blog.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
