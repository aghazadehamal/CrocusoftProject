"use client";

import { useState } from "react";
import WhiteCube from "../WhiteCube";
import PurpleCube from "../PurpleCube";

export default function ContactFormDesktop() {
  const [month, setMonth] = useState(1);
  const [budget, setBudget] = useState(5000);

  const getMonthPosition = (value) => ((value - 1) / 11) * 100;
  const getBudgetPosition = (value) => ((value - 5000) / 95000) * 100;

  return (
    <section className="relative flex justify-center items-center px-12 py-32">

      <div className="hidden md:flex absolute left-0 top-1/5 flex-col gap-10">
        <WhiteCube size="small" style={{ transform: "translate(-50px, -570px)" }} />
        <PurpleCube size="small" style={{ transform: "translate(-20px, -750px)" }} />
        <WhiteCube size="big" style={{ transform: "translate(50px, -720px)" }} />
      </div>

      <div className="max-w-2xl mx-auto py-12 px-10">
        <h2 className="text-7xl font-semibold text-customPurple mb-6">Bizimlə İşlə</h2>
        <p className="text-gray-600 mb-10 text-2xl leading-relaxed">
          İdeyanızı uğurlu layihəyə çevrilməsi üçün ən son texnoloji imkanlardan istifadə edəcəyik.
        </p>

     
        <label className="block text-gray-600 text-2xl mb-2">Layihəniz haqqında məlumat verin</label>
        <textarea
          className="w-full border border-gray-300 rounded-lg p-3"
          placeholder="Hazırlanmasını istədiyiniz layihəni qısaca izah edin"
          rows={4}
        ></textarea>

  
        <div className="mt-8">
          <label className="block text-2xl mb-4 text-gray-600">Layihə üçün planlaşdırdığınız tarix</label>
          <div className="relative">
            <div
              className="absolute -top-3 text-purple-700 text-sm"
              style={{ left: `calc(${getMonthPosition(month)}% - 16px)` }}
            >
              {month} ay
            </div>
            <input
              type="range"
              min="1"
              max="12"
              value={month}
              onChange={(e) => setMonth(parseInt(e.target.value))}
              className="w-full h-0.5 accent-purple-600"
            />
            <div className="flex justify-between text-sm text-purple-700 mt-2">
              <span>1 ay</span>
              <span>12 ay</span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <label className="block text-2xl mb-4 text-gray-600">Layihə üçün planlaşdırdığınız büdcə</label>
          <div className="relative">
            <div
              className="absolute -top-3 text-purple-700 text-sm"
              style={{ left: `calc(${getBudgetPosition(budget)}% - 24px)` }}
            >
              {budget} AZN
            </div>
            <input
              type="range"
              min="5000"
              max="100000"
              step="100"
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value))}
              className="w-full h-0.5 accent-purple-600"
            />
            <div className="flex justify-between text-sm text-purple-700 mt-2">
              <span>5000 AZN</span>
              <span>100000 AZN</span>
            </div>
          </div>
        </div>

       
        <div className="mt-10">
          <h3 className="text-2xl text-gray-600 mb-4">Əlaqə vasitələriniz?</h3>

          <label className="block text-lg text-gray-500 mt-10">Adınız</label>
          <input type="text" className="w-full border-b border-gray-300 py-2 mb-4" />

          <label className="block text-lg text-gray-500 mt-10">E-mailiniz</label>
          <input type="email" className="w-full border-b border-gray-300 py-2 mb-4" />

          <label className="block text-lg text-gray-500 mt-10">Nömrəniz</label>
          <div className="flex items-center border-b border-gray-300 py-2 mb-4">
            <span className="mr-2">🇦🇿</span>
            <input type="tel" placeholder="051 206 09 20" className="w-full" />
          </div>

          <label className="block text-lg text-gray-500 mt-10">Şirkətinizin Adı</label>
          <input type="text" className="w-full border-b border-gray-300 py-2 mb-4" />

          <div className="flex items-start gap-2 mb-4">
            <input type="checkbox" className="mt-1 w-5 h-5 accent-purple-600" />
            <span className="text-gray-600">
              Mən <a href="#" className="text-purple-600 underline">şərtlərlə</a> razıyam.
            </span>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 flex justify-center mb-6">
            <span className="text-gray-500">[ reCAPTCHA ]</span>
          </div>

          <div className="text-center">
            <button className="w-96 bg-customPurple text-white rounded-lg text-lg py-5 hover:bg-purple-700 transition">
              LAYİHƏNİ BİZƏ GÖNDƏRİN
            </button>
          </div>
        </div>
      </div>


      <div className="hidden md:flex absolute right-0 top-1/5 flex-col gap-10">
        <WhiteCube size="tiny" color="#ebebf2" style={{ transform: "translate(-120px,120px)" }} />
        <WhiteCube size="big" color="#ebebf2" style={{ transform: "translate(30px, -570px)" }} />
        <WhiteCube size="big" color="#bfafe9" style={{ transform: "translate(20px, -590px)" }} />
        <WhiteCube size="big" color="#ebebf2" style={{ transform: "translate(-150px, -950px)" }} />
      </div>
    </section>
  );
}
