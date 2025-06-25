import  { FC, useState, useEffect } from 'react';

interface NavItem {
  label: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home',    id: 'home'    },
  { label: 'Markets', id: 'markets' },
  { label: 'Trade',   id: 'trade'   },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'News',    id: 'news'    },
];

interface HeaderProps {
  onLogin:  () => void;
  onSignup: () => void;
}

export const Header: FC<HeaderProps> = ({ onLogin, onSignup }) => {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      NAV_ITEMS.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(item.id);
          }
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black/15 bg-opacity-30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNavClick('home')}
          className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          aria-label="Go to Home"
        >
          CryptCrest
        </button>

        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                relative text-white font-medium transition
                hover:text-cyan-300
                ${activeSection === item.id
                  ? 'text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400'
                  : ''
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Auth buttons (desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onLogin}
            className="text-white hover:text-cyan-300 font-medium"
          >
            Log in
          </button>
          <button
            onClick={onSignup}
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-5 py-2 rounded-md transition"
          >
            Sign up
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="md:hidden focus:outline-none text-white"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            // Close icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black bg-opacity-80 backdrop-blur-sm px-6 py-4 space-y-4">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                block w-full text-left text-white font-medium py-2 transition
                hover:text-cyan-300
                ${activeSection === item.id ? 'text-cyan-400' : ''}
              `}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-700 space-y-2">
            <button
              onClick={onLogin}
              className="w-full text-left text-white hover:text-cyan-300 font-medium"
            >
              Log in
            </button>
            <button
              onClick={onSignup}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-5 py-2 rounded-md transition"
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
 