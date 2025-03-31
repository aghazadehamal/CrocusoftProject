"use client";

import Image from "next/image";
import { useState } from "react";
import { useMenu } from "@/context/MenuContext";
import { services } from "./servicesData";

export default function ServicesDesktop() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const { menuOpen } = useMenu();

  return (
    <div className={`flex h-screen pl-20 pr-2 ${menuOpen ? "translate-y-72" : "translate-y-0"}`}>
      <div className="w-2/3 bg-customPurple text-white p-10">
        <div className="w-full mt-10">
          <h1 className="text-black text-3xl">Bu xidmətlər üzrə ekspertik</h1>
        </div>

        <div className="flex mt-20">
          <div className="w-1/3 flex flex-col space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`relative h-24 flex items-center space-x-4 p-4 rounded-lg transition-all text-left ${
                  selectedService.id === service.id ? "text-white font-semibold shadow-lg" : "bg-transparent"
                }`}
                style={{
                  transition: "box-shadow 0.3s ease-in-out",
                  boxShadow:
                    selectedService.id === service.id
                      ? "10px 0px 15px rgba(255, 255, 255, 0.5)"
                      : "none",
                }}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
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
            <button className="mt-6 bg-white text-purple-700 px-5 py-3 rounded-lg shadow-md text-lg font-medium">➡</button>
          </div>
        </div>
      </div>

      <div className="w-1/3 relative overflow-hidden">
        <Image
          src="/crocusoftServices.jpeg"
          alt="Crocusoft Office"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
