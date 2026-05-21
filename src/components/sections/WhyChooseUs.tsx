"use client";

import { ShieldCheck, HeartHandshake, Plane, Map, Stethoscope, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Guided Spiritual Journeys",
    desc: "Step-by-step guidance through every sacred destination ensuring you experience the deep cultural and spiritual significance without any confusion.",
  },
  {
    icon: ShieldCheck,
    title: "Senior-Friendly Tours",
    desc: "Thoughtfully designed with the comfort of senior travelers in mind. We ensure easy pacing, accessible stays, and gentle itineraries.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Coordination",
    desc: "We partner with highly reliable spiritual operators. Transport, accommodation, and daily meals are carefully vetted for hygiene and comfort.",
  },
  {
    icon: Plane,
    title: "Premium Accommodations",
    desc: "Handpicked premium stays that provide a clean, peaceful environment so you can rest fully and focus entirely on your devotion.",
  },
  {
    icon: Stethoscope,
    title: "Personalized Care",
    desc: "We accommodate specific dietary requirements and ensure medical support awareness across all remote and high-altitude pilgrimage sites.",
  },
  {
    icon: MessageCircle,
    title: "24/7 WhatsApp Support",
    desc: "Instant communication with our team for enquiries, real-time updates, and continuous on-ground travel assistance throughout your journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-white relative" id="why-us">
      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Our Promise</span>
          <h2 className="section-title">Why Families Choose Us</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            We strip away the stress of travel coordination, offering thoughtfully designed spiritual experiences that prioritize comfort, safety, and deep meaningful connections.
          </p>
        </div>

        {/* Clean 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="flex flex-col items-start text-left group">
                {/* Minimalist Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#FFF7ED] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:-translate-y-1 group-hover:bg-[#D97706] transition-all duration-300">
                  <Icon size={30} className="text-[#D97706] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 font-[family-name:var(--font-heading)]">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-base">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

