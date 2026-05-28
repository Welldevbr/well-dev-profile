import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Well Dev | Desenvolvedor Front-end React",
  description:
    "Portfólio de Wellington Santana (well dev) - Desenvolvedor Front-end Pleno especializado em criar experiências digitais modernas e performáticas.",
  keywords: [
    "React",
    "Front-end",
    "Desenvolvedor",
    "TypeScript",
    "Next.js",
    "JavaScript",
  ],
  authors: [{ name: "Wellington Santana" }],
  openGraph: {
    title: "Wellington Santana | Desenvolvedor Front-end React",
    description:
      "Criando experiências digitais excepcionais com React e tecnologias modernas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
