import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import AboutUsLayout from "@/app/about-us/layout";
import Sales from "@/app/about-us/company/jobs/sales/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Next Train",
        default: "Next Train",
    },
    description: "Train Info",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation />
      {children}
      </body>
    </html>
  );
}


