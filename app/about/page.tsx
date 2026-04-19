"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center overflow-hidden bg-gradient-to-br from-[#0b3027] to-[#001a13] text-white">
        <div className="absolute inset-0 opacity-40">
          <Image
            alt="wide angle shot of modern glass skyscraper"
            fill
            className="object-cover grayscale brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3WjjQMb-FeFArAeKVrZudSw7jD5aneo1_c7_zRQBjrsuEY3p_BLk-1KvA-SaDlKsVTLGe446hlHOAPsu4hTsHR7912_7_s1Xat4RWqejV19ltUdL9h429orORsZNuN44UHRBvmrreujC5SOTb458ejfEXDKIXtHv7agsVeCUwzDapB981DXXikz2Ec6vjd5FtTOM4qw0HleGKCNmPgNwot6PKduk7YYP5GCawtS2nXg8BkaZzDiN8fMtuYzxI4crEyZCE-WHzWrU"
          />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="inline-block text-secondary font-headline font-bold tracking-[0.3em] uppercase text-sm mb-6">
              Established Precision
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] mb-8">
              CONSTRUCTING <br /> THE FUTURE.
            </h1>
            <p className="text-lg md:text-xl text-on-primary-container max-w-2xl font-light leading-relaxed opacity-90">
              MILKWALK KOVE LTD is a bespoke civil engineering and construction
              firm dedicated to the art of structural integrity and high-end
              architectural finish.
            </p>
          </div>
          <div className="lg:col-span-4 hidden lg:block">
            <div className="border-l border-white/20 pl-8 space-y-8">
              <div>
                <div className="text-3xl font-headline font-bold text-secondary">25+</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-headline font-bold text-secondary">142</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Iconic Structures</div>
              </div>
              <div>
                <div className="text-3xl font-headline font-bold text-secondary">08</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Global Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 px-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                alt="dramatic low angle shot of a construction crane"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3fwmETtbAVtZxER4mTP7IiVCLYuOH4E72GoPV8QI4A0rnHyJ54RCwVMcbvJXoGjdozC5VVEWihDz6lEwQjENHMMjLEzKwGWnSfKGX0ihT98FeNd8hz9GBL4nIS5okOvxbU4h6MZWjAZyj9ppgpWQy9JNP6jRG4lhe0FJx4EVmP1LffKkge4WCX6rkRYb86arlr4COR5j_brELdjoxjxTdObKDVb0HwJOjld8SiekjNMU1evHFVw295g8F-Hskj5gCNSEOLvjkCOg"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-surface-container-lowest p-12 shadow-2xl hidden md:block max-w-sm">
              <h3 className="font-headline font-extrabold text-2xl mb-4 text-primary">Our Mission</h3>
              <p className="text-on-surface-variant leading-relaxed">
                To redefine the landscape of modern living through uncompromising engineering precision
                and a commitment to aesthetic permanence.
              </p>
              <div className="mt-6 text-secondary text-xs font-bold tracking-widest uppercase">
                Precision &amp; Permanence
              </div>
            </div>
          </div>
          <div className="lg:pt-24">
            <h2 className="text-4xl font-headline font-extrabold text-primary mb-12">Core Principles</h2>
            <div className="space-y-12">
              {[
                {
                  num: "01",
                  title: "Technical Rigor",
                  desc: "Every bolt, beam, and blueprint undergoes rigorous multi-layer verification to ensure structural longevity.",
                },
                {
                  num: "02",
                  title: "Material Excellence",
                  desc: "We source only the finest raw materials, from reinforced alloys to sustainable hardwoods, ensuring premium quality.",
                },
                {
                  num: "03",
                  title: "Visionary Design",
                  desc: "Collaborating with world-class architects to push the boundaries of what is possible in the physical world.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-8 group">
                  <div className="text-secondary font-headline font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-xl mb-3 text-primary uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-on-surface-variant font-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline of Excellence */}
      <section className="bg-surface-container-low py-24 md:py-32 px-6 md:px-8 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <div>
              <span className="text-secondary font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Chronicle
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tighter">
                TIMELINE OF EXCELLENCE
              </h2>
            </div>
            <div className="max-w-md text-on-surface-variant text-sm font-light">
              A journey through time, marked by significant milestones that have shaped MILKWALK KOVE LTD
              into the industry leader it is today.
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-6">
            {[
              { year: "1998", title: "Founding Roots", desc: "Establishment of the original collective in the heart of the industrial district, focusing on heavy infrastructure.", mt: "" },
              { year: "2007", title: "The Expansion", desc: "Diversification into luxury residential and high-rise commercial sectors across the United Kingdom.", mt: "md:mt-12" },
              { year: "2015", title: "Innovation Leap", desc: "Adoption of advanced BIM modeling and sustainable construction practices that set new industry standards.", mt: "md:mt-24" },
              { year: "2024", title: "Global Reach", desc: "Expanding our operations to handle international luxury developments while maintaining local craftsmanship.", mt: "md:mt-36" },
            ].map((item) => (
              <div
                key={item.year}
                className={`flex-1 bg-surface-container-lowest p-8 md:p-10 border-l-4 border-secondary shadow-sm ${item.mt}`}
              >
                <div className="text-secondary font-headline font-black text-3xl mb-4">{item.year}</div>
                <h5 className="font-headline font-bold text-lg mb-4 text-primary">{item.title}</h5>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Team */}
      <section className="py-24 md:py-32 px-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tighter mb-4">
            THE ARCHITECTS OF SUCCESS
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Our team is comprised of elite structural engineers, lead architects, and project managers
            dedicated to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto lg:h-[800px]">
          {/* Principal Architect */}
          <div className="md:col-span-8 relative overflow-hidden group rounded-lg">
            <Image
              alt="portrait of a confident female lead architect"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWaZtQpGFDhkDY7UP-Nia4sODGnsoXLdbzuV8YFWnhiaSxCtg45RaXMDCRkxShcRNYlrgOQvhL9T8-HCt15k9coVSFQGzAErxmx-kL_B6D5uXW4W72Fx1DzRshbKsht6x3BMPfzY_CJgkVzWIRFJXvUquSDQ37wIBjNC3JeBelLIMZvCLQi9nMuEnRJqZ6EHxtobidZIKaw1zea2wBWFabqSXZZS5i0E2HqjNrm9egRaXYFik_K_3AxBavjClgcKtkCBUuIT35SVE"
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 bg-gradient-to-t from-primary/90 to-transparent w-full text-white">
              <p className="text-secondary font-headline font-bold text-xs tracking-widest uppercase mb-2">
                Principal Architect
              </p>
              <h3 className="text-2xl md:text-3xl font-headline font-extrabold">Elena Voss</h3>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="relative flex-1 overflow-hidden group rounded-lg">
              <Image
                alt="middle aged male structural engineer"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZAIDoP5IL1UyoRvqcoiPYITVHOoRi-eM39e9VcVuynItGv19Xbr_wvbgBLiw7SYyrk7nTm8WX4LNkTNXW0juagNoqX-aZqzEunx1TwIZSBAsJPBa5cp6xNFVcKmuozEtBH-lgijnUR582jWV7IMfrW9KFGCKRCu4hm9IvVKrsbJUEtpHVWWBNveOy_kcPZ1PtWAAC7KbaQ4QC6x4Us8I4iC6tsIBTPEkHdtxBCwvM9MUjGjQy3KzqEK_ksyDxUfCepltSOh7ToFY"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                <p className="text-secondary font-headline font-bold text-xs uppercase mb-1">Chief Engineer</p>
                <h4 className="text-lg md:text-xl font-headline font-bold">Marcus Thorne</h4>
              </div>
            </div>
            <div className="relative flex-1 overflow-hidden group rounded-lg">
              <Image
                alt="focused professional project manager"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ13mjuQQ0k5VUlsuwGNAxcyCkv21ckiyj1EhsfAqwgw_ik40P7e9w5MwJzdY32HbJfoveNyyaYyIIvrEdm_PIMnZTu1N9VGHjMfn1dyd_2wUXM61PRHwQNluI1yqK-7qyp1RDgbuU6rjlSci908Hpsqgkcj9oeiziPyaVF5S1cOto7p5zJHYtDqT0k_ebp6MuNh55fMlV14I6y_AQ7H1nnrqpjRHPNlnARvnT2k5b6asGmqTZ-RTdWFY9148o0Nfg_0lk70-jKOc"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                <p className="text-secondary font-headline font-bold text-xs uppercase mb-1">Project Director</p>
                <h4 className="text-lg md:text-xl font-headline font-bold">Julian Kove</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#0b3027] to-[#001a13] py-24 md:py-32 px-6 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-white tracking-tighter mb-8 leading-tight">
            READY TO BUILD YOUR LEGACY?
          </h2>
          <p className="text-on-primary-container text-lg mb-12 font-light">
            Partner with the leaders in architectural construction and civil engineering.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-secondary text-on-secondary px-10 py-4 rounded-lg font-headline font-bold uppercase tracking-widest hover:opacity-90 transition-all duration-300">
              View Our Portfolio
            </button>
            <button className="border border-outline-variant/30 text-white px-10 py-4 rounded-lg font-headline font-bold uppercase tracking-widest hover:bg-white/5 transition-all duration-300">
              Contact Strategy Team
            </button>
          </div>
        </div>
      </section>
    </>
  );
}