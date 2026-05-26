"use client";

import { ShieldCheck, HeartHandshake, Car, Map, Users, Compass } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Senior Citizen Friendly",
    desc: "Tours designed with the comfort and safety of senior travelers as our top priority. Easy pacing and accessible arrangements throughout.",
  },
  {
    icon: Car,
    title: "Comfortable Travel",
    desc: "Premium vehicles with experienced drivers ensuring smooth, comfortable journeys to every sacred destination.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Trusted Service",
    desc: "Years of trusted service with verified stays, safe transport, and reliable coordination for complete peace of mind.",
  },
  {
    icon: Compass,
    title: "Experienced Drivers",
    desc: "Our experienced drivers know every route, every temple, and every rest stop to make your pilgrimage smooth and worry-free.",
  },
  {
    icon: HeartHandshake,
    title: "Peaceful Spiritual Journeys",
    desc: "Every tour is planned for spiritual fulfillment with adequate time at each temple and a peaceful, unhurried travel experience.",
  },
  {
    icon: Map,
    title: "Customized Family & Group Trips",
    desc: "Personalized tour planning for families, groups, and associations with flexible schedules and customized itineraries.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-section" id="why-us" style={{ backgroundColor: "#FFFBF0" }}>
      {/* Background Glow Orbs */}
      <div className="why-choose-bg-orb why-choose-bg-orb-1"></div>
      <div className="why-choose-bg-orb why-choose-bg-orb-2"></div>
      <div className="why-choose-bg-orb why-choose-bg-orb-3"></div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="why-choose-header">
          <span className="section-label">Our Promise</span>
          <h2 className="section-title">Why Families Choose Us</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            We strip away the stress of travel coordination, offering thoughtfully designed spiritual experiences that prioritize comfort, safety, and deep meaningful connections.
          </p>
        </div>

        {/* Premium Glassmorphism Grid */}
        <div className="why-choose-grid">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="why-choose-card group">
                <div 
                  className="why-choose-card-icon" 
                  style={{ 
                    background: "linear-gradient(135deg, var(--saffron), var(--gold))" 
                  }}
                >
                  <Icon size={28} color="white" strokeWidth={1.8} />
                </div>
                
                <div className="why-choose-card-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
