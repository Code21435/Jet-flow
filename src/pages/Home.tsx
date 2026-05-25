import { Link } from 'react-router-dom';
import { CalendarX, Users, TrendingDown, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Section 2 — Hero */}
      <section className="section-navy" style={{
        position: 'relative',
        padding: '120px 5%',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Placeholder for background image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/hero.png)', // We will update this with actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: 0
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0' }}>
          <div className="label amber-text" style={{ marginBottom: '20px' }}>For Private Aviation Operators</div>
          <h1 className="hero-headline">Stop Chasing Bookings. Start Building Demand That Arrives.</h1>
          <p style={{ fontSize: '20px', marginBottom: '40px', maxWidth: '600px' }}>
            Jetflow MEDIA builds structured inbound demand systems for executive charter operators — so your pipeline fills predictably, not reactively.
          </p>
          
          <div className="btn-group" style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '30px' }}>
            <Link to="/contact" className="btn btn-primary">Request a Strategy Briefing</Link>
            <Link to="/how-it-works" className="btn btn-ghost">See How It Works</Link>
          </div>
          
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
            Designed for operators with 2–10 aircraft. Not for general aviation.
          </div>
        </div>
      </section>

      {/* Section 3 — The Problem */}
      <section className="section">
        <div className="container">
          <div className="label" style={{ marginBottom: '20px' }}>Why most operators stay stuck</div>
          <h2>Your demand is reactive. Your revenue reflects it.</h2>
          
          <div className="grid-3" style={{ marginTop: '50px' }}>
            <div className="card">
              <CalendarX size={32} color="var(--color-amber-gold)" style={{ marginBottom: '20px' }} />
              <h3>Seasonal gaps erode utilization</h3>
              <p>Peak periods are full. Shoulder months bleed revenue. Without a demand system, you are always guessing.</p>
            </div>
            <div className="card">
              <Users size={32} color="var(--color-amber-gold)" style={{ marginBottom: '20px' }} />
              <h3>Sales starts from zero every time</h3>
              <p>Every enquiry arrives cold. The team builds the brief manually. Time is spent qualifying before selling ever begins.</p>
            </div>
            <div className="card">
              <TrendingDown size={32} color="var(--color-amber-gold)" style={{ marginBottom: '20px' }} />
              <h3>Visibility without authority converts poorly</h3>
              <p>Social posts and generic marketing build followers, not qualified pipeline. Decision-makers need more than awareness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — The Shift */}
      <section className="section section-warm">
        <div className="container">
          <h2>What changes when demand is structured</h2>
          
          <div className="grid-2" style={{ marginTop: '50px' }}>
            <div style={{ backgroundColor: 'var(--color-pure-white)', padding: '40px', borderRadius: '4px' }}>
              <h3 style={{ marginBottom: '30px' }}>Before Jetflow</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Reactive enquiries',
                  'Manual qualification',
                  'Feast-or-famine cycles',
                  'No predictable pipeline',
                  'Sales team building briefs not closing deals'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <XCircle size={20} color="#E53E3E" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'var(--color-pure-white)', padding: '40px', borderRadius: '4px' }}>
              <h3 style={{ marginBottom: '30px' }}>With Jetflow</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Pre-qualified inbound',
                  'Structured demand system',
                  'Predictable utilization',
                  'Operators arrive already aligned',
                  'Sales team converts not clarifies'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <CheckCircle size={20} color="var(--color-amber-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Services preview */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>One system. Four components. Built around your operation.</h2>
          
          <div className="grid-2" style={{ marginBottom: '50px' }}>
            {[
              { num: '01', title: 'Catalyst Engine', desc: 'Positions your operation in front of qualified executive decision-makers before they know they are looking.' },
              { num: '02', title: 'Activation Blueprint', desc: 'A structured demand architecture aligned to your fleet size, routes, and revenue targets.' },
              { num: '03', title: 'Launch Sequence', desc: 'A deployment timeline that builds inbound momentum within 60 to 90 days of engagement.' },
              { num: '04', title: 'Momentum Optimization', desc: 'Ongoing calibration to keep demand consistent as market conditions and your operation evolve.' }
            ].map((service, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="label amber-text" style={{ marginBottom: '15px' }}>Component {service.num}</div>
                <h3>{service.title}</h3>
                <p style={{ flex: 1 }}>{service.desc}</p>
                <Link to="/services" style={{ color: 'var(--color-amber-gold)', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px', marginTop: '20px' }}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/services" style={{ color: 'var(--color-near-black)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              See the full system <ArrowRight size={16} color="var(--color-amber-gold)" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 — Social proof strip */}
      <section className="section-navy" style={{ padding: '80px 5%', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-hero)', fontSize: '48px', color: 'var(--color-amber-gold)', marginBottom: '10px' }}>47%</div>
              <div className="label">average increase in qualified inbound</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-hero)', fontSize: '48px', color: 'var(--color-amber-gold)', marginBottom: '10px' }}>60–90</div>
              <div className="label">day deployment</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-hero)', fontSize: '48px', color: 'var(--color-amber-gold)', marginBottom: '10px' }}>2–10</div>
              <div className="label">Built for aircraft operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Fit criteria */}
      <section className="section section-warm">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>This is built for a specific kind of operator</h2>
          
          <div className="grid-2">
            <div style={{ padding: '40px', borderRight: '1px solid #ddd' }}>
              <h3 style={{ marginBottom: '30px' }}>Jetflow is right for you if:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Fleet of 2 to 10 aircraft.',
                  'You operate in the executive and ultra-high-net-worth market.',
                  'Your current pipeline is inconsistent or too dependent on broker relationships.',
                  'You want demand that compounds, not campaigns that expire.'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <CheckCircle size={20} color="var(--color-amber-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '30px' }}>Jetflow is not for you if:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'You are a single-aircraft operator just starting out.',
                  'You want a one-off marketing campaign.',
                  'You are looking for general aviation visibility.',
                  'You are not ready to commit to a structured demand process.'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <XCircle size={20} color="#E53E3E" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '60px' }}>
            <p style={{ fontWeight: 500, color: 'var(--color-near-black)', marginBottom: '20px' }}>If this sounds like your operation — let us talk.</p>
            <Link to="/contact" className="btn btn-primary">Request a Strategy Briefing</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
