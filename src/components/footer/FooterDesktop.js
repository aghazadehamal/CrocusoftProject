"use client";
import Image from "next/image";
import Link from "next/link";

export default function FooterDesktop() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-4 text-center">
      <div className="container mx-auto px-10 grid grid-cols-4 gap-8">
        <div>
          <h4   className="text-gray-400 text-lg uppercase mb-2">Bizə Yazın</h4>
          <a href="mailto:academy@crocusoft.com"  className="text-lg">sales@crocusoft.com</a>
        </div>
        <div>
          <h4 className="text-gray-400 text-lg uppercase mb-2">Zəng Edin</h4>
          <a href=" tel:+994102322535" className="text-lg">+994512060920</a>
        </div>
        <div>
          <h4 className="text-gray-400 text-lg uppercase mb-2">Gəlin, Danışaq</h4>
          <a href="https://www.google.com/maps/place/Crocusoft/@40.3827525,49.8664001,18z/data=!3m1!4b1!4m5!3m4!1s0x40307dc65fb18da7:0xafbb4d94e4be6a00!8m2!3d40.3826554!4d49.8673458" className="text-lg">Bakı, Nizami, Heydər Əliyev pr 115, AZ1029</a>
        </div>
        <div>
          <h4 className="text-gray-400 text-lg uppercase mb-2">Bizi İzləyin</h4>
          <div className="flex gap-4 mt-2 justify-center">
         
         <a target="_blank" href="https://www.facebook.com/crocusoft/">
         <Image
    src="/footericons/whatsapp.png"
    alt="WhatsApp"
    width={30}
    height={30}
    className="cursor-pointer hover:opacity-70 transition duration-300"
  />

         </a>
 
<a target="_blank" href="https://www.facebook.com/crocusoft/">
<Image
    src="/footericons/facebook.svg"
    alt="WhatsApp"
    width={30}
    height={30}
    className="cursor-pointer hover:opacity-70 transition duration-300"
  />
</a>


<a target="_blank" href="https://www.instagram.com/crocusoft.llc/">
<Image
    src="/footericons/instagram.svg"
    alt="WhatsApp"
    width={30}
    height={30}
    className="cursor-pointer hover:opacity-70 transition duration-300"
  />
</a>


<a target="_blank" href="https://www.linkedin.com/company/crocusoft/mycompany/">
<Image
    src="/footericons/linkedin.svg"
    alt="WhatsApp"
    width={30}
    height={30}
    className="cursor-pointer hover:opacity-70 transition duration-300"
  />
</a>

          </div>
        </div>
      </div>

      <div className="pt-6 text-lg flex justify-center items-center gap-6 mt-28">
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="/works" >İşlər</a>
          <a href="/services" >Xidmətlərimiz</a>
          <a href="/clients" >Müştərilər</a>
          <a href="/blogs" >Bloqlar</a>
          <a href="/choose" >Bizimlə Əlaqə</a>
          <a href="/about" >Haqqımızda</a>
          <a href="/academy" >Crocusoft Academy</a>
          
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
