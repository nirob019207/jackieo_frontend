import type { Metadata } from "next";
import "./globals.css";

import { Inter, Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Mohammad Moba",
  description: "Mohammad Moba",
  icons: {
    icon: "/icon.svg", 
  },
};


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}  ${inter.variable}`}
      >
     
          {
            children
          }
   
      </body>
    </html>
  );
}
