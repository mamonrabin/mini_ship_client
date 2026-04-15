import type { Metadata } from "next";
import "./globals.css";
import { playfairDisplay } from "./font";

export const metadata: Metadata = {
  title: "mini-ecommerce",
  description:
    "A mini e-commerce application built with Next.js, showcasing a collection of products with detailed information and an intuitive user interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.className}`}>
      <body className="">{children}</body>
    </html>
  );
}
