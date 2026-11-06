import { Cormorant_Garamond, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Tomas Vivaldi - Full Stack & AI Software Engineer",
  description:
    "Tomas Vivaldi is a full-stack software engineer with 5+ years of experience in Python, TypeScript and AWS, building trading systems for financial markets (high-frequency trading on B3), AI agents and automations, web apps and back-ends for international clients.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmMono.variable} ${dmSans.variable}`}
    >
      <body
        className="scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500/50 snap-y snap-mandatory bg-[var(--bg)]"
      >
        {children}
      </body>
    </html>
  );
}
