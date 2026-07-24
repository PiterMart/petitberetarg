import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";

export const metadata: Metadata = {
  title: "Le Petit Beret",
  description: "Le Petit Beret web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-white text-zinc-900 font-roboto antialiased selection:bg-amber-400 selection:text-black">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
