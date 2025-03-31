"use client";

import Link from "next/link";

export default function ContactSectionMobile() {
  return (
    <div className="bg-gray-100 text-center py-20 px-6">
      <h2 className="text-3xl font-bold mb-4">Gəlin, işdən danışaq</h2>
      <p className="text-base text-gray-700 leading-7 mb-6">
        Sizə kömək etmək istərdik! Bizə özünüz və layihəniz barədə qısa məlumat verin, sizinlə əlaqə saxlayacağıq.
      </p>
      <Link
        href="/choose"
        className="bg-customPurple text-white py-4 px-8 rounded-md text-base font-medium"
      >
        BİZİ SEÇ
      </Link>
    </div>
  );
}
