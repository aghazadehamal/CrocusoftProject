"use client";

import { useMenu } from "@/context/MenuContext";
import { useI18n } from "@/context/I18nContext";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../mobileMenu/MobileMenu";

export default function HeaderMobile() {
  const { menuOpen, setMenuOpen } = useMenu();
  const { locale, translations, changeLanguage } = useI18n();

  return (
    <>
      <header className="md:hidden  top-0 left-0 w-full bg-white z-50 px-4 py-4 flex justify-between items-center h-16">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo/crocusoftLogo.png"
            alt="Crocusoft Logo"
            width={120}
            height={30}
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <a
            href="https://api.whatsapp.com/send?phone=994512060920"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white text-sm p-2 rounded-lg ml-2 flex items-center"
          >
            <Image src="/telephone.png" alt="WhatsApp ilə əlaqə" width={15} height={15} />
          </a>
          <a className="bg-customPurple text-white text-sm px-4 py-2 rounded-lg">
            {translations.menu.contact}
          </a>
        </div>

          <button
            className="text-black text-2xl ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>
        </div>
      </header>

      <MobileMenu />
    </>
  );
}
