"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export default function FeaturedPackagesSection() {
  const packages = [
    { slug: 'char-dham-yatra', img: '/chardham.png', title: 'Char Dham Premium Yatra', duration: '12 Days', price: '₹89,999', desc: 'Sacred Himalayan pilgrimage with premium comfort.' },
    { slug: 'kashi-ayodhya-prayagraj', img: '/kashi.png', title: 'Kashi • Ayodhya • Prayagraj', duration: '8 Days', price: '₹79,999', desc: 'Experience India\'s most sacred spiritual destinations.' },
    { slug: 'jyotirlinga-circuit', img: '/jyotirlinga.png', title: 'Jyotirlinga Circuit Tours', duration: '14 Days', price: '₹94,999', desc: 'Powerful Shiva pilgrimage across India.' },
    { slug: 'nepal-spiritual-journey', img: '/nepal.png', title: 'Nepal Spiritual Journey', duration: '10 Days', price: '₹1,09,999', desc: 'Himalayan spiritual journey with Pashupatinath.' },
    { slug: 'kedarnath-badrinath', img: '/kedarnath.png', title: 'Kedarnath & Badrinath', duration: '9 Days', price: '₹84,999', desc: 'Comfortable Himalayan pilgrimage tour.' },
    { slug: 'south-india-temple-circuit', img: '/hero-bg.png', title: 'South India Temple Circuit', duration: '10 Days', price: '₹74,999', desc: 'Sacred temples across Tamil Nadu & Karnataka.' },
  ];

  return (
    <section className="section featured-packages-section" id="packages" style={{ backgroundColor: "#ffffff" }}>
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label reveal">Our Packages</span>
          <h2 className="section-title reveal">Featured Spiritual Tour Packages</h2>
          <p className="section-subtitle reveal" style={{ margin: "0 auto" }}>
            Carefully curated pilgrimage tours designed for comfort, peace, and memorable spiritual experiences.
          </p>
        </div>

        <div className="featured-pkg-grid">
          {packages.slice(0, 3).map((pkg, i) => (
            <Link href={`/packages/${pkg.slug}`} className="featured-pkg-card reveal" key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="featured-pkg-img">
                <Image
                  src={pkg.img}
                  alt={pkg.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="featured-pkg-duration">
                  <Clock size={14} />
                  <span>{pkg.duration}</span>
                </div>
              </div>
              <div className="featured-pkg-content">
                <h3>{pkg.title}</h3>
                <p>{pkg.desc}</p>
                <div className="featured-pkg-price">
                  Starting From <strong>{pkg.price}</strong>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link href="/packages" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            View More Packages <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
