"use client";

import { AtSign, MessageCircle, MapPin, Phone, Mail, Globe } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="logo">
              Tours<span>&</span>Travels
            </Link>
            <p>
              Trusted spiritual travel experiences for families and senior citizens. Comfortable pilgrimage tours across South India and sacred destinations.
            </p>
            <div className="footer-social-inline">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <AtSign size={18} />
              </a>
              <a href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20your%20spiritual%20tour%20packages." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/packages">Packages</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4>Popular Destinations</h4>
            <ul className="footer-links">
              <li><Link href="/packages/char-dham-yatra">Char Dham Yatra</Link></li>
              <li><Link href="/packages/kashi-ayodhya-prayagraj">Kashi &amp; Ayodhya</Link></li>
              <li><Link href="/packages/jyotirlinga-circuit">Jyotirlinga Tours</Link></li>
              <li><Link href="/packages/nepal-spiritual-journey">Nepal Spiritual Tours</Link></li>
              <li><Link href="/packages/kedarnath-badrinath">Kedarnath &amp; Badrinath</Link></li>
              <li><Link href="/packages/south-india-temple-circuit">South India Temple Tours</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4>Contact Details</h4>
            <ul className="footer-links footer-contact-list">
              <li>
                <Phone size={15} className="footer-contact-icon" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <MessageCircle size={15} className="footer-contact-icon" />
                <a href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20your%20spiritual%20tour%20packages." target="_blank" rel="noopener noreferrer">WhatsApp Support</a>
              </li>
              <li>
                <Mail size={15} className="footer-contact-icon" />
                <a href="mailto:info@toursandtravels.online">info@toursandtravels.online</a>
              </li>
              <li>
                <MapPin size={15} className="footer-contact-icon" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2026 ToursAndTravels.online — Trusted Spiritual Travel for Families &amp; Senior Citizens. Karnataka, India.</p>
        </div>
      </div>
    </footer>
  );
}
