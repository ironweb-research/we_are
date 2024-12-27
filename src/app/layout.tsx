import Footer from "@/app/_components/main_frame/footer";
import { BASE_URL, IRONWEB_ANI_GIF_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/main_frame/theme-switcher";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Ironweb-Research ~ Future is Secure',
  description: 'Our Startup aims to integrate blockchain technology to secure networking systems.',
  openGraph: {
    title: 'Ironweb-Research ~ Future is Secure',
    description: 'Our Startup aims to integrate blockchain technology to secure networking systems.',
    images: [IRONWEB_ANI_GIF_URL],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x200"
          href={`${BASE_URL}/assets/logo/apple-touch-icon.png`} 
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x35"
          href={`${BASE_URL}/assets/logo/ironweb_icon_32x35.png`} 
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x17"
          href={`${BASE_URL}/assets/logo/ironweb_icon_16x17.png`} 
        />
        <link rel="manifest" href={`${BASE_URL}/assets/logo/site.webmanifest`}/>
        <link
          rel="mask-icon"
          href={`${BASE_URL}/assets/logo/safari-pinned-tab.svg`} 
          color="#000000"
        />
        <link rel="shortcut icon" href={`${BASE_URL}/assets/logo/ironweb_icon.ico`}  />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content={`${BASE_URL}/assets/logo/browserconfig.xml`} 
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href={`${BASE_URL}/feed.xml`}/>
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
