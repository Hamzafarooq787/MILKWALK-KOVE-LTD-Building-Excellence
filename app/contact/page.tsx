"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    brief: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const to = "sales@milkwalkkove.co.uk";
    const subject = encodeURIComponent(
      `Quotation Request from ${form.name || "Prospective Client"}`
    );
    const body = encodeURIComponent(
      `QUOTATION REQUEST – MILKWALK KOVE LTD\n` +
        `${"=".repeat(40)}\n\n` +
        `Full Name:      ${form.name}\n` +
        `Email:          ${form.email}\n` +
        `Phone:          ${form.phone}\n\n` +
        `Project Brief:\n${form.brief}\n\n` +
        `${"=".repeat(40)}\n` +
        `Sent via www.milkwalkkove.co.uk`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-48 md:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image
            alt="Monochromatic dark architectural photography"
            fill
            className="object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfWtWhs0mNia9QX_lkAe1bkItBksihb3tDc9H7AHALNwNRWE7AzNy2Xi9vSwUAwU6INIqxf7bGstO81RLxkGQJqWIA2FuXMVIhL4kxWkmQBXOhMcVV_3zdambqdM-EzPqEthl8iWfZLkZKyunLcuM7clV8P_sVqULLxuCWyC7_jJ-EeZAVZArBk1NiULusSb7DLQ4CBzzoplIPUhTdVWMJvgE0uVlxgN5Tlo_NtFzc1b-Ne_kXSzA_X2BW-byAp2ZSGmBr5aOp5fE"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-8">
              <span className="inline-block py-1 px-3 mb-4 sm:mb-6 border border-secondary/30 text-secondary font-headline text-[10px] font-bold tracking-[0.2em] uppercase">
                Connect With Precision
              </span>
              <h1 className="text-white font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6 sm:mb-8 text-balance">
                {"Let's Construct"} <br className="hidden sm:block" />{" "}
                <span className="text-secondary">Something Monumental.</span>
              </h1>
            </div>
            <div className="md:col-span-4 pb-0 md:pb-4">
              <p className="text-on-primary-container font-body text-base sm:text-lg leading-relaxed max-w-sm">
                Our engineering expertise is at your disposal. Reach out to
                discuss complex infrastructure projects or luxury residential
                developments.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="relative bg-surface">
        {/* Floating Form + Info Card */}
        <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 mt-0 md:-mt-16 lg:-mt-24 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-10 md:p-16">
              <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary mb-8 sm:mb-12">
                Project Inquiry
              </h2>
              <form className="space-y-8 sm:space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                  <div className="relative">
                    <label className="block font-label text-[10px] font-bold uppercase tracking-widest text-outline mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-secondary transition-all font-body text-primary placeholder:text-outline-variant/50"
                      placeholder="Engineering Lead / Client"
                    />
                  </div>
                  <div className="relative">
                    <label className="block font-label text-[10px] font-bold uppercase tracking-widest text-outline mb-2">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-secondary transition-all font-body text-primary placeholder:text-outline-variant/50"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block font-label text-[10px] font-bold uppercase tracking-widest text-outline mb-2">
                    Direct Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-secondary transition-all font-body text-primary placeholder:text-outline-variant/50"
                    placeholder="+44 (0) 0000 000 000"
                  />
                </div>
                <div className="relative">
                  <label className="block font-label text-[10px] font-bold uppercase tracking-widest text-outline mb-2">
                    Project Brief
                  </label>
                  <textarea
                    rows={4}
                    name="brief"
                    value={form.brief}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-secondary transition-all font-body text-primary placeholder:text-outline-variant/50 resize-none"
                    placeholder="Outline your vision, technical requirements, and timeline..."
                  ></textarea>
                </div>
                <div className="pt-4 sm:pt-6">
                  <button
                    type="submit"
                    className="group flex items-center gap-4 bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 font-headline text-xs font-bold uppercase tracking-[0.2em] hover:bg-secondary transition-all duration-500 w-full sm:w-auto justify-center sm:justify-start"
                  >
                    Request Quotation
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-5 bg-primary p-6 sm:p-10 md:p-16 flex flex-col justify-between text-white gap-10 lg:gap-0">
              <div className="space-y-10 sm:space-y-16">
                <div>
                  <span className="block text-secondary font-headline text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                    Direct Channels
                  </span>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-secondary shrink-0">
                        alternate_email
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs text-on-primary-container uppercase font-bold tracking-widest mb-1">
                          General Inquiries
                        </p>
                        <a
                          href="mailto:sales@milkwalkkove.co.uk"
                          className="text-base sm:text-xl font-headline font-light hover:text-secondary transition-colors tracking-tight break-all"
                        >
                          sales@milkwalkkove.co.uk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="block text-secondary font-headline text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                    Headquarters
                  </span>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary shrink-0">
                      location_on
                    </span>
                    <div className="font-headline font-light text-lg sm:text-xl tracking-tight leading-relaxed">
                      29 STANLEY STREET<br />
                      STOKE-ON-TRENT<br />
                      ST6 6BX, UK
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-0">
                <div className="p-6 sm:p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
                  <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-2">
                    Rapid Response
                  </h4>
                  <p className="text-on-primary-container text-xs leading-relaxed mb-6">
                    For urgent project enquiries, email our sales team directly
                    and a senior partner will respond within one business day.
                  </p>
                  <a
                    href="mailto:sales@milkwalkkove.co.uk"
                    className="text-secondary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    Email Us Now <span className="material-symbols-outlined text-xs">mail</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map + Image Section */}
        <section className="py-12 sm:py-16 md:py-24 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
            <div className="md:col-span-4 order-2 md:order-1">
              <div className="relative overflow-hidden group h-full">
                <Image
                  alt="High-contrast crane photograph"
                  width={600}
                  height={750}
                  className="w-full h-64 sm:h-80 md:h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM00rh8VUhjS1HxNVh5xCZRE12T0BRdY0ecS1N6AhPcJjmMUj429YDFT6ssqbc_BYSOV7bWQDIJpn-3GQWggaw5tJ6b_YlV6E2xdVDswgEo4M4l6MYJQ3UJy_UYR5Ij-9RSaoQks_mP03e2izleKPL5W9twzKlEHy6gI5LPc9lrui1ZOn5xDN2BfWNLWl7VnnaVn6B6IaK0JOjF9p3CLYP7Px7UbzqxzUtZtaxYPzC7FvPaedmLmkWq8jK44QHBVcGMWBScszfKqA"
                />
                <div className="hidden md:block absolute bottom-0 left-0 bg-secondary text-on-secondary py-4 px-8 transform -rotate-90 origin-bottom-left translate-y-[-100%] translate-x-full">
                  <span className="font-headline text-[10px] font-bold uppercase tracking-[0.3em]">
                    Operational 24/7
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 order-1 md:order-2 h-64 sm:h-80 md:h-[500px] bg-surface-container-low relative">
              {/* Google Maps Embed */}
              <iframe
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.34863372659!2d-2.1904571233010735!3d53.0594380962386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a696120516b3f%3A0xc33190b3969e6b20!2sStanley%20St%2C%20Burslem%2C%20Stoke-on-Trent%20ST6%206BX!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                className="w-full h-full grayscale opacity-80"
                style={{ border: 0 }}
                title="Milkwalk Kove Location"
              ></iframe>
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white p-4 sm:p-6 shadow-xl max-w-[calc(100%-2rem)] sm:max-w-xs hidden md:block">
                <h4 className="font-headline font-bold text-primary mb-2">
                  Visit Our Studio
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  Meetings are by appointment only to ensure the confidentiality
                  of project blueprints and technical data.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                >
                  Get Directions <span className="material-symbols-outlined text-sm">map</span>
                </a>
              </div>
            </div>
          </div>
          {/* Mobile-only directions link */}
          <div className="mt-4 flex justify-end md:hidden">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-xs font-bold uppercase tracking-widest flex items-center gap-2"
            >
              Get Directions <span className="material-symbols-outlined text-sm">map</span>
            </a>
          </div>
        </section>

        {/* FAQ Bento */}
        <section className="bg-surface-container-low py-12 sm:py-16 md:py-24">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-secondary font-headline text-[10px] font-bold tracking-[0.2em] uppercase">
                Quick Answers
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-extrabold tracking-tighter text-primary mt-2">
                Operational Protocol
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest p-8 sm:p-10 hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                </div>
                <h3 className="font-headline font-bold text-primary mb-4 uppercase text-sm tracking-widest">
                  Consultation Lead Time
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Most technical consultations are scheduled within 48-72 hours
                  of initial inquiry verification.
                </p>
              </div>
              <div className="bg-primary p-8 sm:p-10 text-white">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-secondary">description</span>
                </div>
                <h3 className="font-headline font-bold text-secondary mb-4 uppercase text-sm tracking-widest">
                  Tender Submission
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Please send all tender documents and RFPs directly to our
                  sales channel for board review.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-8 sm:p-10 hover:shadow-xl transition-all duration-500 sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">gavel</span>
                </div>
                <h3 className="font-headline font-bold text-primary mb-4 uppercase text-sm tracking-widest">
                  Legal &amp; Privacy
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  MILKWALK KOVE LTD operates under strict NDA protocols for all
                  government and private sector contracts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>


    </>
  );
}
