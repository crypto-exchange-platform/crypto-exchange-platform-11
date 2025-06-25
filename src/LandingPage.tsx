import { FC, useState, useEffect } from "react";
import { particlesConfig } from "./utils/particlesConfig";
import { Header } from "./Header";
import { SignupModal } from "./SignUpModal";
import { LoginModal } from "./LoginModal";
import { HeroSection } from "./HeroSection";
import { FuturisticMarketSection } from "./MarketSection";
import { mockData } from "./utils/coinHelpers";



declare global {
  interface Window {
    particlesJS?: (canvasId: string, config: any) => void;
  }
}

const PARTICLES_CDN = 'https://cdn.jsdelivr.net/npm/particles.js';

const LandingPage: FC = () => {
  const [modal, setModal] = useState<'login' | 'signup' | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = PARTICLES_CDN;
    script.async = true;
    script.onload = () => {
      window.particlesJS?.('particles', particlesConfig);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {modal === 'login' && <LoginModal onClose={() => setModal(null)} />}
      {modal === 'signup' && (
        <SignupModal
          onClose={() => setModal(null)}
          onSignupSuccess={() => setModal('login')}
        />
      )}

      <Header
        onLogin={() => setModal('login')}
        onSignup={() => setModal('signup')}
      />

      <div className="relative w-full h-screen overflow-hidden">
        <div id="particles" className="absolute inset-0 z-0" />
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>

  <FuturisticMarketSection
  coins={mockData.slice(0, 8)}
  onViewAll={() => scrollToSection('all-markets')}
/>
 
    </>
  );
};

export default LandingPage;
 
