'use client';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 text-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        <div>
          <h4 className="text-gray-400 text-sm uppercase mb-2">Bizə Yazın</h4>
          <p className="text-lg">sales@crocusoft.com</p>
        </div>
        <div>
          <h4 className="text-gray-400 text-sm uppercase mb-2">Zəng Edin</h4>
          <p className="text-lg">+994512060920</p>
        </div>
        <div>
          <h4 className="text-gray-400 text-sm uppercase mb-2">Gəlin, Danışaq</h4>
          <p className="text-lg">Bakı, Nizami, Heydər Əliyev pr 115, AZ1029</p>
        </div>
        <div>
          <h4 className="text-gray-400 text-sm uppercase mb-2">Bizi İzləyin</h4>
          <div className="flex gap-4 mt-2">
            <FaFacebookF className="text-xl cursor-pointer hover:text-gray-400" />
            <FaInstagram className="text-xl cursor-pointer hover:text-gray-400" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-gray-400" />
            <FaWhatsapp className="text-xl cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-center items-center gap-6">
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
        <p className="text-gray-500 text-sm mt-4 md:mt-0">Designed & Developed by <span className="text-purple-400">Crocusoft</span></p>
      </div>
    </footer>
  );
}
