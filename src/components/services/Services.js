"use client";

import ServicesDesktop from "./ServicesDesktop";
import ServicesMobile from "./ServicesMobile";

export default function Services() {
  return (
    <>
      <div className="hidden md:block">
        <ServicesDesktop />
      </div>
      <div className="md:hidden">
        <ServicesMobile />
      </div>
    </>
  );
}
