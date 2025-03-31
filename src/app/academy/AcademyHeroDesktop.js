"use client";
import GreenCube from "../GreenCube";
import WhiteCube from "../WhiteCube";

export default function AcademyHeroDesktop() {
  return (
    <section className="relative flex justify-center items-center px-12 py-28">
   
      <div className="absolute left-0 top-1/5 flex flex-col gap-10 mt-40">
        <GreenCube size="small" style={{ transform: "translate(-50px, -70px)", opacity: 0.5 }} />
        <WhiteCube size="big" style={{ transform: "translate(-10px, -150px)" }} />
      </div>

  
      <div className="max-w-5xl">
        <h1 className="font-semibold text-[85px] leading-[96px] tracking-[1.6px]">
          <span className="text-customGreen">Professional proqramçı</span>{" "}
          <span className="text-customGreen">olmaq üçün</span>{" "}
          <span className="text-customGreen">öyrənməyə</span>{" "}
          <span className="">indi başla!</span>
        </h1>
        <p className="text-gray-600 text-[22px] mt-10 tracking-[0.94px] leading-10 px-8">
          Təcrübəli müəllimlərdən öyrən, professional mühəndislər ilə tətbiq et, kurslarımızı bitirdikdən sonra isə təcrübə proqramlarımıza qoşulmaq şansı qazan.
        </p>
      </div>


      <div className="absolute right-0 top-1/5 flex flex-col gap-10 mt-60">
        <GreenCube size="small" style={{ transform: "translate(-50px, -70px)", opacity: 0.5 }} />
        <WhiteCube size="big" style={{ transform: "translate(-10px, -150px)" }} />
      </div>
    </section>
  );
}
