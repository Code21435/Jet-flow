import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="page-content">
      {/* Section 1 — Process overview */}
      <section className="section">
        <div className="container text-center" style={{ maxWidth: '800px', marginBottom: '80px' }}>
          <h1>From first conversation to consistent inbound — here is how it works</h1>
        </div>
        
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            <div style={{ display: 'flex', gap: '30px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-amber-gold)', color: 'var(--color-pure-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 700, flexShrink: 0 }}>1</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Strategy Briefing (Week 1)</h3>
                <p>A focused conversation to understand your operation, current pipeline, fleet profile, and the specific gaps in your demand architecture. No generic audit. Specific to you.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '30px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-amber-gold)', color: 'var(--color-pure-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 700, flexShrink: 0 }}>2</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Activation Blueprint (Weeks 2–3)</h3>
                <p>We build the structural demand architecture aligned to your operation. This is the blueprint the entire system runs on — routes, audience targeting, positioning, and acquisition channels.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '30px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-amber-gold)', color: 'var(--color-pure-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 700, flexShrink: 0 }}>3</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Launch Sequence (Weeks 4–10)</h3>
                <p>Deployment of the Catalyst Engine and supporting infrastructure. This is where inbound begins to shift from reactive to structured.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '30px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-amber-gold)', color: 'var(--color-pure-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 700, flexShrink: 0 }}>4</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Momentum Optimization (Ongoing)</h3>
                <p>Monthly calibration based on inbound data, market shifts, and your evolving fleet and route priorities. The system compounds over time.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2 — What to expect */}
      <section className="section section-warm">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>What a qualified operator can expect</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--color-amber-gold)' }}>
              <p style={{ margin: 0, fontSize: '18px', color: 'var(--color-near-black)', fontWeight: 500 }}>
                "Inbound quality improves before volume does. The first thing that changes is not how many enquiries arrive — it is how qualified they are when they do."
              </p>
            </div>
            
            <div className="card" style={{ borderLeft: '4px solid var(--color-amber-gold)' }}>
              <p style={{ margin: 0, fontSize: '18px', color: 'var(--color-near-black)', fontWeight: 500 }}>
                "The first 60 to 90 days are foundational. You will not see a spike in week one. You will see a structural shift in how demand arrives by month three."
              </p>
            </div>

            <div className="card" style={{ borderLeft: '4px solid var(--color-amber-gold)' }}>
              <p style={{ margin: 0, fontSize: '18px', color: 'var(--color-near-black)', fontWeight: 500 }}>
                "This requires your involvement. The most effective deployments happen when the operator is an active participant in the first 30 days."
              </p>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '60px' }}>
            <p style={{ marginBottom: '20px', fontSize: '18px' }}>Does this timeline fit where your operation is right now?</p>
            <Link to="/contact" className="btn btn-primary">Let us find out — Request a Briefing</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HowItWorks;
