"use client";

import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export default function Footer() {
  return (
    <>
      <div className="hidden md:block">
        <FooterDesktop />
      </div>
      <div className="md:hidden">
        <FooterMobile />
      </div>
    </>
  );
}
