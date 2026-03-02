import { useState, useRef, useEffect } from "react";
import "./component.css";

const steps = [
  {
    id: 1,
    title: "Counselling",
    desc: "Plan your Academic and Career Goals",
    icon: (
      <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
        <path d="M15 68 Q15 28 45 28 Q75 28 75 68" fill="#F5C47A" />
        <circle cx="45" cy="28" r="20" stroke="#2d2d3a" strokeWidth="2.2" fill="none"/>
        <circle cx="45" cy="28" r="13" stroke="#2d2d3a" strokeWidth="2" fill="none"/>
        <circle cx="45" cy="28" r="5" stroke="#2d2d3a" strokeWidth="2" fill="none"/>
        <circle cx="45" cy="28" r="2" fill="#2d2d3a"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Test Preparation",
    desc: "Appear for Standardized Tests",
    icon: (
      <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
        <path d="M15 68 Q15 28 45 28 Q75 28 75 68" fill="#D5D8E8" />
        <path d="M45 12 L55 36 L45 46 L35 36 Z" stroke="#2d2d3a" strokeWidth="2.2" fill="none" strokeLinejoin="round"/>
        <path d="M45 46 L45 56" stroke="#2d2d3a" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M38 30 L52 30" stroke="#2d2d3a" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "University Selection",
    desc: "Choose the Right University for You",
    icon: (
      <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
        <path d="M15 68 Q15 28 45 28 Q75 28 75 68" fill="#A8D8B0" />
        <circle cx="45" cy="30" r="10" stroke="#2d2d3a" strokeWidth="2.2" fill="none"/>
        <path d="M45 40 C32 46 24 58 22 68" stroke="#2d2d3a" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M45 40 C58 46 66 58 68 68" stroke="#2d2d3a" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M36 35 Q45 64 54 35" stroke="#2d2d3a" strokeWidth="1.6" fill="none"/>
        <path d="M28 46 Q45 52 62 46" stroke="#2d2d3a" strokeWidth="1.6" fill="none"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Application",
    desc: "Submit Your University Applications",
    icon: (
      <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
        <path d="M15 68 Q15 28 45 28 Q75 28 75 68" fill="#FAB8A0" />
        <rect x="30" y="14" width="30" height="38" rx="3" stroke="#2d2d3a" strokeWidth="2.2" fill="none"/>
        <path d="M37 24h16M37 31h12M37 38h8" stroke="#2d2d3a" strokeWidth="2" strokeLinecap="round"/>
        <path d="M46 44 l5 5 7-8" stroke="#2d2d3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Visa Assistance",
    desc: "Get Help With Your Student Visa",
    icon: (
      <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
        <path d="M15 68 Q15 28 45 28 Q75 28 75 68" fill="#B8D4F5" />
        <rect x="28" y="12" width="34" height="44" rx="4" stroke="#2d2d3a" strokeWidth="2.2" fill="none"/>
        <circle cx="45" cy="30" r="7" stroke="#2d2d3a" strokeWidth="2" fill="none"/>
        <path d="M34 46 Q45 38 56 46" stroke="#2d2d3a" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M33 52h24" stroke="#2d2d3a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: "Pre-Departure",
    desc: "Prepare for Your Journey Abroad",
    icon: (
      <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
        <path d="M15 68 Q15 28 45 28 Q75 28 75 68" fill="#D8B4F5" />
        <path d="M30 52 L45 18 L60 52" stroke="#2d2d3a" strokeWidth="2.2" fill="none" strokeLinejoin="round"/>
        <path d="M35 40 h20" stroke="#2d2d3a" strokeWidth="2" strokeLinecap="round"/>
        <rect x="38" y="52" width="14" height="10" rx="2" stroke="#2d2d3a" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    id: 7,
    title: "Post Arrival",
    desc: "Settle In and Start Your New Journey",
    icon: (
      <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
        <path d="M15 68 Q15 28 45 28 Q75 28 75 68" fill="#F5E4A0" />
        <path d="M45 14 L49 27 L63 27 L52 35 L56 48 L45 40 L34 48 L38 35 L27 27 L41 27 Z"
          stroke="#2d2d3a" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Steps() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const cardsRef = useRef(null);



  // Scroll the step track so the active node is centered
  // useEffect(() => {
  //   if (!trackRef.current) return;
  //   const track = trackRef.current;
  //   const nodes = track.querySelectorAll(".step-node-wrap");
  //   if (!nodes[active]) return;
  //   const node = nodes[active];
  //   const trackWidth = track.offsetWidth;
  //   const nodeLeft = node.offsetLeft;
  //   const nodeWidth = node.offsetWidth;
  //   track.scrollTo({
  //     left: nodeLeft - trackWidth / 2 + nodeWidth / 2,
  //     behavior: "smooth",
  //   });
  // }, [active]);

  useEffect(() => {
  if (!trackRef.current) return;
  const track = trackRef.current;
  const nodes = track.querySelectorAll(".step-node-wrap");
  if (!nodes[active]) return;

  const node = nodes[active];
  const trackWidth = track.offsetWidth;
  const nodeLeft = node.offsetLeft;
  const nodeWidth = node.offsetWidth;

  const maxScroll = track.scrollWidth - track.clientWidth;

  let target = nodeLeft - trackWidth / 2 + nodeWidth / 2;

  if (target < 0) target = 0;
  if (target > maxScroll) target = maxScroll;

  track.scrollTo({
    left: target,
    behavior: "smooth",
  });

}, [active]);

  // Scroll the cards so active card is in view
  useEffect(() => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const cards = container.querySelectorAll(".step-card");
    if (!cards[active]) return;
    const card = cards[active];
    const containerWidth = container.offsetWidth;
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    container.scrollTo({
      left: cardLeft - containerWidth / 2 + cardWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  const prev = () => setActive((p) => Math.max(0, p - 1));
  const next = () => setActive((p) => Math.min(steps.length - 1, p + 1));

  return (
    <section className="steps-section">
      <h2 className="steps-title">7 Easy Steps to Land in your Dream University</h2>

      {/* ── Step track: scrollable, active node centered ── */}
      <div className="steps-track-outer">
        <div className="steps-track" ref={trackRef}>
          {steps.map((s, i) => (
            <div className="step-node-wrap" key={s.id}>
              <button
                className={`step-node ${i === active ? "active" : ""} ${i < active ? "done" : ""}`}
                onClick={() => setActive(i)}
              >
                {s.id}
              </button>
              {i < steps.length - 1 && (
                <div className={`step-connector ${i < active ? "done" : ""}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Cards: scrollable strip, active card centered ── */}
      <div className="steps-cards-outer">
        <div className="steps-cards" ref={cardsRef}>
          {/* left spacer so first card can center */}
          <div className="card-spacer" />

          {steps.map((s, i) => (
            <div
              className={`step-card ${i === active ? "step-card--active" : "step-card--inactive"}`}
              key={s.id}
              onClick={() => setActive(i)}
            >
              <div className="card-pointer" />
              <div className="step-card-icon">{s.icon}</div>
              <h3 className="step-card-title">{s.title}</h3>
              <p className="step-card-desc">{s.desc}</p>
            </div>
          ))}

          {/* right spacer */}
          <div className="card-spacer" />
        </div>
      </div>

      {/* ── Navigation ── */}
      <div className="steps-nav">
        <button className="nav-btn" onClick={prev} disabled={active === 0}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Previous Step
        </button>
        <button className="nav-btn" onClick={next} disabled={active === steps.length - 1}>
          Next Step
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}