"use client";

import ActionsDesktop from "./ActionsDesktop";
import ActionsMobile from "./ActionsMobile";

export default function Actions() {
  return (
    <>
      <div className="hidden md:block">
        <ActionsDesktop />
      </div>
      <div className="md:hidden">
        <ActionsMobile />
      </div>
    </>
  );
}
