"use client";

import { projects } from "@/app/works/worksData";
import { useMenu } from "@/context/MenuContext";
import { useI18n } from "../../context/I18nContext"; 
import { usePathname } from "next/navigation"; 
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../mobileMenu/MobileMenu";

export default function HeaderDesktop() {
  const { menuOpen, setMenuOpen } = useMenu();
  const { locale, translations, changeLanguage } = useI18n(); 
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState("");


  useEffect(() => {
    const pageTitles = {
      "/": "", 
      "/works": "İşlər",
      "/services": "Xidmətlərimiz",
      "/projects": "Layihələrimiz",
      "/contact": "Bizimlə Əlaqə",
      "/choose": "Bizi seç",
      "/mobilNotariat": "Mobil Notariat",
      "/blogs": "Bloqlar",
      "/clients": "Müştərilər",
      "/academy": "Crocusoft Academy",
      "/about": "Haqqımızda",
    };
  
    if (pageTitles[pathname] !== undefined) {
      setPageTitle(pageTitles[pathname]);
      return;
    }
  

    if (pathname.startsWith("/works/worksProjects/")) {
      const slug = pathname.split("/").pop();
      const found = projects.find((p) => p.slug === slug);
      if (found) {
        setPageTitle(`İşlər / ${found.name}`);
      } else {
        setPageTitle("İşlər");
      }
      return;
    }
  
  
    if (pathname.startsWith("/blogs/allBlogs/")) {
      const slug = pathname.split("/").pop();

      const formatted = slug.replace(/-/g, " ");
      setPageTitle(`Bloqlar / ${formatted.charAt(0).toUpperCase() + formatted.slice(1)}`);
      return;
    }
  
    setPageTitle("");
  }, [pathname]);
  


  return (
    <>
      <header className=" top-0 left-0 w-full bg-white z-50 px-6 md:px-44 py-4 flex justify-between items-center h-16 ">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo/crocusoftLogo.png" alt="Crocusoft Logo" width={140} height={40} priority />
          </Link>

          {pageTitle && <p className="text-lg  text-gray-800 hidden md:block">{pageTitle}</p>}
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <a
              href="https://api.whatsapp.com/send?phone=994512060920"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white p-2 rounded-lg flex items-center"
            >
              <Image src="/telephone.png" alt="WhatsApp ilə əlaqə" width={20} height={20} />
            </a>
            <Link href="/choose" className="bg-customPurple text-white px-4 py-2 rounded-lg">
              {translations.menu.contact} 
            </Link>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <p className="mr-6">
            <a
    className={`text-lg  ${locale === "az" ? "font-normal text-black border-b-2 border-black " : "text-gray-400 cursor-pointer   "}`}
    onClick={() => changeLanguage("az")}
  >
    {translations.language.az}
  </a>
            </p>
 
  
  <a
    className={`text-lg  ${locale === "en" ? "font-normal text-black border-b-2 border-black " : "text-gray-400  cursor-pointer"}`}
    onClick={() => changeLanguage("en")}
  >
    {translations.language.en}
  </a>
</div>


<div
  className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
  aria-label="Toggle navigation"
  aria-expanded={menuOpen ? "true" : "false"}
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span
    className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
      menuOpen ? "rotate-45 translate-y-1.5" : ""
    }`}
  ></span>
  <span
    className={`block w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${
      menuOpen ? "-rotate-45 -translate-y-1.05" : ""
    }`}
  ></span>
</div>

        </div>
      </header>

      <MobileMenu />
    </>
  );
}
