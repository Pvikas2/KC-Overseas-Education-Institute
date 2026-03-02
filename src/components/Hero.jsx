

import { useEffect, useRef } from "react";
import "./component.css";

const FloatingStar = ({ style }) => (
  <svg style={style} className="star" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 0L11.8 8.2L20 10L11.8 11.8L10 20L8.2 11.8L0 10L8.2 8.2L10 0Z" fill="white" fillOpacity="0.6" />
  </svg>
);

const FloatingDot = ({ style }) => (
  <div className="dot" style={style} />
);

const FloatingCircle = ({ style }) => (
  <div className="circle-outline" style={style} />
);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Staggered entrance animations
    const elements = hero.querySelectorAll(".animate-in");
    elements.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.12}s`;
      el.classList.add("visible");
    });
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Navbar */}
      <nav className="navbar animate-in">
        <div className="logo">
          <span className="logo-kc">kc overseas</span>
          <span className="logo-edu">education</span>
        </div>
        <ul className="nav-links">
          <li><a href="#">Study Destinations</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Upcoming Events</a></li>
        </ul>
        <button className="course-btn">Course Finder</button>

        {/* Hamburger - mobile only */}
        <button className="hamburger" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Floating Decorations */}
      <FloatingStar style={{ top: "18%", left: "22%" }} />
      <FloatingStar style={{ top: "55%", right: "8%" }} />
      <FloatingStar style={{ top: "80%", left: "8%" }} />
      <FloatingDot style={{ top: "22%", left: "38%" }} />
      <FloatingDot style={{ top: "62%", left: "30%" }} />
      <FloatingCircle style={{ top: "18%", right: "40%" }} />

      {/* Hero Content */}
      <div className="hero-content">
        <p className="breadcrumb animate-in">
          <span>Home</span>
          <span className="sep">•</span>
          <strong>Pune Branch</strong>
        </p>

        <h1 className="hero-title animate-in">
          KC Overseas Education<br />
          <span className="highlight">Pune</span>
        </h1>

        <p className="hero-description animate-in">
          We value your career aspirations, which is why we map your preferences with the best that
          our global universities have to offer. Thousands of our students are pursuing their programs
          and aspirations in eminent universities globally and we welcome you to pursue yours!
        </p>

        <div className="hero-actions animate-in">
          <button className="enquire-btn">Enquire Now</button>
          <button className="address-btn">
            <span className="arrow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="black" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"/></svg>
            </span>
            Branch Address
          </button>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 
                  C480,100 960,100 1440,40 
                  L1440,120 
                  L0,120 
                  Z" 
                fill="#fff" />
        </svg>
      </div>
    </section>
  );
}