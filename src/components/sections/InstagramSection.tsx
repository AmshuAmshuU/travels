"use client";

import Image from "next/image";
import { AtSign, Play, Camera } from "lucide-react";

const posts = [
  { src: "/chardham.png", type: "reel", likes: "2.4K" },
  { src: "/kashi.png", type: "photo", likes: "1.8K" },
  { src: "/jyotirlinga.png", type: "reel", likes: "3.1K" },
  { src: "/nepal.png", type: "photo", likes: "2.7K" },
  { src: "/kedarnath.png", type: "reel", likes: "4.2K" },
  { src: "/hero-bg.png", type: "photo", likes: "1.5K" },
  { src: "/chardham.png", type: "photo", likes: "2.9K" },
  { src: "/kashi.png", type: "reel", likes: "3.6K" },
];

export default function InstagramSection() {
  return (
    <section className="section instagram-section-new">
      {/* Floating background elements */}
      <div className="insta-bg-float insta-bg-float-1" />
      <div className="insta-bg-float insta-bg-float-2" />

      <div className="section-container" style={{ textAlign: "center" }}>
        <span className="section-label reveal">Instagram</span>
        <h2 className="section-title reveal">
          Follow Our Spiritual Journey Updates
        </h2>
        <p className="section-subtitle reveal" style={{ margin: "0 auto" }}>
          Stay connected with our latest spiritual destinations, travel reels,
          pilgrimage experiences, and upcoming departures on Instagram.
        </p>

        <div className="insta-wave-grid reveal">
          {posts.map((post, i) => {
            // Alternate vertical offset for wave effect
            const offsetClass = i % 2 === 0 ? "insta-wave-up" : "insta-wave-down";
            
            return (
              <div key={i} className={`insta-card ${offsetClass}`}>
                <Image
                  src={post.src}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="insta-card-overlay">
                  {post.type === "reel" && (
                    <div className="insta-play-badge">
                      <Play size={20} fill="white" />
                    </div>
                  )}
                  {post.type === "photo" && (
                    <div className="insta-camera-badge">
                      <Camera size={16} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <a
          href="https://instagram.com"
          className="btn-instagram-new reveal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AtSign size={18} />
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}
