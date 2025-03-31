"use client";

import WhiteCube from "@/app/WhiteCube";
import PurpleCube from "@/app/PurpleCube";

import { useMenu } from "@/context/MenuContext";
import { useI18n } from "../../context/I18nContext";
import { usePathname } from "next/navigation"; 
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function MobileMenuMobile() {
  const { menuOpen, setMenuOpen } = useMenu();
  const { locale, translations, changeLanguage } = useI18n();
  const pathname = usePathname(); 

  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [pathname]); 

  return (
    <motion.div
    initial={{ y: "-100%" }}
    animate={{ y: menuOpen ? "0" : "-100%" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className={` inset-0 top-16 bg-white z-[9999] px-6 py-8 md:px-16 md:py-14 flex flex-col transition-opacity duration-300 ${
      menuOpen ? "opacity-100 visible" : "opacity-0 hidden"
    }`}
  >
  
      <div className="flex flex-col justify-between h-full px-4">
        <div className="space-y-6 text-gray-600">
          <div className="flex gap-4 mb-6">
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

          <div>
            <h3 className="text-base text-gray-400 uppercase tracking-wide">{translations.contact.writeUs}</h3>
            <p className="text-lg text-black">{translations.contact.email}</p>
          </div>

          <div>
            <h3 className="text-base text-gray-400 uppercase tracking-wide">{translations.contact.visitUs}</h3>
            <p className="text-lg text-black">{translations.contact.address}</p>
          </div>

          <div>
            <h3 className="text-base text-gray-400 uppercase tracking-wide">{translations.contact.callUs}</h3>
            <p className="text-lg text-black">{translations.contact.phone}</p>
          </div>

          <div>
            <h3 className="text-base text-gray-400 uppercase tracking-wide">{translations.contact.whatsapp}</h3>
            <p className="text-lg text-black">{translations.contact.phone}</p>
          </div>

          <div>
            <h3 className="text-base text-gray-400 uppercase tracking-wide">Bizi İzləyin</h3>
            <div className="flex gap-4 mt-2">
              <FaFacebook className="text-gray-500 text-xl hover:text-blue-600" />
              <FaInstagram className="text-gray-500 text-xl hover:text-pink-600" />
              <FaLinkedin className="text-gray-500 text-xl hover:text-blue-800" />
            </div>
          </div>
        </div>

        <div className="text-black text-lg mt-10 space-y-2">
          {Object.keys(translations.menu).map((key, index) => (
            <Link
              key={index}
              href={`/${key}`}
              className="flex items-center text-lg font-medium gap-3 py-2"
            >
              <span className="text-sm">0{index + 1}.</span> {translations.menu[key]}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
