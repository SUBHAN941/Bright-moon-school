import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Award, BookOpen, Users, Trophy, Microscope, Palette, Globe } from 'lucide-react';

function Services() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true });

  const services = [
    { icon: <BookOpen size={32} />, title: "Academic Excellence", desc: "Comprehensive curriculum with focus on STEM and humanities.", color: "from-blue-500 to-cyan-500" },
    { icon: <Users size={32} />, title: "Experienced Faculty", desc: "Highly qualified teachers dedicated to nurturing potential.", color: "from-purple-500 to-pink-500" },
    { icon: <Microscope size={32} />, title: "Science Labs", desc: "State-of-the-art laboratories for all sciences.", color: "from-green-500 to-emerald-500" },
    { icon: <Palette size={32} />, title: "Arts & Culture", desc: "Music, dance, drama, and visual arts programs.", color: "from-orange-500 to-red-500" },
    { icon: <Trophy size={32} />, title: "Sports Facilities", desc: "Modern sports complex with multiple facilities.", color: "from-yellow-500 to-orange-500" },
    { icon: <Globe size={32} />, title: "Global Exposure", desc: "International programs to prepare for the world.", color: "from-indigo-500 to-purple-500" }
  ];

  return (
    <section id="services" ref={servicesRef} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-5xl font-black text-white mb-4">
            Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive educational services designed to support every aspect of student development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className={`inline-block p-4 bg-gradient-to-br ${service.color} rounded-2xl text-white mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services