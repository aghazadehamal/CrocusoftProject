"use client";

import MobileMenuMobile from "./MobileMenuMobile";
import MobileMenuDesktop from "./MobileMenuDesktop";

export default function MobileMenu() {
  return (
    <>
      <div className="md:hidden">
        <MobileMenuMobile />
      </div>
      <div className="hidden md:block">
        <MobileMenuDesktop />
      </div>
    </>
  );
}
