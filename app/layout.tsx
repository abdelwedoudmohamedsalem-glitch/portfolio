import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Salem Abdel Wedoud | Cybersécurité & systèmes",
  description:
    "Portfolio de Mohamed Salem Abdel Wedoud, étudiant en développement, administration systèmes et cybersécurité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
