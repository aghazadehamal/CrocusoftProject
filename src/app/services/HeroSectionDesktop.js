"use client";
import { useMenu } from "@/context/MenuContext";
import { useI18n } from "@/context/I18nContext";
import { motion } from "framer-motion";
import RotatingCube from "@/app/RotatingCube";
import WhiteCube from "@/app/WhiteCube";
import PurpleCube from "@/app/PurpleCube";

export default function HeroSection() {
  const { menuOpen } = useMenu();
  const { translations } = useI18n();

  

  return (
    <section
      className={`relative flex justify-center items-center px-6 md:px-12 pt-20 md:pt-28 lg:pt-32 transition-transform duration-500 ${
        menuOpen ? "translate-y-72" : "translate-y-0"
      }`}
    >

<div className="hidden md:flex absolute left-0 top-1/5 flex-col gap-10 mt-40">

  
  <PurpleCube size="small" style={{ transform: "translate(-20px, -250px)" }} />
  <WhiteCube size="big" style={{ transform: "translate(-10px, -250px)" }} />
</div>



     <div className="max-w-full px-6 md:px-32">
       

        <div className="w-full md:w-5/6 pr-0 md:pr-6">
          <h1 className="font-semibold text-[40px] md:text-[90px] leading-[46px] md:leading-[96px] tracking-[1.6px]">
            <span>Layihələriniz üçün</span>{" "}
            <span className="text-customPurple -600">xüsusi ayrılmış komanda</span>{" "}
          
          </h1>
        </div>
        <p className="text-gray-600 text-[16px] leading-loose md:text-[22px] mt-6 tracking-[0.54px] w-full md:w-10/12">
        İnnovativ mühəndislərimiz fərqli proqramlaşdırma xidmətlərini şirkətinizin komanda üzvü kimi, operativ və professional şəkildə icra edəcək.
        </p>
      </div>

 
     <div className="hidden md:flex absolute right-0 top-1/5 flex-col gap-10 mt-60">

     

  <PurpleCube 
    size="big" 
    color="#bfafe9" 
    style={{ transform: "translate(20px, -190px)" }} 
  /> 

  <WhiteCube 
    size="big" 
    color="#ebebf2" 
    style={{ transform: "translate(10px, -350px)" }} 
  /> 
</div>

    </section>
  );
}
