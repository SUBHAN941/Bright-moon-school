import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Download } from "lucide-react";

function DateSheet() {
  // ✅ Correct way for Framer Motion v10+
  const dateSheetRef = useRef(null);
  const dateSheetInView = useInView(dateSheetRef, { once: true });
  return (
    <section id="datesheet" ref={dateSheetRef} className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${dateSheetInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-5xl font-black text-white mb-4">
            Examination <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Date Sheet</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-blue-200 mb-12">Download the latest examination schedule and plan your studies</p>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 transform hover:scale-105 transition-all duration-500">
            <div className="inline-block p-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl text-white mb-6 transform hover:rotate-12 transition-all duration-500 shadow-2xl">
              <Download size={48} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Academic Year 2024-25</h3>
            <p className="text-blue-200 mb-8">Last Updated: October 2025</p>
            <a
              href="/datesheet.jpg"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 rounded-xl font-bold hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-110 shadow-xl"
            >
              <Download className="mr-2" size={20} />
              Download Date Sheet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default DateSheet