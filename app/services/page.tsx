"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Construction",
      description:
        "We specialize in bespoke luxury estates and high-performance multi-family dwellings. Our residential division merges comfort with structural innovation, ensuring every home is a legacy piece.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBfQJYuqKAdlzzuq4LMeviSzSn6Wk_lqTBeECrdgiKvZ8GL7H2beHlDTJYbQ24qq7gL1_H6jhTt1tCp6wogRTDWXfyDqhwEkaG0Z5fvzWQIUdvnhJvcIvHS2M-YcqCjYqbdP2LevoHmQVM9mdsA5aGwxoOtf-HoosepAom4fMOAvcmMiWCTBjEoCz787W_06C_ivmydzdb_QBv-mzaQjSv5TQvYS9ObCSwTF-bjc5ID3UZm6-0Z5r1IUMSbQWu7ubuujScszyfewC0",
      tag: "RESIDENTIAL",
      link: "#",
    },
    {
      title: "Commercial Development",
      description:
        "Scaled for impact. Our commercial projects focus on operational efficiency and striking corporate identity, providing spaces that empower industry leaders.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1x8H5qle8q-nsPXzF7xnM4h2QfjLvV5FJJMsPVSSy_I4Hsu7Ork-pDfIQck4zATu0sdb0F3byrbjtFN5pH2T6Gp8or-rjNKYGw-rg1zpnbT-BwRuqlEWcLbiRJDIJnkuIm61LZFrtrcL7Xw-TRN17NPerPnqYrhohvwg-hqejguOWCJ3IB4ESb54qUSUPI4EHQBBDJ6B6nFPUNRwV3JU8Os_EiATWAH5SnlfR_ImtLl9HU9381VcN2TvFAKg5POfxFhP98Rv4nfk",
      tag: "COMMERCIAL",
      link: "#",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Transforming the existing into the extraordinary. We handle complex structural retrofitting and high-end aesthetic overhauls for heritage and contemporary buildings.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD8nTAv3BQTIAnox_iTFOtq_eXk_CU9b67dTbs6sYkim0L2hMlQstYEUk-gaeB4YrCFHFqSfzaqieCwEoxG36cJka4aR6fOO56tLRazUhYr0DdimTtUW7HP5wQk2NXksojS7kP2x2BZztlACq8Nbbr20vlLWUahQESckaJ6ySZ3Ya28jh82sEOfx083HDiD8szk5uc0eQApMLozgDHgriSe1PhPm5CE4CWstXGSEdmywkPlr2Mm7LCeAEH_kvCBMG9eiWME4CfFU4M",
      tag: "RENOVATION",
      link: "#",
    },
    {
      title: "Structural Engineering",
      description:
        "The science of stability. Our engineering team provides detailed calculations, material assessments, and innovative solutions for the most challenging architectural geometries.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBr_L8Y4Vvqi64QSTvWRYik-DX7TXmtbaPIqyw7MnlxPu2tV1miIBDULYkkC3taRvQJHyOJXS8sIwx8frQbHkBlBJPjmiVtGg80Iuyp9VhZeK_4UtAfur7AGw0zrqa9HcDvgiqk92I6LtG9pUn7UNcuLJejhMvUfVCidJ3L5f-hyaLdPrT7lqg4COM8BHyeyjL1mB_ImyOGpTUY0piCjW9ZOD4SNoS_hy59tV-rV1orLcaUH5QV6dKR88bMzvjEGnckUGpO_Fl--bA",
      tag: "ENGINEERING",
      link: "#",
    },
  ];

  return (
    <>
      {/* Hero Section – same content, cleaner layout */}
      <section className="relative min-h-[500px] md:h-[614px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-40">
          <Image
            alt="Construction site background"
            fill
            className="object-cover grayscale brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnG3lJvE5TlqZuPSndBL6RNxgX8PAE6vtPoQV84uaY1p4j45zr1MFh3PVBw888VoPP3T6eXQyYHEAkMGamqe-Nabmg2gQxbT1_Kaafi9skCNgivXsL2pyDA8PElhYLV5R0uVrsfendHOqxOyQvgqyMnFqQ20VCmtFbRP8W3of2oHXPgMlJkcLy3_fqza2agDgw4obEyKwzAJ9uznhASPjdqqQ7_rccn8OetVP9h3zoRvIscTGpqLLbuSjybxkWXOwnpD1SWF_YbnA"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-3xl">
            <span className="text-secondary font-headline text-sm font-bold tracking-[0.3em] uppercase mb-6 block">
              Precision Engineering
            </span>
            <h1 className="text-white font-headline text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
              OUR CORE <br />
              <span className="text-secondary">CAPABILITIES</span>
            </h1>
            <p className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl font-light leading-relaxed">
              From foundational structural integrity to high-end architectural
              finishing, we deliver monolithic excellence across every tier of
              construction.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid – new card-based design */}
      <section className="py-24 bg-surface px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <Image
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    src={service.image}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-secondary text-white font-headline text-[10px] font-bold px-3 py-1.5 tracking-widest uppercase rounded">
                      {service.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="font-headline text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-secondary font-bold text-sm tracking-widest uppercase group/link hover:gap-3 transition-all"
                  >
                    Learn More
                    <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">
                      arrow_right_alt
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specification Banner – same content */}
      <section className="py-20 bg-primary-container text-white">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="space-y-2">
            <span className="block text-secondary font-headline text-2xl sm:text-3xl md:text-4xl font-black">500+</span>
            <span className="block text-on-primary-container font-label text-xs uppercase tracking-widest">
              Projects Completed
            </span>
          </div>
          <div className="space-y-2">
            <span className="block text-secondary font-headline text-2xl sm:text-3xl md:text-4xl font-black">15+</span>
            <span className="block text-on-primary-container font-label text-xs uppercase tracking-widest">
              Years Experience
            </span>
          </div>
          <div className="space-y-2">
            <span className="block text-secondary font-headline text-2xl sm:text-3xl md:text-4xl font-black">28</span>
            <span className="block text-on-primary-container font-label text-xs uppercase tracking-widest">
              Global Awards
            </span>
          </div>
          <div className="space-y-2">
            <span className="block text-secondary font-headline text-2xl sm:text-3xl md:text-4xl font-black">100%</span>
            <span className="block text-on-primary-container font-label text-xs uppercase tracking-widest">
              Safety Rating
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section – same content */}
      <section className="py-32 bg-surface-container-low text-center px-6 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
            Ready to Build Your Legacy?
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mb-10 leading-relaxed">
            Consult with our lead architects and engineers to bring your vision to
            life with MilkWalk Kove's signature precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary text-white px-10 py-4 rounded-lg font-headline text-sm font-bold uppercase tracking-widest hover:bg-on-secondary-container transition-all">
              Start a Project
            </button>
            <button className="border border-outline-variant/30 text-secondary px-10 py-4 rounded-lg font-headline text-sm font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-all">
              Download Portfolio
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
