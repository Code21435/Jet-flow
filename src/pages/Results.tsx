import { Link } from 'react-router-dom';
import { TrendingUp, Clock, CalendarCheck } from 'lucide-react';

const Results = () => {
  return (
    <div className="page-content">
      {/* Section 1 — Hero */}
      <section className="section-navy" style={{
        position: 'relative',
        padding: '120px 5%',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* The Authentic 4K Image Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/results.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
          zIndex: 0
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0' }}>
          <div className="label amber-text" style={{ marginBottom: '20px' }}>Proven Outcomes</div>
          <h1 className="hero-headline">Real Demand. Measurable Growth.</h1>
          <p style={{ fontSize: '20px', marginBottom: '40px', maxWidth: '600px', color: 'rgba(255, 255, 255, 0.9)' }}>
            We don't sell awareness. We build structured systems that convert into actual flight hours and predictable utilization for operators.
          </p>
        </div>
      </section>

      {/* Section 2 — Value Metrics */}
      <section className="section section-warm">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>The Impact of Structured Demand</h2>
          
          <div className="grid-3">
            <div className="card" style={{ borderTop: '4px solid var(--color-amber-gold)' }}>
              <TrendingUp size={36} color="var(--color-amber-gold)" style={{ marginBottom: '20px' }} />
              <div style={{ fontFamily: 'var(--font-hero)', fontSize: '42px', color: 'var(--color-near-black)', marginBottom: '10px', lineHeight: 1 }}>34%</div>
              <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Average Utilization Increase</h3>
              <p>Operators typically see a 34% increase in aircraft utilization within the first 6 months of deploying the Jetflow system, stabilizing shoulder months.</p>
            </div>

            <div className="card" style={{ borderTop: '4px solid var(--color-amber-gold)' }}>
              <Clock size={36} color="var(--color-amber-gold)" style={{ marginBottom: '20px' }} />
              <div style={{ fontFamily: 'var(--font-hero)', fontSize: '42px', color: 'var(--color-near-black)', marginBottom: '10px', lineHeight: 1 }}>90 Days</div>
              <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Time to System Maturity</h3>
              <p>Within 90 days, the inbound pipeline shifts from reactive broker inquiries to pre-qualified executive direct inquiries.</p>
            </div>

            <div className="card" style={{ borderTop: '4px solid var(--color-amber-gold)' }}>
              <CalendarCheck size={36} color="var(--color-amber-gold)" style={{ marginBottom: '20px' }} />
              <div style={{ fontFamily: 'var(--font-hero)', fontSize: '42px', color: 'var(--color-near-black)', marginBottom: '10px', lineHeight: 1 }}>2.5x</div>
              <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Sales Cycle Acceleration</h3>
              <p>Because leads arrive pre-educated and intent-driven, operators close bookings 2.5x faster than with traditional cold inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — The Authentic Reality */}
      <section className="section">
        <div className="container grid-2-services">
          <div>
            <div className="label amber-text" style={{ marginBottom: '15px' }}>Authentic Business Value</div>
            <h2>Fewer conversations. More conversions.</h2>
            <p style={{ marginBottom: '20px' }}>
              The traditional aviation marketing model floods your team with unqualified leads that go nowhere. Your sales team wastes hours educating prospects who were never going to book a heavy jet.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Our results are rooted in a fundamentally different approach. By strictly targeting executive decision-makers through intent-based channels, we lower the total volume of leads while dramatically increasing the quality.
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
              <li style={{ marginBottom: '10px' }}>Sales reps spend time closing, not qualifying</li>
              <li style={{ marginBottom: '10px' }}>Predictable revenue forecasting</li>
              <li style={{ marginBottom: '10px' }}>Reduced reliance on low-margin broker deals</li>
            </ul>
          </div>
          <div style={{
            backgroundImage: 'url(/services.png)', /* reusing the high-quality corporate image */
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px',
            minHeight: '500px',
            height: '100%',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}></div>
        </div>
      </section>

      {/* Page CTA */}
      <section className="section section-navy text-center">
        <div className="container">
          <h2 style={{ color: 'var(--color-pure-white)', marginBottom: '20px' }}>Ready to see these results for your operation?</h2>
          <p style={{ fontSize: '20px', marginBottom: '40px', color: 'rgba(255, 255, 255, 0.8)' }}>
            Schedule a briefing to discuss how we can build your structured demand system.
          </p>
          <Link to="/contact" className="btn btn-primary">Request a Strategy Briefing</Link>
        </div>
      </section>
    </div>
  );
};

export default Results;
