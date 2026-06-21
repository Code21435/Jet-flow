import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="page-content">

      {/* Section 1 — Page hero */}
      <section className="section" style={{ paddingBottom: '60px' }}>
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>How the system works</div>
          <h1>A system for operators ready to move beyond reactive demand</h1>
          <p style={{ fontSize: '19px' }}>
            Four stages that work as one. Each one addresses a specific gap between where demand is now and where it needs to be — built around the operator's fleet, routes, and markets.
          </p>
        </div>
      </section>

      {/* Stage 01: Recognize */}
      <section className="premium-split">
        <div className="premium-split-image" style={{ backgroundImage: 'url(/services.png)' }}></div>
        <div className="premium-split-content">
          <div className="stage-number-massive">01</div>
          <div className="premium-content-inner reveal-element">
            <div className="label amber-text" style={{ marginBottom: '10px' }}>Stage 01</div>
            <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-slate-gray)', marginBottom: '24px' }}>Catalyst Engine</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', marginBottom: '24px' }}>Recognize the current demand reality</h2>
            <p style={{ marginBottom: '20px', fontSize: '18px' }}>
              Most operators know that brokers and referrals drive too much of their pipeline. The Catalyst Engine starts with an honest look at where demand originates today — what is reactive, what is broker-dependent, and what is unclear — before building anything new.
            </p>
            <h3 style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '40px', marginBottom: '10px', color: 'var(--color-slate-gray)' }}>What it includes:</h3>
            <ul className="premium-list">
              <li>Audience and route-market mapping</li>
              <li>Demand source analysis</li>
              <li>Direct inbound positioning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stage 02: Define */}
      <section className="premium-split alt">
        <div className="premium-split-image" style={{ backgroundImage: 'url(/svc-cockpit.png)' }}></div>
        <div className="premium-split-content">
          <div className="stage-number-massive">02</div>
          <div className="premium-content-inner reveal-element">
            <div className="label amber-text" style={{ marginBottom: '10px' }}>Stage 02</div>
            <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-slate-gray)', marginBottom: '24px' }}>Activation Blueprint</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', marginBottom: '24px' }}>Define the future state</h2>
            <p style={{ marginBottom: '20px', fontSize: '18px' }}>
              Before building anything, the operator needs to understand what stronger direct demand would actually mean in practice — for utilization rates, client relationships, margin per flight, and how sales spends its time.
            </p>
            <p style={{ marginBottom: '20px', fontSize: '18px' }}>
              The Activation Blueprint builds the structural demand architecture aligned to the specific operation. This is the foundation the entire system runs on.
            </p>
            <h3 style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '40px', marginBottom: '10px', color: 'var(--color-slate-gray)' }}>What it includes:</h3>
            <ul className="premium-list">
              <li>Route-specific demand modeling</li>
              <li>Audience segment mapping</li>
              <li>Competitive positioning strategy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stage 03: Build */}
      <section className="premium-split">
        <div className="premium-split-image" style={{ backgroundImage: 'url(/svc-flight.png)' }}></div>
        <div className="premium-split-content">
          <div className="stage-number-massive">03</div>
          <div className="premium-content-inner reveal-element">
            <div className="label amber-text" style={{ marginBottom: '10px' }}>Stage 03</div>
            <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-slate-gray)', marginBottom: '24px' }}>Launch Sequence</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', marginBottom: '24px' }}>Build the demand infrastructure</h2>
            <p style={{ marginBottom: '20px', fontSize: '18px' }}>
              Positioning, website structure, acquisition channels, briefing flow, and tracking — deployed in a defined 60 to 90 day window. This is where inbound begins to shift from reactive to structured.
            </p>
            <h3 style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '40px', marginBottom: '10px', color: 'var(--color-slate-gray)' }}>What it includes:</h3>
            <ul className="premium-list">
              <li>Infrastructure setup and integration</li>
              <li>Campaign rollout and content launch</li>
              <li>Measurement baseline and sales handoff</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stage 04: Calibrate */}
      <section className="premium-split alt">
        <div className="premium-split-image" style={{ backgroundImage: 'url(/svc-analytics.png)' }}></div>
        <div className="premium-split-content">
          <div className="stage-number-massive">04</div>
          <div className="premium-content-inner reveal-element">
            <div className="label amber-text" style={{ marginBottom: '10px' }}>Stage 04</div>
            <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-slate-gray)', marginBottom: '24px' }}>Momentum Optimization</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', marginBottom: '24px' }}>Calibrate from real market response</h2>
            <p style={{ marginBottom: '20px', fontSize: '18px' }}>
              Ongoing calibration based on enquiry quality, operator readiness, route priorities, and demand source performance. The system compounds over time — improving not just volume, but the quality of conversations that reach the sales team.
            </p>
            <h3 style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '40px', marginBottom: '10px', color: 'var(--color-slate-gray)' }}>What it includes:</h3>
            <ul className="premium-list">
              <li>Monthly performance calibration</li>
              <li>Market shift and route adjustments</li>
              <li>Pipeline and message refinement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6 — System note */}
      <section className="section section-navy text-center">
        <div className="container">
          <h2 style={{ color: 'var(--color-pure-white)' }}>These are not standalone services. They are one system.</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 50px', fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>
            Most operators begin with Stages 01 and 02. Stages 03 and 04 deploy once the foundation is in place. Every engagement is scoped specifically to the operation — there is no off-the-shelf version of this.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '540px', margin: '0 auto 60px' }}>
            {[
              'Stage 01 — Recognize the current demand reality',
              'Stage 02 — Define the future state',
              'Stage 03 — Build the demand infrastructure',
              'Stage 04 — Calibrate from real market response',
            ].map((label, i) => (
              <div key={i} className="card card-navy" style={{ padding: '18px 24px', border: i === 0 ? '1px solid var(--color-amber-gold)' : '1px solid rgba(255,255,255,0.12)', textAlign: 'left' }}>
                <span style={{ color: i === 0 ? 'var(--color-amber-gold)' : 'rgba(255,255,255,0.75)', fontSize: '15px', fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: '24px', fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>Ready to understand which stages apply to your operation?</p>
          <Link to="/contact" className="btn btn-primary">Request a Demand Readiness Briefing</Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
