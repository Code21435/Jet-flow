import { Link } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';

const Home = () => {
  return (
    <div>

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img
            src="/hero-jet.png"
            alt="Private business jet on tarmac"
            className="hero-bg-image"
          />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-label">
            DEMAND SYSTEMS FOR EXECUTIVE CHARTER
          </div>

          <h1 className="hero-headline">
            Your demand may be working. But is it built for where the business is going next?
          </h1>

          <p className="hero-subtext">
            Jetflow helps executive charter operators move from reactive, broker-led demand to a more intentional system for creating, managing, and measuring direct demand.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Request a Demand Readiness Briefing</Link>
            <Link to="/how-it-works" className="btn btn-ghost">See How the System Works</Link>
          </div>

          <div className="hero-trust-strip">
            <div className="hero-trust-item">
              <span className="hero-trust-label" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-pure-white)' }}>Designed for operators with<br />2 to 10 aircraft</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <span className="hero-trust-label" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-pure-white)' }}>Structured around 60 to 90<br />day deployment cycles</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <span className="hero-trust-label" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-pure-white)' }}>Focused on direct demand,<br />visibility, and growth control</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ── SECTION 2: RECOGNITION ──────────────────────────────────────── */}
      <section className="section" style={{ position: 'relative', padding: '120px 5%' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'flex-start' }}>
          
          {/* Sticky Left Column */}
          <div style={{ flex: '1 1 400px', position: 'sticky', top: '140px' }}>
            <div className="label" style={{ marginBottom: '20px', color: 'var(--color-amber-gold)' }}>The Turning Point</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', marginBottom: '20px', lineHeight: 1.1 }}>
              Does this sound familiar?
            </h2>
            <p style={{ fontSize: '18px', maxWidth: '420px', color: 'var(--color-slate-gray)' }}>
              These aren't failures. They are simply the signals that your operation has grown beyond the reactive model that got you here.
            </p>
          </div>

          {/* Right Column - Scrolling Cards */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            <div className="human-card" style={{ transitionDelay: '0.1s' }}>
              <div className="human-card-number">01</div>
              <h3 className="human-card-quote">"We're relying too heavily on brokers and whoever happens to call first."</h3>
              <p>Broker activity, repeat clients, and referrals still drive the vast majority of the pipeline. It has worked well enough to get you here, but it creates a hard ceiling on growth.</p>
            </div>

            <div className="human-card" style={{ transitionDelay: '0.2s' }}>
              <div className="human-card-number">02</div>
              <h3 className="human-card-quote">"Our team is fantastic at reacting, but we rarely get there first."</h3>
              <p>Sales conversations usually begin after the opportunity has already started forming somewhere else. Your team responds perfectly, but you aren't the ones shaping the demand.</p>
            </div>

            <div className="human-card" style={{ transitionDelay: '0.3s' }}>
              <div className="human-card-number">03</div>
              <h3 className="human-card-quote">"We have plenty of activity, but almost no real control."</h3>
              <p>There might be enquiries, calls, and website visits—but there isn't enough clarity around where the highest quality demand is actually coming from, or how to reliably repeat it.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: TRANSFORMATION ──────────────────── */}
      <section className="section" style={{ backgroundColor: 'var(--color-pure-white)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="label" style={{ marginBottom: '16px', textAlign: 'center', color: 'var(--color-amber-gold)' }}>The Shift</div>
          <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>
            From reactive demand to intentional control
          </h2>
          <p style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 70px', color: 'var(--color-slate-gray)' }}>
            This is what actually changes when an operator moves from waiting for demand to building it.
          </p>

          <div className="transformation-list">
            {[
              {
                before: 'Demand depends heavily on brokers, referrals, and timing.',
                after: 'Demand is built through a structured, predictable direct system.',
              },
              {
                before: 'The team knows the symptoms but rarely the source.',
                after: 'Total visibility into where high-value demand originates.',
              },
              {
                before: 'Website interest rarely translates to serious conversations.',
                after: 'The site helps the right buyer recognize the problem before they call.',
              },
              {
                before: 'Sales spends time clarifying basic context about the operation.',
                after: 'Sales explores a change the operator is already considering.',
              },
              {
                before: 'Growth feels dependent on market conditions and luck.',
                after: 'Growth becomes measurable, managed, and repeatable.',
              },
            ].map((row, i) => (
              <div key={i} className="transformation-item reveal-on-scroll" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="t-col t-before">
                  <div className="t-label">The Old Model</div>
                  <p>{row.before}</p>
                </div>
                <div className="t-divider">
                  <div className="t-line"></div>
                  <div className="t-dot"></div>
                </div>
                <div className="t-col t-after">
                  <div className="t-label t-label-gold">With Jetflow</div>
                  <p>{row.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHY THIS MATTERS NOW ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="label" style={{ marginBottom: '16px' }}>Why the timing matters</div>
          <div className="grid-2" style={{ alignItems: 'start', gap: '60px' }}>
            <div className="reveal-element">
              <h2 style={{ color: 'var(--color-deep-navy)' }}>
                The old demand model is no longer enough for the next stage of growth
              </h2>
              <p>
                Private aviation is a relationship-driven market. Brokers, referrals, and repeat clients are a real part of how charter demand works — and they always will be.
              </p>
              <p>
                But operators who want to grow beyond a certain point begin to feel the limits of a model built entirely around inbound that arrives on its own terms. The ceiling appears not because the operation is weak, but because the demand infrastructure has not kept pace with where the business is heading.
              </p>
              <p>
                Jetflow is built for the moment when an operator recognizes that distinction.
              </p>
            </div>
            <div className="reveal-element" style={{ transitionDelay: '0.2s' }}>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '8px' }}>
                {[
                  'Buyers often compare operators before speaking to sales',
                  'Assistants and travel managers need clarity quickly',
                  'Aircraft fit and route fit matter before price',
                  'Response quality shapes trust before the first call',
                  'Broker dependence creates pipeline instability over time',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '22px' }}>
                    <CheckCircle size={18} color="var(--color-amber-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-near-black)', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HOW JETFLOW WORKS ────────────────────────────────── */}
      <section className="section section-navy">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '12px', color: 'var(--color-pure-white)' }}>
            One system. Four stages. Built around your operation.
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto 50px' }}>
            Not a campaign. A structured approach to building demand that the operator can see, measure, and grow over time.
          </p>

          <div className="grid-2" style={{ marginBottom: '50px' }}>
            <div className="card card-navy" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="label amber-text" style={{ marginBottom: '10px' }}>Stage 01</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '14px' }}>Catalyst Engine</div>
              <h3 style={{ color: 'var(--color-pure-white)' }}>Recognize the current demand reality</h3>
              <p style={{ flex: 1, color: 'rgba(255,255,255,0.7)' }}>Where demand comes from today, what is reactive, what is broker-dependent, and what is unclear. No assumptions — operator-specific.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>
                <li style={{ marginBottom: '8px' }}>• audience and route-market mapping</li>
                <li style={{ marginBottom: '8px' }}>• demand source analysis</li>
                <li style={{ marginBottom: '8px' }}>• direct inbound positioning</li>
              </ul>
            </div>
            <div className="card card-navy" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="label amber-text" style={{ marginBottom: '10px' }}>Stage 02</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '14px' }}>Activation Blueprint</div>
              <h3 style={{ color: 'var(--color-pure-white)' }}>Define the future state</h3>
              <p style={{ flex: 1, color: 'rgba(255,255,255,0.7)' }}>What stronger direct demand would actually mean for utilization, margins, and client relationships — mapped to the specific operation.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>
                <li style={{ marginBottom: '8px' }}>• website flow and briefing logic</li>
                <li style={{ marginBottom: '8px' }}>• landing page architecture</li>
                <li style={{ marginBottom: '8px' }}>• qualification and CTA path</li>
              </ul>
            </div>
            <div className="card card-navy" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="label amber-text" style={{ marginBottom: '10px' }}>Stage 03</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '14px' }}>Launch Sequence</div>
              <h3 style={{ color: 'var(--color-pure-white)' }}>Build the demand infrastructure</h3>
              <p style={{ flex: 1, color: 'rgba(255,255,255,0.7)' }}>Positioning, website structure, acquisition channels, briefing flow, and tracking — deployed in a defined 60 to 90 day window.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>
                <li style={{ marginBottom: '8px' }}>• campaign setup and content launch</li>
                <li style={{ marginBottom: '8px' }}>• measurement baseline</li>
                <li style={{ marginBottom: '8px' }}>• handoff into sales process</li>
              </ul>
            </div>
            <div className="card card-navy" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="label amber-text" style={{ marginBottom: '10px' }}>Stage 04</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '14px' }}>Momentum Optimization</div>
              <h3 style={{ color: 'var(--color-pure-white)' }}>Calibrate from real market response</h3>
              <p style={{ flex: 1, color: 'rgba(255,255,255,0.7)' }}>Refine based on enquiry quality, operator readiness, route priorities, and demand source performance. The system compounds over time.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>
                <li style={{ marginBottom: '8px' }}>• enquiry review and conversion feedback</li>
                <li style={{ marginBottom: '8px' }}>• message refinement</li>
                <li style={{ marginBottom: '8px' }}>• pipeline calibration</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link to="/services" className="btn btn-ghost">See the full system →</Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHAT CHANGES FIRST ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="label" style={{ marginBottom: '16px' }}>What changes first</div>
          <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>
            What changes when demand becomes intentional
          </h2>
          <p style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 50px' }}>
            The most immediate shifts are not always about volume. They are about clarity.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '800px', margin: '0 auto' }}>
            {[
              {
                n: '01',
                title: 'More clarity before the briefing',
                body: 'Operators understand whether they are looking for more leads or a better demand system — before the first conversation begins.',
              },
              {
                n: '02',
                title: 'Better visibility into demand sources',
                body: 'The business starts seeing where quality opportunities actually come from, not just how many arrived.',
              },
              {
                n: '03',
                title: 'Stronger direct relationships',
                body: 'The operator becomes less dependent on broker-led demand alone, without removing brokers from the picture entirely.',
              },
              {
                n: '04',
                title: 'More useful sales conversations',
                body: 'The briefing becomes about exploring a change the operator is already considering — not explaining what the operation does from scratch.',
              },
            ].map((step, i) => (
              <div
                key={step.n}
                className="reveal-element"
                style={{
                  display: 'flex',
                  gap: '32px',
                  alignItems: 'flex-start',
                  padding: '40px 0',
                  borderBottom: i === 3 ? 'none' : '1px solid rgba(0, 71, 65, 0.08)',
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-hero)',
                  fontSize: '44px',
                  fontWeight: 700,
                  color: 'var(--color-amber-gold)',
                  lineHeight: 1,
                  width: '60px',
                  flexShrink: 0,
                }}>
                  {step.n}
                </div>
                <div>
                  <h3 style={{ marginBottom: '10px', fontSize: '22px', color: 'var(--color-deep-navy)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    {step.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '16px', color: 'var(--color-slate-gray)', lineHeight: 1.6 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FIT (Self-recognition) ───────────────────────────── */}
      <section className="section section-warm">
        <div className="container">
          <div className="label" style={{ marginBottom: '16px' }}>Who this is for</div>
          <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>
            This is for operators who recognize the old model is starting to limit the next stage
          </h2>
          <p style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 60px' }}>
            Real fit is not just about fleet size. It is about whether the operator has reached the point where they recognize the old way may not be enough.
          </p>

          <div className="grid-2">
            <div className="reveal-element" style={{ padding: '40px', backgroundColor: 'var(--color-pure-white)', border: '1px solid rgba(0, 71, 65, 0.06)', borderRadius: '2px' }}>
              <h3 style={{ marginBottom: '28px', fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--color-deep-navy)', fontWeight: 600 }}>Jetflow is right for operators who:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Rely on brokers, referrals, and repeat clients more than they would like',
                  'Want stronger direct client relationships alongside existing channels',
                  'Know that visibility alone is not the same as demand control',
                  'Want to understand where quality demand actually comes from',
                  'Are ready to treat demand as infrastructure, not a campaign',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '18px' }}>
                    <CheckCircle size={18} color="var(--color-amber-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '16px', color: 'var(--color-near-black)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '13px', color: 'var(--color-slate-gray)', marginTop: '20px', fontStyle: 'italic' }}>
                Typically operators with 2 to 10 aircraft serving executive, corporate, or UHNW charter demand.
              </p>
            </div>

            <div className="reveal-element" style={{ padding: '40px', backgroundColor: 'var(--color-pure-white)', border: '1px solid rgba(0, 71, 65, 0.06)', borderRadius: '2px', transitionDelay: '0.2s' }}>
              <h3 style={{ marginBottom: '28px', fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--color-deep-navy)', fontWeight: 600 }}>Jetflow is not right for operators who:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Only want more leads without changing how demand is managed',
                  'Want a short campaign instead of a structured system',
                  'Are not yet ready to measure demand quality over time',
                  'See the website only as a brochure, not a demand asset',
                  'Are not yet questioning whether their current growth model is the right one',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '18px' }}>
                    <XCircle size={18} color="#C0392B" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '16px', color: 'var(--color-near-black)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '60px', maxWidth: '640px', margin: '60px auto 0' }}>
            <p style={{ fontSize: '18px', fontWeight: 500, color: 'var(--color-near-black)', marginBottom: '12px', lineHeight: 1.6 }}>
              For operators who recognize that the way demand has always been generated may not be enough for where the business is going next.
            </p>
            <p style={{ color: 'var(--color-slate-gray)', marginBottom: '32px' }}>
              The briefing is a 30-minute conversation. No pitch. No pressure. Just clarity on whether and how Jetflow applies to your operation.
            </p>
            <Link to="/contact" className="btn btn-primary">Request a Demand Readiness Briefing</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
