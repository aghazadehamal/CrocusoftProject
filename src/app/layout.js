import "./styles/globals.css";
import { Montserrat } from "next/font/google";
import Providers from "./Providers"; 

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Crocusoft | Software",
  icons: {
    icon: "/footericons/crocusoft.png", 
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="az" className={montserrat.variable}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
