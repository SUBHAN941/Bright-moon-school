import React from "react";
import { MapPin } from "lucide-react";

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white text-center py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-24 left-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 right-20 w-[30rem] h-[30rem] bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* 🖼 Principal Image (Balanced inside frame) */}
        <div className="mb-12 inline-block">
          <div className="w-[550px] sm:w-[650px] mx-auto rounded-3xl border-[10px] border-yellow-400 shadow-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
            <img
              src="/principal.jpg"
              alt="Principal"
              className="w-full h-[480px] sm:h-[540px] object-contain bg-blue-950 p-2"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='650' height='540'%3E%3Crect fill='%234299e1' width='650' height='540'/%3E%3Ctext x='50%25' y='50%25' font-size='72' text-anchor='middle' dy='.3em' fill='white'%3EZR%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>

        {/* School Name */}
        <h1 className="text-4xl sm:text-6xl font-extrabold mt-8 mb-4 leading-tight drop-shadow-lg">
          Bright Moon Public High School
        </h1>

        {/* Address */}
        <div className="flex items-center justify-center text-lg sm:text-xl mb-6 text-blue-100">
          <MapPin size={24} className="mr-3 text-yellow-300" />
          <p>Jhand Road, Ameen Town, Street No. 3</p>
        </div>

        {/* Principal Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mt-8 shadow-lg border border-white/20">
          <p className="text-2xl sm:text-3xl font-semibold mb-3">
            Principal: Sir Zubair Razaqi Sahib
          </p>
          <p className="text-lg sm:text-xl italic text-yellow-300 mt-4">
            “Education is the light that guides us to success.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
