import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { ScrollButton } from "./components/ScrollButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Ositos Gaming",
  description: "Former gaming community of friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ScrollButton />
        {children}
      </body>
    </html>
  );
}
