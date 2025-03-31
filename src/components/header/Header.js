"use client";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {
  return (
    <>
     
      <div className="md:hidden">
        <HeaderMobile />
      </div>

  
      <div className="hidden md:block">
        <HeaderDesktop />
      </div>
    </>
  );
}
