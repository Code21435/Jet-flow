import { Link } from 'react-router-dom';

const Outcomes = () => {
  return (
    <div className="page-content">

      {/* Section 1 — Hero */}
      <section className="section-navy" style={{
        position: 'relative',
        padding: '160px 5% 120px',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/results.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          zIndex: 0,
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,71,65,0.8), rgba(0,71,65,0.95))',
          zIndex: 1,
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0' }}>
          <div className="label amber-text reveal-element" style={{ marginBottom: '24px' }}>Outcomes</div>
          <h1 className="hero-headline" style={{ fontSize: 'clamp(44px, 5vw, 64px)', marginBottom: '30px' }}>What changes when demand becomes intentional</h1>
          <p className="reveal-element" style={{ fontSize: '22px', marginBottom: '0', maxWidth: '680px', color: 'var(--color-warm-white)', lineHeight: 1.5 }}>
            The most important shifts are not always about volume. They are about clarity, control, and the quality of conversations that reach the sales team.
          </p>
        </div>
      </section>

      {/* Section 2 — Transformation outcomes */}
      <section className="section" style={{ backgroundColor: 'var(--color-pure-white)' }}>
        <div className="container">
          <div className="label" style={{ marginBottom: '16px', textAlign: 'center' }}>What operators experience</div>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: 'clamp(36px, 4vw, 48px)' }}>Five things that change first</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 80px', fontSize: '18px', color: 'var(--color-slate-gray)' }}>
            These are not promises. They are the consistent shifts that operators describe when the demand system is working.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '840px', margin: '0 auto' }}>
            {[
              {
                n: '01',
                title: 'More clarity before the briefing',
                body: 'Operators and buyers arrive at the first conversation with a clearer picture of what they are looking for and whether the operation is the right fit. Sales spends less time on basic context.',
              },
              {
                n: '02',
                title: 'Better visibility into demand sources',
                body: 'The business starts seeing where quality opportunities actually come from — not just how many arrived. That visibility makes it possible to reinforce what is working and address what is not.',
              },
              {
                n: '03',
                title: 'Stronger direct relationships',
                body: 'The operator becomes less dependent on broker-led demand alone. This does not remove brokers from the picture — it builds a more balanced channel mix with a stronger direct layer.',
              },
              {
                n: '04',
                title: 'More useful sales conversations',
                body: 'Because buyers arrive having already pre-framed the problem, the briefing becomes about exploring a change the operator is already considering — not explaining what the operation does.',
              },
              {
                n: '05',
                title: 'Better control over growth direction',
                body: 'Demand becomes something the operator manages and measures, rather than something they wait for. Growth becomes more repeatable — less dependent on market timing or who calls first.',
              },
            ].map((item, index) => (
              <div
                key={item.n}
                className="reveal-element"
                style={{
                  display: 'flex',
                  gap: '32px',
                  alignItems: 'flex-start',
                  padding: '40px 0',
                  borderBottom: index === 4 ? 'none' : '1px solid rgba(0, 71, 65, 0.08)',
                  transitionDelay: `${index * 0.15}s`,
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
                  {item.n}
                </div>
                <div>
                  <h3 style={{ marginBottom: '12px', fontSize: '24px', color: 'var(--color-deep-navy)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '17px', color: 'var(--color-slate-gray)', lineHeight: 1.65 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — The honest note */}
      <section className="section section-navy" style={{ padding: '120px 5%' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div className="label amber-text reveal-element" style={{ marginBottom: '24px' }}>A note on results</div>
          <h2 className="reveal-element" style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: '40px', color: 'var(--color-pure-white)' }}>Fewer conversations. More useful ones.</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', textAlign: 'left', marginTop: '60px' }}>
            <div className="reveal-element">
              <p style={{ marginBottom: '24px', fontSize: '18px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                The conventional aviation marketing model is built around volume — more leads, more enquiries, more traffic. The assumption is that if enough people see the operation, some of them will book.
              </p>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                Jetflow is built around a different assumption: that the quality of a conversation matters more than the quantity. Operators who have deployed the system describe the shift not as dramatically more inbound, but as better inbound — enquiries that arrive with more context, more intent, and a clearer sense of fit.
              </p>
            </div>
            <div className="reveal-element" style={{ transitionDelay: '0.2s' }}>
              <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--color-amber-gold)', marginBottom: '30px' }}></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Sales conversations start from a more informed position',
                  'Enquiry quality improves before volume increases',
                  'The operator sees the pipeline more clearly',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-amber-gold)', marginTop: '10px', flexShrink: 0 }}></div>
                    <span style={{ fontSize: '18px', color: 'var(--color-pure-white)', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--color-amber-gold)', marginTop: '30px', opacity: 0.3 }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-warm-white)', textAlign: 'center', padding: '120px 5%' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ marginBottom: '20px', fontSize: 'clamp(32px, 4vw, 44px)' }}>
            Ready to see what changes for your operation?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '50px', color: 'var(--color-slate-gray)' }}>
            The briefing is a 30-minute conversation focused on your operation — not a presentation about Jetflow.
          </p>
          <Link to="/contact" className="btn btn-primary">Request a Demand Readiness Briefing</Link>
        </div>
      </section>

    </div>
  );
};

export default Outcomes;
