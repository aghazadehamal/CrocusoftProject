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
import Scene from "../spinnningCube/SpinningCube";

export default function MobileMenuDesktop() {
  const { menuOpen, setMenuOpen } = useMenu();
  const { translations } = useI18n();
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
      className={`absolute top-16 left-0 w-full h-5/6 bg-white  z-40 px-6 py-8 md:px-16 md:py-14 flex flex-col transition-opacity duration-300 ${
        menuOpen ? "opacity-100 visible" : "opacity-0 hidden"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between h-full px-28">
        <motion.div 
          className="w-full md:w-1/2 space-y-6 text-gray-600"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: menuOpen ? 0 : -20, opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: menuOpen ? 0 : -20, opacity: menuOpen ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-base text-gray-400 leading-10 uppercase tracking-wide">{translations.contact.writeUs}</h3>
            <p className="text-xl leading-10   text-black">{translations.contact.email}</p>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: menuOpen ? 0 : -20, opacity: menuOpen ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-base text-gray-400  leading-10  uppercase tracking-wide">{translations.contact.visitUs}</h3>
            <p className="text-xl leading-10   text-black">{translations.contact.address}</p>
          </motion.div>

          <div className="hidden md:flex absolute left-0 top-1/5 flex-col gap-10 mt-40">

<WhiteCube size="normal" style={{ transform: "translate(250px, 180px)" }} />
<PurpleCube size="small" style={{ transform: "translate(270px, -170px)" }} />
<WhiteCube size="huge" style={{ transform: "translate(240px, -220px)" }} />
</div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 space-y-6 text-gray-600"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: menuOpen ? 0 : -20, opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            className="w-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: menuOpen ? 0 : -20, opacity: menuOpen ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-base leading-10 text-gray-400   uppercase tracking-wide">{translations.contact.callUs}</h3>
            <p className="text-xl leading-10    text-black">{translations.contact.phone}</p>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: menuOpen ? 0 : -20, opacity: menuOpen ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-base text-gray-400  leading-10  uppercase tracking-wide">{translations.contact.whatsapp}</h3>
            <p className="text-xl leading-10   text-black flex items-center gap-2">
              <FaFacebook className="text-gray-500" /> {translations.contact.phone}
            </p>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: menuOpen ? 0 : -20, opacity: menuOpen ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-base leading-10 text-gray-400   uppercase tracking-wide">Bizi İzləyin</h3>
            <div className="flex items-center gap-4 mt-2">
              <FaFacebook className="text-gray-500 text-2xl cursor-pointer hover:text-blue-600 transition" />
              <FaInstagram className="text-gray-500 text-2xl cursor-pointer hover:text-pink-600 transition" />
              <FaLinkedin className="text-gray-500 text-2xl cursor-pointer hover:text-blue-800 transition" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 text-black text-lg mt-10 md:mt-0"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: menuOpen ? 0 : -20, opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {Object.keys(translations.menu).map((key, index) => (
            <motion.div 
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: menuOpen ? 0 : -20, opacity: menuOpen ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
            >
              <Link
                href={`/${key}`}
                className="flex items-center text-2xl font-semibold leading-10 gap-3 py-2 transition-all"
              >
                <span className=" text-lg">0{index + 1}.</span> {translations.menu[key]}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
