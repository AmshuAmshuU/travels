"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, MessageCircle, FileText, ChevronDown, HeartHandshake, Shield, MapPin, Users, Star, Clock, Compass } from "lucide-react";

const packages = [
  {
    slug: 'char-dham-yatra',
    title: "Char Dham Premium Yatra",
    price: "Starting From ₹89,999",
    desc: "Experience one of India's most sacred spiritual journeys with comfortable travel arrangements, selected stays, and guided support designed for peaceful travel experiences.",
    includes: ["Comfortable Stay", "Guided Coordination", "Transportation Assistance", "Spiritual Sightseeing", "Senior-Friendly Planning"],
    image: "/chardham.png",
    duration: "12 Days",
    groupSize: "10-15"
  },
  {
    slug: 'kashi-ayodhya-prayagraj',
    title: "Kashi • Ayodhya • Prayagraj Spiritual Tour",
    price: "Starting From ₹79,999",
    desc: "Explore the spiritual heart of India with sacred temple visits, Ganga Aarti experiences, and carefully planned premium travel support.",
    includes: ["Premium Stay", "Temple Visits", "Guided Assistance", "Comfortable Travel", "Spiritual Experiences"],
    image: "/kashi.png",
    duration: "8 Days",
    groupSize: "10-20"
  },
  {
    slug: 'jyotirlinga-circuit',
    title: "Jyotirlinga Spiritual Circuit",
    price: "Starting From ₹94,999",
    desc: "A sacred journey across powerful Jyotirlinga destinations designed for spiritually enriching and comfortable travel experiences.",
    includes: ["Premium Accommodation", "Guided Coordination", "Comfortable Transfers", "Temple Visits", "Personalized Support"],
    image: "/jyotirlinga.png",
    duration: "14 Days",
    groupSize: "8-12"
  },
  {
    slug: 'nepal-spiritual-journey',
    title: "Nepal Spiritual Journey",
    price: "Starting From ₹1,09,999",
    desc: "Discover peaceful Himalayan spiritual experiences with premium travel arrangements and visits to sacred destinations including Pashupatinath Temple.",
    includes: ["Flight Assistance", "Comfortable Stay", "Guided Spiritual Visits", "Scenic Experiences", "Premium Support"],
    image: "/nepal.png",
    duration: "10 Days",
    groupSize: "8-15"
  },
  {
    slug: 'kedarnath-badrinath',
    title: "Kedarnath & Badrinath Premium Tour",
    price: "Starting From ₹84,999",
    desc: "Experience a carefully planned Himalayan spiritual journey with guided support and comfortable travel experiences.",
    includes: ["Comfortable Accommodation", "Travel Assistance", "Spiritual Sightseeing", "Personalized Coordination", "Senior-Friendly Support"],
    image: "/kedarnath.png",
    duration: "9 Days",
    groupSize: "10-15"
  },
  {
    slug: 'south-india-temple-circuit',
    title: "South India Temple Luxury Circuit",
    price: "Starting From ₹74,999",
    desc: "Explore sacred South Indian temples with comfortable travel arrangements, selected stays, and guided spiritual experiences.",
    includes: ["Premium Stay", "Temple Visits", "Comfortable Transfers", "Guided Coordination", "Family-Friendly Travel"],
    image: "/hero-bg.png",
    duration: "10 Days",
    groupSize: "10-20"
  }
];

const highlights = [
  { icon: Shield, label: "Trusted Coordination" },
  { icon: MapPin, label: "Curated Destinations" },
  { icon: Users, label: "Senior-Friendly" },
  { icon: Star, label: "Premium Stays" },
  { icon: Clock, label: "Flexible Planning" },
  { icon: Compass, label: "Guided Support" }
];

const faqs = [
  { q: "Are these tours senior citizen friendly?", a: "Yes, our packages are designed with comfort-focused travel planning and guided coordination support." },
  { q: "Can packages be customized?", a: "Yes, selected packages can be customized based on travel preferences and group requirements." },
  { q: "Do you provide WhatsApp support?", a: "Yes, our coordinators are available for quick enquiry and travel assistance through WhatsApp." },
  { q: "Are flights included?", a: "Flight inclusion depends on the selected package and customization requirements." }
];

