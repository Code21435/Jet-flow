const Contact = () => {
  return (
    <div className="page-content">
      {/* Section 1 — Page intro */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Let us start with the right conversation</h1>
          <p style={{ fontSize: '20px', maxWidth: '800px' }}>
            The briefing is a focused 30-minute conversation. Before we speak, we ask a few questions so we arrive prepared — and so do you.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container grid-2-contact">

          {/* Section 2 — The pre-qualification form */}
          <div style={{ backgroundColor: 'var(--color-pure-white)', padding: '50px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-near-black)' }}>Name and role</label>
                <input type="text" placeholder="John Doe, Director of Sales" />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-near-black)' }}>Operation name</label>
                <input type="text" placeholder="Executive Air Charter" />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-near-black)' }}>Website link</label>
                <input type="text" placeholder="https://..." />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-near-black)' }}>Number of aircraft</label>
                <select>
                  <option value="" disabled selected>Select fleet size...</option>
                  <option value="1">1 aircraft</option>
                  <option value="2-5">2–5 aircraft</option>
                  <option value="6-10">6–10 aircraft</option>
                  <option value="10+">10+ aircraft</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-near-black)' }}>Primary charter markets</label>
                <select>
                  <option value="" disabled selected>Select primary market...</option>
                  <option value="us-dom">US domestic</option>
                  <option value="us-intl">US + international</option>
                  <option value="eu">Europe</option>
                  <option value="me">Middle East</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-near-black)' }}>Main demand source today</label>
                <select>
                  <option value="" disabled selected>Select main source...</option>
                  <option value="brokers">Brokers</option>
                  <option value="referrals">Referrals & Repeat</option>
                  <option value="inbound">Direct Inbound (Website/Ads)</option>
                  <option value="mixed">Mixed</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-near-black)' }}>Biggest current issue</label>
                <select>
                  <option value="" disabled selected>Select biggest issue...</option>
                  <option value="volume">Not enough volume</option>
                  <option value="fit">Enquiries are not a good fit</option>
                  <option value="speed">Sales cycle is too slow/requires too much clarification</option>
                  <option value="consistency">Demand is inconsistent</option>
                  <option value="broker-reliance">Over-reliance on brokers</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-near-black)' }}>What should be different 90 days from now?</label>
                <textarea rows={3} placeholder="Briefly describe your goals..."></textarea>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-near-black)' }}>Timeline for improving inbound</label>
                <select>
                  <option value="" disabled selected>Select timeline...</option>
                  <option value="immediate">Immediately (Active Project)</option>
                  <option value="3-months">Next 3 Months</option>
                  <option value="6-months">Next 6 Months</option>
                  <option value="research">Just researching</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">Request My Strategy Briefing</button>
            </form>

            <p style={{ marginTop: '20px', fontSize: '14px', color: 'var(--color-slate-gray)', textAlign: 'center' }}>
              We respond within one business day. If your operation is not the right fit for Jetflow, we will tell you that clearly in our response.
            </p>
          </div>

          {/* Section 3 — What happens next */}
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>What happens after you submit</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '30px', height: '30px', backgroundColor: 'var(--color-mid-navy)', color: 'var(--color-pure-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, flexShrink: 0 }}>1</div>
                <p style={{ margin: 0, paddingTop: '3px', color: 'var(--color-near-black)', fontWeight: 500 }}>We review your details (within 1 business day)</p>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '30px', height: '30px', backgroundColor: 'var(--color-mid-navy)', color: 'var(--color-pure-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, flexShrink: 0 }}>2</div>
                <p style={{ margin: 0, paddingTop: '3px', color: 'var(--color-near-black)', fontWeight: 500 }}>If there is a fit, we send a calendar link for a 30-minute briefing</p>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '30px', height: '30px', backgroundColor: 'var(--color-mid-navy)', color: 'var(--color-pure-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, flexShrink: 0 }}>3</div>
                <p style={{ margin: 0, paddingTop: '3px', color: 'var(--color-near-black)', fontWeight: 500 }}>The briefing is focused on your operation — not a sales presentation</p>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '30px', height: '30px', backgroundColor: 'var(--color-mid-navy)', color: 'var(--color-pure-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, flexShrink: 0 }}>4</div>
                <p style={{ margin: 0, paddingTop: '3px', color: 'var(--color-near-black)', fontWeight: 500 }}>You leave with a clear picture of whether and how Jetflow applies to you</p>
              </div>
            </div>

            <div style={{ marginTop: '50px', padding: '20px', borderTop: '1px solid #ddd' }}>
              <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-slate-gray)' }}>
                No follow-up pressure. No long proposals unless you ask for one.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
