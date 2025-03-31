"use client";

import ContactInfoDesktop from "./ContactInfoDesktop";
import ContactInfoMobile from "./ContactInfoMobile";

export default function ContactInfo() {
  return (
    <>
      <div className="hidden md:block">
        <ContactInfoDesktop />
      </div>
      <div className="md:hidden">
        <ContactInfoMobile />
      </div>
    </>
  );
}
