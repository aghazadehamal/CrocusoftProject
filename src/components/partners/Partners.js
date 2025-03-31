"use client";

import PartnersDesktop from "./ PartnersDesktop";
import PartnersMobile from "./PartnersMobile";

export default function Partners() {
  return (
    <>
      <div className="hidden md:block">
        <PartnersDesktop />
      </div>
      <div className="md:hidden">
        <PartnersMobile />
      </div>
    </>
  );
}
