import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/results', label: 'Results' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isHome = location.pathname === '/';

  return (
    <>
      <nav className={`navbar ${(scrolled || !isHome) ? 'navbar--scrolled' : ''}`}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Logo variant="light" size="md" />
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links">
          {navItems.map((item, i) => (
            <span key={item.path} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {i > 0 && <span className="nav-separator" />}
              <Link
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'nav-link--active' : ''}`}
              >
                {item.label}
              </Link>
            </span>
          ))}
          <span className="nav-cta">
            <Link to="/contact" className="btn btn-primary">Request a Briefing</Link>
          </span>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${isActive(item.path) ? 'nav-link--active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>
          Request a Briefing
        </Link>
      </div>
    </>
  );
};

export default Navbar;
