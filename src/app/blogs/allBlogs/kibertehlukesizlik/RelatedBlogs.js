'use client'

import Image from 'next/image'

const blogs = [
  {
    id: 1,
    title: 'Veb proqramlaşdırmanın mərhələləri: 7 əsas addım',
    time: '4 dəqiqə oxuma vaxtı',
    image: '/otherBlogs/otherBlog1.png',
  },
  {
    id: 2,
    title: 'Vebsaytınız biznesiniz haqqında nə deyir?',
    time: '5 dəqiqə oxuma vaxtı',
    image: '/otherBlogs/otherBlog2.png',
  },
  {
    id: 3,
    title: 'UI və UX dizayn - Fərqlər və eyniliklər.',
    time: '3 dəqiqə oxuma vaxtı',
    image: '/otherBlogs/otherBlog3.png',
  },
]

export default function RelatedBlogs() {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Oxşar bloqlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="space-y-4">
            <div className="relative w-full h-64 bg-gray-100 object-cover rounded-md overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className=" object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
            <p className="text-sm text-gray-500">{blog.time}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
