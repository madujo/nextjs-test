import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import Navigation from "@/components/navigation";

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
      <body>
      <Navigation />
      {children}
      </body>
    </html>
  );
}


