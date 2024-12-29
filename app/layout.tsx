import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const fontFamily = Plus_Jakarta_Sans({
  variable: "--font-main",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Affinity AI",
  description: "Affinity Dealer Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontFamily.variable} antialiased scroll-smooth`}>
        {children}
        <Toaster position="bottom-center" visibleToasts={1} expand={false} />
      </body>
    </html>
  );
}
