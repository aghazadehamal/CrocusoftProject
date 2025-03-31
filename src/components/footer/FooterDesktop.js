"use client";
import Image from "next/image";
import Link from "next/link";

export default function FooterDesktop() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-4 text-center">
      <div className="container mx-auto px-10 grid grid-cols-4 gap-8">
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
          {["facebook", "instagram", "linkedin"].map((name) => (
    <Image
      key={name}
      src={`/footericons/${name}.svg`}
      alt={name}
      width={30}
      height={30}
      className="cursor-pointer hover:opacity-70 transition duration-300"
    />
  ))}
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

      <div className="pt-6 text-lg flex justify-center items-center gap-6 mt-28">
        <div className="flex gap-6 flex-wrap justify-center">
          {[
            "İşlər",
            "Xidmətlərimiz",
            "Müştərilər",
            "Bloqlar",
            "Bizi seç",
            "Bizimlə Əlaqə",
            "Haqqımızda",
            "Crocusoft Academy",
          ].map((item, index) => (
            <a key={index} href="#" className="hover:text-gray-400">
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-28 pr-48">
        <p className="text-gray-500 text-sm flex items-center gap-2">
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
