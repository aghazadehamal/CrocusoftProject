"use client";

import Image from 'next/image';
import Link from 'next/link';
import { partners } from './ partnersData';

export default function PartnersDesktop() {
  return (
    <div className="text-center py-10 pl-24 pr-24">
      <div className='pl-20'>
        <h2 className="text-3xl mb-6 text-left">Müştərilər və tərəfdaşlar</h2>
      </div>
      <div className="grid grid-cols-4 gap-20 justify-center items-center px-28">
        {partners.map((partner) => (
          <div key={partner.id} className="flex justify-center items-center">
           <a href={partner.slug} target="_blank" rel="noopener noreferrer">

            <Image
              src={partner.image}
              alt={partner.name}
              width={200}
              height={55}
              className="w-full h-[55px] object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            </a>
           
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/clients" className="text-[#6643c2] font-extralight shadow-md text-xl px-4 py-2 transition duration-300 tracking-wide">
          Bütün müştərilərimiz və tərəfdaşlarımız &gt;
        </Link>
      </div>
    </div>
  );
}
