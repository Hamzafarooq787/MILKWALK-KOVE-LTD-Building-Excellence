import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MILKWALK KOVE LTD | Building Excellence",
  description:
    "Premium Construction Services Across the UK. Crafting high-end architectural monuments with engineering mastery.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "MILKWALK KOVE LTD | Building Excellence",
    description:
      "Premium Construction Services Across the UK. Building Tomorrow. Delivering Excellence.",
    url: "https://www.milkwalkkove.co.uk",
    siteName: "Milkwalk Kove Ltd",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Milkwalk Kove Ltd – Building Tomorrow. Delivering Excellence.",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MILKWALK KOVE LTD | Building Excellence",
    description:
      "Premium Construction Services Across the UK. Building Tomorrow. Delivering Excellence.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body selection:bg-secondary selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
