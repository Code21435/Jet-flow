import { Link } from 'react-router-dom';
import { CalendarX, Users, TrendingDown, CheckCircle, XCircle, ShieldCheck, MessageSquare, Briefcase, Map } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Image */}
        <div className="hero-image-container">
          <img
            src="/hero-jet.png"
            alt="Private business jet on tarmac"
            className="hero-bg-image"
          />
        </div>

        {/* Overlay */}
        <div className="hero-overlay" />

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-label">
            INBOUND PIPELINE ARCHITECTURE
          </div>

          <h1 className="hero-headline">
            Private aviation demand should not arrive half-formed.
          </h1>

          <p className="hero-subtext">
            Jetflow helps executive charter operators pre-frame better-fit inbound before the first sales conversation, so teams spend less time clarifying and more time converting.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Request a Briefing</Link>
            <Link to="/how-it-works" className="btn btn-ghost">See How It Works</Link>
          </div>

          <div className="hero-trust-strip">
            <div className="hero-trust-item">
              <span className="hero-trust-label" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-pure-white)' }}>Built for operators with<br />2 to 10 aircraft</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <span className="hero-trust-label" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-pure-white)' }}>Structured around 60 to 90<br />day deployment cycles</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <span className="hero-trust-label" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-pure-white)' }}>Focused on direct inbound,<br />qualification, and utilization pressure</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
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
              <h3>Aircraft utilization becomes reactive</h3>
              <p>Peak periods hide weak demand systems. Shoulder periods expose them.</p>
            </div>
            <div className="card">
              <Users size={32} color="var(--color-amber-gold)" style={{ marginBottom: '20px' }} />
              <h3>Sales has to build the brief manually</h3>
              <p>The enquiry arrives before intent, timing, route need, and aircraft fit are clear.</p>
            </div>
            <div className="card">
              <TrendingDown size={32} color="var(--color-amber-gold)" style={{ marginBottom: '20px' }} />
              <h3>Marketing creates attention, not readiness</h3>
              <p>Visibility helps, but operators need inbound that arrives with context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3.5 - Trust */}
      <section className="section section-warm">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Private aviation buyers compare trust before price</h2>
          
          <div className="grid-2">
            <div className="card">
              <Map size={24} color="var(--color-amber-gold)" style={{ marginBottom: '15px' }} />
              <h3>Aircraft fit</h3>
              <p>Does the operator clearly match the client’s route, passenger profile, and trip purpose?</p>
            </div>
            <div className="card">
              <MessageSquare size={24} color="var(--color-amber-gold)" style={{ marginBottom: '15px' }} />
              <h3>Response quality</h3>
              <p>Does the first reply feel informed, or does sales need to ask basic questions again?</p>
            </div>
            <div className="card">
              <ShieldCheck size={24} color="var(--color-amber-gold)" style={{ marginBottom: '15px' }} />
              <h3>Operational credibility</h3>
              <p>Does the site make the operator feel serious before the call?</p>
            </div>
            <div className="card">
              <Briefcase size={24} color="var(--color-amber-gold)" style={{ marginBottom: '15px' }} />
              <h3>Decision path</h3>
              <p>Does the site speak to owners, assistants, executives, and travel managers differently enough?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — The Shift */}
      <section className="section">
        <div className="container">
          <h2>Operating Impact</h2>

          <div className="grid-2" style={{ marginTop: '50px' }}>
            <div style={{ backgroundColor: 'var(--color-warm-white)', padding: '40px', borderRadius: '4px' }}>
              <h3 style={{ marginBottom: '30px' }}>Before Jetflow</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Inbound arrives without context',
                  'Sales rebuilds the brief manually',
                  'Demand rises and falls with broker activity',
                  'Website traffic does not convert into qualified conversations',
                  'Operators react instead of shaping the pipeline'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <XCircle size={20} color="#E53E3E" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: 'var(--color-warm-white)', padding: '40px', borderRadius: '4px' }}>
              <h3 style={{ marginBottom: '30px' }}>With Jetflow</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Inbound is pre-framed before the call',
                  'Sales starts with clearer intent',
                  'Direct demand becomes more consistent',
                  'The website supports qualification, not just credibility',
                  'Better-fit operators and clients reach the briefing stage'
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
      <section className="section section-navy">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px', color: 'var(--color-pure-white)' }}>One system. Four components. Built around your operation.</h2>

          <div className="grid-2" style={{ marginBottom: '50px' }}>
            <div className="card card-navy" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="label amber-text" style={{ marginBottom: '15px' }}>Component 01</div>
              <h3 style={{ color: 'var(--color-pure-white)' }}>Catalyst Engine</h3>
              <p style={{ flex: 1, color: 'rgba(255,255,255,0.8)' }}>Positions the operator in front of better-fit executive charter buyers through targeted demand architecture.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                <li style={{ marginBottom: '8px' }}>• audience and route-market mapping</li>
                <li style={{ marginBottom: '8px' }}>• demand source analysis</li>
                <li style={{ marginBottom: '8px' }}>• direct inbound positioning</li>
              </ul>
            </div>
            <div className="card card-navy" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="label amber-text" style={{ marginBottom: '15px' }}>Component 02</div>
              <h3 style={{ color: 'var(--color-pure-white)' }}>Activation Blueprint</h3>
              <p style={{ flex: 1, color: 'rgba(255,255,255,0.8)' }}>Builds the structure that turns attention into qualified conversations.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                <li style={{ marginBottom: '8px' }}>• website flow</li>
                <li style={{ marginBottom: '8px' }}>• landing page architecture</li>
                <li style={{ marginBottom: '8px' }}>• qualification logic</li>
                <li style={{ marginBottom: '8px' }}>• CTA and briefing path</li>
              </ul>
            </div>
            <div className="card card-navy" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="label amber-text" style={{ marginBottom: '15px' }}>Component 03</div>
              <h3 style={{ color: 'var(--color-pure-white)' }}>Launch Sequence</h3>
              <p style={{ flex: 1, color: 'rgba(255,255,255,0.8)' }}>Deploys the demand system in a defined 60 to 90 day window.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                <li style={{ marginBottom: '8px' }}>• campaign setup</li>
                <li style={{ marginBottom: '8px' }}>• content and channel launch</li>
                <li style={{ marginBottom: '8px' }}>• measurement baseline</li>
                <li style={{ marginBottom: '8px' }}>• handoff into sales process</li>
              </ul>
            </div>
            <div className="card card-navy" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="label amber-text" style={{ marginBottom: '15px' }}>Component 04</div>
              <h3 style={{ color: 'var(--color-pure-white)' }}>Momentum Optimization</h3>
              <p style={{ flex: 1, color: 'rgba(255,255,255,0.8)' }}>Keeps demand quality improving after launch.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                <li style={{ marginBottom: '8px' }}>• enquiry review</li>
                <li style={{ marginBottom: '8px' }}>• conversion feedback</li>
                <li style={{ marginBottom: '8px' }}>• message refinement</li>
                <li style={{ marginBottom: '8px' }}>• pipeline calibration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Process flow */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>How Jetflow turns attention into qualified inbound</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', backgroundColor: 'var(--color-warm-white)', padding: '30px', borderRadius: '4px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-amber-gold)', color: 'var(--color-pure-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, flexShrink: 0 }}>1</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Diagnose the current demand path</h3>
                <p style={{ margin: 0 }}>Where enquiries come from, where clarity breaks, and what sales has to rebuild manually.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', backgroundColor: 'var(--color-warm-white)', padding: '30px', borderRadius: '4px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-amber-gold)', color: 'var(--color-pure-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, flexShrink: 0 }}>2</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Rebuild the pre-framing structure</h3>
                <p style={{ margin: 0 }}>Positioning, fit criteria, page flow, and briefing logic.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', backgroundColor: 'var(--color-warm-white)', padding: '30px', borderRadius: '4px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-amber-gold)', color: 'var(--color-pure-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, flexShrink: 0 }}>3</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Launch the demand architecture</h3>
                <p style={{ margin: 0 }}>Campaigns, pages, and inbound paths aligned around the operator’s fleet and markets.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', backgroundColor: 'var(--color-warm-white)', padding: '30px', borderRadius: '4px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-amber-gold)', color: 'var(--color-pure-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, flexShrink: 0 }}>4</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Calibrate from real enquiry data</h3>
                <p style={{ margin: 0 }}>Refine based on what converts, what creates drag, and what improves sales readiness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Logic / Reality */}
      <section className="section section-warm">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Built around the realities of executive charter demand</h2>
          <div className="grid-2">
            <div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'buyers often compare operators before speaking to sales',
                  'assistants and travel managers need clarity quickly',
                  'aircraft fit and route fit matter before price'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <CheckCircle size={20} color="var(--color-amber-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '18px', fontWeight: 500, color: 'var(--color-near-black)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'response quality shapes trust early',
                  'broker dependence creates pipeline instability'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <CheckCircle size={20} color="var(--color-amber-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '18px', fontWeight: 500, color: 'var(--color-near-black)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Fit criteria */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>This is built for a specific kind of operator</h2>

          <div className="grid-2">
            <div style={{ padding: '40px', borderRight: '1px solid #ddd' }}>
              <h3 style={{ marginBottom: '30px' }}>Jetflow is right for operators who:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'operate 2 to 10 aircraft',
                  'serve executive, corporate, or ultra-high-net-worth charter demand',
                  'rely too heavily on brokers or referrals for pipeline',
                  'want direct inbound that arrives with more context',
                  'are ready to treat demand as infrastructure, not a campaign'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <CheckCircle size={20} color="var(--color-amber-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '30px' }}>Jetflow is not right for operators who:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'are just starting with one aircraft',
                  'want a one-off campaign',
                  'need general aviation visibility rather than charter demand',
                  'are not ready to improve their sales intake process',
                  'only want more traffic, not better-fit conversations'
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
            <p style={{ fontWeight: 500, color: 'var(--color-near-black)', marginBottom: '20px' }}>
              If your sales team is still clarifying basic intent after every enquiry, the website is not doing enough upstream.
            </p>
            <Link to="/contact" className="btn btn-primary">Request a Briefing</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