export default function PackagesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      
      <main style={{ backgroundColor: "#ffffff" }}>
        {/* PAGE HEADER (HERO) — font sizes matched to about/contact pages */}
        <section className="pkg-hero">
          <div className="pkg-hero-bg">
            <Image src="/hero-bg.png" alt="Spiritual journeys background" fill style={{ objectFit: "cover" }} priority />
          </div>
          <div className="pkg-hero-overlay" />
          
          {/* Floating particles */}
          {mounted && (
            <div className="pkg-hero-particles">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="pkg-hero-particle"
                  style={{
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 10 + 8}s`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>
          )}

          <div className="pkg-hero-content reveal">
            <span className="pkg-hero-label">Exclusive Journeys</span>
            <h1 className="pkg-hero-title">Premium Spiritual Tour Packages</h1>
            <p className="pkg-hero-subtitle">
              Carefully curated spiritual journeys designed for families and senior travelers seeking comfort, peace, and memorable experiences.
            </p>
          </div>
        </section>

        {/* HIGHLIGHTS STRIP — replaces the old "note" section */}
        <section className="pkg-highlights-section">
          <div className="pkg-highlights-container reveal">
            <div className="pkg-highlights-grid">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="pkg-highlight-item">
                    <div className="pkg-highlight-icon">
                      <Icon size={20} />
                    </div>
                    <span className="pkg-highlight-label">{item.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="pkg-highlights-note">
              <div className="pkg-highlights-note-dot" />
              <span>Pricing may vary based on travel dates, hotel category & customization requirements. Limited departures available.</span>
            </div>
          </div>
        </section>

        {/* PACKAGE LISTING — Alternating horizontal cards */}
        <section className="section" style={{ backgroundColor: "#ffffff" }}>
          <div className="section-container">
            <div className="pkg-cards-wrapper">
              {packages.map((pkg, i) => (
                <div key={i} className={`pkg-card reveal ${i % 2 !== 0 ? "pkg-card-reversed" : ""}`}>
                  {/* Image side */}
                  <Link href={`/packages/${pkg.slug}`} className="pkg-card-image-wrapper" style={{ display: 'block', cursor: 'pointer' }}>
                    <div className="pkg-card-image">
                      <Image src={pkg.image} alt={pkg.title} fill style={{ objectFit: "cover" }} />
                      <div className="pkg-card-image-overlay" />
                    </div>
                    <div className="pkg-card-price-badge">
                      {pkg.price}
                    </div>
                    <div className="pkg-card-meta">
                      <div className="pkg-card-meta-item">
                        <Clock size={14} />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="pkg-card-meta-item">
                        <Users size={14} />
                        <span>{pkg.groupSize} People</span>
                      </div>
                    </div>
                  </Link>

                  {/* Content side */}
                  <div className="pkg-card-content">
                    <div className="pkg-card-number">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="pkg-card-title">{pkg.title}</h3>
                    <p className="pkg-card-desc">{pkg.desc}</p>
                    
                    <div className="pkg-card-includes">
                      <h4 className="pkg-card-includes-label">What&apos;s Included</h4>
                      <div className="pkg-card-includes-grid">
                        {pkg.includes.map((inc, idx) => (
                          <div key={idx} className="pkg-card-include-item">
                            <CheckCircle2 size={15} color="var(--saffron)" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pkg-card-actions">
                      <a href="https://wa.me/919876543210" className="pkg-card-btn-primary" target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={17} />
                        Enquire on WhatsApp
                      </a>
                      <Link href={`/packages/${pkg.slug}`} className="pkg-card-btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}>
                        <FileText size={17} />
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOM TOUR SECTION */}
        <section className="section" style={{ backgroundColor: "var(--cream)" }}>
          <div className="section-container reveal" style={{ textAlign: "center" }}>
            <h2 className="section-title">Need a Customized Spiritual Journey?</h2>
            <p className="section-subtitle" style={{ margin: "0 auto 3rem" }}>
              We also provide personalized spiritual travel planning tailored to your exact needs and comfort preferences.
            </p>
            
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
              {["Families", "Senior Citizens", "Group Tours", "Community Trips", "Spiritual Retreats"].map((item, i) => (
                <div key={i} style={{ 
                  background: "#ffffff", padding: "0.75rem 1.5rem", borderRadius: "50px", 
                  display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 500, color: "var(--charcoal)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)", border: "1px solid rgba(217,119,6,0.1)"
                }}>
                  <CheckCircle2 size={16} color="var(--saffron)" />
                  {item}
                </div>
              ))}
            </div>

            <a href="https://wa.me/919876543210" className="btn-primary" target="_blank" rel="noopener noreferrer">
              <HeartHandshake size={18} />
              Chat With Our Travel Coordinator
            </a>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section" style={{ backgroundColor: "#ffffff" }}>
          <div className="section-container reveal" style={{ maxWidth: "800px" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="section-label">Support</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ 
                  border: `1px solid ${openFaq === i ? "rgba(217,119,6,0.3)" : "#E5E7EB"}`, 
                  borderRadius: "16px", overflow: "hidden", background: openFaq === i ? "var(--cream)" : "#ffffff",
                  transition: "all 0.3s"
                }}>
                  <button 
                    style={{ 
                      width: "100%", padding: "1.5rem 2rem", display: "flex", justifyItems: "space-between", 
                      alignItems: "center", background: "none", border: "none", cursor: "pointer",
                      textAlign: "left", fontSize: "1.05rem", fontWeight: 600, color: "var(--charcoal)"
                    }}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span style={{ flexGrow: 1 }}>{faq.q}</span>
                    <ChevronDown size={20} color="var(--saffron)" style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s", flexShrink: 0 }} />
                  </button>
                  <div style={{ 
                    maxHeight: openFaq === i ? "200px" : "0", opacity: openFaq === i ? 1 : 0, 
                    overflow: "hidden", transition: "all 0.4s ease", padding: openFaq === i ? "0 2rem 1.5rem" : "0 2rem"
                  }}>
                    <p style={{ color: "#6B7280", lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <div style={{ backgroundColor: "var(--white)", paddingBottom: "4rem" }}>
          <section className="cta-section">
            <div className="cta-content reveal">
              <h2>Start Your Spiritual Journey</h2>
              <p>Connect with our travel coordinators to explore available departures, package details, and personalized spiritual travel experiences.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/919876543210" className="btn-glow" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} />
                  WhatsApp Enquiry
                </a>
                <a href="/contact" className="btn-outline-white">
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
