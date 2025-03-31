"use client";

import ContactFormDesktop from "./ContactFormDesktop";
import ContactFormMobile from "./ContactFormMobile";

export default function ContactForm() {
  return (
    <>
      <div className="hidden md:block">
        <ContactFormDesktop />
      </div>
      <div className="md:hidden">
        <ContactFormMobile />
      </div>
    </>
  );
}
