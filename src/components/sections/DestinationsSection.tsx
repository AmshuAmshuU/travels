"use client";

import Image from "next/image";

export default function DestinationsSection() {
  const destinations = [
    { img: "/chardham.png", title: "Char Dham Yatra", desc: "Sacred Himalayan pilgrimage journeys with premium travel support." },
    { img: "/kashi.png", title: "Kashi • Ayodhya • Prayagraj", desc: "Experience India's most spiritually significant destinations." },
    { img: "/jyotirlinga.png", title: "Jyotirlinga Circuit Tours", desc: "Explore powerful Shiva pilgrimage destinations across India." },
    { img: "/nepal.png", title: "Nepal Spiritual Tours", desc: "Premium spiritual journeys featuring Pashupatinath Temple and Himalayan experiences." },
    { img: "/kedarnath.png", title: "Kedarnath & Badrinath", desc: "Comfortable spiritual journeys designed for peaceful travel experiences." },
    { img: "/hero-bg.png", title: "South India Temple Circuits", desc: "Explore sacred temples across Tamil Nadu, Karnataka, and Andhra Pradesh." },
  ];

  return (
    <section className="section destinations-section" id="destinations">
      <div className="section-container" style={{ textAlign: "center" }}>
        <span className="section-label reveal">Explore</span>
        <h2 className="section-title reveal">Popular Spiritual Destinations</h2>
        <p className="section-subtitle reveal" style={{ margin: "0 auto" }}>
          Discover sacred pilgrimage destinations with premium travel support and personalized guidance.
        </p>
        <div className="destinations-grid">
          {destinations.map((d, i) => (
            <div className="destination-card reveal" key={i}>
              <Image
                src={d.img}
                alt={d.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="destination-overlay">
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
