"use client";

import { MessageCircle, Mail } from "lucide-react";

export default function CtaSection() {
  return (
    <div style={{ backgroundColor: "var(--white)", paddingBottom: "2rem" }}>
      <section className="cta-section" id="contact">
        <div className="cta-content reveal">
          <h2>Plan Your Next Spiritual Journey</h2>
          <p>
            Speak with our travel coordinators to explore premium spiritual tour
            packages designed for families and senior citizens.
          </p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/918660878131"
              className="btn-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp Enquiry
            </a>
            <a href="mailto:info@toursandtravels.online" className="btn-outline-white">
              <Mail size={18} />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
