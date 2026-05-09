import "./globals.css";

export const metadata = {
  title: "Project Mani",
  description: "AI orchestrator frontend for RSMK Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-zinc-950 text-white">{children}</body>
    </html>
  );
}
