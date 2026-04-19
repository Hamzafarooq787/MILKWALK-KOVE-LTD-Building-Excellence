"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  // Stats counter state
  const statsData = [
    { label: "Years of Excellence", value: 18, suffix: "+" },
    { label: "Projects Completed", value: 247, suffix: "" },
    { label: "Happy Clients", value: 192, suffix: "+" },
    { label: "Industry Awards", value: 12, suffix: "" },
  ];
  const [counters, setCounters] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increments = statsData.map((s) => s.value / steps);
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps) {
        setCounters((prev) =>
          prev.map((val, idx) =>
            Math.min(Math.floor(increments[idx] * (currentStep + 1)), statsData[idx].value)
          )
        );
        currentStep++;
      } else {
        clearInterval(interval);
        setCounters(statsData.map((s) => s.value));
      }
    }, stepTime);
    return () => clearInterval(interval);
  }, []);

  // Testimonials slider
  const testimonials = [
    {
      quote:
        "Milkwalk Kove transformed our vision for a commercial hub into a breathtaking reality. Their attention to structural detail and the golden finish on the project exceeded all expectations.",
      name: "Alistair Vance",
      role: "CEO, Vance Global Properties",
      stars: 5,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGA4sdia2g78epkTCB_nBl0-swLo8GC887yrHH78At3bh6ap9WgKeCIIjXzX1jk7MujSSblFQaSBWnZMnN7HclDunvkpYI5SPD9-QnC9AeYpFXW1N5ri1oLF9wF6ADC2bbAz4W5nGMPPpPWsNMPGN9x4BRJA-RMOwEd00641O8aAxiynp-kBGVfgd4AsvYEVPlDUlMjk1K0wP9wfQecdHp3_V7h6Dtn-WSvSdHK-PO2C_xRVynJp5i3c2OfZ-HPAPiaJiY_d1suDg",
    },
  ];
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[testimonialIndex % testimonials.length];
  const nextTestimonial = () => setTestimonialIndex((i) => i + 1);
  const prevTestimonial = () => setTestimonialIndex((i) => i - 1 + testimonials.length);

  // FAQ accordion
  const faqs = [
    { q: "What areas do you serve?", a: "We provide premium construction services across the entire United Kingdom, with a focus on London, Manchester, Birmingham, and surrounding regions." },
    { q: "How long does a typical residential project take?", a: "Timelines vary based on complexity, but most residential builds range from 6 to 18 months. We provide detailed schedules during consultation." },
    { q: "Do you handle planning permissions?", a: "Yes, our team assists with all necessary planning permissions, building regulations, and compliance documentation." },
    { q: "What warranties do you offer?", a: "We provide a 10-year structural warranty on all new builds and a 2-year workmanship guarantee on renovations." },
    { q: "Can I visit past projects?", a: "Absolutely. We arrange site visits to completed projects so you can see our craftsmanship firsthand." },
  ];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Services bento data
  const services = [
    { id: "01", title: "Residential", description: "Bespoke luxury homes tailored to the most discerning architectural visions.", span: "md:col-span-7", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmGVOCzwmLCRWdNh4x-_b5uo7HH12U4JNP6mZvf76Ij3N2NOxSQpbW2ZnsgZl8Qkr0gl-js6LeV90kM8KzmQL2u9qwM7inkncD7tMTaxRRVVmh1zmY3sH8YKcMKOGXW8vCCdFIZhxZr3Jh-sKON7Ms_XVoGPWr1udxfdboEo1oExUG5NwIi9mgESeQOKuUGAEW2g6bOoSOvQaA_HLQDZqwgHpbj2aPj7uH2WU5A9L-KW3C7pUvnrFYcdbmy3MXe6FW_pH4aAAod1g" },
    { id: "02", title: "Commercial", description: "High-scale commercial infrastructure built for performance and longevity.", span: "md:col-span-5", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPvKlTICifUlyipwuqtnbCd4RrYEZDiZ3OsjngajCuqbbwBAx5VJb6Fl9Cyz0QSD2F30fJ9k_wfu1RwYzYBktc-Q_-OJN4ydHwrPuaX0CVyjRFmCK7hgZHUm-qFGq_1oH8mnNo8vbmp_HJ8T4Z8Xm8EDj5Ccu8AN_kaxkSjm0oUDAbcpRO_xIK-WmNAF5aBrS6NroUfLjCjhqGQtcYKdtE0NY1lv21NY0e7J1eM5Mbdcd3e5OkVatsFqGeTm7OJvvzxJpTKr8N2OE" },
    { id: "03", title: "Renovation", description: "Restoring legacy structures with contemporary precision and style.", span: "md:col-span-5", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVeZyLawq57H7wAfwwEEBUwG6dZQgaclt4mYuGXmiMl68TCfvdAApY3oUdjCGyEL5LBVx7KBPPprRImlUiATF65LKBSugxSTx6CZ6AzTo0F88___-ctnFdRpUADISvSxp36NkACdGQFYnsSXYL24VceZC4sMwVs1UB7CVWT5P5IeBVMlIwO3ZKpu4dSEr5toHK8YICgnJhxOLf6nhaYHdNE4mmjt4iCz5i4ONHqy10nRYPEvOYGXam6Esd7GlQyrlm_LVvXp1avfA" },
    { id: "04", title: "Structural Engineering", description: "The backbone of every project, engineered for absolute safety and durability.", span: "md:col-span-7", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdp_6OFewfzAk_5uKr8zUjnPlDNFbSSESp31Re1UZABU1xdBX-zohXqJXvElqmtuNu3uO9gyhsB5WswKhf9hSXImgScNMgiWhbVn2pBbgT_E1b593sUX64dTPaJn-YAPWWhvqDpbBvlqfVmHXOMQnB2vPne23IB3_1uLuV75ExGC01w5rDyl275tWvvpScgbCG48BiV2eF85RqcTHSF-eDUvfaOeZkQZranuX3jJyjSEyQUhSe55C8RCph0XvqdFcx9LYjPMGnmhI" },
  ];

  const features = [
    { icon: "precision_manufacturing", title: "Precision Engineering", description: "Our CAD-led approach ensures millimeter-perfect execution from the first foundation to the final finish." },
    { icon: "verified_user", title: "Guaranteed Compliance", description: "Fully accredited and strictly adhering to the highest UK health and safety building regulations." },
    { icon: "history_edu", title: "Technical Heritage", description: "Years of expertise in handling complex structural challenges across diverse landscapes in the UK." },
  ];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demo: Project brief sent. We'll contact you within 48 hours.");
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20 md:pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Luxury Architectural Construction"
            fill
            className="object-cover opacity-40 grayscale-[0.5]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBXuXhEgfZeT9KjbO2Va1B03SAIbQQnqePg8-ktUd5LQ7yaytdDPUU4RQ-pK3qHGJc_WI4Cp0a1QLZseNWXtbN5pPS6Vc2sPoQhMLYGpmNN2pz-FdhQYTtfHMACMjvk6ht5h-ASNEgVGWvFTDvyexUk2v51yTdHCq-5S9xvc4OspGcDVRrAKw7rZ2gGWEc-QWj8JK36Qbqn98j6wPu-bbaCLlHs9K6wiYFFuYZWva7kl7PMUwX07p9_vknnhYHgMtHNNgBqogATJ0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-4xl mx-auto md:mx-0">
            <span className="inline-block px-4 py-1 mb-6 border border-secondary text-secondary font-headline font-bold text-xs tracking-[0.3em] uppercase">
              Est. 2024 • Excellence Defined
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold text-white leading-[1.1] tracking-tighter mb-8">
              Building Excellence with <span className="text-secondary">Precision</span> &amp; Trust
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mb-12 leading-relaxed">
              Premium Construction Services Across the UK. Crafting high-end architectural monuments with engineering mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-secondary text-white font-headline font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-500 shadow-xl shadow-black/40">
                Request a Quote
              </button>
              <button className="px-10 py-5 border border-white/20 text-white font-headline font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all duration-500">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute right-12 bottom-24 rotate-90 origin-right">
          <span className="font-headline font-bold text-secondary text-xs tracking-[0.5em] uppercase whitespace-nowrap opacity-50">
            Structural Integrity &amp; Aesthetic Brilliance
          </span>
        </div>
      </section>

      {/* Services Bento – Images visible on all devices */}
      <section id="services" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          {/* "Our Services" badge */}
          <div className="text-center md:text-left mb-12 md:mb-16 lg:mb-20">
            <span className="inline-block px-4 py-1 mb-4 border border-secondary text-secondary font-headline font-bold text-xs tracking-[0.3em] uppercase">
              Our Services
            </span>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold tracking-tighter text-primary">
                  Our Core Expertise
                </h2>
                <div className="h-1.5 w-24 bg-secondary mt-4 mx-auto md:mx-0"></div>
              </div>
              <p className="max-w-md text-on-surface-variant font-light text-base md:text-lg">
                From meticulous residential builds to complex structural engineering, we deliver monolithic quality in every square meter.
              </p>
            </div>
          </div>

          {/* Grid container: auto on mobile, fixed 800px height on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 md:h-[800px]">
            {services.map((service) => (
              <div
                key={service.id}
                className={`${service.span} relative group overflow-hidden rounded-lg bg-surface-container-lowest shadow-sm transition-all duration-700 hover:-translate-y-2`}
              >
                {/* Image wrapper: fixed height on mobile, full height on desktop */}
                <div className="relative w-full h-64 md:h-full">
                  <Image
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    src={service.img}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                    <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest mb-2 block">
                      {service.id}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-headline font-bold text-white mb-2 md:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base font-light max-w-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"><span className="material-symbols-outlined text-[40rem] rotate-12" style={{ fontVariationSettings: "'FILL' 0, 'wght' 100" }}>architecture</span></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <span className="inline-block px-4 py-1 mb-4 border border-secondary text-secondary font-headline font-bold text-xs tracking-[0.3em] uppercase">
            Why Choose US
          </span>
          <div className="max-w-2xl mb-16 md:mb-24"><h2 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tighter mb-8">Why the Industry Trusts <span className="text-secondary">Milkwalk Kove</span></h2><p className="text-on-primary-container text-lg font-light">We don't just build structures; we build trust through technical mastery and uncompromising standards.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col gap-6 p-8 md:p-10 bg-primary/40 backdrop-blur-md rounded-lg">
                <span className="material-symbols-outlined text-secondary text-5xl">{f.icon}</span>
                <h4 className="text-2xl font-headline font-bold tracking-tight">{f.title}</h4>
                <p className="text-on-primary-container leading-relaxed font-light">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tighter text-primary">Delivering Measurable Impact</h2><div className="h-1 w-20 bg-secondary mx-auto mt-6"></div></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {statsData.map((stat, idx) => (
              <div key={stat.label}><div className="text-5xl md:text-6xl font-headline font-black text-secondary">{counters[idx]}{stat.suffix}</div><p className="text-on-surface-variant font-medium uppercase tracking-wide mt-4">{stat.label}</p></div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Quote Form */}
      <section id="contact" className="py-24 md:py-32 bg-primary relative">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          <div className="text-white"><h2 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tighter mb-8">Let's Build the <span className="text-secondary">Future</span> Together</h2><p className="text-on-primary-container text-lg font-light mb-12">Submit your project specifications, and our technical estimators will provide a comprehensive quote within 48 hours.</p><div className="flex flex-col gap-8"><div className="flex items-center gap-6"><div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary"><span className="material-symbols-outlined">call</span></div><div><p className="text-sm text-white/50 uppercase tracking-widest font-bold">Direct Line</p><p className="text-xl font-headline font-bold text-white">01782 123 456</p></div></div><div className="flex items-center gap-6"><div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary"><span className="material-symbols-outlined">mail</span></div><div><p className="text-sm text-white/50 uppercase tracking-widest font-bold">Email Inquiries</p><p className="text-xl font-headline font-bold text-white">sales@milkwalkkove.com</p></div></div></div></div>
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl relative"><form onSubmit={handleQuoteSubmit} className="grid grid-cols-1 gap-8"><div className="relative border-b border-outline-variant/30 focus-within:border-secondary transition-colors group"><label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Full Name</label><input required className="w-full py-2 bg-transparent border-none focus:ring-0 text-on-surface font-headline placeholder:text-surface-dim" placeholder="Johnathan Doe" type="text" /></div><div className="relative border-b border-outline-variant/30 focus-within:border-secondary transition-colors group"><label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Email Address</label><input required className="w-full py-2 bg-transparent border-none focus:ring-0 text-on-surface font-headline placeholder:text-surface-dim" placeholder="john@example.com" type="email" /></div><div className="relative border-b border-outline-variant/30 focus-within:border-secondary transition-colors group"><label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Project Type</label><select className="w-full py-2 bg-transparent border-none focus:ring-0 text-on-surface font-headline"><option>Commercial Construction</option><option>Residential Build</option><option>Structural Engineering Consultation</option><option>Major Renovation</option></select></div><div className="relative border-b border-outline-variant/30 focus-within:border-secondary transition-colors group"><label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Message</label><textarea required className="w-full py-2 bg-transparent border-none focus:ring-0 text-on-surface font-headline placeholder:text-surface-dim" placeholder="Tell us about your project requirements..." rows={3}></textarea></div><button type="submit" className="w-full py-5 bg-secondary text-white font-headline font-extrabold uppercase tracking-[0.2em] hover:bg-on-secondary-container transition-colors duration-500 mt-4">Send Project Brief</button></form></div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 md:py-32 bg-surface-container-lowest">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tighter text-primary">Frequently Asked Questions</h2><div className="h-1 w-20 bg-secondary mx-auto mt-6"></div><p className="text-on-surface-variant text-lg mt-6">Everything you need to know about working with Milkwalk Kove.</p></div>
          <div className="max-w-3xl mx-auto divide-y divide-outline-variant/30">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-6 faq-item">
                <button className="flex justify-between items-center w-full text-left" onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}><span className="text-xl font-headline font-bold text-primary">{faq.q}</span><span className="material-symbols-outlined text-secondary transition-transform duration-300">{openFaqIndex === idx ? "expand_less" : "expand_more"}</span></button>
                {openFaqIndex === idx && <div className="mt-4 text-on-surface-variant leading-relaxed pl-4 border-l-2 border-secondary">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}