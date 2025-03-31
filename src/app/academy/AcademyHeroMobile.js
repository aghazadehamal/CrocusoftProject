"use client";
import GreenCube from "../GreenCube";
import WhiteCube from "../WhiteCube";

export default function AcademyHeroMobile() {
  return (
    <section className="relative flex flex-col items-center px-6 py-16">
      <h1 className="font-semibold text-[40px] leading-[46px] tracking-[1.6px] text-center">
        <span className="text-customGreen block">Professional proqramçı</span>
        <span className="text-customGreen block">olmaq üçün</span>
        <span className="text-customGreen block">öyrənməyə</span>
        <span>indi başla!</span>
      </h1>
      <p className="text-gray-600 text-[16px] mt-8 tracking-[0.54px] leading-8 text-center">
        Təcrübəli müəllimlərdən öyrən, professional mühəndislər ilə tətbiq et, kurslarımızı bitirdikdən sonra isə təcrübə proqramlarımıza qoşulmaq şansı qazan.
      </p>

    
    </section>
  );
}
