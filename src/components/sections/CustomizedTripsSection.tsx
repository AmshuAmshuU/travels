"use client";

import { HeartHandshake, MessageCircle, Users, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CustomizedTripsSectionProps {
  variant?: 'primary' | 'secondary';
}

export default function CustomizedTripsSection({ variant = 'primary' }: CustomizedTripsSectionProps) {
  if (variant === 'primary') {
    return (
      <section className="section customized-trips-primary">
        <div className="section-container">
          <div className="customized-trips-grid reveal">
            <div className="customized-trips-visual">
              <div className="customized-img-wrapper" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.2)', border: '4px solid rgba(255,255,255,0.2)' }}>
                <Image
                  src="/chardham.png"
                  alt="Customized spiritual family travel"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="customized-trips-content">
              <h2 className="customized-trips-title">Customized Spiritual Trips for Families & Group Travel</h2>
              <p className="customized-trips-desc">
                We organize comfortable pilgrimage tours for families, senior citizens, devotional groups, and customized temple travel requirements.
              </p>
              <div className="customized-trips-actions">
                <Link href="/contact" className="customized-trips-btn-main">
                  Plan Your Trip
                </Link>
                <a
                  href="https://wa.me/918660878131?text=Hi%2C%20I'm%20looking%20for%20a%20customized%20spiritual%20trip."
                  className="customized-trips-btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Secondary variant
  return (
    <section className="section customized-trips-secondary">
      <div className="section-container reveal">
        <div className="customized-secondary-inner">
          <div className="customized-secondary-content">
            <h2 className="customized-secondary-title">Need a Personalized Spiritual Journey?</h2>
            <p className="customized-secondary-desc">
              Whether you are a family, senior citizen group, or temple association — we customize every aspect of your pilgrimage for maximum comfort and spiritual fulfillment.
            </p>
            <ul className="customized-secondary-list">
              <li><CheckCircle2 size={18} className="text-saffron" /> Families</li>
              <li><CheckCircle2 size={18} className="text-saffron" /> Senior Citizens</li>
              <li><CheckCircle2 size={18} className="text-saffron" /> Devotional Groups</li>
              <li><CheckCircle2 size={18} className="text-saffron" /> Temple Associations</li>
              <li><CheckCircle2 size={18} className="text-saffron" /> Small & Large Groups</li>
            </ul>
          </div>
          <div className="customized-secondary-actions">
            <Link href="/contact" className="customized-trips-btn-main">
              Plan Your Trip
            </Link>
            <a
              href="https://wa.me/918660878131?text=Hi%2C%20I'm%20looking%20for%20a%20customized%20spiritual%20trip."
              className="customized-trips-btn-outline-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
