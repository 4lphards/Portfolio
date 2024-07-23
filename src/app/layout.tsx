import type { Metadata } from "next";
import { poppins } from "../app/assets/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maulana Yusuf",
  description: "Portfolio website of Maulana Yusuf, a software engineer based in Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
