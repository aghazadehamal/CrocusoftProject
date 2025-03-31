"use client";

import AboutBodyDesktop from "./AboutBodyDesktop";
import AboutBodyMobile from "./AboutBodyMobile";

export default function AboutBody() {
  return (
    <>
      <div className="hidden md:block">
        <AboutBodyDesktop />
      </div>
      <div className="md:hidden">
        <AboutBodyMobile />
      </div>
    </>
  );
}
