"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SeniorSection() {
  const checklist = [
    "Comfortable travel pace",
    "Flexible breaks during the journey",
    "Easy travel arrangements",
    "Family-friendly planning",
  ];

  return (
    <section className="section senior-section">
      <div className="section-container">
        <div className="senior-grid reveal">
          <div className="senior-content">
            <span className="section-label">Senior Citizen Special</span>
            <h2 className="section-title">
              Safe & Comfortable Pilgrimages for Senior Citizens
            </h2>
            <p>
              We specialize in safe and comfortable pilgrimage tours for senior citizens and families with flexible travel schedules and peaceful journeys.
            </p>
            <ul className="checklist" style={{ marginBottom: "2rem" }}>
              {checklist.map((item, i) => (
                <li key={i}>
                  <span className="check-icon">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20senior%20citizen%20friendly%20tours."
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", padding: "0.8rem 2rem", fontSize: "1rem" }}
            >
              Enquire Now
            </a>
          </div>
          <div className="senior-image">
            <Image
              src="/chardham.png"
              alt="Senior-friendly spiritual travel"
              width={600}
              height={450}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
