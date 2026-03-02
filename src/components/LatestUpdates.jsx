const updates = [
  {
    id: 1,
    type: "hiring",
    title: "We're Hiring!",
    body: "KC continues recruitments for its offices across India and Asia even during the unprecedented times of Covid.",
    cta: "Apply Now",
    ctaHref: "#",
    bg: "#f5a623",
    textColor: "#1a1a2e",
  },
  {
    id: 2,
    type: "cert",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/AIRC_logo.png/200px-AIRC_logo.png",
    logoAlt: "AIRC Logo",
    org: "American International Recruitment Council",
    badge: "Certified Agents",
    period: "October 2018 - 2028",
    badgeColor: "#e05a2b",
  },
  {
    id: 3,
    type: "cert",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/British_Council_logo.svg/250px-British_Council_logo.svg.png",
    logoAlt: "British Council Logo",
    org: "The British Council",
    badge: "Advanced Agent Certificate",
    period: "August 2016 - 2018",
    badgeColor: "#2d4ecf",
  },
];

export default function LatestUpdates() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Latest KC Updates</h2>

      <div style={styles.grid} className="lu-grid">
        {/* Hiring card */}
        <div style={{ ...styles.hiringCard }}>
          <div style={styles.hiringContent}>
            <h3 style={styles.hiringTitle}>We're Hiring!</h3>
            <p style={styles.hiringBody}>
              KC continues recruitments for its offices across India and Asia even during the unprecedented times of Covid.
            </p>
          </div>
          <a href="#" style={styles.hiringBtn}>Apply Now</a>
          {/* Decorative circles */}
          <div style={styles.circle1} />
          <div style={styles.circle2} />
        </div>

        {/* Cert cards */}
        {updates.slice(1).map((u) => (
          <div key={u.id} style={styles.certCard}>
            <div style={styles.certLogoWrap}>
              <img
                src={u.logo}
                alt={u.logoAlt}
                style={styles.certLogo}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div style={{ ...styles.certLogoFallback, display: "none" }}>
                <span style={{ fontSize: "32px" }}>🏛️</span>
              </div>
            </div>
            <div style={styles.certOrg}>{u.org}</div>
            <div style={styles.stars}>
              {[...Array(4)].map((_, i) => (
                <span key={i} style={{ color: i < 2 ? "#f5a623" : "#ddd", fontSize: "16px" }}>★</span>
              ))}
            </div>
            <div style={{ ...styles.certBadge, color: u.badgeColor }}>{u.badge}</div>
            <div style={styles.certPeriod}>{u.period}</div>
          </div>
        ))}
      </div>

      <div style={styles.moreWrapper}>
        <a href="#" style={styles.moreLink}>More News &gt;</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .lu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    background: "#fff",
    padding: "56px 24px 48px",
    fontFamily: "'Segoe UI', sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: "36px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr",
    gap: "20px",
    alignItems: "stretch",
  },
  hiringCard: {
    background: "#f5a623",
    borderRadius: "20px",
    padding: "36px 28px 28px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "280px",
    position: "relative",
    overflow: "hidden",
  },
  hiringContent: {
    position: "relative",
    zIndex: 2,
  },
  hiringTitle: {
    fontSize: "26px",
    fontWeight: "800",
    color: "#1a1a2e",
    margin: "0 0 14px 0",
  },
  hiringBody: {
    fontSize: "15px",
    color: "#2a2a2a",
    lineHeight: "1.6",
    margin: 0,
  },
  hiringBtn: {
    display: "inline-block",
    marginTop: "28px",
    background: "#fff",
    color: "#1a1a2e",
    fontWeight: "700",
    fontSize: "14px",
    padding: "12px 28px",
    borderRadius: "8px",
    textDecoration: "none",
    position: "relative",
    zIndex: 2,
  },
  circle1: {
    position: "absolute",
    right: "-40px",
    bottom: "-40px",
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.3)",
  },
  circle2: {
    position: "absolute",
    right: "-10px",
    bottom: "30px",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.2)",
  },
  certCard: {
    background: "#fff",
    borderRadius: "20px",
    padding: "28px 20px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.09)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "10px",
  },
  certLogoWrap: {
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "4px",
  },
  certLogo: {
    maxHeight: "64px",
    maxWidth: "120px",
    objectFit: "contain",
  },
  certLogoFallback: {
    width: "64px",
    height: "64px",
    alignItems: "center",
    justifyContent: "center",
    background: "#f0f0f0",
    borderRadius: "50%",
  },
  certOrg: {
    fontSize: "13px",
    color: "#555",
    fontWeight: "500",
    lineHeight: "1.4",
  },
  stars: {
    display: "flex",
    gap: "2px",
  },
  certBadge: {
    fontSize: "14px",
    fontWeight: "700",
    textAlign: "center",
  },
  certPeriod: {
    fontSize: "12px",
    color: "#888",
  },
  moreWrapper: {
    textAlign: "center",
    marginTop: "32px",
  },
  moreLink: {
    color: "#e05a2b",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "15px",
  },
};