"use client";

import { services } from "./servicesData";
import Image from "next/image";
import { useState } from "react";

export default function ServicesMobile() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold text-customPurple mb-4">Xidmətlərimiz</h1>

      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white"
            onClick={() => setSelectedService(service)}
          >
            <div className="flex items-center gap-4">
              <Image src={service.icon} alt={service.title} width={40} height={40} />
              <h2 className="text-lg font-bold">{service.title}</h2>
            </div>

            {selectedService.id === service.id && (
              <div className="mt-2">
                <p className="text-sm text-gray-700">{service.description}</p>
                <ul className="mt-2 space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm">• {feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
