import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

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
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#0a0a0f] text-white antialiased noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
