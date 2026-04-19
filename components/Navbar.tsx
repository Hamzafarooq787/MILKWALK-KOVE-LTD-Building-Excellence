"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", hash: "#home" },
    { name: "About Us", href: "/about", hash: "" },
    { name: "Services", href: "/services", hash: "" },
    { name: "Projects", href: "/projects", hash: "" },
    { name: "Contact", href: "/contact", hash: "" },
  ];

  const getLinkHref = (item: (typeof navItems)[0]) => {
    if (item.hash && pathname !== "/") {
      return item.href + item.hash;
    }
    if (item.hash) return item.hash;
    return item.href;
  };

  const isActive = (item: (typeof navItems)[0]) => {
    if (item.name === "Home" && pathname === "/") return true;
    if (item.name === "About Us" && pathname === "/about") return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B3027]/90 backdrop-blur-xl shadow-2xl shadow-black/20">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 md:py-5 max-w-screen-2xl mx-auto">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-white">
          MILKWALK KOVE LTD
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={getLinkHref(item)}
              className={`font-headline tracking-tight text-sm font-semibold uppercase transition-all duration-700 ${
                isActive(item)
                  ? "text-secondary border-b-2 border-secondary pb-1"
                  : "text-white/80 hover:text-secondary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 px-6 py-2 bg-secondary text-white font-headline text-xs font-bold uppercase tracking-widest hover:bg-on-secondary-container transition-colors duration-500 rounded-lg">
            WhatsApp Chat
            <span className="material-symbols-outlined text-sm">chat</span>
          </button>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-container/95 backdrop-blur-lg py-4 px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={getLinkHref(item)}
              className="text-white/90 font-headline text-sm uppercase tracking-wide hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;