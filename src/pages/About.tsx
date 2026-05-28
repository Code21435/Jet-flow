import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page-content">
      {/* Section 1 — Founder story */}
      <section className="section">
        <div className="container grid-2-services">
          <div style={{
            backgroundImage: 'url(/about.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px',
            minHeight: '600px',
            height: '100%'
          }}></div>
          <div>
            <div className="label amber-text" style={{ marginBottom: '15px' }}>The person behind the system</div>
            <h2>Built by someone who understands how charter demand actually works</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p>
                I built Jetflow MEDIA after watching too many excellent charter operators lose revenue simply because their demand was entirely reactive. You have a premium fleet and exceptional service, but if you are waiting for brokers to call or past clients to return, you are not in control of your own utilization.
              </p>
              <p>
                The problem isn't that you don't have visibility. The problem is that most marketing in aviation is built around general awareness—getting likes, followers, and broad impressions. That doesn't fill a Challenger 350 for a multi-leg international trip.
              </p>
              <p>
                I realized that what operators needed wasn't another marketing campaign. They needed a structured system that positions their aircraft directly in front of executive decision-makers at the exact moment intent is forming. That's why I created Jetflow—to build demand infrastructure that compounds over time, making your pipeline predictable, not reactive.
              </p>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-near-black)', marginTop: '10px' }}>
                — David, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — The philosophy */}
      <section className="section section-warm">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '40px' }}>Why we build systems, not campaigns</h2>
          <p style={{ fontSize: '18px', textAlign: 'left' }}>
            Campaigns expire. Systems compound. Most marketing services in aviation sell you visibility — impressions, reach, awareness. Jetflow builds demand infrastructure. The difference is not just philosophical. It shows up in your utilization curve, your pipeline predictability, and how your sales team spends their time. We are not trying to make you famous. We are building the conditions for consistent, qualified inbound.
          </p>
        </div>
      </section>

      {/* Section 3 — LinkedIn pull quote */}
      <section className="section">
        <div className="container text-center" style={{ maxWidth: '900px' }}>
          <div style={{ color: 'var(--color-amber-gold)', fontSize: '80px', fontFamily: 'var(--font-hero)', lineHeight: 0.5, marginBottom: '30px' }}>"</div>
          <p style={{ fontFamily: 'var(--font-hero)', fontSize: '32px', color: 'var(--color-near-black)', fontStyle: 'italic', lineHeight: 1.4 }}>
            Stop competing for the same broker crumbs. The operators who control their own demand control their own margins.
          </p>
        </div>
      </section>

      {/* Page CTA */}
      <section className="section section-navy text-center">
        <div className="container">
          <p style={{ fontSize: '20px', marginBottom: '30px' }}>If you want to understand whether Jetflow is the right fit for your operation — start with a briefing.</p>
          <Link to="/contact" className="btn btn-primary">Request a Strategy Briefing</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
