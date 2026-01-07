import "./globals.css";
import type { Metadata } from "next";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Solon — Bitcoin-Native Governance",
  description: "Radical transparency and cryptographic democracy for organizations.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Solon",
    description: "Bitcoin-Native Governance for the Digital Age",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    siteName: "Solon",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

