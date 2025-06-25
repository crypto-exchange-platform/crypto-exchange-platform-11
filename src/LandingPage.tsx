import { FC, useState, useEffect } from "react";
import { particlesConfig } from "./utils/particlesConfig";
import { Header } from "./Header";
import { SignupModal } from "./SignUpModal";
import { LoginModal } from "./LoginModal";
import { HeroSection } from "./HeroSection";
import { FuturisticMarketSection } from "./MarketSection";
import { mockData } from "./utils/coinHelpers";
import TradeSection from "./TradeSection";

import PortfolioSection, { Holding } from "./PortfolioSection";
import Footer from "./Footer";
import ForexNewsSection from "./ForexSection";

declare global {
  interface Window {
    particlesJS?: (canvasId: string, config: any) => void;
  }
}

const PARTICLES_CDN = "https://cdn.jsdelivr.net/npm/particles.js";

const LandingPage: FC = () => {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = PARTICLES_CDN;
    script.async = true;
    script.onload = () => {
      window.particlesJS?.("particles", particlesConfig);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);


const mockHoldings: Holding[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    amount: 0.5,
    currentPrice: 30000,
    value: 15000,
    change24hr: 1.2,
    sparklineData: [29500, 29600, 30000, 30200, 30000, 30100, 30000],
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    amount: 5,
    currentPrice: 2000,
    value: 10000,
    change24hr: -0.8,
    sparklineData: [2050, 2020, 2000, 1990, 1980, 2000, 2000],
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    amount: 10,
    currentPrice: 310,
    value: 3100,
    change24hr: 2.5,
    sparklineData: [300, 305, 307, 312, 310, 315, 310],
  },
  {
    symbol: "ADA",
    name: "Cardano",
    amount: 2000,
    currentPrice: 0.48,
    value: 960,
    change24hr: -1.2,
    sparklineData: [0.50, 0.49, 0.48, 0.47, 0.48, 0.49, 0.48],
  },
  {
    symbol: "SOL",
    name: "Solana",
    amount: 100,
    currentPrice: 52.1,
    value: 5210,
    change24hr: 3.5,
    sparklineData: [50, 51, 49, 52, 53, 54, 52],
  },

];
 

  return (
    <>
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && (
        <SignupModal
          onClose={() => setModal(null)}
          onSignupSuccess={() => setModal("login")}
        />
      )}

      <Header
        onLogin={() => setModal("login")}
        onSignup={() => setModal("signup")}
      />

      <div className="relative w-full h-screen overflow-hidden">
        <div id="particles" className="absolute inset-0 z-0" />
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>

      <FuturisticMarketSection
        coins={mockData.slice(0, 8)}
        onViewAll={() => scrollToSection("all-markets")}
      />
      <TradeSection />
      <PortfolioSection holdings={mockHoldings} />
      <ForexNewsSection/>
      <Footer/>
    </>
  );
};

export default LandingPage;
