"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const destinations = [
  "Char Dham Yatra",
  "Kashi & Ayodhya",
  "Jyotirlinga Tours",
  "Nepal Spiritual Tours",
  "Kedarnath & Badrinath",
  "South India Temple Tours",
  "Other / Not Sure Yet",
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
  "Flexible / Not Decided",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    fullName: "", phone: "", whatsapp: "",
    destination: "", travelers: "", month: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send enquiry");
      }

      setStatus("success");
      setForm({ fullName: "", phone: "", whatsapp: "", destination: "", travelers: "", month: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="section contact-form-section" id="enquiry-form">
      <div className="section-container">
        <div className="contact-form-grid">
          {/* Left panel */}
          <div className="contact-form-left reveal">
            <span className="section-label" style={{ color: "var(--gold)" }}>Quick Enquiry</span>
            <h2 className="section-title" style={{ color: "white" }}>Send Your Enquiry</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginTop: "1rem" }}>
              Fill in the form and our travel coordinator will reach out to you
              with personalized package recommendations.
            </p>
            <div className="contact-form-features">
              {[
                "No commitment required",
                "Personalized package suggestions",
                "Quick WhatsApp response",
                "Senior-friendly guidance",
              ].map((f) => (
                <div key={f} className="contact-form-feature">
                  <CheckCircle2 size={16} style={{ color: "var(--gold)", flexShrink: 0 }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: "rgba(255,255,255,0.04)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3 style={{ color: "white", fontSize: "1.05rem", marginBottom: "0.5rem" }}>Need immediate help?</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", marginBottom: "1.25rem", lineHeight: 1.5 }}>
                Skip the form and reach out directly to our travel experts for instant booking and queries.
              </p>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                <a href="https://wa.me/918660878131" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#25D366", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600 }}>
                  WhatsApp Us
                </a>
                <a href="tel:+918660878131" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--gold)", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600 }}>
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="contact-form-panel reveal">
            {status === "success" ? (
              <div className="contact-form-success">
                <div className="contact-form-success-icon">
                  <CheckCircle2 size={40} />
                </div>
                <h3>Enquiry Sent!</h3>
                <p>Thank you! We have received your travel enquiry and will get back to you soon on WhatsApp or phone.</p>
                <button
                  className="contact-form-submit"
                  style={{ marginTop: "1.5rem" }}
                  onClick={() => setStatus("idle")}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      id="fullName" name="fullName" type="text"
                      placeholder="Your full name"
                      value={form.fullName} onChange={handleChange} required
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone} onChange={handleChange} required
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp Number</label>
                    <input
                      id="whatsapp" name="whatsapp" type="tel"
                      placeholder="Same as phone or different"
                      value={form.whatsapp} onChange={handleChange}
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="travelers">Number of Travelers *</label>
                    <input
                      id="travelers" name="travelers" type="number"
                      placeholder="e.g. 4"
                      min="1" value={form.travelers} onChange={handleChange} required
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="destination">Preferred Destination</label>
                    <select id="destination" name="destination" value={form.destination} onChange={handleChange} disabled={status === "loading"}>
                      <option value="">Select a destination…</option>
                      {destinations.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="month">Travel Month</label>
                    <select id="month" name="month" value={form.month} onChange={handleChange} disabled={status === "loading"}>
                      <option value="">Select a month…</option>
                      {months.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="message">Message / Requirements</label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Tell us about your travel plans, special requirements, or any questions…"
                    value={form.message} onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </div>

                {status === "error" && (
                  <div style={{
                    display: "flex", alignItems: "center", gap: "0.5rem",
                    background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)",
                    borderRadius: "8px", padding: "0.75rem 1rem",
                    color: "#fca5a5", fontSize: "0.9rem"
                  }}>
                    <AlertCircle size={16} style={{ flexShrink: 0 }} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button type="submit" className="contact-form-submit" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Request Travel Details
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
