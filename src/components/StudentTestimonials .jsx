import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    name: "Mandar Suryawanshi",
    university: "Northeastern University, USA",
  },
  {
    id: 2,
    text: "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    name: "Aarohi Sighel",
    university: "University of South Australia, Australia",
  },
  {
    id: 3,
    text: "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies.",
    name: "Susan Mendonca",
    university: "Conestoga College, Canada",
  },
  {
    id: 4,
    text: "KC helped me find the perfect university for my career goals. Their guidance throughout the application process was invaluable. Truly grateful for everything.",
    name: "Priya Sharma",
    university: "University of Melbourne, Australia",
  },
  {
    id: 5,
    text: "Exceptional support from start to finish. The team was always available to answer my queries and helped me secure admission to my dream university.",
    name: "Rahul Verma",
    university: "University of Toronto, Canada",
  },
];

export default function StudentTestimonials() {
  const [current, setCurrent] = useState(0);

  const visibleCount = () => {
    if (typeof window !== "undefined" && window.innerWidth < 640) return 1;
    return 3;
  };

  const total = testimonials.length;
  const dots = Array.from({ length: total });

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Show 3 cards on desktop, 1 on mobile (handled via CSS)
  const getVisible = () => {
    return [
      testimonials[current % total],
      testimonials[(current + 1) % total],
      testimonials[(current + 2) % total],
    ];
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Our Students Love Us</h2>

      <div style={styles.carousel}>
        <button onClick={prev} style={styles.arrowBtn} aria-label="Previous">
          &#8249;
        </button>

        <div style={styles.cardsWrapper}>
          {/* Desktop: show 3 */}
          <div style={styles.desktopCards} className="st-desktop">
            {getVisible().map((t, i) => (
              <div key={t.id + "-" + i} style={{ ...styles.card, ...(i === 1 ? styles.cardCenter : {}) }}>
                <div style={styles.quoteIcon}>"</div>
                <p style={styles.cardText}>{t.text}</p>
                <div>
                  <div style={styles.authorName}>{t.name}</div>
                  <div style={styles.authorUniv}>{t.university}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: show 1 */}
          <div style={styles.mobileCard} className="st-mobile">
            <div style={styles.card}>
              <div style={styles.quoteIcon}>"</div>
              <p style={styles.cardText}>{testimonials[current].text}</p>
              <div>
                <div style={styles.authorName}>{testimonials[current].name}</div>
                <div style={styles.authorUniv}>{testimonials[current].university}</div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={next} style={styles.arrowBtn} aria-label="Next">
          &#8250;
        </button>
      </div>

      <div style={styles.dots}>
        {dots.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{ ...styles.dot, ...(i === current ? styles.dotActive : {}) }}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .st-desktop { display: none !important; }
          .st-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .st-desktop { display: flex !important; }
          .st-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    background: "#fce8e4",
    padding: "56px 24px 48px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: "40px",
  },
  carousel: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    maxWidth: "980px",
    margin: "0 auto",
  },
  cardsWrapper: {
    flex: 1,
    overflow: "hidden",
  },
  desktopCards: {
    display: "flex",
    gap: "20px",
    alignItems: "stretch",
  },
  mobileCard: {
    display: "none",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "28px 24px",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    minHeight: "200px",
    transition: "transform 0.2s",
  },
  cardCenter: {
    transform: "scale(1.03)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
  },
  quoteIcon: {
    fontSize: "48px",
    color: "#2d4ecf",
    lineHeight: "1",
    marginBottom: "12px",
    fontFamily: "Georgia, serif",
  },
  cardText: {
    fontSize: "14px",
    color: "#444",
    lineHeight: "1.65",
    flex: 1,
    marginBottom: "20px",
  },
  authorName: {
    fontWeight: "700",
    fontSize: "14px",
    color: "#1a1a2e",
  },
  authorUniv: {
    fontSize: "12px",
    color: "#888",
    marginTop: "2px",
  },
  arrowBtn: {
    background: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "26px",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#555",
    flexShrink: 0,
    lineHeight: 1,
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginTop: "28px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#ccc",
    border: "none",
    cursor: "pointer",
    padding: 0,
    transition: "background 0.2s",
  },
  dotActive: {
    background: "#1a1a2e",
  },
};
