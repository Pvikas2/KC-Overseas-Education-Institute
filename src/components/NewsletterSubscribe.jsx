import { useState } from "react";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");

  const handleSubmit = () => {
    if (!email || !interest) {
      alert("Please fill in all fields.");
      return;
    }
    alert(`Subscribed! Email: ${email}, Interest: ${interest}`);
  };

  return (
    <section style={styles.section}>
      {/* Curved top mask */}
      <div style={styles.heroWave}>
        <svg style={styles.heroWaveSvg} viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 
                  C480,100 960,100 1440,40 
                  L1440,120 
                  L0,120 
                  Z" fill="#fff">
            </path>
        </svg>
      </div>
    <image src="/assets/logo.svg" alt="Decorative" style={{ position: "absolute", zIndex: 99, top: 0 }} />

      {/* Decorative icon top-left (mobile) */}
      <div style={styles.decorIcon} className="ns-decor">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <line x1="55" y1="10" x2="20" y2="60" stroke="#e05a2b" strokeWidth="5" strokeLinecap="round" />
          <line x1="65" y1="20" x2="30" y2="70" stroke="#e05a2b" strokeWidth="5" strokeLinecap="round" />
          <circle cx="18" cy="62" r="4" fill="#e05a2b" />
          <circle cx="28" cy="72" r="3" fill="#e05a2b" />
          <circle cx="56" cy="8" r="3" fill="#e05a2b" />
        </svg>
      </div>

      <div style={styles.content}>
        <h2 style={styles.heading}>Stay updated with KC Overseas</h2>

        <div style={styles.formRow} className="ns-form-row">
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <div style={styles.selectWrapper}>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              style={styles.select}
            >
              <option value="" disabled>I'm Interested in</option>
              <option value="study-abroad">Study Abroad</option>
              <option value="visa">Visa Assistance</option>
              <option value="university">University Admissions</option>
              <option value="scholarships">Scholarships</option>
              <option value="ielts">IELTS / Test Prep</option>
            </select>
            <span style={styles.selectArrow}>&#8964;</span>
          </div>
          <button onClick={handleSubmit} style={styles.btn} className="ns-btn">
            Subscribe Now
          </button>
        </div>
      </div>

      <style>{`
        .ns-decor {
          display: none;
        }
        @media (max-width: 768px) {
          .ns-decor {
            display: block !important;
          }
          .ns-form-row {
            flex-direction: column !important;
          }
          .ns-form-row input,
          .ns-form-row .ns-select-wrapper,
          .ns-btn {
            width: 100% !important;
          }
        }
        select option {
          color: #1a1a2e;
        }
        button.ns-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    background: "#0d1b2e",
    padding: "60px 24px 60px",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: "220px",
  },
  curveTop: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "70%",
    height: "60px",
    background: "#000",
    borderRadius: "0 0 50% 50%",
    zIndex: 1,
  },
  decorIcon: {
    position: "absolute",
    top: "60px",
    left: "16px",
    zIndex: 2,
  },
  content: {
    position: "relative",
    zIndex: 3,
    maxWidth: "860px",
    margin: "0 auto",
    textAlign: "center",
    paddingTop: "20px",
  },
  heading: {
    color: "#fff",
    fontSize: "clamp(22px, 4vw, 32px)",
    fontWeight: "700",
    marginBottom: "32px",
    lineHeight: "1.3",
  },
  formRow: {
    display: "flex",
    gap: "14px",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  input: {
    flex: "1 1 240px",
    maxWidth: "320px",
    padding: "14px 18px",
    borderRadius: "10px",
    border: "none",
    fontSize: "15px",
    background: "#fff",
    color: "#64647A",
    outline: "none",
    boxSizing: "border-box",
  },
  selectWrapper: {
    position: "relative",
    flex: "1 1 200px",
    maxWidth: "280px",
  },
  select: {
    width: "100%",
    padding: "14px 42px 14px 18px",
    borderRadius: "10px",
    border: "none",
    fontSize: "15px",
    background: "#fff",
    color: "#64647A",
    appearance: "none",
    WebkitAppearance: "none",
    outline: "none",
    cursor: "pointer",
    boxSizing: "border-box",
  },
  selectArrow: {
    position: "absolute",
    right: "16px",
    top: "40%",
    transform: "translateY(-50%)",
    fontSize: "20px",
    color: "#555",
    pointerEvents: "none",
  },
  btn: {
    flex: "0 0 auto",
    padding: "14px 28px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #f5793a, #e05a2b)",
    color: "#fff",
    fontWeight: "700",
    fontSize: "15px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "opacity 0.2s, transform 0.2s",
    boxSizing: "border-box",
  },
  heroWave: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100px",
    zIndex: 1,
    transform: "rotate(180deg)",
  },
  heroWaveSvg: {
    width: "100%",
    height: "100%",
    display: "block",
  },
};