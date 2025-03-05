'use client';

import Image from 'next/image';

const blogs = [
  {
    id: 1,
    title: 'Rəqəmsal dövrdə Kibertəhlükəsizlik',
    
    image: '/blogs/blog1.png',
    readTime: '5 dəqiqə oxuma vaxtı'
  },
  {
    id: 2,
    title: 'Agile strategiyası ilə biznesinizi gələcəyə aparın',
  
    image: '/blogs/blog2.png',
    readTime: '5 dəqiqə oxuma vaxtı'
  },
  {
    id: 3,
    title: 'Startaplar üçün sürətli və davamlı inkişaf strategiyaları',
    image: '/blogs/blog3.png',
    readTime: '5 dəqiqə oxuma vaxtı'
  },
  {
    id: 4,
    title: 'Ötən ilin qabaqcıl texnologiya trendləri nələrdir?',
    image: '/blogs/blog4.png',
    readTime: '5 dəqiqə oxuma vaxtı'
  },
  {
    id: 5,
    title: 'CRM sistemləri biznesinizi necə inkişaf etdirə bilər',
    image: '/blogs/blog5.png',
    readTime: '5 dəqiqə oxuma vaxtı'
  },
  {
    id: 6,
    title: 'HR-in Gələcəyi: İnsan Resursları İdarəetmə Sistemləri',
    image: '/blogs/blog6.png',
    readTime: '5 dəqiqə oxuma vaxtı'
  }
];

export default function Blogs() {
  return (
    <div className="text-center py-10">
     <div className='pl-44'>
      <h2 className="text-3xl mb-6 text-left">Bloqlar</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center pl-44 pr-44">
        {blogs.map((blog) => (
         <div key={blog.id} className="flex flex-col items-start text-left">
         <div className="w-full overflow-hidden rounded-lg">
         <Image
  src={blog.image}
  alt={blog.title}
  width={300}
  height={200}
  className="w-[320px] h-[220px] transition-transform duration-300 hover:scale-105"
/>

         </div>
         <p className="text-gray-500 text-sm mt-2 font-semibold">{blog.category}</p>
         <h3 className="text-lg font-bold text-black mt-1">{blog.title}</h3>
         <p className="text-gray-500 text-sm mt-1">{blog.readTime}</p>
       </div>
       
        ))}
      </div>
      <div className="mt-10">
        <button className=" text-[#6643c2]  font-extralight shadow-md pt-4 text-xl pb-4 pl-4 pr-4 transition duration-300 tracking-wide">
         Bloqlarımızın davamı &gt;
        </button>
      </div>
    </div>
  );
}
