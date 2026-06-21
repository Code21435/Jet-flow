import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface FormData {
  nameRole: string;
  operationName: string;
  website: string;
  fleetSize: string;
  charterMarkets: string;
  demandSource: string;
  demandChallenge: string;
  goalStatement: string;
  timeline: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    nameRole: '',
    operationName: '',
    website: '',
    fleetSize: '',
    charterMarkets: '',
    demandSource: '',
    demandChallenge: '',
    goalStatement: '',
    timeline: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const required = ['nameRole', 'operationName', 'fleetSize', 'demandSource', 'timeline'];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    required.forEach((field) => {
      if (!formData[field as keyof FormData]) {
        newErrors[field] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => { const e = { ...prev }; delete e[field]; return e; });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate submission — connect to Formspree, Netlify Forms, or similar here
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };  if (submitted) {
    return (
      <div className="page-content">
        <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', maxWidth: '560px' }}>
            <div style={{
              width: '72px',
              height: '72px',
              backgroundColor: 'rgba(201, 146, 58, 0.12)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 28px',
            }}>
              <CheckCircle size={36} color="var(--color-amber-gold)" />
            </div>
            <div className="label" style={{ marginBottom: '16px' }}>Briefing request received</div>
            <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Thank you — we will be in touch shortly.</h1>
            <p style={{ fontSize: '17px', marginBottom: '16px' }}>
              We review every request within one business day. If there is a clear fit, you will receive a calendar link for a focused 30-minute conversation.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--color-slate-gray)' }}>
              If your operation is not the right fit for Jetflow at this stage, we will tell you that clearly — and explain why.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-content">

      {/* Section 1 — Page intro */}
      <section className="section" style={{ paddingBottom: '40px', paddingTop: '100px' }}>
        <div className="container">
          <div className="label reveal-element" style={{ marginBottom: '16px', color: 'var(--color-amber-gold)' }}>Before the briefing</div>
          <h1 className="reveal-element" style={{ fontSize: 'clamp(36px, 4vw, 48px)', marginBottom: '16px', color: 'var(--color-deep-navy)' }}>Let us start with the right conversation</h1>
          <p className="reveal-element" style={{ fontSize: '19px', maxWidth: '700px', color: 'var(--color-slate-gray)' }}>
            The briefing is a focused 30-minute conversation. A few questions below help us arrive prepared — and help you arrive clear on what you are looking for.
          </p>
        </div>
      </section>

      <section className="section section-warm" style={{ paddingTop: '60px', paddingBottom: '100px' }}>
        <div className="container grid-2-contact">

          {/* Form */}
          <div className="reveal-element" style={{ backgroundColor: 'var(--color-pure-white)', padding: '50px 40px', borderRadius: '2px', border: '1px solid rgba(0, 71, 65, 0.08)' }}>
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--color-deep-navy)', fontFamily: 'var(--font-hero)' }}>Demand Readiness Brief</h2>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-slate-gray)' }}>Takes about 3 minutes. No obligation.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>

              <div>
                <label className="concierge-label">
                  Name and role <span style={{ color: '#C0392B' }}>*</span>
                </label>
                <input
                  type="text"
                  className={`concierge-input ${errors.nameRole ? 'has-error' : ''}`}
                  placeholder="Jane Smith, Head of Charter Sales"
                  value={formData.nameRole}
                  onChange={(e) => handleChange('nameRole', e.target.value)}
                />
                {errors.nameRole && <p style={{ color: '#C0392B', fontSize: '13px', margin: '-12px 0 16px' }}>{errors.nameRole}</p>}
              </div>

              <div>
                <label className="concierge-label">
                  Operation name <span style={{ color: '#C0392B' }}>*</span>
                </label>
                <input
                  type="text"
                  className={`concierge-input ${errors.operationName ? 'has-error' : ''}`}
                  placeholder="Executive Air Charter"
                  value={formData.operationName}
                  onChange={(e) => handleChange('operationName', e.target.value)}
                />
                {errors.operationName && <p style={{ color: '#C0392B', fontSize: '13px', margin: '-12px 0 16px' }}>{errors.operationName}</p>}
              </div>

              <div>
                <label className="concierge-label">
                  Website link
                </label>
                <input
                  type="text"
                  className="concierge-input"
                  placeholder="https://..."
                  value={formData.website}
                  onChange={(e) => handleChange('website', e.target.value)}
                />
              </div>

              <div>
                <label className="concierge-label">
                  Number of aircraft <span style={{ color: '#C0392B' }}>*</span>
                </label>
                <select
                  className={`concierge-input ${errors.fleetSize ? 'has-error' : ''}`}
                  value={formData.fleetSize}
                  onChange={(e) => handleChange('fleetSize', e.target.value)}
                >
                  <option value="" disabled>Select fleet size...</option>
                  <option value="1">1 aircraft</option>
                  <option value="2-5">2–5 aircraft</option>
                  <option value="6-10">6–10 aircraft</option>
                  <option value="10+">10+ aircraft</option>
                </select>
                {errors.fleetSize && <p style={{ color: '#C0392B', fontSize: '13px', margin: '-12px 0 16px' }}>{errors.fleetSize}</p>}
              </div>

              <div>
                <label className="concierge-label">
                  Primary charter markets
                </label>
                <select
                  className="concierge-input"
                  value={formData.charterMarkets}
                  onChange={(e) => handleChange('charterMarkets', e.target.value)}
                >
                  <option value="" disabled>Select primary market...</option>
                  <option value="us-dom">US domestic</option>
                  <option value="us-intl">US + international</option>
                  <option value="eu">Europe</option>
                  <option value="me">Middle East</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="concierge-label">
                  Main demand source today <span style={{ color: '#C0392B' }}>*</span>
                </label>
                <select
                  className={`concierge-input ${errors.demandSource ? 'has-error' : ''}`}
                  value={formData.demandSource}
                  onChange={(e) => handleChange('demandSource', e.target.value)}
                >
                  <option value="" disabled>Select main source...</option>
                  <option value="brokers">Brokers</option>
                  <option value="referrals">Referrals and repeat clients</option>
                  <option value="inbound">Direct inbound (website / ads)</option>
                  <option value="mixed">Mixed channels</option>
                </select>
                {errors.demandSource && <p style={{ color: '#C0392B', fontSize: '13px', margin: '-12px 0 16px' }}>{errors.demandSource}</p>}
              </div>

              <div>
                <label className="concierge-label">
                  Where does demand feel least predictable right now?
                </label>
                <select
                  className="concierge-input"
                  value={formData.demandChallenge}
                  onChange={(e) => handleChange('demandChallenge', e.target.value)}
                >
                  <option value="" disabled>Select the closest description...</option>
                  <option value="volume">Not enough enquiries overall</option>
                  <option value="fit">Enquiries that are not a good fit</option>
                  <option value="speed">Sales conversations require too much clarification</option>
                  <option value="consistency">Demand is inconsistent across months</option>
                  <option value="broker-reliance">Too much dependence on broker-led demand</option>
                </select>
              </div>

              <div>
                <label className="concierge-label">
                  What would need to change for demand to feel more intentional?
                </label>
                <textarea
                  className="concierge-input"
                  rows={3}
                  placeholder="Briefly describe what a better demand picture would look like for this operation..."
                  value={formData.goalStatement}
                  onChange={(e) => handleChange('goalStatement', e.target.value)}
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div>
                <label className="concierge-label">
                  When does this become a priority? <span style={{ color: '#C0392B' }}>*</span>
                </label>
                <select
                  className={`concierge-input ${errors.timeline ? 'has-error' : ''}`}
                  value={formData.timeline}
                  onChange={(e) => handleChange('timeline', e.target.value)}
                >
                  <option value="" disabled>Select timeline...</option>
                  <option value="immediate">Now — this is an active priority</option>
                  <option value="3-months">Within the next 3 months</option>
                  <option value="6-months">Within the next 6 months</option>
                  <option value="research">Still exploring — not decided yet</option>
                </select>
                {errors.timeline && <p style={{ color: '#C0392B', fontSize: '13px', margin: '-12px 0 16px' }}>{errors.timeline}</p>}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '16px', opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
                disabled={submitting}
              >
                {submitting ? 'Sending...' : 'Request a Demand Readiness Briefing'}
              </button>

            </form>

            <p style={{ marginTop: '24px', fontSize: '13px', color: 'var(--color-slate-gray)', textAlign: 'center', lineHeight: 1.6 }}>
              We respond within one business day. Your details are used only to prepare for the briefing — no marketing lists, no unsolicited follow-up.
            </p>
          </div>

          {/* What happens next */}
          <div className="reveal-element" style={{ paddingTop: '20px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '36px', color: 'var(--color-deep-navy)', fontFamily: 'var(--font-hero)' }}>What happens after you submit</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { n: '1', text: 'We review your details within one business day' },
                { n: '2', text: 'If there is a clear fit, we send a calendar link for a 30-minute briefing' },
                { n: '3', text: 'The briefing is focused on your operation — not a presentation about Jetflow' },
                { n: '4', text: 'You leave with a clear picture of whether and how Jetflow applies to where you are' },
              ].map((step) => (
                <div key={step.n} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', backgroundColor: 'var(--color-deep-navy)', color: 'var(--color-amber-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 700, flexShrink: 0 }}>{step.n}</div>
                  <p style={{ margin: '6px 0 0', color: 'var(--color-near-black)', fontWeight: 500, fontSize: '16px', lineHeight: 1.55 }}>{step.text}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '60px', padding: '32px 0 0 0', borderTop: '1px solid rgba(0, 71, 65, 0.08)' }}>
              <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-slate-gray)', fontSize: '15px', lineHeight: 1.6 }}>
                No follow-up pressure. No long proposals unless you ask for one. The briefing is a conversation, not a sales pitch.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
