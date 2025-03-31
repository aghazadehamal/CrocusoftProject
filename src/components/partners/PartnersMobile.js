"use client";

import Image from 'next/image';
import Link from 'next/link';
import { partners } from './ partnersData';
export default function PartnersMobile() {
  return (
    <div className="text-center py-6 px-4">
      <h2 className="text-2xl mb-4 text-left">Müştərilər və tərəfdaşlar</h2>

      <div className="grid grid-cols-2 gap-6">
        {partners.map((partner) => (
          <div key={partner.id} className="flex justify-center items-center">
            <Image
              src={partner.image}
              alt={partner.name}
              width={140}
              height={50}
              className="h-[45px] object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link href="/clients" className="text-[#6643c2] font-light shadow-md text-lg px-4 py-2 inline-block">
          Bütün müştərilərimiz və tərəfdaşlarımız &gt;
        </Link>
      </div>
    </div>
  );
}
