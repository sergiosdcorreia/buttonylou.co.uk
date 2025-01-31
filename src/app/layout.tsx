import type { Metadata } from "next";
import { Balsamiq_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const balsamiqFont = Balsamiq_Sans({
  weight: ["400", "700"],
  variable: "--font-balsamiq-sans",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSansFont = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buttony Lou",
  description: "Colouring books for all ages, hand drawn and fun. Unleash your creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${balsamiqFont.variable} ${nunitoSansFont.variable} antialiased`}
      >
        <main>
          <Header />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
