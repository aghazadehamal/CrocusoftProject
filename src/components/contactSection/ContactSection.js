"use client";

import ContactSectionDesktop from "./ContactSectionDesktop";
import ContactSectionMobile from "./ContactSectionMobile";

export default function ContactSection() {
  return (
    <>
      <div className="hidden md:block">
        <ContactSectionDesktop />
      </div>
      <div className="md:hidden">
        <ContactSectionMobile />
      </div>
    </>
  );
}
