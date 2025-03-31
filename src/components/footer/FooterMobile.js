"use client";
import Image from "next/image";
import Link from "next/link";

export default function FooterMobile() {
  return (
    <footer className="bg-gray-900 text-white py-10 text-center px-4">
      <div className="space-y-6">
        <div>
          <h4 className="text-gray-400 uppercase text-sm">Bizə Yazın</h4>
          <p>sales@crocusoft.com</p>
        </div>
        <div>
          <h4 className="text-gray-400 uppercase text-sm">Zəng Edin</h4>
          <p>+994512060920</p>
        </div>
        <div>
          <h4 className="text-gray-400 uppercase text-sm">Ünvan</h4>
          <p>Bakı, Heydər Əliyev pr 115, AZ1029</p>
        </div>
        <div>
          <h4 className="text-gray-400 uppercase text-sm">Sosial</h4>
          <div className="flex justify-center gap-4 mt-2">
          <>
  {["facebook", "instagram", "linkedin"].map((name) => (
    <Image
      key={name}
      src={`/footericons/${name}.svg`}
      alt={name}
      width={28}
      height={28}
      className="hover:opacity-70 transition"
    />
  ))}
  <Image
    src="/footericons/whatsapp.png"
    alt="WhatsApp"
    width={28}
    height={28}
    className="hover:opacity-70 transition"
  />
</>

          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Designed by
            <span className="text-purple-400 ml-1">Crocusoft</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
