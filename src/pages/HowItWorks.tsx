import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="page-content">

      {/* Section 1 — Hero & Timeline */}
      <section className="section" style={{ backgroundColor: 'var(--color-pure-white)', padding: '160px 5% 100px' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div className="label amber-text reveal-element" style={{ marginBottom: '24px' }}>The Process</div>
          <h1 className="hero-headline reveal-element" style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--color-deep-navy)', marginBottom: '30px', lineHeight: 1.15 }}>
            From first conversation to consistent direct demand
          </h1>
          <p className="reveal-element" style={{ fontSize: '20px', color: 'var(--color-slate-gray)', marginBottom: '80px', lineHeight: 1.6 }}>
            Four stages, deployed in sequence. The first 90 days are foundational. What comes after is calibration and compounding.
          </p>
        </div>

        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ position: 'relative' }}>
            {/* Vertical timeline line */}
            <div className="reveal-element" style={{ position: 'absolute', left: '28px', top: '10px', bottom: '20px', width: '1px', backgroundColor: 'var(--color-amber-gold)', opacity: 0.3 }}></div>

            {[
              {
                n: '1',
                time: 'Week 1',
                title: 'Demand Readiness Briefing',
                body: 'A focused 30-minute conversation to understand the operation, current pipeline, fleet profile, and the specific gaps in how demand is being created today. No generic audit. Specific to the operator.',
              },
              {
                n: '2',
                time: 'Weeks 2–3',
                title: 'Activation Blueprint',
                body: 'The structural demand architecture is built and documented — routes, audience targeting, positioning, and acquisition channels. This is the foundation everything else runs on.',
              },
              {
                n: '3',
                time: 'Weeks 4–10',
                title: 'Launch Sequence',
                body: 'Deployment of the demand infrastructure — campaigns, pages, inbound paths, and tracking. This is where inbound begins to shift from reactive to structured.',
              },
              {
                n: '4',
                time: 'Ongoing',
                title: 'Momentum Optimization',
                body: 'Monthly calibration based on inbound data, market shifts, and evolving fleet and route priorities. The system compounds over time — improving quality before it improves volume.',
              },
            ].map((step, index) => (
              <div key={index} className="reveal-element" style={{ display: 'flex', gap: '40px', marginBottom: '60px', position: 'relative', transitionDelay: `${index * 0.15}s` }}>
                <div style={{ 
                  width: '56px', height: '56px', 
                  backgroundColor: 'var(--color-deep-navy)', 
                  border: '2px solid var(--color-pure-white)',
                  color: 'var(--color-amber-gold)', 
                  borderRadius: '50%', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontFamily: 'var(--font-hero)', fontSize: '24px', fontWeight: 700, 
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}>
                  {step.n}
                </div>
                <div style={{ paddingTop: '10px' }}>
                  <div style={{ fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-amber-gold)', marginBottom: '12px', fontWeight: 600 }}>{step.time}</div>
                  <h3 style={{ marginBottom: '16px', fontSize: '28px', color: 'var(--color-deep-navy)' }}>{step.title}</h3>
                  <p style={{ fontSize: '18px', color: 'var(--color-slate-gray)', lineHeight: 1.6, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — What to expect */}
      <section className="section section-navy" style={{ padding: '120px 5%' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="label amber-text reveal-element" style={{ marginBottom: '16px', textAlign: 'center' }}>Setting expectations</div>
          <h2 className="reveal-element" style={{ textAlign: 'center', marginBottom: '80px', color: 'var(--color-pure-white)', fontSize: 'clamp(32px, 4vw, 44px)' }}>
            What a well-matched operator can expect
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '760px', margin: '0 auto' }}>
            <div className="reveal-element" style={{ borderLeft: '1px solid var(--color-amber-gold)', paddingLeft: '40px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-4px', top: '10px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-amber-gold)' }}></div>
              <p style={{ margin: 0, fontSize: '20px', color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', lineHeight: 1.6 }}>
                "Inbound quality improves before volume does. The first thing that changes is not how many enquiries arrive — it is how qualified they are when they do."
              </p>
            </div>

            <div className="reveal-element" style={{ borderLeft: '1px solid var(--color-amber-gold)', paddingLeft: '40px', position: 'relative', transitionDelay: '0.15s' }}>
              <div style={{ position: 'absolute', left: '-4px', top: '10px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-amber-gold)' }}></div>
              <p style={{ margin: 0, fontSize: '20px', color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', lineHeight: 1.6 }}>
                "The first 60 to 90 days are foundational. Expect a structural shift in how demand arrives by month three — not a spike in week one."
              </p>
            </div>

            <div className="reveal-element" style={{ borderLeft: '1px solid var(--color-amber-gold)', paddingLeft: '40px', position: 'relative', transitionDelay: '0.3s' }}>
              <div style={{ position: 'absolute', left: '-4px', top: '10px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-amber-gold)' }}></div>
              <p style={{ margin: 0, fontSize: '20px', color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', lineHeight: 1.6 }}>
                "The most effective deployments happen when the operator is actively involved in the first 30 days. This is not a set-and-forget engagement."
              </p>
            </div>
          </div>

          <div className="text-center reveal-element" style={{ marginTop: '100px' }}>
            <p style={{ marginBottom: '30px', fontSize: '20px', color: 'var(--color-warm-white)' }}>Does this timeline fit where the operation is right now?</p>
            <Link to="/contact" className="btn btn-primary">Request a Demand Readiness Briefing</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HowItWorks;
