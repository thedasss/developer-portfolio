import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thedas Silva | Forward Deployed Engineer",
  description:
    "Thedas Silva is a Forward Deployed Engineer (FDE) and Software Engineer specializing in Python, LLMs, RAG systems, and enterprise production deployments.",
  keywords: [
    "Thedas Silva",
    "Forward Deployed Engineer",
    "FDE",
    "Software Engineer",
    "AI Engineer",
    "Python Developer",
    "LLM",
    "RAG",
    "Production AI",
    "FastAPI",
  ],
  authors: [{ name: "Thedas Silva" }],
  openGraph: {
    title: "Thedas Silva | Forward Deployed Engineer (FDE) & Software Engineer",
    description:
      "Forward Deployed Engineer (FDE) and Software Engineer specializing in Python, LLMs, RAG systems, and enterprise production deployments.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thedas Silva | Forward Deployed Engineer (FDE) & Software Engineer",
    description:
      "Forward Deployed Engineer (FDE) and Software Engineer specializing in Python, LLMs, RAG systems, and enterprise production deployments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png?v=99" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=99" />
        <link rel="shortcut icon" href="/favicon.ico?v=99" />
        <link rel="apple-touch-icon" href="/favicon.png?v=99" />
      </head>
      <body className="font-sans bg-[#0a0a0f] text-white antialiased noise-overlay min-h-screen selection:bg-neon-blue/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
