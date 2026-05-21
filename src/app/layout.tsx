import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./sections.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ToursAndTravels.online — Premium Spiritual Travel Experiences",
  description:
    "Premium spiritual journeys for families & senior citizens. Comfortable and carefully planned spiritual tours across India and selected international destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
