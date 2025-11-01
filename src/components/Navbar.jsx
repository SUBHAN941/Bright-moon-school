import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { GraduationCap } from "lucide-react";
import { Menu , X } from "lucide-react";
function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#staff", label: "Staff" },
    { href: "#achievements", label: "Achievements" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (currentScrollY / windowHeight) * 100;
      
      setScrollProgress(scrolled);
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);

      // Update active section
      navLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(link.href.substring(1));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/98 via-blue-900/98 to-purple-900/98 backdrop-blur-2xl shadow-2xl"></div>
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 transition-all duration-300 shadow-lg shadow-yellow-400/50" style={{ width: `${scrollProgress}%` }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <GraduationCap className="text-white" size={28} strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                Bright Moon School
              </h1>
              <p className="text-xs text-blue-200 font-semibold hidden lg:block">Excellence • Innovation • Character</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 text-white font-semibold group overflow-hidden rounded-xl transition-all duration-300 ${
                  activeSection === link.href.substring(1) ? 'bg-white/20' : ''
                }`}
              >
                <span className="relative z-10 group-hover:text-yellow-300 transition-colors duration-200">{link.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button
            className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 transition-all duration-300 shadow-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} className={`absolute text-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100"}`} />
            <X size={24} className={`absolute text-white transition-all duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 -rotate-90"}`} />
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="relative bg-gradient-to-b from-slate-900/98 to-blue-900/98 backdrop-blur-2xl px-4 pb-6 pt-2 space-y-2 shadow-2xl">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-5 py-3.5 rounded-xl text-white font-semibold hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-pink-500/20 transition-all duration-300 transform hover:translate-x-2 border border-transparent hover:border-white/10"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar