import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { NAV_LINKS } from "../../utils/data";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full px-3 sm:px-4 flex flex-col items-center ${
        scrolled ? "top-3 md:top-4" : "top-4 md:top-[59px]"
      }`}
    >
      {/* Main Nav Bar */}
      <nav
        className={`flex items-center justify-between transition-all duration-500 rounded-full border border-white/10 w-full max-w-[1116px] px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-purple-900/20"
            : "bg-white"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-7 sm:h-8 md:h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links - hidden below lg */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-[#171717] hover:text-purple-600 transition-colors duration-200 whitespace-nowrap"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Sign In Button */}
        <div className="hidden lg:block">
          <Button size="sm" href="#about" className="rounded-full">
            Sign In
          </Button>
        </div>

        {/* Mobile/Tablet Hamburger */}
        <button
          className="lg:hidden text-black p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile/Tablet Dropdown Menu */}
      <div
        className={`w-full max-w-[96%] sm:max-w-[90%] mt-3 transition-all duration-300 ease-in-out lg:hidden overflow-hidden rounded-2xl bg-white/95 backdrop-blur-lg border border-white/20 shadow-2xl ${
          mobileOpen ? "max-h-[600px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 px-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href} className="w-full text-center">
              <a
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold text-[#171717] hover:text-purple-600 transition-colors block py-1.5"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="w-full pt-2">
            <Button
              className="w-full rounded-full"
              href="#about"
              onClick={() => setMobileOpen(false)}
            >
              Sign In
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
