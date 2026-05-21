"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MessageCircle } from "lucide-react";

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
    const interval = setInterval(nextSlide, 5000);
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
          Premium <span className="highlight">Spiritual Journeys</span>
          {" for Families & Senior Citizens"}
        </h1>
        <p>
          Comfortable and carefully planned spiritual tours across India and
          selected international destinations with guided support, peaceful
          experiences, and trusted travel coordination.
        </p>
        <div className="hero-buttons">
          <a href="#destinations" className="btn-primary">
            <Sparkles size={18} />
            Explore Packages
          </a>
          <a
            href="https://wa.me/919876543210"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
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
