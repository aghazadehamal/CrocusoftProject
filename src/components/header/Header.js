"use client";

import { useMenu } from "@/context/MenuContext";
import { useI18n } from "../../context/I18nContext"; 
import { usePathname } from "next/navigation"; 
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../mobileMenu/MobileMenu";

export default function Header() {
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
    };

    setPageTitle(pageTitles[pathname] !== undefined ? pageTitles[pathname] : "");
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50 px-6 md:px-44 py-4 flex justify-between items-center h-16 ">
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
            <a className="bg-customPurple text-white px-4 py-2 rounded-lg">
              {translations.menu.contact} 
            </a>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <button
              className={`text-sm ${locale === "az" ? "font-bold text-black" : "text-gray-400"}`}
              onClick={() => changeLanguage("az")}
            >
              {translations.language.az} 
            </button>
            <span className="text-gray-400">|</span>
            <button
              className={`text-sm ${locale === "en" ? "font-bold text-black" : "text-gray-400"}`}
              onClick={() => changeLanguage("en")}
            >
              {translations.language.en} 
            </button>
          </div>

          <button className="text-black text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </button>
        </div>
      </header>

      <MobileMenu />
    </>
  );
}
