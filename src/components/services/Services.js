'use client';

import Image from 'next/image';
import { useState } from 'react';

const services = [
  {id: 1, title: 'Veb Həllər', icon: '/serviceicon/serviceicon1.png', description: 'Hazırladığımız veb platformalar fərqli sektorlardan olan şirkət və təşkilatların daha səmərəli işləməsini təmin edir.', features: ['Web UI/UX dizayn', 'Front-end proqramlaşdırma', 'Back-end proqramlaşdırma'] },
  {  id: 2, title: 'Mobil Həllər', icon: '/serviceicon/serviceicon2.png', description: 'Mobil tətbiqlər üçün həllərimiz işinizi asanlaşdırır.', features: ['iOS və Android tətbiqləri', 'Mobil UX dizayn', 'Back-end API-lər'] },
  { id: 3, title: 'Enterprise Həllər', icon: '/serviceicon/serviceicon3.png', description: 'Biznes proseslərini optimallaşdıran enterprise həllər.', features: ['ERP və CRM sistemləri', 'Şəbəkə təhlükəsizliyi', 'Data analiz'] },
  { id: 4, title: 'Digər IT Həllər', icon: '/serviceicon/serviceicon4.png', description: 'Fərdi IT həllərimiz işinizi daha effektiv edəcək.', features: ['Cloud həlləri', 'DevOps və CI/CD', 'Məlumat bazası idarəetməsi'] }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="flex h-screen pl-20 pr-2">
     
      <div className="w-2/3 bg-customPurple text-white p-10 ">
      <div className='w-full mt-10'>
          <h1 className="text-black text-3xl">Bu xidmətlər üzrə ekspertik</h1>
          </div>
          <div className="flex mt-20 ">
          <div className="w-1/3 flex flex-col space-y-4">
         
       
         {services.map((service) => (
       <button
       key={service.id}
       onClick={() => setSelectedService(service)}
       className={`relative  h-24 flex items-center space-x-4 p-4 rounded-lg transition-all text-left ${
         selectedService.id === service.id ? " text-white font-semibold shadow-lg" : "bg-transparent"
       }`}
       style={{
         transition: "box-shadow 0.3s ease-in-out",
         boxShadow: selectedService.id === service.id ? "10px 0px 15px rgba(255, 255, 255, 0.5)" : "none",
       }}
     >
       <Image src={service.icon} alt={service.title} width={40} height={40} className="w-10 h-10" />
       <span className="text-lg leading-tight">{service.title}</span>
       {selectedService.id === service.id && (
         <div className="absolute right-0 top-0 h-full w-0.5 bg-white rounded-r-md"></div>
       )}
     </button>
     
      
       ))}
         </div>
         <div className="w-2/3 pl-10">
          
           <p className="mt-4 leading-relaxed text-black text-3xl">{selectedService.description}</p>
           <ul className="mt-4 space-y-2">
             {selectedService.features.map((feature, index) => (
               <li key={index} className="text-lg">• {feature}</li>
             ))}
           </ul>
           <button className="mt-6 bg-white  text-purple-700 px-5 py-3 rounded-lg shadow-md flex items-center justify-center text-lg font-medium">➡</button>
         </div>
          </div>
      
      </div>

      <div className="w-1/3 relative overflow-hidden">
        <Image src="/crocusoftServices.jpeg" alt="Crocusoft Office" layout="fill" objectFit="cover"  />
      </div>
    </div>
  );
}