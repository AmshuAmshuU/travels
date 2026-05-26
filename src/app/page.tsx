"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import FeaturedPackagesSection from "@/components/sections/FeaturedPackagesSection";
import CustomizedTripsSection from "@/components/sections/CustomizedTripsSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import SeniorSection from "@/components/sections/SeniorSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramSection from "@/components/sections/InstagramSection";
import CtaSection from "@/components/sections/CtaSection";
import "@/components/sections/homepage-updates.css";

export default function Home() {
  // Scroll-reveal observer for all .reveal elements
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
      <HeroSection />
      <TrustSection />
      <FeaturedPackagesSection />
      <CustomizedTripsSection variant="primary" />
      <WhyChooseUs />
      <SeniorSection />
      <TestimonialsSection />
      <CustomizedTripsSection variant="secondary" />
      <InstagramSection />
      <CtaSection />
      <Footer />
    </>
  );
}
