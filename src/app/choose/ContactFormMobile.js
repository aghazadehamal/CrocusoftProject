"use client";

import { useState } from "react";

export default function ContactFormMobile() {
  const [month, setMonth] = useState(1);
  const [budget, setBudget] = useState(5000);

  return (
    <section className="px-6 py-20">
      <h2 className="text-4xl font-bold text-customPurple mb-6">Bizimlə İşlə</h2>
      <p className="text-gray-600 mb-6">
        İdeyanızı uğurlu layihəyə çevirmək üçün bizimlə əlaqə saxlayın.
      </p>

      <textarea
        placeholder="Layihə haqqında məlumat"
        rows={4}
        className="w-full border border-gray-300 rounded-lg p-3 mb-6"
      ></textarea>

      <input type="text" placeholder="Adınız" className="w-full border-b py-2 mb-4" />
      <input type="email" placeholder="E-mail" className="w-full border-b py-2 mb-4" />
      <input type="tel" placeholder="Telefon nömrəsi" className="w-full border-b py-2 mb-4" />
      <input type="text" placeholder="Şirkət adı" className="w-full border-b py-2 mb-6" />

      <button className="w-full bg-customPurple text-white py-4 rounded-lg text-lg">
        LAYİHƏNİ BİZƏ GÖNDƏRİN
      </button>
    </section>
  );
}
