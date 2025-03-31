"use client";

import AcademyHeroDesktop from "./AcademyHeroDesktop";
import AcademyHeroMobile from "./AcademyHeroMobile";

export default function AcademyHero() {
  return (
    <>
      <div className="hidden md:block">
        <AcademyHeroDesktop />
      </div>
      <div className="md:hidden">
        <AcademyHeroMobile />
      </div>
    </>
  );
}
