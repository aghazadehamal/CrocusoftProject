"use client";

import StatsSectionDesktop from "./StatsSectionDesktop";
import StatsSectionMobile from "./StatsSectionMobile";

export default function StatsSection() {
  return (
    <>
      <div className="hidden md:block">
        <StatsSectionDesktop />
      </div>
      <div className="md:hidden">
        <StatsSectionMobile />
      </div>
    </>
  );
}
