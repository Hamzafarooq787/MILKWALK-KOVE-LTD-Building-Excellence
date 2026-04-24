"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image
            alt="Monochromatic dark architectural photography"
            fill
            className="object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfWtWhs0mNia9QX_lkAe1bkItBksihb3tDc9H7AHALNwNRWE7AzNy2Xi9vSwUAwU6INIqxf7bGstO81RLxkGQJqWIA2FuXMVIhL4kxWkmQBXOhMcVV_3zdambqdM-EzPqEthl8iWfZLkZKyunLcuM7clV8P_sVqULLxuCWyC7_jJ-EeZAVZArBk1NiULusSb7DLQ4CBzzoplIPUhTdVWMJvgE0uVlxgN5Tlo_NtFzc1b-Ne_kXSzA_X2BW-byAp2ZSGmBr5aOp5fE"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="inline-block py-1 px-3 mb-6 border border-secondary/30 text-secondary font-headline text-[10px] font-bold tracking-[0.2em] uppercase">
                Connect With Precision
              </span>
              <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-8">
                Let’s Construct <br />{" "}
                <span className="text-secondary">Something Monumental.</span>
              </h1>
            </div>
            <div className="md:col-span-4 pb-4">
              <p className="text-on-primary-container font-body text-lg leading-relaxed max-w-sm">
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
        <section className="max-w-screen-2xl mx-auto px-6 md:px-8 -mt-16 md:-mt-24 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-16">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary mb-12">
                Project Inquiry
              </h2>
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <label className="block font-label text-[10px] font-bold uppercase tracking-widest text-outline mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
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
                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-secondary transition-all font-body text-primary placeholder:text-outline-variant/50 resize-none"
                    placeholder="Outline your vision, technical requirements, and timeline..."
                  ></textarea>
                </div>
                <div className="pt-6">
                  <button className="group flex items-center gap-4 bg-primary text-white px-10 py-5 font-headline text-xs font-bold uppercase tracking-[0.2em] hover:bg-secondary transition-all duration-500">
                    Send Inquiry
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-5 bg-primary p-8 md:p-16 flex flex-col justify-between text-white">
              <div className="space-y-16">
                <div>
                  <span className="block text-secondary font-headline text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                    Direct Channels
                  </span>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-secondary">
                        alternate_email
                      </span>
                      <div>
                        <p className="text-xs text-on-primary-container uppercase font-bold tracking-widest mb-1">
                          General Inquiries
                        </p>
                        <a
                          href="mailto:sales@milkwalkkove.co.uk"
                          className="text-xl font-headline font-light hover:text-secondary transition-colors tracking-tight"
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
                    <span className="material-symbols-outlined text-secondary">
                      location_on
                    </span>
                    <div className="font-headline font-light text-xl tracking-tight leading-relaxed">
                      29 STANLEY STREET<br />
                      STOKE-ON-TRENT<br />
                      ST6 6BX, UK
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-16 md:pt-0">
                <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
                  <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-2">
                    Immediate Support
                  </h4>
                  <p className="text-on-primary-container text-xs leading-relaxed mb-6">
                    Need an architectural consultation now? Our WhatsApp line is
                    monitored by senior partners for rapid response.
                  </p>
                  <a
                    href="#"
                    className="text-secondary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    Launch Chat <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map + Image Section */}
        <section className="py-24 max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 order-2 md:order-1">
              <div className="relative overflow-hidden group">
                <Image
                  alt="High-contrast crane photograph"
                  width={600}
                  height={750}
                  className="w-full aspect-[4/5] object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM00rh8VUhjS1HxNVh5xCZRE12T0BRdY0ecS1N6AhPcJjmMUj429YDFT6ssqbc_BYSOV7bWQDIJpn-3GQWggaw5tJ6b_YlV6E2xdVDswgEo4M4l6MYJQ3UJy_UYR5Ij-9RSaoQks_mP03e2izleKPL5W9twzKlEHy6gI5LPc9lrui1ZOn5xDN2BfWNLWl7VnnaVn6B6IaK0JOjF9p3CLYP7Px7UbzqxzUtZtaxYPzC7FvPaedmLmkWq8jK44QHBVcGMWBScszfKqA"
                />
                <div className="absolute bottom-0 left-0 bg-secondary text-on-secondary py-4 px-8 transform -rotate-90 origin-bottom-left translate-y-[-100%] translate-x-full">
                  <span className="font-headline text-[10px] font-bold uppercase tracking-[0.3em]">
                    Operational 24/7
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 order-1 md:order-2 h-[500px] bg-surface-container-low relative">
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
              <div className="absolute top-8 right-8 bg-white p-6 shadow-xl max-w-xs hidden md:block">
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
        </section>

        {/* FAQ Bento */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <span className="text-secondary font-headline text-[10px] font-bold tracking-[0.2em] uppercase">
                Quick Answers
              </span>
              <h2 className="font-headline text-4xl font-extrabold tracking-tighter text-primary mt-2">
                Operational Protocol
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest p-10 hover:shadow-xl transition-all duration-500">
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
              <div className="bg-primary p-10 text-white">
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
              <div className="bg-surface-container-lowest p-10 hover:shadow-xl transition-all duration-500">
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

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] group"
      >
        <div className="flex items-center gap-3">
          <div className="hidden group-hover:block bg-primary text-white py-2 px-4 shadow-2xl rounded-lg font-headline text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
            Live Engineering Support
          </div>
          <div className="w-16 h-16 bg-[#25D366] text-white flex items-center justify-center rounded-full shadow-2xl hover:scale-110 transition-transform duration-500">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </div>
      </a>
    </>
  );
}
