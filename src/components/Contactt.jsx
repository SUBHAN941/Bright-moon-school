import React, { useRef } from "react";
import { MapPin, Mail, Phone, Award } from "lucide-react";
import { useInView } from "framer-motion";

function Contact() {
const contactRef = useRef(null);
const contactInView = useInView(contactRef, { once: true });
  return (
    <section id="contact" ref={contactRef} className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-yellow-500 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl bottom-0 left-0 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-6xl font-black text-white mb-6">Get In <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Touch</span></h2>
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">We'd love to hear from you. Reach out to us anytime</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {[
            { icon: <MapPin size={32} />, title: "Address", content: "Bright Moon Public High School\nJhand Road, Ameen Town\nStreet No. 3\nMughalabad, Punjab", color: "from-blue-500 to-cyan-500" },
            { icon: <Phone size={32} />, title: "Contact", content: "Phone: 0300-1234567\nEmail: brightmoon@gmail.com", color: "from-purple-500 to-pink-500" }
          ].map((item, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/30 hover:border-white/50 transition-all duration-500 transform hover:-translate-y-3 ${contactInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className={`inline-block p-5 bg-gradient-to-br ${item.color} rounded-3xl text-white mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black text-white mb-5">{item.title}</h3>
                <p className="text-blue-200 whitespace-pre-line leading-relaxed text-lg">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/30 text-center transition-all duration-1000 delay-400 ${contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-block p-5 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl text-white mb-6 shadow-2xl">
            <Award size={36} />
          </div>
          <h3 className="text-3xl font-black text-white mb-5">Office Hours</h3>
          <p className="text-blue-200 text-xl leading-relaxed">
            Monday - Friday: 8:00 AM - 2:00 PM<br />
            Saturday: 8:00 AM - 12:00 PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </section>
  );
}
export default Contact