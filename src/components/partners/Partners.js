'use client';

import Image from 'next/image';

const partners = [
  { id: 1, name: 'Dövlət Gömrük Komitəsi', image: '/partners/partner1.png' },
  { id: 2, name: 'Ədliyyə Nazirliyi', image: '/partners/partner2.png' },
  { id: 3, name: 'Kapital Bank', image: '/partners/partner3.png' },
  { id: 4, name: 'PAŞA Holding', image: '/partners/partner4.png' },
  { id: 5, name: 'PAŞA Sığorta', image: '/partners/partner5.png' },
  { id: 6, name: 'PAŞA Həyat', image: '/partners/partner6.png' },
  { id: 7, name: 'CaspianTech', image: '/partners/partner7.png' },
  { id: 8, name: 'Veysəloğlu', image: '/partners/partner8.png' },
  { id: 9, name: 'OBA', image: '/partners/partner9.png' },
  { id: 10, name: 'Topaz', image: '/partners/partner10.png' },
  { id: 11, name: 'Araz Supermarket', image: '/partners/partner11.png' },
  { id: 12, name: 'Milliön', image: '/partners/partner12.png' },
  { id: 13, name: 'Azərbaycan Ticarət-Sənaye Palatası', image: '/partners/partner14.png' },
  { id: 14, name: '166 Yükdaşıma', image: '/partners/partner13.png' },
  { id: 15, name: 'AMCHAM', image: '/partners/partner15.png' },
  { id: 16, name: 'AMCHAM', image: '/partners/partner16.png' }
];

export default function Partners() {
  return (
    <div className="text-center py-10 pl-24 pr-24">
     <div className='pl-20'>
      <h2 className="text-3xl mb-6 text-left">Müştərilər və tərəfdaşlar</h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-20 justify-center items-center pl-28 pr-28 ">
        {partners.map((partner) => (
         <div key={partner.id} className="flex justify-center items-center">
         <Image
           src={partner.image}
           alt={partner.name}
           width={200}
           height={55}
           className="w-full h-[55px] object-contain grayscale hover:grayscale-0 transition duration-300"
         />
       </div>
       
        ))}
      </div>
      <div className="mt-10">
        <button className=" text-[#6643c2]  font-extralight shadow-md pt-4 text-xl pb-4 pl-4 pr-4 transition duration-300 tracking-wide">
        Bütün müştərilərimiz və tərəfdaşlarımız &gt;
        </button>
      </div>
    </div>
  );
}
