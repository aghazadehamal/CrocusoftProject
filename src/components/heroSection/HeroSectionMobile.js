"use client";

import { useMenu } from "@/context/MenuContext";
import { useI18n } from "@/context/I18nContext";
import WhiteCube from "@/app/WhiteCube";
import PurpleCube from "@/app/PurpleCube";

export default function HeroSectionMobile() {
  const { menuOpen } = useMenu();
  const { translations } = useI18n();

  return (
    <section
      className={`relative flex justify-center items-center px-6 md:px-12 py-20 md:py-28 lg:py-32 transition-transform duration-500 `}
    >
      {/* ${
        menuOpen ? "translate-y-full" : "translate-y-0"
      } */}
      <div className="absolute left-0 top-1/5 flex-col gap-10 hidden md:flex mt-40">
        <WhiteCube size="small" style={{ transform: "translate(-50px, -70px)" }} />
        <PurpleCube size="small" style={{ transform: "translate(-20px, -250px)" }} />
        <WhiteCube size="big" style={{ transform: "translate(-10px, -250px)" }} />
      </div>

      <div className="max-w-full px-6 md:px-32">
        <div className="mb-6 flex flex-wrap gap-4 items-center">
          <a href="#" className="bg-customPurple text-white px-4 py-2 rounded-md text-[13px] tracking-[0.54px]">
            {translations.hero.sendProject}
          </a>
          <span className="text-gray-600 tracking-wide text-lg">{translations.hero.sendProjectDesc}</span>

          <a href="#" className="bg-customGreen text-white px-4 py-2 rounded-md text-[13px] tracking-[0.54px]">
            {translations.hero.presentation}
          </a>
          <span className="text-gray-600 tracking-wide text-lg">{translations.hero.presentationDesc}</span>
        </div>

        <div className="w-full md:w-4/6 pr-0 md:pr-6">
          <h1 className="font-semibold text-[40px] md:text-[70px] leading-[46px] md:leading-[76px] tracking-[1.6px]">
            <span>{translations.hero.title}</span>{" "}
            <span className="text-customPurple">{translations.hero.titleHighlight}</span>{" "}
            <span>{translations.hero.titleLast}</span>{" "}
          </h1>
        </div>

        <p className="text-gray-600 text-[16px] md:text-[20px] mt-6 tracking-[0.54px] w-full md:w-10/12">
          {translations.hero.description}
        </p>
      </div>

    
      <div className="absolute right-0 top-1/5 flex-col gap-10 hidden md:flex mt-60">
        <WhiteCube size="tiny" color="#ebebf2" style={{ transform: "translate(-120px, 420px)" }} />
        <WhiteCube size="big" color="#ebebf2" style={{ transform: "translate(30px, -170px)" }} />
        <PurpleCube size="big" color="#bfafe9" style={{ transform: "translate(20px, -190px)" }} />
        <WhiteCube size="big" color="#ebebf2" style={{ transform: "translate(10px, -350px)" }} />
      </div>
    </section>
  );
}
