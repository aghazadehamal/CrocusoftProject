"use client";

import ProjectsMobile from "./ ProjectsMobile";
import ProjectsDesktop from "./ProjectsDesktop";

export default function Projects() {
  return (
    <>
      <div className="hidden md:block">
        <ProjectsDesktop />
      </div>
      <div className="md:hidden">
        <ProjectsMobile />
      </div>
    </>
  );
}
