import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      backgroundColor: 'var(--color-pure-white)',
      padding: '20px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #eee',
      zIndex: 1000
    }}>
      <div style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '24px',
        fontWeight: 700,
        color: 'var(--color-near-black)'
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Jetflow MEDIA</Link>
      </div>
      
      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <Link to="/services" className="label">Services</Link>
        <Link to="/how-it-works" className="label">How It Works</Link>
        <Link to="/results" className="label">Results</Link>
        <Link to="/about" className="label">About</Link>
        <Link to="/contact" className="label">Contact</Link>
        <Link to="/contact" className="btn btn-primary">Request a Briefing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
