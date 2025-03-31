"use client";
import { useMenu } from "@/context/MenuContext";

export default function HeroSectionMobile() {
  const { menuOpen } = useMenu();

  return (
    <section
      className={`flex flex-col items-center text-center px-6 pt-20 transition-transform duration-500 `}
    >
      <h1 className="text-3xl font-bold leading-tight">
        Layihələriniz üçün <span className="text-customPurple">xüsusi komanda</span>
      </h1>
      <p className="text-gray-600 text-base mt-4">
        Mühəndislərimiz sizin komandanın bir hissəsi kimi operativ və professional işləyəcək.
      </p>
    </section>
  );
}
