import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyen Duc Thang — Backend Developer",
  description:
    "ASP.NET Core / C# Backend Developer fresher based in Ho Chi Minh City, graduating FPT University July 2026.",
  openGraph: {
    title: "Nguyen Duc Thang — Backend Developer",
    description:
      "Portfolio of Nguyen Duc Thang, Backend Developer specializing in ASP.NET Core and C#.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-body antialiased">{children}</body>
    </html>
  );
}
