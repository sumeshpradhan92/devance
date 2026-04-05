import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Devance – Digital Web Development Agency | Bhawanipatna, Odisha",
    template: "%s | Devance",
  },
  description:
    "Devance online is a digital web development agency based in Bhawanipatna, Kalahandi, Odisha. We craft modern, fast, SEO-optimised websites and web apps for businesses across India.",
  keywords: [
    "web development agency Bhawanipatna",
    "web design Kalahandi",
    "Next.js agency India",
    "digital agency Odisha",
    "Marketing agency Odisha",
    "Marketing agency BHawanipatna",
    "Devance",
    "Devance online",
    "Devance online Agency",
    "website development Bhawanipatna",
  ],
  authors: [{ name: "Sumesh Kumar Pradhan", url: "https://devance.online" }],
  creator: "Devance",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://devance.online",
    siteName: "Devance",
    title: "Devance online – Digital Web Development Agency",
    description:
      "Modern web experiences rooted in Bhawanipatna, reaching the world.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devance online – Digital Web Development Agency",
    description: "Crafting the digital future from Kalahandi.",
  },
  metadataBase: new URL("https://devance.online"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}