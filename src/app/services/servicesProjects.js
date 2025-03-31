"use client";

import ServicesProjectsDesktop from "./ServicesProjectsDesktop";
import ServicesProjectsMobile from "./ServicesProjectsMobile";

export default function ServicesProjects() {
  return (
    <>
      <div className="hidden md:block">
        <ServicesProjectsDesktop />
      </div>
      <div className="md:hidden">
        <ServicesProjectsMobile />
      </div>
    </>
  );
}
