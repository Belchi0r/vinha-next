import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import { BackToTopButton } from "@/src/components/ui/BackToTopButton";
import { siteConfig } from "@/src/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "Escolinha de futebol no Gama DF com valores cristãos, professor Licença C CBF, avaliação personalizada, competições e formação esportiva.",
  keywords: [
    "escolinha de futebol no Gama DF",
    "futebol infantil Brasília",
    "treino infantil DF",
    "escola de futebol cristã",
    "Vinha do Senhor",
  ],
  openGraph: {
    title: siteConfig.name,
    description:
      "Formação esportiva com excelência, valores cristãos e acompanhamento profissional no DF.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
