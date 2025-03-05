'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = [
  'Hamısı', 'Proqramlaşdırma', 'UI/UX', 'Məhsul hazırlanması', 'Android', 'Yeniliklər', 'Layihələr', 'Bloqlar'
];

const blogs = [
  { id: 1, category: 'Yeniliklər', title: 'Mobil notariat"da YENİLİK!', time: '2 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 2, category: 'Layihələr', title: 'Mobil tətbiqləriniz CROCUSOFT SECURITY ilə...', time: '2 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 3, category: 'Layihələr', title: 'MilliÖn tətbiqini yenilədik!', time: '3 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 4, category: 'Yeniliklər', title: 'Mobil notariat"da YENİLİK!', time: '2 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 5, category: 'Layihələr', title: 'Mobil tətbiqləriniz CROCUSOFT SECURITY ilə...', time: '2 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 6, category: 'Layihələr', title: 'MilliÖn tətbiqini yenilədik!', time: '3 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 7, category: 'Yeniliklər', title: 'Mobil notariat"da YENİLİK!', time: '2 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 8, category: 'Layihələr', title: 'Mobil tətbiqləriniz CROCUSOFT SECURITY ilə...', time: '2 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 9, category: 'Layihələr', title: 'MilliÖn tətbiqini yenilədik!', time: '3 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 10, category: 'Yeniliklər', title: 'Mobil notariat"da YENİLİK!', time: '2 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 11, category: 'Layihələr', title: 'Mobil tətbiqləriniz CROCUSOFT SECURITY ilə...', time: '2 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 12, category: 'Layihələr', title: 'MilliÖn tətbiqini yenilədik!', time: '3 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 13, category: 'Yeniliklər', title: 'Mobil notariat"da YENİLİK!', time: '2 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 14, category: 'Layihələr', title: 'Mobil tətbiqləriniz CROCUSOFT SECURITY ilə...', time: '2 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
  { id: 15, category: 'Layihələr', title: 'MilliÖn tətbiqini yenilədik!', time: '3 DƏQİQƏ OXUMA VAXTI', image: '/blogPage.png' },
];

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState('Hamısı');

  const filteredBlogs = activeCategory === 'Hamısı' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <div className="text-center py-10 px-5 md:px-20 mt-14">
      <h2 className="text-4xl font-bold mb-6">Bloq yazıları</h2>
      
      <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm mb-8">
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="p-4 rounded-lg ">
            <div className="relative w-full h-60 overflow-hidden rounded-lg">
              <Image 
                src={blog.image} 
                alt={blog.title} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg transform transition duration-300 hover:scale-105" 
              />
            </div>
            <p className="text-xs text-gray-400 mt-3 uppercase">{blog.category}</p>
            <h3 className="text-lg font-semibold mt-1">{blog.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{blog.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
