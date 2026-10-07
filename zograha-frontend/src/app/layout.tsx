import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader, Schibsted_Grotesk } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";
import "./site.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Zograha Technologies | Digital Solutions & Technology",
    template: "%s | Zograha Technologies",
  },
  description:
    "Zograha Technologies builds dependable websites, applications and digital technology solutions for ambitious businesses.",
  openGraph: {
    type: "website",
    siteName: "Zograha Technologies",
    title: "Zograha Technologies | Digital Solutions & Technology",
    description: "Dependable technology delivery for ambitious teams.",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
  keywords: [
    "Zograha Technologies",
    "Web Development",
    "Software Development",
    "E-commerce",
    "Digital Solutions",
    "Madurai",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${schibsted.variable} ${newsreader.variable} ${plexMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="site-body">{children}</body>
    </html>
  );
}
