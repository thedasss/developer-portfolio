import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thedas Silva | Software Engineer & AI Engineer",
  description:
    "AI-focused software engineer specializing in Python, LLMs, RAG systems, and full-stack development. Building intelligent systems, automating processes, and turning ideas into production-ready software.",
  keywords: [
    "Thedas Silva",
    "Software Engineer",
    "AI Engineer",
    "Python Developer",
    "LLM",
    "RAG",
    "Full Stack Developer",
    "Sri Lanka",
    "FastAPI",
    "Machine Learning",
  ],
  authors: [{ name: "Thedas Silva" }],
  openGraph: {
    title: "Thedas Silva | Software Engineer & AI Engineer",
    description:
      "AI-focused software engineer specializing in Python, LLMs, RAG systems, and full-stack development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thedas Silva | Software Engineer & AI Engineer",
    description:
      "AI-focused software engineer specializing in Python, LLMs, RAG systems, and full-stack development.",
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
      <body className="font-sans bg-[#0a0a0f] text-white antialiased noise-overlay min-h-screen selection:bg-neon-blue/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
