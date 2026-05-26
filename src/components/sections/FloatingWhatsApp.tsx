"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="floating-whatsapp-container">
      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20your%20spiritual%20tour%20packages."
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
        <div className="pulse" />
      </a>
    </div>
  );
}
