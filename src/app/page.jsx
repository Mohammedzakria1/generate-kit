import BentoGridSection from "./components/home/BentoGridSection";
import CtaSection from "./components/home/CtaSection";
import FaqSection from "./components/home/FaqSection";
import FeaturedToolsSection from "./components/home/FeaturedToolsSection";
import HeroSection from "./components/home/HeroSection";
import LivePreviewSection from "./components/home/LivePreviewSection";
import SecuritySection from "./components/home/SecuritySection";
import SeoContentSection from "./components/home/SeoContentSection";
import StatsSection from "./components/home/StatsSection";
import WhyGenerateKitSection from "./components/home/WhyGenerateKitSection";

export const metadata = {
  title: "GenerateKit - Free Developer Tools & Security Generators",

  description:
    "Generate secure passwords, UUIDs, JWT secrets, API keys, SHA256 hashes, JSON formatting and more. Fast, privacy-first developer toolkit.",

  keywords: [
    "password generator",
    "uuid generator",
    "jwt secret generator",
    "api key generator",
    "sha256 generator",
    "json formatter",
    "developer tools",
    "online developer utilities",
  ],

  alternates: {
    canonical: "https://generatekit.com",
  },
};




export default function HomePage() {
  return (
    <>
   <HeroSection/>
   <StatsSection/>
   <FeaturedToolsSection/>
   <LivePreviewSection/>
   <WhyGenerateKitSection/>
   <BentoGridSection/>
   <SecuritySection/>
   <SeoContentSection/>
   <FaqSection/>
   <CtaSection/>
    </>
  );
}







































// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#FCFCFC] text-slate-950">
//     </main>
//   );
// }