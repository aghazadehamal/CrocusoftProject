"use client";

import WorksHeroDesktop from "./WorksHeroDesktop";
import WorksHeroMobile from "./WorksHeroMobile";

export default function WorksHero() {
  return (
    <>
      <div className="hidden md:block">
        <WorksHeroDesktop />
      </div>
      <div className="md:hidden">
        <WorksHeroMobile />
      </div>
    </>
  );
}
