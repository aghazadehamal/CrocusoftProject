"use client";

import Link from "next/link";
import WhiteCube from "@/app/WhiteCube";
import PurpleCube from "@/app/PurpleCube";

export default function ContactSectionDesktop() {
  return (
    <div className="text-center py-24 bg-gray-100 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 flex flex-col gap-10">
        <WhiteCube size="small" style={{ transform: "translate(-50px, -180px)" }} />
        <PurpleCube size="small" style={{ transform: "translate(40px, -380px)" }} />
        <WhiteCube size="huge" style={{ transform: "translate(60px, -200px)" }} />
      </div>

      <h2 className="text-6xl font-semibold mb-4">Gəlin, işdən danışaq</h2>
      <p className="text-2xl tracking-wide leading-10 text-gray-700 max-w-2xl mx-auto mb-6 mt-5">
        Sizə kömək etmək istərdik! Bizə özünüz və möhtəşəm layihəniz barədə bir az məlumat verin, sizinlə əlaqə saxlayacağıq.
      </p>
      <p className="mt-28">
      <Link
        href="/choose"
        className="bg-customPurple text-white py-6 px-12 shadow-lg transition rounded-md tracking-wide text-lg duration-300 mt-96"
      >
        BİZİ SEÇ
      </Link>
      </p>
     

      <div className="absolute right-0 top-1/4 flex flex-col gap-10">
        <WhiteCube size="small" color="#ebebf2" style={{ transform: "translate(-320px, 90px)" }} />
        <PurpleCube size="small" color="#bfafe9" style={{ transform: "translate(-50px, -10px)" }} />
        <WhiteCube size="huge" color="#ebebf2" style={{ transform: "translate(-40px, -250px)" }} />
      </div>
    </div>
  );
}
