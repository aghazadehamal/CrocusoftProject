"use client";

import { MenuProvider } from "../context/MenuContext";
import I18nProvider from "@/context/I18nContext";

export default function Providers({ children }) {
  return (
    <I18nProvider>
      <MenuProvider>{children}</MenuProvider>
    </I18nProvider>
  );
}
