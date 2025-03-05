"use client";
import { MenuProvider } from "../context/MenuContext";
import I18nProvider from "@/context/I18nContext";
import { Montserrat } from "next/font/google";

import "./styles/globals.css";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="az" className={montserrat.variable}>
      <body className="font-sans">
        <I18nProvider>
          <MenuProvider>{children}</MenuProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
