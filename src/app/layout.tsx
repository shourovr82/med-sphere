import Providers from "@/lib/Providers";
import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${poppins.className}  mx-auto  bg-bgColor`}>
          {children}
        </body>
      </html>
    </Providers>
  );
}
