import "./globals.css";

export const metadata = {
  title: "Wed Developer CV Website",
  description:
    "In this website I describe my experiences, showcase my CV and some of my skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
