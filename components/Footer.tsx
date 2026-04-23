const Footer = () => {
  const footerLinks = ["Home", "About Us", "Services", "Portfolio", "Contact Us"];

  return (
    <footer className="w-full border-t border-white/5 bg-[#0B3027]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-12 py-12 md:py-16 gap-8 w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="font-headline font-bold text-secondary text-2xl">
            MILKWALK KOVE LTD
          </div>
          <p className="font-body text-xs tracking-wide leading-relaxed text-white/60 max-w-sm">
            © 2024 MILKWALK KOVE LTD. 29 STANLEY STREET ST6 6BX.
            sales@milkwalkkove.com | dusan.dirda@milkwalkkove.com
          </p>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-8">
          {footerLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="font-body text-xs tracking-wide leading-relaxed text-white/40 hover:text-secondary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-secondary hover:text-secondary transition-all duration-300"
          >
            <span className="material-symbols-outlined text-lg">share</span>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-secondary hover:text-secondary transition-all duration-300"
          >
            <span className="material-symbols-outlined text-lg">public</span>
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 md:px-12 py-4 w-full max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-body text-xs text-white/30 tracking-wide">
          All Rights Reserved &copy; 2024 MILKWALK KOVE LTD
        </p>
        <p className="font-body text-xs text-white/30 tracking-wide">
          Designed By{" "}
          <a
            href="https://linkedo.co.uk/"
            target="_blank"
            rel="nofollow noreferrer"
            className="text-secondary hover:opacity-80 transition-opacity duration-300"
          >
            Linkedo
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
