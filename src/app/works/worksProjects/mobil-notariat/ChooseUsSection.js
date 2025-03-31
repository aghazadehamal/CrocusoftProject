"use client";

import Link from "next/link";

export default function ChooseUsSection() {
  return (
    <section className="text-center py-20 px-4 bg-white">
      <h2 className="text-4xl md:text-6xl font-semibold text-[#0f0f2c] mb-6">
        Xoşunuza gəldi?
      </h2>
      <p className="text-2xl max-w-2xl mx-auto px-10 leading-loose text-gray-600 mb-10">
        Sizə kömək etmək istərdik! Bizə özünüz və möhtəşəm layihəniz barədə
        bir az məlumat verin, sizinlə əlaqə saxlayacağıq.
      </p>
      <Link
        href="/choose"
        className="inline-block bg-[#6546d2] text-white text-lg font-medium px-10 py-4 rounded-md shadow-md hover:bg-[#5339b3] transition"
      >
        BİZİ SEÇ
      </Link>
    </section>
  );
}
