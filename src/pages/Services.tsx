import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="page-content">
      {/* Section 1 — Page hero */}
      <section className="section" style={{ paddingBottom: '60px' }}>
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h1>The Inbound Demand System, in full</h1>
          <p style={{ fontSize: '20px' }}>
            Four components that work together. Each one addresses a specific gap between where your demand is now and where it needs to be.
          </p>
        </div>
      </section>

      {/* Section 2 — Service 01: Catalyst Engine */}
      <section className="section section-warm">
        <div className="container grid-2-services">
          <div style={{
            backgroundImage: 'url(/services.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px',
            minHeight: '400px',
            height: '100%'
          }}></div>
          <div>
            <div className="label amber-text" style={{ marginBottom: '15px' }}>Component 01</div>
            <h2>The Catalyst Engine</h2>
            <p style={{ marginBottom: '20px' }}>
              Most charter operators rely on brokers and repeat clients for their pipeline. The Catalyst Engine changes where demand originates. It positions your operation in front of qualified executive-level decision-makers through proprietary direct acquisition channels — before those prospects have contacted a broker or started searching. The result is inbound that arrives with intent already formed.
            </p>
            <h3 style={{ fontSize: '18px', marginTop: '30px', marginBottom: '15px' }}>What it includes:</h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
              <li style={{ marginBottom: '10px' }}>Proprietary direct acquisition channels</li>
              <li style={{ marginBottom: '10px' }}>Executive decision-maker targeting</li>
              <li style={{ marginBottom: '10px' }}>Intent-based positioning</li>
            </ul>
            <div style={{ padding: '20px', backgroundColor: 'var(--color-pure-white)', borderLeft: '4px solid var(--color-amber-gold)' }}>
              <strong style={{ color: 'var(--color-near-black)' }}>Right for you if:</strong> Your current inbound is mostly reactive or broker-dependent.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Service 02: Activation Blueprint */}
      <section className="section">
        <div className="container grid-2-services">
          <div style={{ order: 2,
            backgroundImage: 'url(https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=2000&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px',
            minHeight: '400px',
            height: '100%',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
          </div>
          <div style={{ order: 1 }}>
            <div className="label amber-text" style={{ marginBottom: '15px' }}>Component 02</div>
            <h2>The Activation Blueprint</h2>
            <p style={{ marginBottom: '20px' }}>
              We build the structural demand architecture aligned to your operation. This is the blueprint the entire system runs on — routes, audience targeting, positioning, and acquisition channels.
            </p>
            <h3 style={{ fontSize: '18px', marginTop: '30px', marginBottom: '15px' }}>What it includes:</h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
              <li style={{ marginBottom: '10px' }}>Route-specific demand modeling</li>
              <li style={{ marginBottom: '10px' }}>Audience segment mapping</li>
              <li style={{ marginBottom: '10px' }}>Competitive positioning strategy</li>
            </ul>
            <div style={{ padding: '20px', backgroundColor: 'var(--color-warm-white)', borderLeft: '4px solid var(--color-amber-gold)' }}>
              <strong style={{ color: 'var(--color-near-black)' }}>Right for you if:</strong> You need a documented, repeatable system rather than ad-hoc campaigns.
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Service 03: Launch Sequence */}
      <section className="section section-warm">
        <div className="container grid-2-services">
          <div style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px',
            minHeight: '400px',
            height: '100%',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
          </div>
          <div>
            <div className="label amber-text" style={{ marginBottom: '15px' }}>Component 03</div>
            <h2>The Launch Sequence</h2>
            <p style={{ marginBottom: '20px' }}>
              Deployment of the Catalyst Engine and supporting infrastructure. This is where inbound begins to shift from reactive to structured over a 60 to 90 day period.
            </p>
            <h3 style={{ fontSize: '18px', marginTop: '30px', marginBottom: '15px' }}>What it includes:</h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
              <li style={{ marginBottom: '10px' }}>Infrastructure setup and integration</li>
              <li style={{ marginBottom: '10px' }}>Campaign rollout</li>
              <li style={{ marginBottom: '10px' }}>Initial data gathering and tracking</li>
            </ul>
            <div style={{ padding: '20px', backgroundColor: 'var(--color-pure-white)', borderLeft: '4px solid var(--color-amber-gold)' }}>
              <strong style={{ color: 'var(--color-near-black)' }}>Right for you if:</strong> You are ready to commit to a 90-day foundational shift.
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Service 04: Momentum Optimization */}
      <section className="section">
        <div className="container grid-2-services">
          <div style={{ order: 2,
            backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px',
            minHeight: '400px',
            height: '100%',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
          </div>
          <div style={{ order: 1 }}>
            <div className="label amber-text" style={{ marginBottom: '15px' }}>Component 04</div>
            <h2>Momentum Optimization</h2>
            <p style={{ marginBottom: '20px' }}>
              Ongoing calibration based on inbound data, market shifts, and your evolving fleet and route priorities. The system compounds over time to keep demand consistent.
            </p>
            <h3 style={{ fontSize: '18px', marginTop: '30px', marginBottom: '15px' }}>What it includes:</h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
              <li style={{ marginBottom: '10px' }}>Monthly performance calibration</li>
              <li style={{ marginBottom: '10px' }}>Market shift adjustments</li>
              <li style={{ marginBottom: '10px' }}>Fleet and route realignment</li>
            </ul>
            <div style={{ padding: '20px', backgroundColor: 'var(--color-warm-white)', borderLeft: '4px solid var(--color-amber-gold)' }}>
              <strong style={{ color: 'var(--color-near-black)' }}>Right for you if:</strong> You want a long-term partner to manage your demand architecture.
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — How the components connect */}
      <section className="section section-navy text-center">
        <div className="container">
          <h2>These are not standalone products. They are one system.</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 50px', fontSize: '18px' }}>
            Most operators start with the Catalyst Engine and Activation Blueprint. The Launch Sequence and Momentum Optimization are deployed once the foundation is in place. Every engagement is scoped to your operation specifically — there is no off-the-shelf version of this.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <div className="card card-navy" style={{ padding: '20px', border: '1px solid var(--color-amber-gold)' }}>
              <h3 style={{ margin: 0, fontSize: '18px' }}>1. Catalyst Engine</h3>
            </div>
            <div><ArrowRight color="var(--color-amber-gold)" /></div>
            <div className="card card-navy" style={{ padding: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <h3 style={{ margin: 0, fontSize: '18px' }}>2. Activation Blueprint</h3>
            </div>
            <div><ArrowRight color="var(--color-amber-gold)" /></div>
            <div className="card card-navy" style={{ padding: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <h3 style={{ margin: 0, fontSize: '18px' }}>3. Launch Sequence</h3>
            </div>
            <div><ArrowRight color="var(--color-amber-gold)" /></div>
            <div className="card card-navy" style={{ padding: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <h3 style={{ margin: 0, fontSize: '18px' }}>4. Momentum Optimization</h3>
            </div>
          </div>
          
          <div style={{ marginTop: '60px' }}>
            <p style={{ marginBottom: '20px', fontSize: '18px' }}>Ready to understand which components fit your operation?</p>
            <Link to="/contact" className="btn btn-primary">Request a Strategy Briefing</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
