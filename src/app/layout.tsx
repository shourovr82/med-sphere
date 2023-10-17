import Providers from "@/lib/Providers";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className}  mx-auto  bg-bgColor`}>
          {children}
        </body>
      </html>
    </Providers>
  );
}
