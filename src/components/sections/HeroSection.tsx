"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const heroSlides = [
  { src: "/hero-bg.png", alt: "Spiritual mountains landscape" },
  { src: "/kedarnath.png", alt: "Kedarnath temple pilgrimage" },
  { src: "/chardham.png", alt: "Char Dham sacred journey" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="hero">
      {/* Slider images */}
      <div className="hero-slider">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide ${i === currentSlide ? "hero-slide-active" : ""}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Particles */}
      {mounted && (
        <div className="particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle"
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

      {/* Content */}
      <div className="hero-content">
        <h1>
          <span className="highlight">Spiritual Journeys</span>
          {" Made Comfortable"}
        </h1>
        <h2 style={{ color: "white", fontSize: "1.2rem", fontWeight: "600", marginBottom: "1.5rem", animation: "fadeUp 1s 0.1s ease both", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
          Trusted Pilgrimage Tours Across South India
        </h2>
        <p>
          We organize comfortable and carefully planned spiritual tours for families, senior citizens, and devotional groups across India's most sacred destinations.
        </p>
        <div className="hero-buttons">
          <Link href="/packages" className="btn-primary">
            <Sparkles size={18} />
            View Packages
          </Link>
          <a
            href="tel:+918660878131"
            className="btn-secondary"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href="https://wa.me/918660878131?text=Hi%2C%20I'm%20interested%20in%20your%20spiritual%20tour%20packages."
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="hero-indicators">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`hero-indicator ${i === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}
