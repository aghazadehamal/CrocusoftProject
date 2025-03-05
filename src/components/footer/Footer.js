'use client';
import Image from "next/image";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-4 text-center">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-8 ">
        <div>
          <h4 className="text-gray-400 text-lg uppercase mb-2">Bizə Yazın</h4>
          <p className="text-lg">sales@crocusoft.com</p>
        </div>
        <div>
          <h4 className="text-gray-400 text-lg uppercase mb-2">Zəng Edin</h4>
          <p className="text-lg">+994512060920</p>
        </div>
        <div>
          <h4 className="text-gray-400 text-lg uppercase mb-2">Gəlin, Danışaq</h4>
          <p className="text-lg">Bakı, Nizami, Heydər Əliyev pr 115, AZ1029</p>
        </div>
        <div>
          <h4 className="text-gray-400 text-lg uppercase mb-2">Bizi İzləyin</h4>
          <div className="flex gap-4 mt-2 justify-center">
  <Image
    src="/footericons/facebook.svg"
    alt="Facebook"
    width={30}
    height={30}
    className="cursor-pointer hover:opacity-70 transition duration-300"
  />
  <Image
    src="/footericons/instagram.svg"
    alt="Instagram"
    width={30}
    height={30}
    className="cursor-pointer hover:opacity-70 transition duration-300"
  />
  <Image
    src="/footericons/linkedin.svg"
    alt="LinkedIn"
    width={30}
    height={30}
    className="cursor-pointer hover:opacity-70 transition duration-300"
  />
  <Image
    src="/footericons/whatsapp.png"
    alt="WhatsApp"
    width={30}
    height={30}
    className="cursor-pointer hover:opacity-70 transition duration-300"
  />
</div>


        </div>
      </div>
      <div className="  border-gray-700 pt-6 text-lg flex flex-col md:flex-row justify-center items-center gap-6 mt-28">
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400">İşlər</a>
          <a href="#" className="hover:text-gray-400">Xidmətlərimiz</a>
          <a href="#" className="hover:text-gray-400">Müştərilər</a>
          <a href="#" className="hover:text-gray-400">Bloqlar</a>
          <a href="#" className="hover:text-gray-400">Bizi seç</a>
          <a href="#" className="hover:text-gray-400">Bizimlə Əlaqə</a>
          <a href="#" className="hover:text-gray-400">Haqqımızda</a>
          <a href="#" className="hover:text-gray-400">Crocusoft Academy</a>
        </div>
       
       
      </div>
      <div className="flex justify-end mt-28 pr-48">
  <p className="text-gray-500 text-sm mt-4 md:mt-0 flex items-center gap-2">
    Designed & Developed by  
    <Image
      src="/footericons/crocusoft.png"
      alt="Crocusoft Logo"
      width={30}
      height={30}
      className="cursor-pointer hover:opacity-70 transition duration-300"
    />
    <span className="text-purple-400">Crocusoft</span>
  </p>
</div>


    </footer>
  );
}
