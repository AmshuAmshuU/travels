"use client";

import { MessageCircle, AtSign, Clock, CheckCircle2 } from "lucide-react";

const whatsappPoints = [
  "Package enquiries",
  "Departure details",
  "Pricing assistance",
  "Customized spiritual journeys",
  "Senior-friendly travel support",
];

const instagramPoints = [
  "Spiritual travel reels",
  "Destination updates",
  "Upcoming departures",
  "Travel experiences",
  "Pilgrimage highlights",
];

export default function ContactInfo() {
  return (
    <section className="section contact-info-section">
      <div className="section-container">
        <div className="contact-info-header reveal">
          <span className="section-label">Reach Us</span>
          <h2 className="section-title">Connect With Our Team</h2>
        </div>

        <div className="contact-info-grid">
          {/* WhatsApp */}
          <div className="contact-info-card contact-info-card-whatsapp reveal">
            <div className="contact-info-card-icon contact-info-card-icon-whatsapp">
              <MessageCircle size={28} strokeWidth={1.5} />
            </div>
            <h3>WhatsApp Support</h3>
            <p className="contact-info-card-lead">Connect with our team directly for:</p>
            <ul className="contact-info-list">
              {whatsappPoints.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={15} className="contact-info-check" />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/918660878131"
              className="contact-info-btn contact-info-btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Instagram */}
          <div className="contact-info-card contact-info-card-instagram reveal">
            <div className="contact-info-card-icon contact-info-card-icon-instagram">
              <AtSign size={28} strokeWidth={1.5} />
            </div>
            <h3>Instagram</h3>
            <p className="contact-info-card-lead">Follow our Instagram page for:</p>
            <ul className="contact-info-list">
              {instagramPoints.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={15} className="contact-info-check" />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="https://instagram.com"
              className="contact-info-btn contact-info-btn-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AtSign size={18} />
              Follow on Instagram
            </a>
          </div>

          {/* Business Hours */}
          <div className="contact-info-card contact-info-card-hours reveal">
            <div className="contact-info-card-icon contact-info-card-icon-hours">
              <Clock size={28} strokeWidth={1.5} />
            </div>
            <h3>Business Hours</h3>
            <div className="contact-hours-display">
              <div className="contact-hours-row">
                <span className="contact-hours-days">Monday – Saturday</span>
                <span className="contact-hours-time">9:00 AM – 7:00 PM</span>
              </div>
              <div className="contact-hours-closed">
                <span>Sunday</span>
                <span className="contact-hours-closed-label">Closed</span>
              </div>
            </div>
            <div className="contact-hours-badge">
              <span className="contact-hours-dot" />
              Currently available on WhatsApp
            </div>
            <div className="contact-hours-note">
              Our coordinators respond to all enquiries within business hours.
              WhatsApp messages are attended to promptly.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
