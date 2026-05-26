"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { text: 'A peaceful and well-coordinated spiritual journey for our parents. The support and guidance throughout the trip were excellent. We felt completely safe and taken care of.', name: 'Ramesh K.', location: 'Bangalore', initials: 'R' },
  { text: 'Comfortable travel arrangements and smooth coordination made our Char Dham pilgrimage experience memorable and stress-free. Highly recommended for senior citizens.', name: 'Sunita M.', location: 'Mumbai', initials: 'S' },
  { text: 'The perfect spiritual travel experience for families. Our elderly parents enjoyed every moment without any discomfort. The driver was very experienced and patient.', name: 'Priya S.', location: 'Hyderabad', initials: 'P' },
  { text: 'We booked a customized South India temple tour for our family of 8. Everything was perfectly organized — from the vehicle to the hotels. Truly a blessed journey.', name: 'Venkatesh R.', location: 'Chennai', initials: 'V' },
  { text: 'As senior citizens, we were worried about long travel. But the team ensured comfortable stays and flexible schedules. Our Kashi-Ayodhya trip was unforgettable.', name: 'Lakshmi N.', location: 'Mysore', initials: 'L' },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((activeIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex, goTo]);

  const prevIndex =
    (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (activeIndex + 1) % testimonials.length;

  return (
    <section className="section testimonials-section">
      {/* Floating decorative elements */}
      <div className="testimonial-glow testimonial-glow-1" />
      <div className="testimonial-glow testimonial-glow-2" />

      <div className="section-container">
        <div style={{ textAlign: "center" }}>
          <span className="section-label reveal">Testimonials</span>
          <h2 className="section-title reveal">Memorable Spiritual Journeys</h2>
          <p className="section-subtitle reveal" style={{ margin: "0 auto" }}>
            Hear from families and travelers who trusted us with their spiritual
            journeys.
          </p>
        </div>

        <div className="testimonial-carousel">
          {/* Side card - previous */}
          <div
            className="testimonial-side-card testimonial-side-left"
            onClick={() => goTo(prevIndex)}
          >
            <p>&ldquo;{testimonials[prevIndex].text}&rdquo;</p>
            <div className="testimonial-author-mini">
              <span>{testimonials[prevIndex].name}</span>
            </div>
          </div>

          {/* Featured center card */}
          <div className="testimonial-featured-card">
            <div className="testimonial-floating-quote">
              <Quote size={48} strokeWidth={1} />
            </div>
            <div className="testimonial-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="#EAB308" color="#EAB308" />
              ))}
            </div>
            <p className="testimonial-featured-text">
              &ldquo;{testimonials[activeIndex].text}&rdquo;
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[activeIndex].initials}
              </div>
              <div className="author-info">
                <h4>{testimonials[activeIndex].name}</h4>
                <span>{testimonials[activeIndex].location}</span>
              </div>
            </div>
          </div>

          {/* Side card - next */}
          <div
            className="testimonial-side-card testimonial-side-right"
            onClick={() => goTo(nextIndex)}
          >
            <p>&ldquo;{testimonials[nextIndex].text}&rdquo;</p>
            <div className="testimonial-author-mini">
              <span>{testimonials[nextIndex].name}</span>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot${i === activeIndex ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
