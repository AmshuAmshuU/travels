"use client";

import { MessageCircle, MapPin } from "lucide-react";

export default function ContactCta() {
  return (
    <div style={{ backgroundColor: "var(--white)", paddingBottom: "2rem" }}>
      <section className="contact-cta-section">
        <div className="contact-cta-overlay" />
        <div className="contact-cta-content reveal">
          <span className="section-label" style={{ color: "var(--gold)" }}>Start Today</span>
          <h2 className="contact-cta-title">Begin Your Spiritual Journey</h2>
          <p className="contact-cta-body">
            Our team is ready to help you explore peaceful and comfortable spiritual travel
            experiences designed for families and senior travelers.
          </p>
          <div className="contact-cta-buttons">
            <a
              href="https://wa.me/919876543210"
              className="btn-glow"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-cta-whatsapp"
            >
              <MessageCircle size={18} />
              WhatsApp Enquiry
            </a>
            <a
              href="/#destinations"
              className="btn-outline-white"
              id="contact-cta-packages"
            >
              <MapPin size={18} />
              Explore Packages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
