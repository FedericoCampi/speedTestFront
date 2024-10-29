import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Speed test App",
  description: "App for testing speed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="Mide la velocidad de tu conexión a internet de manera rápida y precisa. Descubre tu velocidad de descarga, carga y latencia en segundos." />
        <meta name="keywords" content="speedtest, speed test, internet, velocidad, test, conexión, descarga, carga, ping, latencia, pc lenta, pc rapida, ejecución, wifi" />
        <meta property="og:title" content="Speedtest - Mide tu velocidad de Internet" />
        <meta property="og:description" content="Mide la velocidad de tu conexión a internet de manera rápida y precisa. Descubre tu velocidad de descarga, carga y latencia en segundos." />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://speeds-test.com" />
        <meta name="google-site-verification" content={`${process.env.GOOGLE_ANALITYC_ID}`} />
      </head>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALITYC_ID}`}></Script>
      <Script id="ga-script" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', '${process.env.GOOGLE_ANALITYC_ID}');
          
          `}
      </Script>

      <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_AD_SENSE_CLIENT}`}
      crossOrigin="anonymous"></Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
