import  { FC, useEffect } from 'react';
import 'particles.js'; 
import { footerParticlesConfig } from './utils/footerParticlesConfig';
const Footer: FC = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('footer-particles', footerParticlesConfig);
    }
  }, []);

  return (
    <footer className="relative footer overflow-hidden pt-20 pb-12 text-gray-400">
      <div id="footer-particles" className="absolute inset-0 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl text-white font-semibold mb-4">About ChainWave</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              CryptCrest is your gateway to seamless crypto trading, real-time market data, and portfolio management—all in one sleek, futuristic interface.
            </p>
          </div>

          <div>
            <h3 className="text-xl text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-cyan-300 transition">Home</a></li>
              <li><a href="#markets" className="hover:text-cyan-300 transition">Markets</a></li>
              <li><a href="#trade" className="hover:text-cyan-300 transition">Trade</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-300 transition">Portfolio</a></li>
              <li><a href="#forex-news" className="hover:text-cyan-300 transition">News</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#tutorials" className="hover:text-cyan-300 transition">Tutorials</a></li>
              <li><a href="#blog" className="hover:text-cyan-300 transition">Blog</a></li>
              <li><a href="#faq" className="hover:text-cyan-300 transition">FAQ</a></li>
              <li><a href="#support" className="hover:text-cyan-300 transition">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest crypto news, insights, and updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-gray-900 placeholder-gray-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-5 py-2 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700" />

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm">
            © {new Date().getFullYear()} CrYptCrest. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-cyan-300 transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53..." />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-cyan-300 transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65..." />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-cyan-300 transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88..." />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 