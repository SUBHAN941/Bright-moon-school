

import React, { useState, useRef } from "react";
import { MapPin, Users, Award, Trophy, Star, Sparkles, ChevronRight } from "lucide-react";
import emailjs from "emailjs-com";
import { useInView } from "framer-motion";
import Swal from "sweetalert2";

function Hero() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", grade: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_dpihwq9";
    const templateId = "template_7ax7w8g";
    const publicKey = "CRSDtCgkpZKZWu3DA";

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then(() => {
  Swal.fire({
    icon: "success",
    title: "Application Sent!",
    text: "Your application has been submitted successfully.",
    background: "rgba(15, 23, 42, 0.85)", // slate-900 glass
    color: "#fff",
    iconColor: "#38bdf8", // blue-400
    confirmButtonText: "OK",
    confirmButtonColor: "#f59e0b", // orange-500
    customClass: {
      popup: "backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30",
    },
  });

  setShowModal(false);
  setFormData({ name: "", email: "", grade: "", message: "" });
})
.catch(() => {
  Swal.fire({
    icon: "error",
    title: "Failed!",
    text: "Failed to send application. Please try again.",
    background: "rgba(15, 23, 42, 0.85)", // same glass theme
    color: "#fff",
    iconColor: "#ef4444", // red-500
    confirmButtonText: "Retry",
    confirmButtonColor: "#f97316", // orange-500 but slightly warmer for error
    customClass: {
      popup: "backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30",
    },
  });
})
.finally(() => setLoading(false));
}; 

  const stats = [
    { value: "2000+", label: "Students", color: "from-blue-500 to-cyan-500", icon: <Users size={24} /> },
    { value: "100+", label: "Teachers", color: "from-purple-500 to-pink-500", icon: <Award size={24} /> },
    { value: "95%", label: "Success Rate", color: "from-green-500 to-emerald-500", icon: <Trophy size={24} /> },
    { value: "30+", label: "Years Legacy", color: "from-orange-500 to-red-500", icon: <Star size={24} /> },
  ];

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-700 top-1/2 right-0"></div>
        <div className="absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000 -bottom-48 left-1/3"></div>
      </div>

      <div ref={heroRef} className="relative pb-10 mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-1000 space-y-8`}>
           <span className="px-6 py-3.5  bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white rounded-full font-bold shadow-xl animate-pulse">
  <Sparkles className="inline mr-2" size={16} /> Excellence Since 1990
</span>

            <h1 className="text-6xl font-black leading-tight text-white drop-shadow-xl">
              Bright Moon
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                Public High School
              </span>
            </h1>

            <p className="text-2xl text-gray-300 leading-relaxed">
              Nurturing minds & building tomorrow's leaders.
            </p>

            <div className="flex gap-3 text-gray-300 bg-white/10 backdrop-blur-sm rounded-2xl p-4 w-fit">
              <MapPin className="text-yellow-400" /> Jhand Road, Mughalabad, Punjab
            </div>

            <div className="flex gap-5 pt-6">
              <button
                onClick={() => setShowModal(true)}
                className="px-10 py-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl"
              >
                Apply Now <ChevronRight className="inline ml-2" />
              </button>

              <button className="px-10 py-5 bg-white/10 text-white border border-white/30 rounded-2xl font-bold hover:bg-white/20 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className={`${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-1000 delay-300`}>
            <div className="bg-white/10 rounded-3xl p-10 border border-white/30 shadow-2xl backdrop-blur-xl">
              <div className="text-center space-y-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" className="w-48 h-48 mx-auto rounded-full border-4 border-yellow-400 shadow-xl" />
                <h3 className="text-3xl font-bold text-white">Principal Name</h3>
                <p className="text-gray-300 italic">"Education changes the world."</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-all duration-1000 delay-500 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {stats.map((s, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/30 backdrop-blur-xl text-center hover:scale-110 transition shadow-lg">
              <div className="text-yellow-400">{s.icon}</div>
              <div className="text-4xl font-bold text-white">{s.value}</div>
              <div className="text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

    {showModal && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-xl flex justify-center items-center p-5 z-50">
    <div className="bg-white/10 border border-white/30 backdrop-blur-2xl rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-fadeIn">

      <button
        onClick={() => setShowModal(false)}
        className="absolute right-4 top-4 text-white text-2xl font-bold hover:text-red-400 transition"
      >
        ✕
      </button>

      <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-md">
        Apply Now
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-3.5 bg-white/10 text-white border border-white/30 rounded-xl placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-3.5 bg-white/10 text-white border border-white/30 rounded-xl placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-3.5 bg-white/10 text-white border border-white/30 rounded-xl placeholder-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
          name="grade"
          placeholder="Grade/Class"
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full p-3.5 bg-white/10 text-white border border-white/30 rounded-xl placeholder-gray-300 h-24 focus:ring-2 focus:ring-orange-400 outline-none"
          name="message"
          placeholder="Message"
          onChange={handleChange}
          required
        />

        <button
          className="w-full p-3.5 bg-gradient-to-r from-blue-500 via-orange-500 to-red-500 text-white rounded-xl font-bold hover:scale-105 transition-all shadow-xl"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  </div>
)}

      <style>{`
        @keyframes gradient { 0%,100%{background-position:0%50%} 50%{background-position:100%50%} }
        .animate-gradient { background-size:200% 200%; animation:gradient 3s infinite; }
        @keyframes fadeIn { 
  from { opacity:0; transform:scale(0.95); } 
  to { opacity:1; transform:scale(1); } 
}
.animate-fadeIn { animation: fadeIn .3s ease-out; }
.neon-popup {
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 25px rgba(255, 115, 0, 0.6);
  border-radius: 18px !important;
}

.neon-title {
  background: linear-gradient(to right, #ffdd00, #ff7b00, #ff0048);
  -webkit-background-clip: text;
  color: transparent !important;
  font-weight: 800;
  text-shadow: 0 0 18px rgba(255, 130, 0, 0.6);
}

.neon-btn {
  background: linear-gradient(to right, #008cff, #ff7b00, #ff0048) !important;
  color: #fff !important;
  border-radius: 10px !important;
  font-weight: 700 !important;
  box-shadow: 0 0 12px rgba(255, 130, 0, 0.8);
}

      `}</style>
    </div>
  );
}
export default Hero;
