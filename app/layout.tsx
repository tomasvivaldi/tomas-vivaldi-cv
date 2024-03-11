import { EvervaultCard } from "./components/aceternity/Hover";
import "./globals.css";

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
    <html lang="en">
      <body
        className="scrollbar
     scrollbar-track-gray-400/20 scrollbar-thumb-red-500/50 snap-y 
     snap-mandatory bg-black"
      >
        {children}
      </body>
    </html>
  );
}
