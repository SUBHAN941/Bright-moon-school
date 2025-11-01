import React, { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#staff", label: "Staff" },
    { href: "#achievements", label: "Achievements" },
    { href: "#gallery", label: "Gallery" },
    { href: "#datesheet", label: "Date Sheet" },
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-xl"></div>
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <GraduationCap className="text-blue-900" size={24} strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 bg-yellow-400 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                Bright Moon School
              </h1>
              <p className="text-xs text-blue-200 hidden lg:block">Excellence in Education</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-white font-medium group overflow-hidden rounded-lg transition-all duration-300"
              >
                <span className="relative z-10 group-hover:text-yellow-300 transition-colors duration-200">{link.label}</span>
                <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} className={`absolute transition-all duration-300 ${mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100"}`} />
            <X size={24} className={`absolute transition-all duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 -rotate-90"}`} />
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="relative bg-gradient-to-b from-blue-900/95 to-indigo-900/95 backdrop-blur-xl px-4 pb-6 pt-2 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
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