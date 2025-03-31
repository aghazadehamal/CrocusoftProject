

'use client';
import Image from 'next/image';
import { partners } from './customerData';

export default function CustomerSectionDesktop() {
  return (
    <div className="py-14">
      <h2 className="text-4xl font-semibold px-48 mb-20">Müştərilər və tərəfdaşlar</h2>
      <div className="grid grid-cols-4 gap-14 justify-center items-center px-36">
        {partners.map((partner) => (
          <div key={partner.id} className="flex justify-center items-center">
            <Image
              src={partner.image}
              alt={partner.name}
              width={200}
              height={120}
              className="grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
