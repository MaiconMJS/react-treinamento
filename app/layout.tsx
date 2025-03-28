import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Teste",
  description: "Apenas a fim de teste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
