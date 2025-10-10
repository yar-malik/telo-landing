import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeloAI",
  description:
    "AI employees for your business that never sleep, get tired or quit.",
  generator: "TeloAI Platform",
  creator: "TeloAI",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Telo AI" />
        <link rel="preload" href="/images/logo.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script id="image-fallback">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const images = document.querySelectorAll('img');
              images.forEach(img => {
                img.onerror = function() {
                  if (!img.src.includes('?fallback=true')) {
                    img.src = img.src + '?fallback=true';
                  }
                }
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
