"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/sections/ContactHero";
import ContactIntro from "@/components/sections/ContactIntro";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import ContactWhyUs from "@/components/sections/ContactWhyUs";
import ContactCta from "@/components/sections/ContactCta";

export default function ContactPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactIntro />
        <ContactInfo />
        <ContactForm />
        <ContactWhyUs />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
