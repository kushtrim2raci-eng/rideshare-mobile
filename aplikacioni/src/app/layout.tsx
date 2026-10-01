import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "RideShare · Udhëtimet për AAB",
  description: "Ushtrimi i Javës 3: udhëtime fiktive dhe kërkesë e simuluar.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="sq"><body>{children}</body></html>;
}
