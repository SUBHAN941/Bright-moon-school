import React from "react";
import { Menu, X } from "lucide-react";

function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#staff", label: "Our Staff" },
    { href: "#achievements", label: "Achievements" },
    { href: "#gallery", label: "Gallery" },
    { href: "#datesheet", label: "Date Sheet" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xl">BM</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold hidden sm:block">
              Bright Moon Public High School
            </h1>
            <h1 className="text-lg font-bold sm:hidden">BMPHS</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-yellow-300 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-800 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 hover:text-yellow-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
export default Navbar