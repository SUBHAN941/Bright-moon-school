import React, { useRef } from "react";
import { useInView } from "framer-motion";

function Achievements() {
  const achievementsRef = useRef(null);
  const achievementsInView = useInView(achievementsRef, { once: true });
  const achievements = [
    { year: "2024", title: "Best Academic Performance", desc: "District level recognition", color: "from-yellow-400 to-orange-500" },
    { year: "2023", title: "100% Pass Rate", desc: "Matriculation exams", color: "from-green-500 to-emerald-500" },
    { year: "2023", title: "Quran Competition", desc: "Regional winners", color: "from-blue-500 to-cyan-500" },
    { year: "2022", title: "Science Fair", desc: "Multiple winning projects", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section id="achievements" ref={achievementsRef} className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${achievementsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-6xl font-black text-white mb-6">
            Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Proud moments showcasing our commitment to excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 ${achievementsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-30 rounded-3xl transition-opacity duration-500`}></div>
              <div className="relative z-10 text-center">
                <div className={`inline-block px-8 py-4 bg-gradient-to-br ${achievement.color} rounded-3xl text-white font-black text-4xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                  {achievement.year}
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{achievement.title}</h3>
                <p className="text-blue-200 text-lg">{achievement.desc}</p>
                <div className="mt-4 w-16 h-1 bg-gradient-to-r from-white/50 to-transparent mx-auto rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements