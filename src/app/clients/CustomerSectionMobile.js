

'use client';
import Image from 'next/image';
import { partners } from './customerData';

export default function CustomerSectionMobile() {
  return (
    <div className="py-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-10">Müştərilər və tərəfdaşlar</h2>
      <div className="grid grid-cols-2 gap-8">
        {partners.map((partner) => (
          <div key={partner.id} className="flex justify-center items-center">
            <Image
              src={partner.image}
              alt={partner.name}
              width={140}
              height={100}
              className="grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
