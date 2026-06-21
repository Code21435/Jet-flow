import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="section-navy" style={{ padding: '60px 5% 30px' }}>
      <div className="container footer-grid" style={{ marginBottom: '40px' }}>

        {/* Left column */}
        <div>
          <div style={{ marginBottom: '16px' }}>
            <Logo variant="light" size="md" />
          </div>
          <p style={{ fontSize: '14px', marginBottom: '20px', maxWidth: '280px' }}>
            Demand systems for executive charter operators who are ready to move beyond reactive inbound.
          </p>
          <a
            href="https://www.linkedin.com/company/jetflow-media"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9923A')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          >
            LinkedIn →
          </a>
        </div>

        {/* Middle column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '8px',
          }}>
            Navigation
          </div>
          {[
            { to: '/services', label: 'Services' },
            { to: '/how-it-works', label: 'How It Works' },
            { to: '/outcomes', label: 'Outcomes' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '4px',
          }}>
            Get Started
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '13px' }}>
            Request a Briefing
          </Link>
          <a
            href="mailto:hello@jetflowmedia.com"
            style={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9923A')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
          >
            hello@jetflowmedia.com
          </a>
        </div>

      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
          © 2026 Jetflow MEDIA.
        </div>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
          For operators who are ready to build what comes next.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
