"use client";

import Image from "next/image";

export default function ProjectsPage() {
  return (
    <>
      {/* Editorial Hero Section */}
      <section className="pt-32 md:pt-40 px-6 md:px-8 max-w-screen-2xl mx-auto mb-16 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7">
          <h2 className="font-headline text-secondary text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Portfolio
          </h2>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-primary">
            Architectural <br />{" "}
            <span className="text-secondary italic font-light">Excellence.</span>
          </h1>
        </div>
        <div className="lg:col-span-5 pb-2">
          <p className="font-body text-on-surface-variant text-lg leading-relaxed max-w-md">
            Explore our curated gallery of residential, commercial, and industrial
            milestones. Where engineering precision meets luxury design.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="px-6 md:px-8 max-w-screen-2xl mx-auto mb-12 md:mb-16 overflow-x-auto">
        <div className="flex gap-8 md:gap-12 border-b border-outline-variant/20 pb-4 min-w-max">
          <button className="group relative py-2 px-1">
            <span className="font-headline font-bold text-sm uppercase tracking-widest text-primary">
              All Projects
            </span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></div>
          </button>
          {["Residential", "Commercial", "Industrial"].map((item) => (
            <button key={item} className="group relative py-2 px-1">
              <span className="font-headline font-semibold text-sm uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors duration-300">
                {item}
              </span>
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-secondary transition-all duration-500"></div>
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Bento Grid - Fully Responsive */}
      <section className="px-6 md:px-8 max-w-screen-2xl mx-auto pb-16">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-12 md:auto-rows-[280px] lg:auto-rows-[300px]">
          
          {/* Project 1: Large Featured Residential */}
          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-xl bg-surface-container-low w-full aspect-[4/3] md:aspect-auto">
            <Image
              alt="Luxury Modern Villa"
              fill
              className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjALfA4T8kA-fiocGRBOwQrx2QND2n5UH2hqWtcNd9lJkX-lEGL8TrB8de7UStzMIaDVjjvBpsFgdrvT6YqDdkcKEakO0AF3Is-FRAhagHcEAiVfVFqyAGLdEthNi81VsDxLYtv4F_UGN_WvCTxYDHbpC7wZ-tlQJjq-d1A_5Ua0H5aKjyJnHH6PFWqvvpFIARr0Gs9HsOjJuMi0K8YjjgN9jB_jkAwseX7ZYlly-CTCKpkeqiQ28tWB45T-fxyE5JH9EMaYn9eJU"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6 md:p-8 lg:p-12">
              <div className="hidden md:block text-vertical absolute right-4 lg:right-8 top-8 lg:top-12 font-headline font-bold text-secondary text-xs tracking-widest uppercase bg-surface/10 backdrop-blur-md px-2 py-4 border-r border-secondary/30">
                Residential 2023
              </div>
              <span className="text-secondary font-headline font-bold text-xs md:text-sm tracking-widest mb-2">
                PROJECT 01
              </span>
              <h3 className="text-white font-headline text-xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter mb-2 md:mb-4">
                The Obsidian Heights
              </h3>
              <p className="text-white/70 max-w-md mb-4 md:mb-6 font-light leading-relaxed text-sm md:text-base hidden sm:block">
                A multi-million pound luxury estate featuring cantilevered glass
                rooms and bespoke sustainable materials.
              </p>
              <button className="w-fit flex items-center gap-2 md:gap-4 text-secondary font-headline font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] border border-secondary/30 px-4 md:px-6 py-2 md:py-3 hover:bg-secondary hover:text-white transition-all duration-500">
                View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Project 2: Vertical Commercial */}
          <div className="md:col-span-4 md:row-span-3 relative group overflow-hidden rounded-xl bg-surface-container-low w-full aspect-[4/3] md:aspect-auto">
            <Image
              alt="Glass Office Skyscraper"
              fill
              className="object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChWyNTV2hLwVBkAxnvDk9I8eZLN2fH8QM7J7uT_vWIOtPdMtqPCMOUtZxEAVD8SYZvog4OdJ9eIMxU6yoeVd0bh-Ojbs5MlNJilDHJdT_kdTPJWBMIEPmgZhrFypLeeFILBsHlTKoSlLM1GLnk1BUOTraiPkyt8ly1EXSfiNlCHAiWEWNv1zcGib4Is0dluUUBfR0UkUK1mVRSri1LIm22UJn-ZfbZj_qJ3vmmiIR6_jz04l8YquQxmYI_8AniEdkYSak9hPygVuI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-5 md:p-6 lg:p-8">
              <span className="text-secondary font-headline font-bold text-xs tracking-widest mb-2">
                PROJECT 02
              </span>
              <h3 className="text-white font-headline text-lg md:text-xl lg:text-2xl font-bold tracking-tight mb-2 md:mb-4">
                Equinox Plaza
              </h3>
              <button className="w-fit flex items-center gap-2 text-secondary font-headline font-bold text-[10px] uppercase tracking-widest">
                Explore Commercial <span className="material-symbols-outlined text-xs">open_in_new</span>
              </button>
            </div>
            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-3">
              <div className="w-1 h-8 md:h-12 bg-secondary"></div>
              <span className="font-headline font-bold text-[8px] md:text-[10px] text-white tracking-[0.3em] uppercase [writing-mode:vertical-lr]">
                High-Rise Excellence
              </span>
            </div>
          </div>

          {/* Project 3: Industrial Wide */}
          <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-xl bg-surface-container-low w-full aspect-[4/3] md:aspect-auto">
            <Image
              alt="Logistics Center Construction"
              fill
              className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6igpkACY9CNotwO2TJPCio8NCiWZf1dC8RiNpI1DpFAwkNu_LZ-mkNyQzTw4SVjgIX7GDv681X_ZR-b7hTRJUXN5B9149WJqDq_yvgaHkMiZbxrWiTWVcVGTKQS_2oiXQuiSUb1h1FJoPsH6ZZsF-EPzsYFHshJbOXCsELAJ0zx9h36jAHnVNJtfDfT1n3lcXnXT5I5L3YKmSUc6SiB7rKqKtEENMTsmrW0vJgk5RdfUeFsKLI5AYsqxc6FtqXctBYihvwspTk4E"
            />
            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="text-center p-4">
                <h4 className="text-white font-headline font-bold text-base md:text-lg">
                  Apex Logistics Hub
                </h4>
                <p className="text-secondary text-[10px] md:text-xs uppercase tracking-widest font-bold">
                  Industrial Portfolio
                </p>
              </div>
            </div>
          </div>

          {/* Project 4: Square Residential Interior */}
          <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-xl bg-surface-container-low w-full aspect-[4/3] md:aspect-auto">
            <Image
              alt="Luxury Interior Living Room"
              fill
              className="object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2qlYam-KoRRZEmXObzMa9npP3Kzgaf3LJVUuq07D4O42viwhvVSZOEeIPR1IFOvrz9kwNWP_LqppRHej5pXNa58B0FazYUQERSsaMAMzRpMEqM_IyTqH2TuZjaHdjiK8FdxOB3tO207LvMg8Qy0gdlHXaWGLCfwI9nDMYteXs3yOlWBbaC2HLJN4q-LKdnYaf0V1eJq88Nq3rTP8IpE1bQ2ApgwiG19U6ww1CJl5wO_Gw6Qqid22Aqm5y_VhH0a6CVymdlCfflZ0"
            />
            <div className="absolute inset-0 bg-primary/40 flex flex-col justify-end p-4 md:p-6 border-b-4 border-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-700">
              <h4 className="text-white font-headline font-bold text-sm md:text-base">Kove Residences</h4>
              <p className="text-white/60 text-[10px] md:text-xs">Bespoke Interior Engineering</p>
            </div>
          </div>

          {/* Project 5: Wide Commercial Base */}
          <div className="md:col-span-8 md:row-span-1 relative group overflow-hidden rounded-xl bg-surface-container-low w-full aspect-[4/3] md:aspect-auto">
            <Image
              alt="Sustainable Architecture"
              fill
              className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzkwxx9c1whnksWcKRh47poyGW0kgUCKezFmEiIimUBvIWZH2IkwumLBghl5wseCXcTvLQ9Id1CgX4RjON5dRg7mQ3GZMrpFdkmMZ35GYyvCPdWc4Mp0pG989GmPYYANC70498Rj4I0ro0xm7tWcJAQey4s9P-6swSyUyQ3zst2oYZqS-YtotgF4rFzUGqv4RaY6Ce3YH0JNi8ELwW_RfyC1TRTUGF8BlABiFQIs-rK7ETHT0-WNoK-GOndvTWTN4HV2MHo6IqYu4"
            />
            <div className="absolute top-0 right-0 m-3 md:m-4 lg:m-6">
              <span className="bg-secondary/90 backdrop-blur-sm text-white text-[8px] md:text-[10px] font-bold px-2 md:px-3 py-1 uppercase tracking-widest">
                Ongoing Project
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex flex-col justify-center px-6 md:px-8 lg:px-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <h3 className="text-white font-headline text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2">
                The Emerald Atrium
              </h3>
              <p className="text-white/70 max-w-xs text-xs md:text-sm">
                A fusion of nature and commercial space featuring biometric
                environmental controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-16 md:mt-32 bg-primary py-16 md:py-24 px-6 md:px-8 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary_container via-transparent to-transparent"></div>
        </div>
        <div className="max-w-screen-2xl mx-auto relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center lg:text-left">
          <div>
            <h5 className="text-secondary font-headline text-3xl md:text-5xl font-extrabold mb-2">124+</h5>
            <p className="text-white/40 font-headline text-[10px] md:text-xs uppercase tracking-[0.3em]">
              Completed Assets
            </p>
          </div>
          <div>
            <h5 className="text-secondary font-headline text-3xl md:text-5xl font-extrabold mb-2">£850M</h5>
            <p className="text-white/40 font-headline text-[10px] md:text-xs uppercase tracking-[0.3em]">
              Portfolio Value
            </p>
          </div>
          <div>
            <h5 className="text-secondary font-headline text-3xl md:text-5xl font-extrabold mb-2">15</h5>
            <p className="text-white/40 font-headline text-[10px] md:text-xs uppercase tracking-[0.3em]">
              Design Awards
            </p>
          </div>
          <div>
            <h5 className="text-secondary font-headline text-3xl md:text-5xl font-extrabold mb-2">12</h5>
            <p className="text-white/40 font-headline text-[10px] md:text-xs uppercase tracking-[0.3em]">
              Years Of Precision
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 md:px-8 py-20 md:py-32 max-w-screen-xl mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-primary mb-6 md:mb-8">
          Ready to Build Your <span className="text-secondary italic font-light">Legacy?</span>
        </h2>
        <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-8 md:mb-12 text-base md:text-lg">
          Our team is ready to provide the technical expertise and architectural
          vision your next luxury development deserves.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
          <button className="bg-secondary text-on-secondary px-6 md:px-10 py-3 md:py-5 rounded-lg font-headline font-bold text-xs md:text-sm uppercase tracking-widest hover:opacity-80 transition-all duration-700 shadow-xl shadow-secondary/20">
            Schedule Consultation
          </button>
          <button className="border border-outline-variant/30 text-primary px-6 md:px-10 py-3 md:py-5 rounded-lg font-headline font-bold text-xs md:text-sm uppercase tracking-widest hover:border-secondary transition-all duration-700">
            Download Capabilities
          </button>
        </div>
      </section>
    </>
  );
}