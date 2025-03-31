"use client";

import TechnologiesDesktop from "./TechnologiesDesktop";
import TechnologiesMobile from "./TechnologiesMobile";

export default function Technologies() {
  return (
    <>
      <div className="hidden md:block">
        <TechnologiesDesktop />
      </div>
      <div className="md:hidden">
        <TechnologiesMobile />
      </div>
    </>
  );
}
