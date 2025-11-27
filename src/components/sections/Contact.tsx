"use client";

import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan apna API call / form submit logic lagao
    console.log("Contact form submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
      {/* ============ HERO SECTION ============ */}
      <section className="pt-28 pb-16 px-4 bg-[#156082] text-white">
        <div className="container-xl mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-4">
              Contact Apperception LLC
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Let&apos;s plan your{" "}
              <span >next ERP move.</span>
            </h1>
            <p className="text-sm md:text-base text-sky-100 mb-6">
              Share your current landscape, challenges, and goals. Our senior
              consultants will get back with practical options – strategy,
              roadmap, or a health-check of your existing ERP.
            </p>

            <div className="flex flex-wrap gap-3 text-xs md:text-sm">
              <HeroBadge>Vendor-neutral advisory</HeroBadge>
              <HeroBadge>Finance &amp; digital transformation</HeroBadge>
              <HeroBadge>UAE · India · Europe · Africa</HeroBadge>
            </div>
          </div>

          {/* Right highlight card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">
            <img src="./assets/Image/busy-woman-doing-many-things-same-time.jpg" className="rounded-xl"></img>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: CONTACT INFO + MAP ============ */}
      <section className="py-14 px-4">
        <div className="container-xl mx-auto max-w-6xl grid lg:grid-cols-[1.1fr,1.1fr] gap-10">
          {/* Contact info card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact details
            </h2>

            <div className="space-y-6 text-sm text-gray-700">
              <InfoRow
                icon={<FaMapMarkerAlt className="text-primary" />}
                title="Offices"
                lines={[
                  "Dubai & Abu Dhabi – Client advisory & governance",
                  "India – Offshore delivery center",
                  "Partner presence across Europe & Africa",
                ]}
              />

              <InfoRow
                icon={<FaPhoneAlt className="text-primary" />}
                title="Phone"
                lines={["+971 XX XXX XXXX", "Available during business hours"]}
              />

              <InfoRow
                icon={<FaEnvelope className="text-primary" />}
                title="Email"
                lines={[
                  "info@apperceptionllc.com",
                  "sales@apperceptionllc.com",
                ]}
              />

              <InfoRow
                icon={<FaClock className="text-primary" />}
                title="Business hours"
                lines={[
                  "Sunday – Thursday: 9:00 AM – 6:00 PM (UAE)",
                  "Friday – Saturday: Closed",
                ]}
              />
            </div>
          </div>

          {/* Map card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4 md:p-6 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our primary location
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              We primarily operate out of the UAE with delivery support from
              India and partners across Europe &amp; Africa.
            </p>
            <div className="flex-1 rounded-2xl overflow-hidden border border-gray-200">
              {/* Dummy map – replace src with your real Google Maps embed */}
              <iframe
                title="Apperception Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115786.67345616399!2d55.14518722568041!3d25.092535817953374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434dd9698b2b%3A0x260dc5b9a30e12cb!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: CONTACT FORM ============ */}
      <section className="pb-20 px-4">
        <div className="container-xl mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10">
            <div className="grid lg:grid-cols-[1.1fr,1fr] gap-10">
              {/* Left: form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Share your requirements
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Fill in a few details about your current systems and goals.
                  Our team will review and get back with next steps and
                  potential engagement options.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Full name *">
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary"
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Company *">
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary"
                        placeholder="Organization / Group"
                      />
                    </Field>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Work email *">
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary"
                        placeholder="you@company.com"
                      />
                    </Field>
                    <Field label="Phone / WhatsApp">
                      <input
                        type="tel"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </Field>
                  </div>

                  <Field label="What are you looking for? *">
                    <select
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                    >
                      <option value="">Select an option</option>
                      <option>ERP strategy & roadmap</option>
                      <option>New ERP implementation</option>
                      <option>Fix / optimize existing ERP</option>
                      <option>Cloud migration</option>
                      <option>Analytics & BI / reporting</option>
                      <option>Risk, compliance & governance</option>
                      <option>Other / not sure</option>
                    </select>
                  </Field>

                  <Field label="Current systems / context">
                    <input
                      type="text"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary"
                      placeholder="e.g. Oracle EBS, SAP, spreadsheets, custom tools"
                    />
                  </Field>

                  <Field label="Describe your challenge & goals *">
                    <textarea
                      required
                      rows={4}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary resize-none"
                      placeholder="Briefly describe your current pain points, regions, timelines, expected outcomes..."
                    />
                  </Field>

                  <Field label="Timeline">
                    <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary">
                      <option value="">Select a timeline</option>
                      <option>Immediate (0–4 weeks)</option>
                      <option>Short term (1–3 months)</option>
                      <option>Medium term (3–6 months)</option>
                      <option>Exploring / no fixed date</option>
                    </select>
                  </Field>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white text-sm font-semibold hover:opacity-90 transition"
                  >
                    Submit enquiry
                  </button>

                  <p className="text-[11px] text-gray-500 mt-2">
                    We respect your privacy. Details shared here are used only
                    to respond to your enquiry and are not sold to vendors.
                  </p>
                </form>
              </div>

              {/* Right: small reassurance block */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 rounded-2xl p-6 md:p-7">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What you can expect
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <ListPoint>
                    A response from a senior consultant within one business day.
                  </ListPoint>
                  <ListPoint>
                    No spam or aggressive sales — we focus on clarity and
                    options first.
                  </ListPoint>
                  <ListPoint>
                    If needed, a short discovery call to understand your
                    context in more detail.
                  </ListPoint>
                  <ListPoint>
                    Clear recommendation on next steps: health-check, roadmap,
                    PoC, or phased implementation.
                  </ListPoint>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==== Small reusable components ==== */

const HeroBadge = ({ children }) => (
  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-medium">
    {children}
  </span>
);

const HeroPoint = ({ children }) => (
  <li className="flex gap-2">
    <BsCheckCircleFill className="mt-[3px] text-sky-300 text-xs" />
    <span className="text-sm">{children}</span>
  </li>
);

const HeroStat = ({ label, value }) => (
  <div>
    <div className="text-lg font-semibold text-yellow-300">{value}</div>
    <div className="text-[11px] uppercase tracking-wide text-sky-100 mt-1">
      {label}
    </div>
  </div>
);

const InfoRow = ({ icon, title, lines }) => (
  <div className="flex gap-3">
    <div className="mt-1 text-lg">{icon}</div>
    <div>
      <p className="font-semibold text-gray-900 mb-1">{title}</p>
      {lines.map((line, idx) => (
        <p key={idx} className="text-sm text-gray-700">
          {line}
        </p>
      ))}
    </div>
  </div>
);

const Field = ({ label, children }) => (
  <div className="space-y-1">
    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">
      {label}
    </label>
    {children}
  </div>
);

const ListPoint = ({ children }) => (
  <li className="flex gap-2">
    <BsCheckCircleFill className="mt-[3px] text-primary text-xs" />
    <span>{children}</span>
  </li>
);

export default Contact;
