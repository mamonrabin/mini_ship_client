import type { Metadata } from "next";
import "./globals.css";
import { montserrat} from "./font";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn(montserrat.className, "font-sans", geist.variable)}>
      <body className="">{children}</body>
    </html>
  );
}
