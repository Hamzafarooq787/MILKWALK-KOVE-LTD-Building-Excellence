"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/", hash: "#home" },
    { name: "About Us", href: "/about", hash: "" },
    { name: "Services", href: "/services", hash: "" },
    { name: "Projects", href: "/projects", hash: "" },
    { name: "Contact", href: "/contact", hash: "" },
  ];

  const getLinkHref = (item: (typeof navItems)[0]) => {
    if (item.hash && pathname !== "/") return item.href + item.hash;
    if (item.hash) return item.hash;
    return item.href;
  };

  const isActive = (item: (typeof navItems)[0]) => {
    if (item.name === "Home" && pathname === "/") return true;
    if (item.name === "About Us" && pathname === "/about") return true;
    return false;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B3027]/95 shadow-2xl shadow-black/30"
            : "bg-[#0B3027]/90"
        } backdrop-blur-xl`}
      >
        <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-8 py-3.5 md:py-5 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/images/milkwalk-logo.png"
              alt="Milkwalk Kove Ltd"
              width={120}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={getLinkHref(item)}
                className={`font-headline tracking-tight text-sm font-semibold uppercase transition-all duration-300 ${
                  isActive(item)
                    ? "text-secondary border-b-2 border-secondary pb-1"
                    : "text-white/80 hover:text-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2 bg-secondary text-white font-headline text-xs font-bold uppercase tracking-widest hover:bg-on-secondary-container transition-colors duration-300 rounded-lg"
            >
              Get a Quote
              <span className="material-symbols-outlined text-sm">request_quote</span>
            </Link>

            {/* Hamburger Button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-white rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu — slides down */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0B3027]/98 backdrop-blur-lg border-t border-white/10 px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={getLinkHref(item)}
                className={`px-4 py-3 rounded-md font-headline text-sm uppercase tracking-wide font-semibold transition-colors ${
                  isActive(item)
                    ? "text-secondary bg-white/5"
                    : "text-white/85 hover:text-secondary hover:bg-white/5"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Get a Quote CTA in mobile menu */}
            <div className="pt-3 mt-2 border-t border-white/10">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-white font-headline text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-on-secondary-container transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
                <span className="material-symbols-outlined text-sm">request_quote</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
