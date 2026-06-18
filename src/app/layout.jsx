import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),

  title: {
    default: "GenerateKit - Free Developer Tools",
    template: "%s | GenerateKit",
  },

  description:
    "Free online developer tools including Password Generator, JWT Secret Generator, UUID Generator, API Key Generator, SHA-256 Generator, BCrypt Generator, Base64 Encoder and JSON Formatter.",

  keywords: [
    "password generator",
    "jwt secret generator",
    "uuid generator",
    "api key generator",
    "bcrypt generator",
    "sha256 generator",
    "base64 encoder",
    "json formatter",
    "developer tools",
    "free developer tools",
  ],

  authors: [{ name: "Mohammed Zakaria" }],

  creator: "Mohammed Zakaria",

  openGraph: {
    title: "GenerateKit - Free Developer Tools",
    description:
      "Generate passwords, JWT secrets, UUIDs, API keys and use many other free developer tools.",
    url: "https://your-domain.vercel.app",
    siteName: "GenerateKit",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
    lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}