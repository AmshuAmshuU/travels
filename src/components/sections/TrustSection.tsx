"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Play, Award, Users } from "lucide-react";

export default function TrustSection() {
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-number");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.getAttribute("data-target") || "0");
            const suffix = el.getAttribute("data-suffix") || "";
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = Math.floor(current) + suffix;
            }, 20);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about-premium-section" id="about">
      <div className="section-container">
        <div className="about-premium-grid reveal">
          <div className="about-premium-content">
            <span className="section-label">Discover Our Story</span>
            <h2 className="section-title">Crafting Spiritually Enriching Journeys for Over a Decade</h2>
            <p className="about-premium-lead">
              We specialize in curating peaceful, comfortable, and deeply meaningful pilgrimage experiences for families and senior citizens across India's most sacred destinations.
            </p>
            
            <div className="about-premium-features">
              <div className="about-feature-item">
                <div className="about-feature-icon"><Award size={20} /></div>
                <div>
                  <h4>Certified Travel Experts</h4>
                  <p>Trusted coordination for complete peace of mind during your spiritual journey.</p>
                </div>
              </div>
              <div className="about-feature-item">
                <div className="about-feature-icon"><Users size={20} /></div>
                <div>
                  <h4>Senior-Citizen Friendly</h4>
                  <p>Paced itineraries with comfort, accessibility, and care as the highest priorities.</p>
                </div>
              </div>
            </div>

            <div className="about-premium-actions">
              <a href="/about" className="btn-primary">More About Us</a>
              <div className="about-premium-call">
                <span className="call-label">Call for assistance</span>
                <a href="tel:+918660878131" className="call-number">+91 86608 78131</a>
              </div>
            </div>
          </div>

          <div className="about-premium-visuals">
            <div className="about-image-main">
              <Image src="/chardham.png" alt="Pilgrimage journey" fill style={{ objectFit: "cover" }} />
              <div className="about-video-btn">
                <Play size={24} fill="white" color="white" />
              </div>
            </div>
            
            <div className="about-image-secondary">
              <Image src="/kashi.png" alt="Ganga Aarti" fill style={{ objectFit: "cover" }} />
            </div>

            <div className="about-stats-floating">
              <div className="stat-floating-item">
                <span className="stat-number" data-target="15" data-suffix="+">0</span>
                <span className="stat-label">Years of<br/>Excellence</span>
              </div>
              <div className="stat-floating-divider"></div>
              <div className="stat-floating-item">
                <span className="stat-number" data-target="10" data-suffix="k+">0</span>
                <span className="stat-label">Happy<br/>Pilgrims</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
