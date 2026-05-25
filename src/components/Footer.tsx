import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="section-navy" style={{ padding: '60px 5% 30px' }}>
      <div className="container footer-grid" style={{ display: 'grid', gap: '40px', marginBottom: '40px' }}>
        
        {/* Left column */}
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '24px',
            fontWeight: 700,
            marginBottom: '10px'
          }}>
            Jetflow MEDIA
          </div>
          <p style={{ fontSize: '14px', marginBottom: '20px' }}>Inbound Demand Systems for Private Aviation Operators.</p>
          <a href="#" style={{ color: 'var(--color-pure-white)', textDecoration: 'none' }}>LinkedIn</a>
        </div>

        {/* Middle column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Link to="/services" style={{ color: 'var(--color-pure-white)', textDecoration: 'none', fontSize: '15px' }}>Services</Link>
          <Link to="/how-it-works" style={{ color: 'var(--color-pure-white)', textDecoration: 'none', fontSize: '15px' }}>How It Works</Link>
          <Link to="/about" style={{ color: 'var(--color-pure-white)', textDecoration: 'none', fontSize: '15px' }}>About</Link>
          <Link to="/contact" style={{ color: 'var(--color-pure-white)', textDecoration: 'none', fontSize: '15px' }}>Contact</Link>
        </div>

        {/* Right column */}
        <div>
          <Link to="/contact" className="btn btn-primary" style={{ marginBottom: '20px' }}>Request a Briefing</Link>
          <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px' }}>hello@jetflowmedia.com</div>
        </div>

      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
        © 2026 Jetflow MEDIA. Burlington WA, USA.
      </div>
    </footer>
  );
};

export default Footer;
