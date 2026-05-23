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
  title: "Tomas Vivaldi - Expert Web Developer & Freelance Consultant",
  description:
    "Tomas Vivaldi is a highly skilled web developer and freelance consultant, specializing in creating responsive, user-friendly websites and applications. Boost your online presence with custom web solutions tailored to your business needs. Partner with Tomas for exceptional results and outstanding service.",
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
