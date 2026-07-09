import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NATITUDE.SIGMA // Deep Concrete Audio Matrix",
  description: "Experience absolute sensory dominance. Powered by a custom-tuned, four-point audiophile array and live spatial laser topography.",
  openGraph: {
    title: "NATITUDE.SIGMA // The Club",
    description: "Premium structural techno configurations and luxury VIP table landscapes.",
    url: "https://natitude-sigma.vercel.app",
    siteName: "NATITUDE.SIGMA",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "NATITUDE.SIGMA Core System Mainroom Matrix",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NATITUDE.SIGMA // Audio Matrix",
    description: "Strict curated dark-wave and progressive industrial soundscapes.",
    images: ["https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}