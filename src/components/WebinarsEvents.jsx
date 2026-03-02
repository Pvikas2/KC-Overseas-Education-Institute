import { useState } from "react";

const events = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    date: "Mar 19",
    time: "05:00 PM to 07:30 PM",
    title: "USA Virtual Admission Day",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    featured: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&q=80",
    date: "May 18 – May 21",
    time: "04:30 PM to 06:30 PM",
    title: "New Zealand Virtual Admissions Week",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
    featured: false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80",
    date: "May 24 – May 28",
    time: "04:00 PM to 06:00 PM",
    title: "UK Virtual Admissions Week",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
    featured: false,
  },
];

export default function WebinarsEvents() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Webinars & Events</h2>

      {/* Desktop Layout */}
      <div style={styles.desktopGrid} className="we-desktop">
        {/* Featured large card */}
        <div style={styles.featuredCard}>
          <img src={events[0].image} alt={events[0].title} style={styles.featuredImage} />
          <div style={styles.featuredInfo}>
            <span style={styles.dateTag}>{events[0].date} · {events[0].time}</span>
            <h3 style={styles.cardTitle}>{events[0].title}</h3>
            <p style={styles.cardDesc}>{events[0].description}</p>
            <a href="#" style={styles.registerLink}>Register Now &gt;</a>
          </div>
        </div>

        {/* Side small cards */}
        <div style={styles.sideCards}>
          {events.slice(1).map((ev) => (
            <div key={ev.id} style={styles.smallCard}>
              <img src={ev.image} alt={ev.title} style={styles.smallImage} />
              <div style={styles.smallInfo}>
                <span style={styles.dateTag}>{ev.date} · {ev.time}</span>
                <h3 style={{ ...styles.cardTitle, fontSize: "16px" }}>{ev.title}</h3>
                <p style={{ ...styles.cardDesc, fontSize: "13px" }}>{ev.description}</p>
                <a href="#" style={styles.registerLink}>Register Now &gt;</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div style={styles.mobileScroll} className="we-mobile">
        {events.map((ev) => (
          <div key={ev.id} style={styles.mobileCard}>
            <img src={ev.image} alt={ev.title} style={styles.mobileCardImage} />
            <div style={styles.mobileCardInfo}>
              <span style={styles.dateTag}>{ev.date} · {ev.time}</span>
              <h3 style={{ ...styles.cardTitle, fontSize: "16px" }}>{ev.title}</h3>
              <p style={{ ...styles.cardDesc, fontSize: "13px" }}>{ev.description}</p>
              <a href="#" style={styles.registerLink}>Register Now &gt;</a>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.seeMoreWrapper}>
        <a href="#" style={styles.seeMore}>See More &gt;</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .we-desktop { display: none !important; }
          .we-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .we-desktop { display: flex !important; }
          .we-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    background: "#fff",
    padding: "48px 24px",
    fontFamily: "'Segoe UI', sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: "32px",
  },
  desktopGrid: {
    display: "flex",
    gap: "20px",
    alignItems: "stretch",
  },
  featuredCard: {
    flex: "1.2",
    background: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
    display: "flex",
    flexDirection: "column",
  },
  featuredImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },
  featuredInfo: {
    padding: "20px",
    flex: 1,
  },
  sideCards: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  smallCard: {
    background: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  smallImage: {
    width: "130px",
    minWidth: "130px",
    objectFit: "cover",
  },
  smallInfo: {
    padding: "14px 16px",
    flex: 1,
  },
  dateTag: {
    display: "block",
    fontSize: "12px",
    color: "#e05a2b",
    fontWeight: "600",
    marginBottom: "6px",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "0 0 8px 0",
  },
  cardDesc: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.5",
    margin: "0 0 12px 0",
  },
  registerLink: {
    color: "#e05a2b",
    fontWeight: "600",
    fontSize: "14px",
    textDecoration: "none",
  },
  mobileScroll: {
    display: "none",
    overflowX: "auto",
    gap: "16px",
    paddingBottom: "12px",
    scrollSnapType: "x mandatory",
  },
  mobileCard: {
    minWidth: "280px",
    background: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
    scrollSnapAlign: "start",
    flexShrink: 0,
  },
  mobileCardImage: {
    width: "100%",
    height: "170px",
    objectFit: "cover",
  },
  mobileCardInfo: {
    padding: "16px",
  },
  seeMoreWrapper: {
    textAlign: "center",
    marginTop: "28px",
  },
  seeMore: {
    color: "#e05a2b",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "15px",
  },
};