'use client';

import Image from 'next/image';

const partners = [
  { id: 1, name: 'Dövlət Gömrük Komitəsi', image: '/kapital.png' },
  { id: 2, name: 'Ədliyyə Nazirliyi', image: '/kapital.png' },
  { id: 3, name: 'Kapital Bank', image: '/kapital.png' },
  { id: 4, name: 'PAŞA Holding', image: '/kapital.png' },
  { id: 5, name: 'PAŞA Sığorta', image: '/kapital.png' },
  { id: 6, name: 'PAŞA Həyat', image: '/kapital.png' },
  { id: 7, name: 'CaspianTech', image: '/kapital.png' },
  { id: 8, name: 'Veysəloğlu', image: '/kapital.png' },
  { id: 9, name: 'OBA', image: '/kapital.png' },
  { id: 10, name: 'Topaz', image: '/kapital.png' },
  { id: 11, name: 'Araz Supermarket', image: '/kapital.png' },
  { id: 12, name: 'Milliön', image: '/kapital.png' },
  { id: 13, name: 'Azərbaycan Ticarət-Sənaye Palatası', image: '/kapital.png' },
  { id: 14, name: '166 Yükdaşıma', image: '/kapital.png' },
  { id: 15, name: 'AMCHAM', image: '/kapital.png' },
  { id: 16, name: 'AMCHAM', image: '/kapital.png' },
  { id: 17, name: 'Dövlət Gömrük Komitəsi', image: '/kapital.png' },
  { id: 18, name: 'Ədliyyə Nazirliyi', image: '/kapital.png' },
  { id: 19, name: 'Kapital Bank', image: '/kapital.png' },
  { id: 20, name: 'PAŞA Holding', image: '/kapital.png' },
  { id: 21, name: 'PAŞA Sığorta', image: '/kapital.png' },
  { id: 22, name: 'PAŞA Həyat', image: '/kapital.png' },
  { id: 23, name: 'CaspianTech', image: '/kapital.png' },
  { id: 24, name: 'Veysəloğlu', image: '/kapital.png' },
  { id: 25, name: 'OBA', image: '/kapital.png' },
  { id: 26, name: 'Topaz', image: '/kapital.png' },
  { id: 27, name: 'Araz Supermarket', image: '/kapital.png' },
  { id: 28, name: 'Milliön', image: '/kapital.png' },
  { id: 29, name: 'Azərbaycan Ticarət-Sənaye Palatası', image: '/kapital.png' },
  { id: 30, name: '166 Yükdaşıma', image: '/kapital.png' },
  { id: 31, name: 'AMCHAM', image: '/kapital.png' },
  { id: 32, name: 'AMCHAM', image: '/kapital.png' },
  { id: 33, name: 'Azərbaycan Ticarət-Sənaye Palatası', image: '/kapital.png' },
  { id: 34, name: '166 Yükdaşıma', image: '/kapital.png' },
  { id: 35, name: 'AMCHAM', image: '/kapital.png' },
  { id: 36, name: 'AMCHAM', image: '/kapital.png' },
];

export default function CustomerSection() {
  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-semibold mb-6">Müştərilər və tərəfdaşlar</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-14 justify-center items-center pl-28 pr-28">
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
      <div className="mt-10">
        {/* <button className="px-6 py-2 text-purple-600 border border-purple-300 rounded-lg hover:bg-purple-100 transition duration-300">
          Bütün müştərilərimiz və tərəfdaşlarımız &gt;
        </button> */}
      </div>
    </div>
  );
}
