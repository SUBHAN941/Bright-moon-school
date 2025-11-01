import React from "react";
import { GraduationCap } from "lucide-react";

function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-12 px-4 relative overflow-hidden"
      itemScope
      itemType="https://schema.org/School"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column */}
          <div className="text-center md:text-left" itemProp="name">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                <GraduationCap size={24} className="text-blue-900" />
              </div>
              <span className="ml-3 text-xl font-bold">Bright Moon School</span>
            </div>
            <p className="text-blue-200">Excellence in Education Since 1990</p>
          </div>

          {/* Center Column */}
          <div className="text-center">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Services", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-blue-200 hover:text-yellow-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column (Local Info + Schema Markup) */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <p className="text-blue-200 mb-2" itemProp="address">
              📍 <span itemProp="streetAddress">Jhand Road, Shadab Mor, Nematabad</span>,{" "}
              <span itemProp="addressLocality">Faisalabad</span>,{" "}
              <span itemProp="addressRegion">Punjab</span>
            </p>
            <p className="text-blue-200 mb-2">
              📞 <a href="tel:+923001234567" className="hover:text-yellow-400" itemProp="telephone">
                0300-1234567
              </a>
            </p>
            <p className="text-blue-200">
              ✉️ <a href="mailto:brightmoon@gmail.com" className="hover:text-yellow-400" itemProp="email">
                brightmoon@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-blue-200 mb-2">
            © 2025 Bright Moon Public High School. All rights reserved.
          </p>
          <p className="text-sm text-blue-300 italic">
            "Education is the light that guides us to success"
          </p>
        </div>
      </div>

      {/* ✅ Local Business Schema (helps Google Maps ranking) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          "name": "Bright Moon School",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jhand Road, Shadab Mor, Nematabad",
            "addressLocality": "Faisalabad",
            "addressRegion": "Punjab",
            "addressCountry": "Pakistan",
          },
          "telephone": "+923001234567",
          "email": "brightmoon@gmail.com",
          "url": "https://bright-moon-school.vercel.app",
          "sameAs": [
            "https://www.facebook.com/brightmoonschool",
            "https://maps.google.com/?q=Bright+Moon+School+Faisalabad"
          ],
        })}
      </script>
    </footer>
  );
}

export default Footer;
