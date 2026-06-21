import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page-content">

      {/* Section 1 — Manifesto Hero */}
      <section className="section" style={{ backgroundColor: 'var(--color-pure-white)', padding: '160px 5% 100px' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <div className="label amber-text reveal-element" style={{ marginBottom: '24px' }}>The thinking behind Jetflow</div>
          <h1 className="hero-headline reveal-element" style={{ fontSize: 'clamp(40px, 5vw, 60px)', color: 'var(--color-deep-navy)', marginBottom: '40px', lineHeight: 1.1 }}>
            Built around a simple observation about how charter demand actually works
          </h1>
          <div className="reveal-element" style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-amber-gold)', margin: '0 auto 40px' }}></div>
        </div>
      </section>

      {/* Section 2 — Founder story (Editorial Split) */}
      <section className="premium-split">
        <div className="premium-split-image" style={{ backgroundImage: 'url(/about.png)' }}></div>
        <div className="premium-split-content">
          <div className="premium-content-inner reveal-element" style={{ maxWidth: '580px', padding: '40px 0' }}>
            <p style={{ fontSize: '20px', color: 'var(--color-near-black)', marginBottom: '28px', lineHeight: 1.6 }}>
              Jetflow was built around a simple observation: many strong operators are not short on capability. They are short on control over how quality demand is created.
            </p>
            <p style={{ fontSize: '18px', color: 'var(--color-slate-gray)', marginBottom: '28px', lineHeight: 1.6 }}>
              The operations I kept seeing had premium aircraft, serious safety records, and experienced teams. But their pipelines were reactive — built around whoever called first, whichever broker had availability, whichever repeat client happened to need a trip that month.
            </p>
            <p style={{ fontSize: '18px', color: 'var(--color-slate-gray)', marginBottom: '28px', lineHeight: 1.6 }}>
              The problem is not that brokers and referrals are bad channels. They are a real and lasting part of how private aviation works. The problem is when they are the only channels — when the operator has no visibility into where quality demand is coming from or how to build more of it directly.
            </p>
            <p style={{ fontSize: '18px', color: 'var(--color-slate-gray)', marginBottom: '40px', lineHeight: 1.6 }}>
              The goal is not to remove brokers from the equation. The goal is to help operators build stronger direct demand alongside the channels they already rely on — so that the pipeline becomes something they manage, not something they wait for.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-amber-gold)' }}></div>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 600, color: 'var(--color-near-black)', margin: 0, letterSpacing: '0.05em' }}>
                DAVID, FOUNDER
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Philosophy (Centered Manifesto) */}
      <section className="section section-warm" style={{ padding: '140px 5%' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="label reveal-element" style={{ marginBottom: '16px', textAlign: 'center' }}>The Approach</div>
          <h2 className="reveal-element" style={{ textAlign: 'center', marginBottom: '50px', fontSize: 'clamp(32px, 4vw, 44px)' }}>Why we build systems, not campaigns</h2>
          
          <div className="reveal-element" style={{ borderLeft: '1px solid var(--color-amber-gold)', paddingLeft: '32px', marginLeft: '16px' }}>
            <p style={{ fontSize: '20px', color: 'var(--color-near-black)', marginBottom: '30px', lineHeight: 1.6 }}>
              Campaigns expire. Systems compound. Most marketing services in aviation sell visibility — impressions, reach, awareness. That has value, but it is not the same as demand control.
            </p>
            <p style={{ fontSize: '18px', color: 'var(--color-slate-gray)', marginBottom: '30px', lineHeight: 1.6 }}>
              Jetflow builds demand infrastructure. The difference shows up in utilization curves, pipeline predictability, and how the sales team spends their time. The aim is not to make the operation famous. It is to build the conditions for consistent, qualified inbound — inbound that arrives with enough context that the first conversation is already more useful.
            </p>
            <p style={{ fontSize: '18px', color: 'var(--color-slate-gray)', margin: 0, lineHeight: 1.6 }}>
              The website, the messaging, and the briefing process are designed to help operators recognize whether their current demand model still fits where they want the business to go next. That recognition is always the starting point.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Pull quote */}
      <section className="section" style={{ backgroundColor: 'var(--color-pure-white)', padding: '120px 5%' }}>
        <div className="container text-center reveal-element" style={{ maxWidth: '860px' }}>
          <div style={{ color: 'var(--color-amber-gold)', fontSize: '120px', fontFamily: 'var(--font-hero)', lineHeight: 0.5, marginBottom: '20px', opacity: 0.3 }}>"</div>
          <p style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--color-deep-navy)', fontStyle: 'italic', lineHeight: 1.4 }}>
            The operators who grow past a certain point are usually not the ones with the most visibility. They are the ones who figured out how to build demand on their own terms.
          </p>
        </div>
      </section>

      {/* Section 5 — CTA */}
      <section className="section section-navy text-center" style={{ padding: '120px 5%' }}>
        <div className="container reveal-element" style={{ maxWidth: '680px' }}>
          <p style={{ fontSize: '22px', marginBottom: '40px', color: 'var(--color-pure-white)', lineHeight: 1.5 }}>
            If you want to understand whether Jetflow is the right fit for your operation — the briefing is the right place to start.
          </p>
          <Link to="/contact" className="btn btn-primary">Request a Demand Readiness Briefing</Link>
        </div>
      </section>

    </div>
  );
};

export default About;
