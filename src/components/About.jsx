import React, { useRef } from 'react';
import { Award, Target, Eye, Heart, Users, Trophy } from 'lucide-react';
import { useInView } from "framer-motion";

function About() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our School</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: <Target size={40} />, title: "Our Mission", desc: "To provide a nurturing and stimulating environment where students can achieve academic excellence, develop strong character, and become responsible global citizens.", color: "from-blue-500 to-cyan-500" },
            { icon: <Eye size={40} />, title: "Our Vision", desc: "To be recognized as a leading educational institution that empowers students to excel in an ever-changing world.", color: "from-green-500 to-emerald-500" }
          ].map((item, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${aboutInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className={`inline-block p-4 bg-gradient-to-br ${item.color} rounded-2xl text-white mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {[
            { icon: <Heart size={32} />, title: "Integrity", desc: "We uphold honesty, transparency, and ethical behavior in all our actions.", color: "from-red-500 to-pink-500" },
            { icon: <Users size={32} />, title: "Respect", desc: "We value diversity and treat every individual with dignity and kindness.", color: "from-purple-500 to-indigo-500" },
            { icon: <Trophy size={32} />, title: "Excellence", desc: "We pursue the highest standards and encourage students to reach their full potential.", color: "from-yellow-500 to-orange-500" }
          ].map((value, i) => (
            <div key={i} className="group text-center transform hover:scale-105 transition-all duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white transform group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default About